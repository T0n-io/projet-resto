import { Route, Routes } from "react-router";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/Order/OrderPage";
import ErrorPage from "./components/pages/Error/ErrorPage";
import ToastAdmin from "./components/pages/Nav/ToastAdmin";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  return (
    <>
    <ToastAdmin />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}

export default App;
