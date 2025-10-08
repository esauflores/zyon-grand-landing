import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to check admin authentication
function isAdminAuthenticated(request: NextRequest): boolean {
  const sessionCookie = request.cookies.get('admin-session')
  return sessionCookie?.value === 'authenticated'
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if user is authenticated
    if (!isAdminAuthenticated(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const contactId = parseInt(id)

    if (isNaN(contactId)) {
      return NextResponse.json(
        { error: 'Invalid contact ID' },
        { status: 400 }
      )
    }

    // Check if contact exists
    const existingContact = await prisma.contact.findUnique({
      where: { id: contactId }
    })

    if (!existingContact) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      )
    }

    // Delete the contact
    await prisma.contact.delete({
      where: { id: contactId }
    })

    return NextResponse.json(
      { message: 'Contact deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting contact:', error)
    return NextResponse.json(
      { error: 'Failed to delete contact' },
      { status: 500 }
    )
  }
}
