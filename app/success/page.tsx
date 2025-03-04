import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="container max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-green-600"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold">Payment Successful!</h1>
        <p className="mb-8 text-gray-500">
          Thank you for your purchase. You now have access to GeoTikTok services. You'll receive a confirmation email
          shortly with all the details.
        </p>
        <div className="space-y-4">
          <Link href="/" passHref>
            <Button className="w-full">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

