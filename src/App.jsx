import RootLayout from "./Layout/RootLayout";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import NotFoundpage from "./pages/NotFoundpage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="*" element={<NotFoundpage/>}></Route>
      </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
