# 🎵 SoundSphere Backend

A scalable backend system for a Spotify-inspired music streaming platform built with Node.js, Express.js, and MongoDB.

SoundSphere provides secure authentication, role-based authorization, music and album management, and cloud-based audio storage. The platform supports two types of users: **Users** and **Artists**, allowing artists to upload and manage music while users can discover and access content.

---

## 🚀 Features

### Authentication & Security

* User and Artist Registration
* Secure Login System
* JWT-Based Authentication
* Password Hashing using bcrypt
* Protected Routes Middleware
* Role-Based Access Control (RBAC)

### Music Management

* Upload Audio Files
* Manage Music Metadata
* Retrieve Music Library
* Artist-Specific Music Management

### Album Management

* Create Albums
* Manage Album Information
* Associate Tracks with Albums

### Cloud Storage

* Audio Upload and Storage using ImageKit
* Secure Media Delivery

### Database

* MongoDB Integration with Mongoose
* Structured Data Models
* Scalable Document-Based Storage

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt

### Media Storage

* ImageKit

### Development Tools

* Nodemon
* dotenv

---

## 📂 Project Structure

```bash
SoundSphere/
│
├── src/
│   ├── controller/
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── music.model.js
│   │   └── album.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   │
│   └── services/
│       └── storage.services.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 👥 User Roles

### User

Users can:

* Register and login
* Access protected routes
* Browse music content
* View albums and tracks

### Artist

Artists can:

* Register and login
* Upload audio files
* Create and manage albums
* Manage tracks and music metadata
* Access artist-only endpoints

---

## 🔐 Authentication Flow

1. User or Artist creates an account.
2. Password is hashed before being stored in MongoDB.
3. User logs in using credentials.
4. Server generates a JWT token.
5. Token is sent with future requests.
6. Authentication middleware verifies token validity.
7. Authorization middleware checks user role before allowing access to restricted resources.

---

## 🎵 Music Workflow

### Artist

* Uploads audio files through the API.
* Audio files are stored using ImageKit.
* Music metadata is saved in MongoDB.
* Tracks can be associated with albums.

### User

* Accesses music content through API endpoints.
* Retrieves albums and track information.

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_private_key
```

---

## 📦 Installation

### Clone Repository


git clone https://github.com/sandeshKumar18/SoundSphere.git
cd SoundSphere

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add the required variables.

### Run Development Server

npm run dev


### Run Production Server

```bash
npm start
```

---

## 🔗 API Modules

### Authentication Routes

* Register User
* Register Artist
* Login
* JWT Token Generation

### Music Routes

* Upload Music
* Get All Tracks
* Get Single Track
* Update Track Information
* Delete Track

### Album Routes

* Create Album
* Get Albums
* Update Album
* Delete Album

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing with bcrypt
* Protected API Endpoints
* Role-Based Authorization
* Environment Variable Protection
* Secure Media Storage

---

## 🎯 Future Improvements

* Playlist Management
* Favorites and Likes
* Music Search
* Recently Played
* Artist Profiles
* Streaming Analytics
* Refresh Tokens
* Rate Limiting
* API Documentation with Swagger/OpenAPI

---

## 📈 Learning Objectives

This project demonstrates:

* REST API Development
* Authentication & Authorization
* JWT Implementation
* MongoDB Data Modeling
* Express Middleware Architecture
* Cloud Media Storage Integration
* Backend Project Structuring
* Secure Application Development

---

## 👨‍💻 Author

**Sandesh Kumar**

Backend Developer

GitHub: https://github.com/sandeshKumar18

---

## 📄 License

This project is licensed under the MIT License.
