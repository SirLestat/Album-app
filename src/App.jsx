import { CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albums from "./pages/Albums";

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/:userId/albums" element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
