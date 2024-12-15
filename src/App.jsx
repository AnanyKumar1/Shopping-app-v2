import Navigation from './customer/component/navigation/Navigation'
import './App.css'
import { Footer } from './customer/component/Footer/Footer'
import { Product } from './customer/component/Product/product'
// import Homepage from './customer/Pages/Homepage/Homepage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <Product/>
        {/* <Homepage/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default App
