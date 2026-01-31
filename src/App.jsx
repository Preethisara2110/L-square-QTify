import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './screen/Home'
import { BrowserRouter } from 'react-router'
import Navigation from './navigation/Navigation'
import Details from './screen/Details'
import Navbar from './component/Navbar'
import Search from './component/Search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

    <div className=' flex flex-col'  style={{backgroundColor: 'var(--color-black)'}}>

        {/* <Header>
            <Search />
        </Header> */}
        <Navbar />

<Navigation />
   
 
    </div>
    </BrowserRouter>
  )
}

export default App