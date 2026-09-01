# Lkhedma

A modern Moroccan services marketplace connecting people who need services with people who offer skills and professional services.

**Tagline:** Your skill. Your opportunity.

## Features

- **Authentication**: Email/password and Google OAuth authentication
- **User Profiles**: Complete profiles for clients and providers
- **Service Listings**: Browse and search services with advanced filters
- **Provider Profiles**: Detailed provider profiles with portfolio and reviews
- **Dashboard**: User dashboard with overview, services, orders, messages, and more
- **Multi-language Support**: English, French, and Arabic (RTL)
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Modern UI**: Clean, premium design using Tailwind CSS and shadcn/ui

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide Icons
- **Backend**: Next.js API Routes / Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Styling**: Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lkhedma
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/lkhedma"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lkhedma/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                   # Next.js app directory
│   │   ├── api/              # API routes
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── services/         # Service pages
│   │   ├── providers/        # Provider pages
│   │   ├── login/            # Login page
│   │   ├── signup/           # Signup page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── how-it-works/     # How it works page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Global styles
│   │   └── not-found.tsx     # 404 page
│   ├── components/
│   │   ├── layout/           # Layout components (Navbar, Footer)
│   │   ├── ui/               # UI components (Button, Card, etc.)
│   │   ├── dashboard-sidebar.tsx
│   │   ├── service-card.tsx
│   │   ├── category-card.tsx
│   │   └── providers.tsx
│   └── lib/
│       ├── prisma.ts          # Prisma client
│       ├── auth.ts            # Auth configuration
│       └── utils.ts           # Utility functions
├── public/                   # Static assets
└── package.json
```

## Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **User**: User accounts with roles (CLIENT, PROVIDER, ADMIN)
- **Profile**: User profile information
- **ProviderProfile**: Provider-specific information
- **Service**: Service listings
- **ServicePackage**: Service pricing packages
- **Order**: Order management
- **Message**: Messaging system
- **Review**: Reviews and ratings
- **Wallet**: Provider wallet for earnings

See `prisma/schema.prisma` for the complete schema.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development

### Adding New Dependencies

```bash
npm install <package-name>
```

### Database Migrations

```bash
npx prisma migrate dev --name <migration-name>
```

### Generate Prisma Client

```bash
npx prisma generate
```

### View Database in Prisma Studio

```bash
npx prisma studio
```

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## Brand Colors

- Primary Blue: #2563EB
- Secondary Purple: #7C3AED
- Dark Navy: #0F172A
- Background: #F8FAFC
- Success: #16A34A
- Warning: #F59E0B
- Error: #DC2626

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@lkhedma.ma or visit our contact page.
