import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
     
        <PageRoutes />
        <Toaster />
     
    </>
  );
}

export default App;
