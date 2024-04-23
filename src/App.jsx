import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <PageRoutes />
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
