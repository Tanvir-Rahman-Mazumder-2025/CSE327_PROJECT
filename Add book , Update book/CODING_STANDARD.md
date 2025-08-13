# Coding Standard — Node.js (Express + EJS)

This guideline ensures consistent, readable, and maintainable code across the project.

## 1) Language & Modules
- Use **ES Modules** (already enabled by `"type": "module"`).
- One default export per file (if needed), named exports for multiple functions.

## 2) Project & Files
- Folder names: `lowercase-with-dashes` or lowercase.
- File names: `lowercase-with-dashes.js` (e.g., `add-book.js`) or `camelCase.js` consistently.
- Group by responsibility:
  - `controllers/` (business logic)
  - `models/` (Mongoose schemas)
  - `routes/` (Express routers)
  - `config/` (db, env)
  - `views/` (EJS templates)
  - `public/` (static assets)

## 3) Naming Conventions
- Variables & functions: `camelCase` (e.g., `addBook`, `getBooks`)
- Classes & Models: `PascalCase` (e.g., `Book`)
- Constants: `UPPER_SNAKE_CASE`
- Route paths: `kebab-case` (e.g., `/add-book`) or underscores consistently across the app.

## 4) Formatting
- Indentation: 2 spaces.
- Max line length: 100–120 chars.
- Use Prettier for auto-formatting.

## 5) Comments
- Use JSDoc for public functions and controllers:
  ```js
  /**
   * Create a book
   * @route POST /add_book
   * @param {Request} req
   * @param {Response} res
   */
  ```
- Keep comments meaningful; avoid explaining the obvious.

## 6) Error Handling
- Always `try/catch` async controllers; return JSON with `message` and (optionally) `code`.
- Avoid leaking internal errors to clients; log details server-side.

## 7) Validation
- Validate request bodies, params, and query (e.g., **Joi**/**Zod**).
- Sanitize strings to prevent injection.
- Return `400 Bad Request` with a helpful error object on validation errors.

## 8) Responses
- For APIs, return JSON like:
  ```json
  { "success": true, "data": {...} }
  ```
- For errors:
  ```json
  { "success": false, "message": "Reason" }
  ```
- Use appropriate HTTP codes: 200, 201, 400, 401, 403, 404, 500.

## 9) Mongoose & Database
- Schema fields must declare `type` and `required` where applicable.
- Add indexes where needed.
- Use `timestamps: true` on schemas if you want auto `createdAt/updatedAt`.
- Avoid typos in field names (e.g., use `availability_status`), and add migrations if renaming.

## 10) Environment & Config
- Load env at app start (`dotenv.config()`).
- Document required keys in README.
- Never commit secrets.

## 11) Linting & Formatting (recommended)
- ESLint + Prettier:
  - Extends: `eslint:recommended`
  - Env: `node`, `es2022`
  - Parser options: `sourceType: module`
- Example `.eslintrc.json`:
  ```json
  {
    "env": { "es2022": true, "node": true },
    "extends": ["eslint:recommended"],
    "parserOptions": { "ecmaVersion": 2022, "sourceType": "module" },
    "rules": {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off",
      "semi": ["error", "always"]
    }
  }
  ```

## 12) Git & Commits
- Use descriptive messages: `feat: add update book endpoint`, `fix: correct field name`.
- Small, focused commits.

## 13) Views (EJS)
- Keep templates lean; push logic to controllers.
- Validate and escape user inputs before rendering.
- Serve static assets from `public/`.

## 14) API Style
- Use nouns and clear resource naming.
- Prefer `PUT /books/:id` for full update and `PATCH /books/:id` for partial update (current repo uses `POST /update_book/:book_id`, which is acceptable for assignment but consider REST semantics).
