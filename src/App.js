import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user", user);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
