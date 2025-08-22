# 🍔 Burger Smash

A modern, interactive burger restaurant website built with Next.js, featuring stunning 3D graphics, smooth animations, and a responsive design.


## ✨ Features

- **3D Interactive Burger Model** - Rotating 3D cheeseburger using Three.js
- **Smooth Animations** - Framer Motion animations throughout the interface
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI/UX** - Beautiful, intuitive interface with custom fonts
- **Interactive Navigation** - Smooth scrolling navigation with active state tracking
- **Contact Form** - Functional contact form with Google Maps integration
- **Menu Showcase** - Beautiful menu display with high-quality images

## 🚀 Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Merienda, Chewy)

## 📁 Project Structure

```
burger-smash/
├── app/
│   ├── combonnent/          # React components
│   │   ├── About.tsx        # About section component
│   │   ├── Burger.tsx       # 3D burger hero section
│   │   ├── contact.tsx      # Contact form component
│   │   ├── cta.tsx          # Call-to-action component
│   │   ├── footer.tsx       # Footer component
│   │   └── Menu.tsx         # Menu showcase component
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/
│   ├── elements/            # Menu item images
│   ├── prev/               # Background images
│   ├── cheeseburger_3d_model.glb  # 3D model file
│   └── favicon.svg         # Site favicon
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── README.md               # This file
```

## 🎯 Key Components

### 🍔 Burger Component
- Interactive 3D cheeseburger model using Three.js
- GLTF loader for 3D model rendering
- Orbit controls for user interaction
- Responsive design with motion animations

### 📋 Menu Component
- Grid layout showcasing 9 different burger options
- High-quality food images
- Pricing information
- Order buttons with hover effects

### 📞 Contact Component
- Contact form with name, email, and message fields
- Google Maps integration
- Business hours and location information
- Responsive design with animations

### 🎨 Design Features
- Custom color scheme with orange accents (#E69E0A, #F26100)
- Custom fonts (Merienda for headings, Chewy for body text)
- Smooth scroll animations and transitions
- Glassmorphism effects with backdrop blur
- Responsive grid layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd burger-smash
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in the CSS:
- Primary Orange: `#E69E0A`
- Secondary Orange: `#F26100`
- Background: Black with transparency
- Text: White and custom orange accents

### Fonts
- **Headings**: Merienda (cursive, elegant)
- **Body Text**: Chewy (fun, playful)

### Animations
All animations are powered by Framer Motion with:
- Fade-in effects
- Scale transitions
- Slide animations
- Intersection Observer triggers

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts
- Optimized images and 3D models
- Touch-friendly interactions

## 🌟 Features in Detail

### 3D Burger Model
- **Technology**: Three.js with GLTF loader
- **Interaction**: Orbit controls for rotation
- **Performance**: Optimized rendering with proper cleanup
- **Responsive**: Adapts to different screen sizes

### Navigation
- **Smooth Scrolling**: CSS scroll-behavior and JavaScript implementation
- **Active State Tracking**: Intersection Observer for section detection
- **Hover Effects**: Scale and color transitions
- **Mobile Optimized**: Responsive navigation with proper spacing

### Menu System
- **Grid Layout**: Responsive grid with 1-3 columns
- **Image Optimization**: Next.js Image component with lazy loading
- **Hover Effects**: Scale and shadow animations
- **Order Integration**: Ready for e-commerce integration

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture

## 📸 Screenshots

The project includes several high-quality images:
- Hero background images
- Menu item photos
- 3D burger model
- Chef and food photography

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

**Built with ❤️ and 🍔 by the Akira team**