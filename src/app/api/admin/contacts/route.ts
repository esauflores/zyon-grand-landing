import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to check admin authentication
function isAdminAuthenticated(request: NextRequest): boolean {
  const sessionCookie = request.cookies.get('admin-session')
  return sessionCookie?.value === 'authenticated'
}

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    if (!isAdminAuthenticated(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Fetch all contacts from database
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}
