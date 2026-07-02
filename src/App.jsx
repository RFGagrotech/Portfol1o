import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from"./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./layouts/style.scss";

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