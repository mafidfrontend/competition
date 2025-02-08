import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./scss/main.scss";
import LogIn from "./Router/LogIn";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
