import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import  Footer  from "./Component/Footer";
import Login from "./Component/Login";
import Food from "./Component/Food";
import './assests/common.css';
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <Header />
      <div className="AppParent"> 
    <Routes> 
      {/* <Route path="/" element={< Footer />} /> */}
      <Route path="/login" element={< Login />} />
      <Route path="/food" element={ <Food />} />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
