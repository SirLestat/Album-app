import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Albums from "./pages/Albums";
import { Photos } from "./pages/Photos";
import Users from "./pages/Users";

export const Router = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/albums" element={<Albums />} />
          <Route path="/:userId/albums/photos/:albumId" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};
