import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./pages/Example";
import Deeplink from "./pages/Deeplink";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="Example/:source&:id&:name&:description"
          element={<Example />}
        />
        <Route
          path="Deeplink/:source&:id&:name&:description&:via"
          element={<Deeplink />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
