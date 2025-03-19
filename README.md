<div align="center">
   <div align="center">
      <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="Node.js" />
      <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="28px" alt="express.js" />
      <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongoDB" />
      <img src="https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square" height="28px" alt="javascript" />
    </div>
  <h3 align="center">Management System API</h3>
</div>

## <br /> 📋 <a name="table">Summary</a>

- ✨ [Introduction](#introduction)
- 🛠 [Technology Used](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Launch App](#launch-app)
- 🎨 [Styling](#style)

## <br /> <a name="introduction">✨ Introduction</a>

**[ENG]** This project is a backend server built with Node.js and Express, designed to handle user registration and subscription management. It utilizes a variety of technologies, including MongoDB for database management, JSON Web Tokens (JWT) for authentication, and bcryptjs for password hashing. The server is designed to be interacted with via HTTP tools.
Note: Nodemailer integration is currently not functional.

**[FR]** Ce projet est un serveur backend construit avec Node.js et Express, conçu pour gérer l'inscription des utilisateurs et la gestion des abonnements. Il utilise diverses technologies, notamment MongoDB pour la gestion de la base de données, les jetons Web JSON (JWT) pour l'authentification et bcryptjs pour le hachage des mots de passe. Le serveur est conçu pour être utilisé avec des outils HTTPie.
Note : L'intégration de Nodemailer n'est actuellement pas fonctionnelle.

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [httpie](https://httpie.io/) HTTPie is making APIs simple and intuitive for those building the tools of our time.

- [bcrypt](https://www.npmjs.com/package/bcrypt)
  A pure JavaScript implementation of bcrypt for hashing passwords.

- [@arcjet/node](https://www.npmjs.com/package/@arcjet/node)
  A Node.js SDK for Arcjet, a platform for building and deploying serverless applications.

- [@upstash/workflow](https://www.npmjs.com/package/@upstash/workflow)
  A library for building and managing workflows with Upstash.

- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
  Middleware for parsing HTTP request cookies.

- [dayjs](https://www.npmjs.com/package/dayjs)
  A minimalist JavaScript library for modern browsers with a largely Moment.js-compatible API.

- [dotenv](https://www.npmjs.com/package/dotenv)
  Loads environment variables from a .env file into process.env.

- [express](https://www.npmjs.com/package/express)
  A fast, unopinionated, minimalist web framework for Node.js.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  An implementation of JSON Web Tokens.

- [mongodb](https://www.mongodb.com/)
  Data base, that can manage document-oriented information, store or retrieve information

- [mongoose](https://www.npmjs.com/package/mongoose)
  Elegant MongoDB object modeling for Node.js.

- [morgan](https://www.npmjs.com/package/morgan)
  HTTP request logger middleware for Node.js.

- [nodemailer](https://www.npmjs.com/package/nodemailer)
  Send e-mails from Node.js

## <br /> <a name="features">📝 Features</a>

👉 **User Registration:** Allows new users to register an account.

👉 **User Authentication:** Implements secure authentication using JWT.

👉 **Subscription Management:** Enables users to subscribe to services.

👉 **Database Integration:** Utilizes MongoDB for data storage.

👉 **Password Hashing:** Employs bcryptjs for secure password storage.

👉 **HTTP API:** Provides a RESTful API for interaction via HTTP tools.

## <br /> <a name="launch-app">🚀 Launch App</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

> [!NOTE]
> Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) _(Node Package Manager)_

**Cloning the Repository**

```bash
git clone {git remote URL}
cd {git project..}
```

**Installation**

> After cloning the repository, run the command `npm i` or `yarn i` to install the project's dependencies.

> Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**Set Up Environment Variables**

Create two new files named `.env` in the root of your project and add the following content:

```env.development.local
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIROMENT (MODE)
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET='secret'
JWT_EXPIRES_IN='1d'

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH from npx @upstash/qstash-cli dev
QSTASH_TOKEN=
# Copy begin of Sample cURL request :
QSTASH_URL=

# NODEMAILER
EMAIL_PASSWORD=
```

```env.production.local
# ENVIROMENT (MODE)
NODE_ENV=production

#Upstach from project
QSTASH_URL="https://qstash.upstash.io"
QSTASH_TOKEN=
QSTASH_CURRENT_SIGNING_KEY=
QSTASH_NEXT_SIGNING_KEY=
```

**Tools HTTPie**

The server is designed to be interacted with via HTTPie applications.
[HTTPie](https://httpie.io/) is a command-line HTTP client that makes interacting with APIs simple and intuitive.

**API Routes**

The server exposes the following path, each prefixed with `/api/v1/`:

- `/auth`: Handles user authentication related operations (e.g., login, registration).
- `/users`: Manages user profiles and information.
- `/subscriptions`: Controls user subscription management.
- `/workflows`: Manages the workflows.
