import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Eventpage from "./components/EventPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events/:id" element={<Eventpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
