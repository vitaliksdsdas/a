import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./pages/routing";

const App = () => <RouterProvider router={router} />;
export default App;

