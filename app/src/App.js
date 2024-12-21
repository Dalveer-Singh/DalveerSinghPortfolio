import logo from "./assets/images/logo.svg";
import "./App.css";
import LinkedInProfileBadge from "./components/LinkedinProfile";
import "./components/style/banner.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* Full-width WIP Banner */}
        <div className="wip-banner">
          <p>🚧 Work in Progress 🚧</p>
        </div>

        <LinkedInProfileBadge />
      </header>
    </div>
  );
}

function reportIssue() {
  // floating button on bottom right
}

function contact() {
  // form, email, contact, whatsapp QR
  // floating button on bottom right
}

export default App;
