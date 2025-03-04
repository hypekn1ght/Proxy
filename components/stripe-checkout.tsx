"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface StripeCheckoutProps {
  priceId: string
  buttonText?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  fullWidth?: boolean
}

export function StripeCheckout({
  priceId,
  buttonText = "Get Started",
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
}: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      // Create a checkout session via the server-side API
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
        }),
      })

      const data = await response.json()
      
      // For development: use mock redirect instead of Stripe
      if (data.mockRedirect) {
        router.push(data.mockRedirect)
        return
      }

      // In production, this would use the real Stripe checkout
      console.log("In production, this would redirect to Stripe with session ID:", data.sessionId)
      
      // For now, just redirect to the success page
      router.push("/success?session_id=" + data.sessionId)
    } catch (error) {
      console.error("Failed to create checkout session:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} ${fullWidth ? "w-full" : ""}`}
      onClick={handleCheckout}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : buttonText}
    </Button>
  )
}

