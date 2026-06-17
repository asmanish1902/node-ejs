# User Management App

A full-stack **User Management CRUD application** built with Node.js, Express, MongoDB, and EJS. Implements a clean MVC architecture with flash messages, input validation, and centralized error handling.

## Features

- Create, read, update, and delete users
- Server-side rendered views with EJS and Bootstrap 5
- MVC architecture (Models, Views, Controllers, Routes)
- Input validation using `express-validator`
- Flash messages for success/error feedback
- Centralized error handling with custom 404 and 500 pages
- Environment-based configuration with `dotenv`

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB with Mongoose |
| Templating | EJS |
| Styling | Bootstrap 5 |
| Validation | express-validator |
| Sessions/Flash | express-session, connect-flash |

## Folder Structure

```
user-management-app/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── middlewares/
│   ├── errorHandler.js
│   └── validators.js
├── models/
│   └── User.js
├── public/
│   └── css/
│       └── custom.css
├── routes/
│   └── users.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   ├── alert.ejs
│   │   └── flash.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   ├── error.ejs
│   └── index.ejs
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Prerequisites

- Node.js (v16 or higher)
- MongoDB running locally or a MongoDB Atlas connection string

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory

   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/usermanagement
   SESSION_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

4. Start MongoDB locally (skip if using Atlas)

   ```bash
   mongod
   ```

5. Run the application

   ```bash
   npm run dev
   ```

6. Open in your browser

   ```
   http://localhost:3000
   ```

## API Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | List all users |
| GET | `/users/create` | Show create user form |
| POST | `/users` | Create a new user |
| GET | `/users/:id/edit` | Show edit user form |
| PUT | `/users/:id` | Update an existing user |
| DELETE | `/users/:id` | Delete a user |

## Scripts

| Command | Description |
|---|---|
| `npm start` | Run the app in production mode |
| `npm run dev` | Run the app with nodemon (auto-restart on changes) |

## License

This project is open source and available for personal or educational use.