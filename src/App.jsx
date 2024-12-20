import Navigation from './customer/component/navigation/Navigation'
import './App.css'
import { Footer } from './customer/component/Footer/Footer'
// import Product  from './customer/component/Product/product'
import { ProductDetails } from './customer/component/productDetails/productDetails'
function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      <ProductDetails/>

        {/* <Product/> */}
        {/* <Homepage/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default App
