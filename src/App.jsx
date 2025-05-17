import "./App.css";
import Footer from "./components/Footer";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import SignUp from "./components/SignUp";
import Slider from "./components/Slider";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Slider />
              <ProductionHouse />
              <GenreMovieList />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;