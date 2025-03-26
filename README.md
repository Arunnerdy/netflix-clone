# Netflix Clone 

## Project Description
A responsive Netflix clone built with **React** using locally stored movie data. This project replicates Netflix's core UI/UX with additional features like theme toggling and favorites management.

### Key Features: 
- **Local Movie Database**  
  - Movie details and posters stored locally (no API needed).  
- **Advanced Filtering**  
  - Filter movies by **genre** or **search by name**.  
- **Theme Toggle**   
  - Switch between **light** and **dark** mode.  
- **Favorites System**   
  - Add/remove movies from your favorites section.  
- **Responsive Design**  
  - Works on all devices (desktop, tablet, mobile).

### Why This Project?  
- No external API dependencies.  
- Custom features beyond the original Netflix UI.  
- Ideal for portfolios (demonstrates React skills + UI/UX design).
### Live Demo  
Project link deployed on the Netlify [Netflix Clone Demo](https://teal-boba-0b87cc.netlify.app/)

## Prerequisites

Before running the project, ensure you have these installed:

| Requirement       | Installation Guide | Verification Command |
|-------------------|--------------------|----------------------|
| **Node.js** (v16+) | [Download Node.js](https://nodejs.org/) | `node -v` |
| **npm** (v8+) or **Yarn** | Comes with Node.js<br>or `npm install -g yarn` | `npm -v` or `yarn -v` |
| **Git** | [Install Git](https://git-scm.com/) | `git --version` |

### System Requirements
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: 500MB+ free space
- **OS**: Windows/macOS/Linux (64-bit)

## **Tools & Technologies Used**

| Category          | Technologies |
|-------------------|-------------|
| **Frontend**      | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) |
| **State Management** | ![React Context API](https://img.shields.io/badge/Context_API-61DAFB?style=flat&logo=react&logoColor=white) |
| **Icons**         |  ![Lucide](https://img.shields.io/badge/Lucide-FF6B00?style=flat) |
| **Deployment**    | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white) |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) |
| **Code Editor**   | ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?logo=visual-studio-code&logoColor=white) 

## 🏗️ Code Structure


src/
├── assets/               # Static assets (logos, placeholder images)
├── components/           # Reusable UI components
│   ├── MovieCard/        # Individual movie component
│   ├── Navbar/           # Navigation bar
│   |
|   └── ThemeToggle/      # Dark/Light mode switch
├── constants/            # Application constants
│   └── themes.js         # Theme configurations
├── context/              # React context providers
│   └── ThemeContext.js   # Theme management
├── data/                 # Local movie database
│   └── movies.json       # Movie dataset
├── pages/                # Route-level components
│   ├── Favorites.jsx     # Favorites page
│   └── Home.jsx          # Main browse page
├── styles/               # CSS files
│   ├── bootstrap/        # Custom Bootstrap overrides
│   └── App.css           # Global styles
└── App.jsx               # Root component


## Screenshots
### Home Page in Dark Mode
![Home Page in Dark Mode](screenshots/darkmode.png)
### Home Page in Light Mode 
![Home Page in Light Mode](screenshots/lightmode.png)
