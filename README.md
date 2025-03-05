# TokHop USA - TikTok USA Access Platform

A Next.js application that enables creators outside the US to post directly to TikTok USA.

## Features

- US TikTok market access
- Higher engagement rates
- Account security
- Dedicated US phone line
- Creator support
- Verified results

## Deployment Instructions

### Deploy to Vercel

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com/)
   - Sign up or log in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Configure your project settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: npm run build
     - Output Directory: .next

3. **Environment Variables**
   - Add the following environment variables in the Vercel dashboard:
     ```
     NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
     NEXT_PUBLIC_STRIPE_PRICE_MONTHLY=price_monthly
     NEXT_PUBLIC_STRIPE_PRICE_WEEKLY=price_weekly
     ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete
   - Your site will be available at the provided Vercel URL

### Production Stripe Integration

For production use with real Stripe integration:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Add these environment variables to Vercel:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key
   STRIPE_SECRET_KEY=sk_live_your_secret_key
   ```
4. Update the API route in `app/api/create-checkout-session/route.ts` to use the Stripe API

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- Shadcn UI
- Stripe Checkout (mock implementation) 