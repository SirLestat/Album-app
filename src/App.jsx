import { CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Albums from "./pages/Albums";

function App() {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="Albums" element={<Albums />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
