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

## Code Structure
```
src/
│
├── api/ 
│ └── tmdb.js #functions to fetch movies from local storage
│
├── assets/ # Static assets (logos, images)
├── components/
│ ├── DialogBox.jsx # Modal/popup component
│ ├── Footer.jsx # Page footer
│ ├── GenreMovies.jsx # Genre-specific movie listings
│ ├── HeroBanner.jsx # Main featured content banner
│ ├── MovieCard.jsx # Individual movie thumbnail
│ ├── MovieDetails.jsx # Expanded movie information
│ ├── MovieRow.jsx # Horizontal movie list
│ ├── NavBar.jsx # Navigation header
│ └── SearchResult.jsx # Search results display
│
├── context/ # React context
│ └── ThemeContext.jsx # Theme management
│
├── data/ # Local database
│ └── movies.json # Movie dataset
│
├── pages/ # Route-level components
│ ├── Favorites.jsx # Favorites page
│ └── Home.jsx # Main browse page
│
├── App.jsx # Root component
└── main.jsx # Application entry point
```

## Coding Standards & Best Practices

### Component Design
- All components are built as functional components using React hooks
- Follow the Single Responsibility Principle (one primary function per component)
- Reuse common components across different views
- Use descriptive and consistent naming conventions for components
- Implement container/presentational pattern where appropriate

### State Management
- Use useState for local component state management
- Leverage Context API for global theme management
- Persist user preferences using localStorage
- Always include cleanup functions for effects and subscriptions
- Keep business logic separate from UI components

### Props Handling
- Validate all props using PropTypes
- Provide sensible default values for optional props
- Maintain consistent prop naming conventions
- Destructure props at the component declaration
- Document expected prop types and shapes

### Performance
- Implement proper cleanup in useEffect hooks
- Use conditional rendering to optimize DOM updates
- Implement code splitting for route components
- Optimize image loading and assets

### Styling Approach
- Primary styling through Bootstrap utility classes
- Component-scoped styles using CSS modules
- Limited inline styles for dynamic values only
- Responsive layouts using Bootstrap's grid system
- Theme-aware styling with CSS variables

### Error Handling
- Use optional chaining for safe property access
- Implement comprehensive fallback UIs
- Handle runtime errors gracefully
- Provide clear user feedback for failures
- Validate data from external sources

### Code Organization
- Group related files by feature/domain
- Follow consistent file naming conventions
- Separate concerns through proper folder structure
- Maintain reasonable file size limits
- Keep related test files colocated
## UI/UX Guidelines
### Navigation Bar
Provides the Navigation to Home page, Favorites page, Filter by Genre options, Search movie by name and also toggle between themes.
![Navbar components](screenshots/Navbar.png)
### Home page in light mode 
![Home Page in Light Mode](screenshots/lightmode.png)
### Home page in Dark mode 
![Home Page in Dark Mode](screenshots/darkmode.png)
### Scroll buttons
![Scroll buttons](screenshots/scrollbars.png)
### Filter Results
![Filter Results](screenshots/FilterResult.png)
### Search Results
![Search Results](screenshots/SearchResults.png)
### Movie Details Page 
![Movie Details page](screenshots/Moviedetails.png)
### Dialog Box when Movie Added
![Dialog box movie added](screenshots/MovieAdded.png)
### Dialog when Movie Removed
![Dialog box movie removed](screenshots/MovieRemoved.png)
