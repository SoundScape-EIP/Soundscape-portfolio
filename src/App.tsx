import './App.css'
import Navbar from './components/Navbar/Navbar'
import { HomeSection, EventsSection, ShopSection, ContactSection } from './components/Sections'
import './styles/ScrollSnap.css'


function App() {
  return (
    <main>
      <Navbar />
      <section className="scroll-container">
        <HomeSection />
        <EventsSection />
        <ShopSection />
        <ContactSection />
      </section>
    </main>
  )
}

export default App
