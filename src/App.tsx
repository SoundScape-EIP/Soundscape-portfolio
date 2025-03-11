import './App.css'
import Navbar from './components/Navbar/Navbar'
import { HomeSection, EventsSection, ShopSection, ContactSection } from './components/Sections'
import './styles/ScrollSnap.css'


function App() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <EventsSection />
      <ShopSection />
      <ContactSection />
    </main>
  )
}

export default App
