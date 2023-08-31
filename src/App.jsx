import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
