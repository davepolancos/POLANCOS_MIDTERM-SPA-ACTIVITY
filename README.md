# Polancos Coffee Shop - React SPA

A modern Single Page Application (SPA) for a coffee shop built with React and React Router DOM, featuring dynamic routing, protected routes, and a beautiful responsive design.

## Features

### ✅ Core Requirements Met
- **Single Page Application** with React Router DOM
- **5 Main Sections**: Home, About, Menu, Contact, Gallery
- **Header Component** with navigation
- **Bootstrap Styling** for responsive design
- **Dynamic Routing** between pages without browser reload
- **Nested Routes** and **Protected Routes** (Admin panel)
- **Programmatic Navigation** throughout the app
- **404 Page** for invalid routes

### 🚀 Additional Features
- **Authentication System** with login/logout functionality
- **Admin Panel** with dashboard, orders, menu management
- **Responsive Design** that works on all devices
- **Interactive Gallery** with modal image preview
- **Contact Form** with validation
- **Modern UI/UX** with coffee shop theme
- **Font Awesome Icons** for enhanced visual appeal

## Project Structure

```
src/
├── components/
│   ├── Header.js              # Navigation header component
│   └── ProtectedRoute.js      # Route protection wrapper
├── context/
│   └── AuthContext.js         # Authentication context
├── pages/
│   ├── Home.js               # Landing page
│   ├── About.js              # About us page
│   ├── Menu.js               # Menu with categories
│   ├── Contact.js            # Contact form and info
│   ├── Gallery.js            # Image gallery
│   ├── Login.js              # Admin login
│   ├── Admin.js              # Protected admin panel
│   └── NotFound.js           # 404 error page
├── App.js                    # Main app with routing
├── App.css                   # App-specific styles
├── index.js                  # React entry point
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

### Demo Credentials
- **Username**: admin
- **Password**: password

## Navigation Features

### Public Routes
- `/` - Home page
- `/about` - About us
- `/menu` - Coffee shop menu
- `/contact` - Contact information and form
- `/gallery` - Photo gallery
- `/login` - Admin login

### Protected Routes
- `/admin` - Admin dashboard (requires authentication)

### Error Handling
- `/*` - 404 Not Found page for invalid routes

## Technical Implementation

### Routing
- **React Router DOM v6** for client-side routing
- **BrowserRouter** for clean URLs
- **Nested Routes** for organized navigation
- **Protected Routes** with authentication guards
- **Programmatic Navigation** using `useNavigate` hook

### State Management
- **React Context API** for authentication state
- **Local Storage** for persistent login sessions
- **Component State** for form data and UI interactions

### Styling
- **Bootstrap 5** for responsive grid and components
- **Custom CSS** for coffee shop theme
- **Font Awesome** for icons
- **Responsive Design** for mobile and desktop

### Authentication
- **Context-based** authentication system
- **Protected routes** that redirect to login
- **Session persistence** using localStorage
- **Role-based access** for admin features

## Key Components

### Header Component
- Responsive navigation bar
- Active route highlighting
- Authentication status display
- Mobile-friendly hamburger menu

### Admin Panel
- Dashboard with statistics
- Order management
- Menu management
- Customer management
- Reports and analytics

### Gallery Component
- Image grid layout
- Modal image preview
- Responsive design
- Interactive navigation

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

This project demonstrates:
- Modern React patterns and hooks
- Client-side routing without page reloads
- Authentication and authorization
- Responsive web design
- Component-based architecture
- State management best practices

## Future Enhancements
- Backend API integration
- Real-time order tracking
- Payment processing
- Customer reviews and ratings
- Inventory management
- Advanced analytics

---

**Created for ITP110 - Web Technologies Midterm Laboratory 2**
