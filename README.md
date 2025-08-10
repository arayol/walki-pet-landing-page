# Walki Pet - Dog Walking Platform

## Project Overview

A comprehensive dog walking and pet care management platform connecting dog walkers with pet owners. Built with modern web technologies and deployed at **walki.pet**.

### Key Features
- Client and walker dashboards
- Service booking system
- Stripe payment integration (Basic R$ 29, Professional R$ 59,90)
- Real-time authentication and user management
- Advanced analytics and reporting
- Feature flags and A/B testing capabilities
- Google Calendar integration
- Automated email system
- Production-ready deployment

## Development Environment

This project runs on **Replit** with integrated development tools.

### Quick Start

The application is pre-configured and ready to run:

```sh
# Start the development server
npm run dev
```

The workflow "Start application" will automatically:
- Start the Express.js backend server
- Launch the Vite development server for the frontend
- Enable hot-reload for instant development feedback

### Development Options

**Replit Editor (Recommended)**
- Edit files directly in the Replit interface
- Automatic server restart on changes
- Integrated console and database tools
- Real-time collaboration features

**Local Development**
If you prefer working locally:

```sh
# Clone the repository
git clone <YOUR_REPLIT_GIT_URL>

# Navigate to project directory
cd walki-pet-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

**GitHub Integration**
- Push changes to sync with Replit
- Use GitHub Codespaces for cloud development
- Automatic deployment triggers

## Technology Stack

This project is built with:

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development
- **TailwindCSS** for styling
- **shadcn/ui** component library
- **TanStack Query** for server state management
- **React Router** for navigation

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database (Replit Database)
- **Drizzle ORM** for database management
- **Stripe** for payment processing
- **Resend** for email services

### Infrastructure
- **Replit** hosting and development environment
- **Custom domain**: walki.pet
- **SSL/TLS** automatic certificate management
- **Automated deployments**

## Database Management

The project uses Replit's integrated PostgreSQL database:

```sh
# Push schema changes
npm run db:push

# Generate schema types
npm run db:generate
```

## Deployment

### Production Deployment
The application is deployed at **walki.pet** using Replit's deployment system.

To deploy updates:
1. Make your changes in the Replit editor
2. Test locally using the development server
3. Click the **Deploy** button in Replit
4. Changes will be live at walki.pet

### Deployment Features
- **Autoscale**: 1vCPU/2GB RAM, scales to 2-3 machines
- **Custom Domain**: Configured at walki.pet
- **SSL Certificate**: Automatic via Replit
- **Health Checks**: Automated monitoring
- **Rollback**: Available through Replit interface

## Environment Configuration

Required environment variables are managed through Replit Secrets:
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
- `STRIPE_SECRET_KEY` & `VITE_STRIPE_PUBLIC_KEY`
- `DATABASE_URL` (automatically configured)
- `RESEND_API_KEY` for email services

## Custom Domain Setup

The custom domain **walki.pet** is already configured. For additional domains:
1. Go to Replit project settings
2. Navigate to Domains section
3. Add your custom domain
4. Follow DNS configuration instructions

## Support & Documentation

- **Replit Documentation**: [docs.replit.com](https://docs.replit.com)
- **Project Documentation**: See `replit.md` for detailed architecture
- **Database Guide**: Check `MIGRATION_TO_REPLIT_DB.md` for database information
- **Deploy Guide**: Reference `HOSTINGER_DEPLOY_GUIDE.md` for production setup

---

**Live URL**: [walki.pet](https://walki.pet)
**Development**: Replit integrated environment
**Launch**: Planned for October 2025
