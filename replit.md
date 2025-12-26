# RentAnyCarDubai

## Overview

RentAnyCarDubai is a premium luxury car rental website for Dubai. The application provides a modern, professional interface for browsing and renting luxury, sports, and economy vehicles. The platform features a responsive design with smooth animations, a hero section with car imagery, booking forms, and comprehensive service information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and effects
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware
- **Production**: Static file serving from built assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **In-Memory Storage**: MemStorage class for development/testing (can be swapped for database)
- **Database Config**: Drizzle Kit for migrations, requires `DATABASE_URL` environment variable

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage interface
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema definitions
└── attached_assets/  # Static images and assets
```

### Design System
- **Primary Brand Color**: #7d7043 (luxury gold-brown)
- **Typography**: Playfair Display (headings), Montserrat (body)
- **Component Library**: shadcn/ui (New York style variant)
- **Theme**: Light mode only with CSS variables for theming

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

## External Dependencies

### Frontend Libraries
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for UI transitions
- **embla-carousel-react**: Carousel/slider functionality
- **react-hook-form** with **zod**: Form handling and validation
- **date-fns**: Date manipulation utilities
- **lucide-react**: Icon library

### UI Components (Radix UI primitives via shadcn/ui)
- Accordion, Dialog, Dropdown Menu, Select, Tabs, Toast, Tooltip, and more

### Backend Libraries
- **express**: Web server framework
- **drizzle-orm**: Database ORM
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Schema validation

### Database
- **PostgreSQL**: Primary database (configured via DATABASE_URL)
- **drizzle-kit**: Database migration tooling

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development