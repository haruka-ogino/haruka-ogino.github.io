import { Outlet } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Nav from './Nav'
import CV from './CV'
import { PDFDownloadLink } from '@react-pdf/renderer'

function App() {
  return (
    <div className="container">
      <Outlet />
      <Nav />
      <About />
      <Projects />
      <PDFDownloadLink document={<CV />} fileName="CV">
        {({ loading }) =>
          loading ? <button>Loading CV...</button> : <button>Download</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default App
