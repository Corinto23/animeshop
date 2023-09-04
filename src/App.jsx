import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Manga from "./assets/components/Manga";
import Anime from "./assets/components/Anime";
import Merchandise from "./assets/components/Merchandise";
import Footer from "./assets/components/Footer";
import { CartProvider } from "./assets/components/CartContext";
import CheckOut from "./assets/components/CheckOut";

function App() {
  return (
    <div className="flex flex-col h-screen bg-whitesmoke pt-16">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
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
