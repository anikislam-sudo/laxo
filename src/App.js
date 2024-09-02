import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Product from './Product/Product';





function App() {
  return (
    <div className="min-h-screen w-full">
        <Provider store={store}>
     <Navbar></Navbar>
     <Product></Product>
     </Provider>
    </div>
  );
}

export default App;
