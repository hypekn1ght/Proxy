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
      variant="outline"
      size={size}
      className={`${className} ${fullWidth ? "w-full" : ""} bg-white text-gray-800 border-gray-300 hover:bg-gray-100`}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  )
} 