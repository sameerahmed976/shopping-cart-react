import "./style.css";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import { useGlobalContext } from "./Context";
function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <ShoppingCart />
    </>
  );
}

export default App;
