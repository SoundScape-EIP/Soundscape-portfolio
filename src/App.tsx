import './App.css'
import Navbar from './components/Navbar/Navbar'
import { HomeSection, AboutSection, EventsSection, WaitlisttSection } from './components/Sections'
import './styles/ScrollSnap.css'

function App() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <EventsSection />
      <WaitlisttSection />
    </main>
  )
}

export default App
