import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:pid" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
