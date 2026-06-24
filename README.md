# 📚 BookStore - Landing Page

## 🌐 Live Demo

Frontend: https://bookez-zeta.vercel.app/

⚠️ Recommended to view on desktop or large-screen devices (1280px+). Mobile responsiveness is currently under development.

A modern online bookstore landing page inspired by popular book-selling platforms. The application showcases books from multiple categories with a clean and elegant user interface.

## 🚀 Features

* Modern UI
* Dynamic book data fetching from PostgreSQL database
* Randomly displayed books on the landing page
* Multiple book categories:

  * Fiction
  * Fantasy
  * Programming
  * Biography
  * Science
  * Business
  * Self Help
* Skeleton loading for a smooth user experience
* Optimized image loading for banners and book covers
* Cloud-hosted database using Neon PostgreSQL

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* Neon PostgreSQL

### Deployment

* Frontend: Vercel
* Backend: Render
* Version Control: GitHub

## 📂 Installation

### Clone the repository

```bash
git clone https://github.com/Surya-Prakash-S-hub/bookez.git
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start or nodemon server.js
```

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder:

```env
DATABASE_URL=your_neon_database_url
PORT=5000
```

If using a frontend environment variable:

```env
VITE_API_URL=http://localhost:5000 
```

## 📸 Assets

Banner images and book cover illustrations were created using AI tools due to limited availability of suitable assets.

## 👨‍💻 Author

**Surya Prakash S**

Built as a full-stack web development project to practice modern frontend, backend, database integration, and deployment workflows.

## ⚠️ Note

This project is currently optimized for **desktop and large-screen devices**. Responsive design for tablets and mobile devices is still under development and will be added in future updates.

**Recommended Viewing Resolution:** 1280px and above.

