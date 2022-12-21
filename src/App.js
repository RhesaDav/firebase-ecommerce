import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Category from "./pages/Category";
import AddProduct from "./pages/AddProduct";
import Inbox from "./pages/Inbox";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/user" element={<User />} />
        <Route path="/category" element={<Category />} />
        <Route path="/inbox" element={<Inbox/>}/>
      </Routes>
    </div>
  );
}

export default App;
