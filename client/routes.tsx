import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    {/* <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} /> */}
  </Route>
)
