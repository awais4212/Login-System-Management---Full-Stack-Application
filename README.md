# 🔐 Login System - Full Stack Authentication Application

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A modern, secure, and beautiful full-stack authentication system with an intuitive user interface.

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

This is a complete full-stack authentication system built with modern web technologies. It provides a secure and user-friendly way to handle user registration, login, and session management. The application features a beautiful gradient-based UI with smooth animations and a robust backend API.

Perfect for developers looking to implement authentication in their web applications or learn full-stack development concepts.

---

## ✨ Features

### Frontend Features
- 🎨 **Beautiful UI** - Modern gradient design with glassmorphism effects
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Smooth Animations** - Engaging user experience with CSS animations
- ✅ **Form Validation** - Real-time validation using React Hook Form
- 🔒 **Protected Routes** - Secure pages accessible only after login
- 🎭 **Interactive Elements** - Hover effects and transitions

### Backend Features
- 🛡️ **Secure Authentication** - User registration and login system
- 💾 **MongoDB Integration** - Efficient data storage and retrieval
- 🔄 **RESTful API** - Clean and organized API endpoints
- ⚠️ **Error Handling** - Comprehensive error management
- 🌐 **CORS Enabled** - Cross-origin resource sharing support

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building user interfaces
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form validation and handling
- **CSS3** - Modern styling with animations

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Body-parser** - Request body parsing middleware
- **CORS** - Cross-origin resource sharing middleware

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/awais4212/Login-System-Management---Full-Stack-Application.git
cd Login-System-Management---Full-Stack-Application
```

### Step 2: Install Frontend Dependencies
```bash
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd Backend
npm install
```

### Step 4: Start MongoDB
Make sure MongoDB is running on your system:
```bash
mongod
```

### Step 5: Start the Backend Server
```bash
cd Backend
node server.js
# or with nodemon
nodemon server.js
```
Backend will run on `http://localhost:3000`

### Step 6: Start the Frontend Application
Open a new terminal:
```bash
npm run dev
```
Frontend will run on `http://localhost:5173`

---

## 💻 Usage

### User Registration
1. Navigate to the Sign Up page
2. Fill in your username, email, and password
3. Click "Sign Up" button
4. You'll be redirected to the login page

### User Login
1. Navigate to the Login page
2. Enter your email and password
3. Click "Login" button
4. Upon successful login, you'll be redirected to the Welcome page

### Logout
1. Click the "Logout" button on the Welcome page
2. You'll be redirected to the home page

---

## 📁 Project Structure

```
Login-System-Management/
├── Backend/
│   ├── server.js           # Express server and API routes
│   └── package.json        # Backend dependencies
├── src/
│   ├── Components/
│   │   ├── Login.jsx       # Login component
│   │   ├── Signup.jsx      # Signup component
│   │   ├── Welcome.jsx     # Welcome/Dashboard component
│   │   └── Navbar.jsx      # Navigation component
│   ├── Home.jsx            # Home page component
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # Global styles
│   └── main.jsx            # Entry point
├── public/                 # Static files
├── package.json            # Frontend dependencies
└── README.md              # Project documentation
```

---

## 🔌 API Endpoints

### POST /
**User Registration**
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "userID": "objectId"
  }
  ```

### POST /login
**User Login**
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Login Successful",
    "user": {
      "username": "string",
      "email": "string"
    }
  }
  ```

---

## 🎨 Color Palette

- **Primary Gradient:** `#667eea` → `#764ba2`
- **Background:** Linear gradient purple theme
- **Text Primary:** `#333333`
- **Text Secondary:** `#666666`
- **Error:** `#e74c3c`
- **White:** `#ffffff` with transparency

---

## 🔮 Future Enhancements

- [ ] Password hashing with bcrypt
- [ ] JWT token-based authentication
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social media login (Google, Facebook)
- [ ] User profile management
- [ ] Remember me functionality
- [ ] Two-factor authentication

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Awais**

- GitHub: [@awais4212](https://github.com/awais4212)
- Email: awaisalihashmi@gmail.com

---

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB team for the powerful database
- All contributors who help improve this project

---

## 📞 Contact

For any questions or suggestions, feel free to reach out:

- **Email:** awaisalihashmi@gmail.com
- **GitHub Issues:** [Create an issue](https://github.com/awais4212/Login-System-Management---Full-Stack-Application/issues)

---

<div align="center">

Made with ❤️ by Awais

⭐ Star this repository if you find it helpful!

</div>
