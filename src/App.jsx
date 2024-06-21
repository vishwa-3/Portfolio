import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import ToggleButtonCode from "./Components/ToggleButtonCode"

function App() {
  return (
    <div>
      <ToggleButtonCode/>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
