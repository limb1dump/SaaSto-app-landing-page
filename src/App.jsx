import { Analytics, Features, Footer, Header, Offer, Overview, Partners, Pricing, Testimonial } from './containers';
import { Navbar } from './components';
import './App.scss';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Features />
      <Analytics />
      <Overview />
      <Pricing />
      <Partners />
      <Testimonial />
      <Offer />
      <Footer />
    </div>
  )
}

export default App
