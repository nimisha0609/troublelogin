# EverBank Login App

A **React + TypeScript + Tailwind CSS** project for an online banking login flow, built with **Vite**.  
The project follows a multi-step flow for login, forgot password, OTP verification, and reset password.

---

## 🚀 Features

- 🔑 **Login Page** with Remember Me
- ❓ **Trouble Logging In** (Forgot User ID / Forgot Password options)
- 🔒 **Forgot Password Page** with user details validation
- 📲 **Verify Identity** via SMS/Call OTP flow
- 🔐 **OTP Verification** with clean UI
- 🔄 **Reset Password Page**
- 📱 Fully responsive (desktop + mobile)
- 🎨 Styled with TailwindCSS and customizable theme

---

## 📂 Project Structure

```
troublelogin/
├── client/               # Frontend code
│   ├── src/
│   │   ├── assets/       # Images & logos
│   │   ├── components/   # Shared UI components (Layout, Header, Footer)
│   │   ├── pages/        # Login, ForgotPassword, OTP, ResetPassword, etc.
│   │   ├── App.tsx       # App entry with Router
│   │   └── main.tsx      # React DOM root
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.ts
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repo

```bash

git clone https://github.com/nimisha0609/troublelogin.git
cd troublelogin/client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app will be running at:  
👉 `http://localhost:5173`

---

## 🛠️ Tech Stack

- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Vite**
- **React Router DOM**

---

## 🔧 Customization

- Replace the logo in `src/assets/logo.png`
- API endpoints can be configured later in `.env`

---

## 📦 Build for Production

```bash
npm run build
```

Serve locally:

```bash
npm run preview
```

---

## 👨‍💻 Author

Built with ❤️ by **Nimmy Sunny**.
