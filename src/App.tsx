import './App.css'
// import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="content-wrapper">
            <div className="logo-container">
              <img src="/logo.png" alt="Soundscape Logo" className="hero-logo" />
            </div>
            <h1>soundscape.</h1>
            <p className="hero-description">
              Find, join, or organize music events effortlessly. Connect, live and enjoy.
            </p>
            <button className="cta-button">Join the waitlist</button>
          </div>
        </div>
      </section>

      {/* <section className="hero-grid">
        <div className="feature-card purple">
          <div className="feature-content">
            <h2>FIND EVENTS</h2>
            <span className="date">SOUNDSCAPE</span>
            <div className="silhouette discover"></div>
          </div>
        </div>

        <div className="feature-card green">
          <div className="feature-content">
            <h2>JOIN LIVE</h2>
            <span className="date">SOUNDSCAPE</span>
            <div className="silhouette join"></div>
          </div>
        </div>

        <div className="feature-card red">
          <div className="feature-content">
            <h2>ORGANIZE</h2>
            <span className="date">SOUNDSCAPE</span>
            <div className="silhouette organize"></div>
          </div>
        </div>

        <div className="feature-card yellow">
          <div className="feature-content">
            <h2>CONNECT</h2>
            <span className="date">SOUNDSCAPE</span>
            <div className="silhouette connect"></div>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default App
