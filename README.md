# 🏥 Medogram

<div align="center">

![Medogram Logo](public/logo.png)

**A comprehensive medical platform built with Next.js and React**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.7-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.3.2-blue?style=for-the-badge&logo=mui)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 About

Medogram is a modern, comprehensive medical platform designed to provide healthcare services and medical assistance. The application offers various features including diabetes prediction, medical consultations, user management, and more.

## ✨ Features

- 🔐 **User Authentication** - Secure login and profile management
- 🩺 **Medical Predictions** - AI-powered diabetes prediction
- 💬 **Chat System** - Interactive medical chatbot
- 📝 **Blog System** - Medical articles and information
- 📅 **Visit Management** - Appointment scheduling and tracking
- 💳 **Payment Integration** - Secure payment processing
- 📱 **Responsive Design** - Mobile-first approach
- 🌐 **Multi-language Support** - Persian/Farsi interface

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14.2.7
- **UI Library**: Material-UI (MUI) 7.3.2
- **Styling**: Styled Components, Emotion
- **Icons**: Lucide React, Font Awesome
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Yup validation

### Backend & Services
- **API**: Axios for HTTP requests
- **OCR**: Tesseract.js for text recognition
- **Notifications**: React Toastify
- **Routing**: React Router DOM

### Development Tools
- **Linting**: ESLint with Next.js config
- **Testing**: Jest, React Testing Library
- **Build**: Next.js build system

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/medogram.git
   cd medogram
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
medogram/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blogs/             # Blog section
│   ├── contact/           # Contact page
│   ├── diabetes-prediction/ # Medical prediction feature
│   ├── login/             # Authentication
│   ├── profile/           # User profile
│   └── visits/            # Visit management
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Auth/          # Authentication components
│   │   ├── chat/          # Chat system
│   │   ├── Home/          # Homepage components
│   │   ├── Navbar/        # Navigation
│   │   └── predictions/   # Medical predictions
│   ├── styles/            # Styling files
│   └── utils/             # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact us through the contact page
- Check the documentation

---

<div align="center">

**Made with ❤️ for better healthcare**

[Website](https://medogram.com) • [Documentation](https://docs.medogram.com) • [Support](mailto:support@medogram.com)

</div>