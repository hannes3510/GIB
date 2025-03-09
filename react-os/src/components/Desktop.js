import '../Desktop.css';

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="icons">
        <div className="icon">
          <div className="folder"></div>
          <span>Documents</span>
        </div>
        <div className="icon">
          <div className="folder"></div>
          <span>Pictures</span>
        </div>
      </div>
      
      <div className="taskbar">
        <button className="start-button">Start</button>
        <div className="system-tray">
          <span>ENG</span>
          <span>🕒 3:14 PM</span>
        </div>
      </div>
    </div>
  );
};

export default Desktop;