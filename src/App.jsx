import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from"./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (    
    <>
      <Header />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;