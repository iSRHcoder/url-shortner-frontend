import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";
import ThemeProvider from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ThemeProvider>
        <PageRoutes />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
