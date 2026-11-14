# StudioNest — Find Your Creative Space

StudioNest is a peer-to-peer creative studio marketplace where photographers, filmmakers, podcasters, musicians, and other creators can discover and book professional creative spaces.

## Features

- Browse photography studios, film stages, podcast lounges, music suites, and workshops.
- User registration, email/password login, and Google authentication.
- Create, view, update, and delete studio listings.
- View studio details, amenities, pricing, and host information.
- Submit booking requests and manage reservations.
- JWT-protected private routes and authenticated API operations.
- Responsive interface built with Next.js, Tailwind CSS, and shadcn/ui.

## Technology Stack

- Next.js App Router and JavaScript.
- Tailwind CSS 4 and shadcn/ui.
- Better Auth, MongoDB Adapter, and JWT.
- Express.js and MongoDB.
- Sonner for toast notifications.
- Swiper.js for the homepage slider.

## Local Setup

1. Clone the client repository.
2. Run `npm install`.
3. Create `.env.local` and configure the required environment variables.
4. Configure Google OAuth credentials.
5. Configure MongoDB and the Express server.
6. Run `npm run dev`.
7. Visit http://localhost:3000.

## Environment Variables

- `NEXT_PUBLIC_API_URL`
- `BETTER_AUTH_URL`
- `BETTER_AUTH_SECRET`
- `MONGODB_URI`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_IMGBB_API_KEY`

## Examiner Credentials

Add your actual test account credentials after creating the account. Do not publish personal passwords or production credentials.

## Live Website

Add your deployed StudioNest URL here after deployment.
