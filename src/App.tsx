import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import backgroundImg from '@/assets/background.jpg';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col sm:flex-row">
        {/* LEFTSIDE */}
        <div
          className="relative top-0 w-full flex-shrink-0 sm:sticky sm:w-1/3"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <Profile />
        </div>

        {/* RIGHTSIDE */}
        <div className="flex-1 overflow-y-auto">
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
