import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import Admin from "./components/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} exact />
        <Route path="/admin" element={<Admin />} exact />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
