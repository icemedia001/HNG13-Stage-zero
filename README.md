# Stage Zero Backend (NestJS)

A small NestJS service that exposes two endpoints:

- GET / -> returns "Hello World!" via [`AppController.getHello`](src/app.controller.ts).
- GET /me -> returns a lightweight profile payload built by [`ProfileController.getProfile`](src/profile/profile.controller.ts) which uses [`ProfileService.getProfile`](src/profile/profile.service.ts) to read environment values and fetch a cat fact.

## Environment Setup

Create a `.env` file at the project root with these variables:
```
MY_EMAIL=your-email@example.com
MY_NAME=Your Name
MY_STACK=Your Tech Stack
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start in development mode:
   ```bash
   npm run start:dev
   ```
   The app will run on port 3000 by default.

## Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:prod` - Start in production mode
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:cov` - Run tests with coverage
- `npm run build` - Build the application

## API Endpoints

- `GET /` - Returns "Hello World!"
- `GET /me` - Returns profile information with environment variables and a cat fact

## Project Structure

- `src/app.controller.ts` - Main app controller
- `src/app.service.ts` - Main app service
- `src/profile/` - Profile feature module
  - `profile.controller.ts` - Profile endpoint controller
  - `profile.service.ts` - Profile business logic
  - `profile.module.ts` - Profile module configuration
