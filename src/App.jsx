import { useState, useEffect } from 'react'

// PAGES
import { HomePage } from './pages/homepage.jsx';
import { ResumePage } from './pages/resumepage.jsx';
import { ContactPage } from './pages/contactpage.jsx';

// ELEMENTS THAT ARE IN EVERY PAGE
import { Navbar } from './components/navbar.jsx';
import { Footer } from './components/footer.jsx';

// CSS IMPORT
import './style-tricsy.css';
import './style-danny.css';

function App() {
  
  const [currentPage, setCurrentPage] = useState("homepage");
  
  useEffect(() => {
    // requestAnimationFrame forces the browser to wait until the 
    // new page elements are drawn before running the scroll logic
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    });
  }, [currentPage]); 
  
  return (
      <div id="App">

        {/* NAVBAR IS IN ALL PAGES */}
        <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        
        {/* HOMEPAGE */}
        {currentPage === "homepage" && 
          (<HomePage currentPage={currentPage} setCurrentPage={setCurrentPage} />)
        }
        
        {/* RESUME PAGE */}
        {currentPage === "resumepage" && 
          (<ResumePage currentPage={currentPage} setCurrentPage={setCurrentPage} />)
        }
        
        {/* CONTACT PAGE */}
        {currentPage === "contactpage" && 
          (<ContactPage currentPage={currentPage} setCurrentPage={setCurrentPage} />)
        }
        
        {/* FOOTER IS IN ALL PAGES */}
        <Footer setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        
      </div>
    )
}

export default App
