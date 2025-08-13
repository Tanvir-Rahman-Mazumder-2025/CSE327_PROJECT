# Sakif_CSE327 — Book Store (Node.js + Express + EJS + MongoDB)

A simple Book Store admin interface built with **Express 5**, **EJS** views, and **Mongoose**.
It supports adding, updating and listing books. The UI pages are rendered using EJS and styled with Tailwind CDN.

## ✨ Features
- Add a book (admin only)
- Update an existing book
- View all books
- EJS view templates: `addbook.ejs`, `updatebook.ejs`, `books.ejs`
- MongoDB connection via Mongoose

## 🗂 Project Structure
```
.
├── app.js
├── dummyuser.js
├── config/
│   └── database.js
├── controllers/
│   ├── addbook.js
│   ├── getbooks.js
│   └── updatebook.js
├── models/
│   └── book.js
├── routes/
│   └── adminRoute.js
├── views/
│   ├── addbook.ejs
│   ├── books.ejs
│   └── updatebook.ejs
├── public/            # (static assets folder if used)
├── .env               # environment variables
└── package.json
```

## ⚙️ Requirements
- Node.js 18+
- MongoDB (Atlas or local)

## 🔐 Environment Variables
Create a `.env` file in the project root:

```
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/sakif_books
```

> The app reads `MONGODB_URL` in `config/database.js` and uses `PORT` in `app.js`.

## 🚀 Run Locally
```bash
npm install
npm run dev   # nodemon
# or
npm start
```
Then open: `http://localhost:3000`

## 👤 Authentication
The app currently uses a **dummy admin user** from `dummyuser.js`:
```js
{ username: "admin", role: "admin" }
```
Controllers check `dummyUser.role === "admin"` for privileged actions. Replace this with real authentication in production.

## 📄 API & Pages (quick)
- `GET /` → Render **Add Book** form
- `GET /get_books` → Returns all books (JSON) and has an EJS view `views/books.ejs` for rendering in UI
- `POST /add_book` → Create a book (admin only)
- `POST /update_book/:book_id` → Update an existing book by id
- `GET /render/update/:id` → Render the **Update Book** page for a given book id

See **API_SPEC.yaml** in the repo for detailed API schema and examples.

## 🧱 Book Model (Mongoose)
From `models/book.js` and EJS forms, the schema uses the following fields:
- `title` *(String, required)*
- `author` *(String, required)*
- `price` *(Number, required)*
- `description` *(String, required)*
- `category` *(String, required)*
- `language` *(String, required)*
- `image_url` *(String, required)*
- `availavility_status` *(String)* — **Note**: there is a typo in the field name. Consider renaming to `availability_status` in a future migration.
- `createdAt` *(Date, default: now)*

## 🛠 Tech Stack
- Express 5
- EJS (server-side views)
- Mongoose 8
- dotenv

## ✅ Next Steps / Improvements
- Replace dummy user with proper auth (JWT/session)
- Add validation (Joi/Zod) and better error handling
- Add delete endpoint and pagination for listing
- Fix the `availavility_status` typo across codebase
- Unit tests (Jest + Supertest)

---

© 2025 Sakif — CSE327
