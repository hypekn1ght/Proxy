import { NextResponse } from "next/server"

// Mock implementation for development purposes
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { priceId } = await request.json()
    
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    // Generate a mock session ID
    const mockSessionId = `mock_session_${Date.now()}`
    
    // Return a mock response
    return NextResponse.json({ 
      sessionId: mockSessionId,
      mockRedirect: `/success?session_id=${mockSessionId}` 
    })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}

