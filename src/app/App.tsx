import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/Layout";
import { appRouts } from "./routes/appRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {appRouts.map(({ path, element }, key: number) => {
            return <Route key={key} path={path} element={element} />;
          })}
        </Route>
        <Route path="*" element={<Navigate to={"/not-found"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
