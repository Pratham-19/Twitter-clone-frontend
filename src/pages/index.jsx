import MainPage from "./MainPage/MainPage";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import Login from "./Login";
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
      </Routes>
    </BrowserRouter>
  );
};
export default Index;
