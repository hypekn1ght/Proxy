"use client"

import { Button } from "@/components/ui/button"

interface StripeLinkButtonProps {
  buttonText?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  fullWidth?: boolean
  stripeUrl: string
}

export function StripeLinkButton({
  buttonText = "Subscribe",
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
  stripeUrl
}: StripeLinkButtonProps) {
  const handleClick = () => {
    window.open(stripeUrl, "_blank");
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} ${fullWidth ? "w-full" : ""} ${variant === "default" ? "bg-teal-500 hover:bg-teal-600 text-white" : ""}`}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  )
} 