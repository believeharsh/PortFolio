import { PortfolioProvider } from './context/portfolioContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
// import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GitHubActivity from './components/GithubActivity';
import ImageGallery from './components/ImageGallary';
import { sampleGalleryImages } from './components/ImageGallary';
function App() {
  return (
    <PortfolioProvider>
      <div className="bg-bg-primary">
        <Navigation />
        <main>
          <Hero />
          <Experience />
          {/* <Skills /> */}
          <Projects />
          <ImageGallery images={sampleGalleryImages} title=''/>
          <GitHubActivity/>
          <Contact />
        </main>
      </div>
    </PortfolioProvider>
  );
}

export default App;