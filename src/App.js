import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthWrapper } from "./components/AuthWrapper";
import PrivateRoute from "./components/PrivateRoute";

import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Hairstyles from "./pages/Hairstyles";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

import SingleHairstyle from "./pages/SingleHairstyle";
import Staffs from "./pages/Staffs";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='staffs' element={<Staffs />} />
          <Route path='hairstyles' element={<Hairstyles />} />
          <Route path='hairstyles/:id' element={<SingleHairstyle />} />

          <Route
            path='cart'
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
