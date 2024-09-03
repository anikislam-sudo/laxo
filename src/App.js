import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import HeroSection from "./components/HeroSection/HeroSection";
import Hero from "./components/HeroSection/Hero";
import ProductPage from "./components/productCard/ProductPage";
import ReviewsComponent from "./components/Reviews/ReviewsComponent";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Provider store={store}>
        <Navbar></Navbar>
        <Product></Product>
        <HeroSection></HeroSection>
        <Hero></Hero>
        <ProductPage></ProductPage>
        <ReviewsComponent></ReviewsComponent>
        <Banner></Banner>
        <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App;
