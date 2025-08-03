import FullScreenSection from './FullScreenSection';
import './common.css';
import { Link } from 'react-router-dom';
const message = 'Coming soon...';
export default function Construction() {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <div className="construction">
        <img
          src="/construction.jpeg"
          alt="Page under construction"
          className="photo-img"
        />
        <p className="greeting">{message}</p>
        <Link to="/" className="link">
          Go to Home
        </Link>
      </div>
    </FullScreenSection>
  );
}
