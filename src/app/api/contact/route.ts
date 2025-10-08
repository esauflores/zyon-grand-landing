import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, mobile, email, message, consent } = body

    // Validate required fields
    if (!name || !mobile || !email || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact record in database
    const contact = await prisma.contact.create({
      data: {
        name,
        mobile,
        email,
        message: message || '',
      },
    })

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: contact.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
