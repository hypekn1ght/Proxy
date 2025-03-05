import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Globe, Phone, Shield, Star, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { StripeCheckout } from "@/components/stripe-checkout"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold">TokHop USA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-black/70">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-black/70">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-black/70">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-black/70">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <StripeCheckout priceId="price_monthly" buttonText="Get Started" size="sm" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge variant="outline" className="border-teal-500 text-teal-500">
                  TikTok USA Access
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unlock the <span className="text-teal-500">US TikTok Market</span> from Anywhere
                </h1>
                <p className="text-gray-500 md:text-xl">
                  Our phone farm technology enables creators outside the US to post directly to TikTok USA, opening the
                  door to 100M+ American viewers and higher engagement rates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <StripeCheckout priceId="price_monthly" buttonText="Get Started" size="lg" />
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tiktokUSA.png"
                  fill
                  alt="TikTok USA Access"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Creators Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our cutting-edge phone farm technology gives you the advantages that other agencies can&apos;t offer
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 space-y-4 border-0 shadow-md">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">US Market Access</h3>
                <p className="text-gray-500">
                  Post directly to TikTok USA from anywhere in the world with our secure phone farm technology.
                </p>
              </Card>
              <Card className="p-6 space-y-4 border-0 shadow-md">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Higher Engagement</h3>
                <p className="text-gray-500">
                  Access to the US audience means up to 5x higher engagement rates and monetization opportunities.
                </p>
              </Card>
              <Card className="p-6 space-y-4 border-0 shadow-md">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Account Security</h3>
                <p className="text-gray-500">
                  Our technology ensures your account remains safe and compliant with TikTok&apos;s policies.
                </p>
              </Card>
              <Card className="p-6 space-y-4 border-0 shadow-md">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Dedicated US Phone Line</h3>
                <p className="text-gray-500">
                  Get a real US phone number for account verification and audience trust building.
                </p>
              </Card>
              <Card className="p-6 space-y-4 border-0 shadow-md">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Creator Support</h3>
                <p className="text-gray-500">
                  24/7 technical support from our team of TikTok marketing experts to help you grow.
                </p>
              </Card>
              <Card className="p-6 space-y-4 border-0 shadow-md">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Verified Results</h3>
                <p className="text-gray-500">
                  Our clients see an average of 250% growth in followers and engagement within 90 days.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our Phone Farm Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our seamless process makes it easy to start posting to TikTok USA in just a few simple steps
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative">
                <div className="absolute top-0 left-6 h-full w-px bg-gray-200 md:block hidden" />
                <div className="absolute top-6 left-6 h-4 w-4 rounded-full bg-teal-500 z-10 md:block hidden" />
                <div className="relative z-10 flex flex-col md:pl-16 md:text-left text-center">
                  <div className="md:hidden mb-4 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Sign Up & Connect</h3>
                  <p className="mt-2 text-gray-500">
                    Create your account and connect with our team. We&apos;ll assess your goals and set up your
                    dedicated US phone.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-6 h-full w-px bg-gray-200 md:block hidden" />
                <div className="absolute top-6 left-6 h-4 w-4 rounded-full bg-teal-500 z-10 md:block hidden" />
                <div className="relative z-10 flex flex-col md:pl-16 md:text-left text-center">
                  <div className="md:hidden mb-4 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Upload Your Content</h3>
                  <p className="mt-2 text-gray-500">
                    Upload your videos to our secure dashboard. Our team reviews them to ensure TikTok compliance.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-6 left-6 h-4 w-4 rounded-full bg-teal-500 z-10 md:block hidden" />
                <div className="relative z-10 flex flex-col md:pl-16 md:text-left text-center">
                  <div className="md:hidden mb-4 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">We Post for You</h3>
                  <p className="mt-2 text-gray-500">
                    Our system posts your content directly to TikTok USA using our phone farm technology, reaching the
                    American audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <StripeCheckout priceId="price_monthly" buttonText="Get Started Now" size="lg" />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Choose the plan that works best for your TikTok growth goals
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              <Card className="relative p-6 space-y-6 border shadow-md">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Weekly</h3>
                  <p className="text-gray-500">Perfect for creators testing the US market</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">
                    $50<span className="text-base font-normal text-gray-500">/month</span>
                  </p>
                  <p className="text-sm text-gray-500">Billed monthly</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>US TikTok account access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>4 posts per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <StripeCheckout priceId="price_weekly" buttonText="Get Started" variant="outline" fullWidth={true} />
              </Card>
              <Card className="relative p-6 space-y-6 border border-teal-500 shadow-lg">
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-teal-500">Most Popular</Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Monthly</h3>
                  <p className="text-gray-500">For serious creators looking to grow their US presence</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">
                    $100<span className="text-base font-normal text-gray-500">/month</span>
                  </p>
                  <p className="text-sm text-gray-500">Billed monthly</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>US TikTok account access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>20 posts per month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-teal-500" />
                    <span>Dedicated US phone number</span>
                  </li>
                </ul>
                <StripeCheckout priceId="price_monthly" buttonText="Get Started" fullWidth={true} />
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Real Results for Global Creators
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                See how creators are growing their audience with TikTok USA access
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/analytics-dashboard.jpg"
                  width={600}
                  height={400}
                  alt="TikTok Analytics Dashboard"
                  className="object-cover w-full h-[300px]"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold">250% Growth in 90 Days</h3>
                  <p className="mt-2 text-gray-600">
                    Our analytics dashboard shows the dramatic growth our clients experience when posting directly to the US market.
                  </p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/us-flag.jpg"
                  width={600}
                  height={400}
                  alt="US TikTok Market"
                  className="object-cover w-full h-[300px]"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold">Access to 100M+ US Viewers</h3>
                  <p className="mt-2 text-gray-600">
                    The US market offers higher engagement rates and better monetization opportunities for creators worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mb-12 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Everything you need to know about our TikTok USA posting service
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Is this service against TikTok&apos;s terms?</h3>
                <p className="text-gray-500">
                  Our service operates within the legal framework of TikTok&apos;s policies. We use legitimate US-based
                  devices and networks to ensure your account remains in good standing while accessing the US market.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">How do I know my account is secure?</h3>
                <p className="text-gray-500">
                  Security is our top priority. We use enterprise-grade encryption and never store your passwords. Our
                  system operates on physical devices in the US with secure connections to protect your account.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Can I still post on my own as well?</h3>
                <p className="text-gray-500">
                  You maintain full access to your TikTok account. Our service simply enables additional posting
                  capabilities through our US-based system when you want to target the US market.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">How quickly will my content be posted?</h3>
                <p className="text-gray-500">
                  After you upload content to our dashboard, we typically post within 24 hours. Enterprise clients enjoy
                  expedited posting times of 4-6 hours for time-sensitive content.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Can I schedule posts in advance?</h3>
                <p className="text-gray-500">
                  Yes! Our dashboard allows you to schedule posts up to 30 days in advance. You can plan your content
                  calendar and our system will automatically post at the optimal times.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What if I need to cancel?</h3>
                <p className="text-gray-500">
                  We offer a flexible month-to-month service with no long-term contracts. You can cancel anytime through
                  your dashboard with no cancellation fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-teal-50">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to unlock the US TikTok market?
                </h2>
                <p className="text-gray-600 md:text-xl">
                  Join creators from over 90 countries who are growing their audience and income with our TikTok USA
                  phone farm technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <StripeCheckout priceId="price_monthly" buttonText="Get Started" size="lg" className="px-8" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2 md:mr-auto">
            <Logo />
            <span className="text-xl font-bold">TokHop USA</span>
          </div>
          <div className="flex flex-wrap gap-4 md:items-center md:gap-8">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-black/70">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-black/70">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-black/70">
              Contact
            </Link>
          </div>
          <div className="text-sm text-gray-500 md:ml-auto md:text-right">
            &copy; {new Date().getFullYear()} TokHop USA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

