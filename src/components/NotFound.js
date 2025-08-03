import { Link } from 'react-router-dom';
import FullScreenSection from './FullScreenSection';
import './common.css';
export default function NotFound() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <h1 className="title">404 - Page Not Found</h1>
      <Link to="/" className="link">
        Go to Home
      </Link>
    </FullScreenSection>
  );
}
