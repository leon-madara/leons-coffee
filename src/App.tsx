// App.tsx
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import OurCoffeeJourney from './components/HomePage/Our Coffee Journey/OurCoffeeJourney'
import FeaturedBlends from './components/HomePage/FeaturedBlends/FeaturedBlends'
import OurCoffeeHistory from './components/Our Coffee History/OurCoffeeHistory'
import Locations from './components/Locations/Locations'
import Events from './components/Events/Events'
import Customers from './components/Customers/Customers'
import ContactUs from './components/ContactsUs/ContactUs'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <FeaturedBlends />
            <OurCoffeeJourney />
          </>
        } />
        <Route path="/history" element={<OurCoffeeHistory />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/events" element={<Events />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  )
}

export default App