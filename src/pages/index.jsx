import MainPage from "./MainPage/MainPage";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import Login from "./Login";
import Congo from "./congo";
import ProtectedRoute from "../components/ProtectedRoutes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>,
          ]}
        />

        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/congo"
          element={[
            <ProtectedRoute>
              <Congo />
            </ProtectedRoute>,
          ]}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Index;
