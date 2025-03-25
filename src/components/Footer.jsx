import { useTheme } from '../context/ThemeContext'; 
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Example social icons

const Footer = () => {
  const { darkMode } = useTheme(); // Get the current theme (darkMode)

  return (
    <footer
      className={`footer py-4 mt-5 ${darkMode ? 'footer-dark' : 'footer-light'}`}
      style={{
        backgroundColor: darkMode ? '#333' : '#f8f9fa',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <div className="container text-center">
        <div className="social-icons mb-3">
          <Facebook size={24} className="me-3" />
          <Twitter size={24} className="me-3" />
          <Instagram size={24} />
        </div>
        <p>&copy; {new Date().getFullYear()} Netflix Clone by ARUNPANDIAN K. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
