import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MyProjects } from './components/MyProjects';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Certifications />
      <MyProjects />
      <Footer />
    </>
  )
}

export default App