import FullScreenSection from './FullScreenSection';
import './common.css';
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
      </div>
    </FullScreenSection>
  );
}
