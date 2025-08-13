# BoiBazaar – An Online Bookstore

![Image book Store](https://github.com/Tanvir-Rahman-Mazumder-2025/CSE327_PROJECT/blob/main/public/images/bookselling_Cover.jpg)

### Group members:

* Tanvir Rahman Mazumder 2232401642
* Rezuan Islam Samir 2021092642
* Tanvir Hossain Sakif 2232935642
* Sajidul Abedin 2131586642

## 🚀 Features

- **User Authentication**
  - User **registration** and **login** with secure password handling.
  - Role-based access control for **Admin** and **Customer**.

- **Admin Dashboard**
  - Add new books to the system.
  - Update existing book details.


- **Customer Dashboard**
  - Browse and search available books.
  - Add books to **favorites**.
  - Add books to **cart**.
  - Place an order directly from the cart.

- **Book Management**
  - Sort books by **date** (newest/oldest).
  - Sort books by **price** (low to high / high to low).


- **Responsive UI**
  - Clean and user-friendly interface with **EJS** **TailwindCSS**templates.



##  How to Clone & Run

### 1️ Clone the Repository
Open **Git Bash** or your preferred terminal and run:
```bash
git config --global user.name "<your_github_username>"
git config --global user.email "<your_github_email>"

git clone https://github.com/Tanvir-Rahman-Mazumder-2025/CSE327_PROJECT.git

```

## If Node.js isn't installed, download it from nodejs.org.

### Check Node.js Version

```bash
node -v
```

## Install Dependencies
```bash
npm install
```


## Set Up Environment Variables
```yaml
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## 🚀Run the Project
```bash
 npm run dev
```
## Open in Browser
```yaml
http://localhost:3000
```
## 🚀How to Develop
### Create a New Branch
```bash
git checkout -b <your_feature_branch>
```
### Make Changes

Modify routes, controllers, models (if MongoDB schema changes are involved), or EJS views.

### Commit & Push
```bash
git add .
git commit -m "Brief description of changes"
git push origin <your_feature_branch>
```
### Create a Pull Request (PR)
Open a PR from your branch to main. 

### Review & Merge
Once reviewers approve your changes, merge the PR into main.
