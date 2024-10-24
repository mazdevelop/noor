# Bilingual Website Project (Next.js, MongoDB, next-intl)

This is a dynamic, bilingual website (English and Persian) built with Next.js using MongoDB as the database, and the next-intl package for internationalization. The website supports English and Persian languages, providing a dashboard for managing content (CRUD operations), multi-language content fetching, and dynamic routes.

## Features

- Bilingual support: English and Persian with language switcher
- Dynamic routing: Language-based routing and content loading
- MongoDB integration: Full CRUD functionality for managing products, articles, and other content via MongoDB
- Admin dashboard: A secure admin dashboard for content management
- Image uploads: Support for multiple image uploads and image compression
- Authentication: Login and session management with Google OAuth
- SEO: Optimized with semantic and meta tags for better search engine rankings

## Project Structure

```
├── public/
│   ├── images/
│   └── favicon.ico
├── app/
│   ├── [locale]/
│   │   ├── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── articles/
│   │   │   └── page.tsx
│   │   └── about-us/
│   ├── admin/
|   |── fonts/
|   |── favicon.ico
|   |── globals.css
|   |── layout.tsx
|   |── page.tsx
├── components/
├── lib/
├── messages/
├── models/
├── styles/
├── next.config.mjs
├── middleware.ts
├── i18n.ts
└── package.json
└── tailwind.config.ts
```

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js v18.x or above
- MongoDB (local or MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/bilingual-website.git
   cd bilingual-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables: Create a `.env` file at the root of the project and add the following:
   ```
   MONGODB_URI=mongodb://localhost:27017/mydatabase
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run MongoDB: (If using a local MongoDB instance)
   ```bash
   mongod
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding Translations

Add your translations in JSON format inside `public/locales/[locale]/`. Example:

`public/locales/fa/common.json`:
```json
{
  "welcome": "خوش آمدید",
  "about": "درباره ما"
}
```

`public/locales/en/common.json`:
```json
{
  "welcome": "Welcome",
  "about": "About Us"
}
```

Use `next-intl` to dynamically fetch translations in your components.

### MongoDB Schema

The app uses the following MongoDB models:

- Product: Title, description, images, price, language-specific fields
- Article: Title, content, author, image, language-specific fields
- User: Handles user authentication and roles

### Admin Dashboard

Accessible via `/admin`, where authenticated users can manage:

- Products
- Articles
- Users

Supports CRUD operations for all entities.

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Run the production build:
   ```bash
   npm start
   ```

3. Environment Variables in Production: Make sure all required environment variables are set for your production environment (MongoDB URI, Google Auth, etc.).

## Technologies Used

- Next.js: React framework for server-side rendering and static site generation
- MongoDB: NoSQL database for storing products, articles, and user data
- next-intl: For handling translations and internationalization
- TailwindCSS: For styling
- NextAuth.js: For user authentication with Google OAuth

## Contributing

If you wish to contribute to this project, feel free to submit a pull request. Ensure that your code follows best practices and includes necessary test cases.

## License

This project is licensed under the MIT License.
jax