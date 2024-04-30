import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LocalNews from "./pages/LocalNews.jsx";
import Sports from "./pages/Sports.jsx";
import Culture from "./pages/Culture.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/local-news" element={<LocalNews />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </Router>
  );
}

export default App;