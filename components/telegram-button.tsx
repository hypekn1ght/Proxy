"use client"

import { Button } from "@/components/ui/button"

interface TelegramButtonProps {
  buttonText?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  fullWidth?: boolean
}

export function TelegramButton({
  buttonText = "Get Started",
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
}: TelegramButtonProps) {
  const handleClick = () => {
    window.open("https://t.me/TokHopUSA", "_blank");
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} ${fullWidth ? "w-full" : ""}`}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  )
} 