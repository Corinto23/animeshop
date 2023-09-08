import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Manga from "./components/Manga";
import Anime from "./components/Anime";
import Merchandise from "./components/Merchandise";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <div className="flex flex-col h-screen bg-whitesmoke pt-16">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="manga" element={<Manga />} />
          <Route path="anime" element={<Anime />} />
          <Route path="merchandise" element={<Merchandise />} />
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
