import { BrowserRouter, Route, Routes } from "react-router";
import TypeScriptTest from "../pages/TypeScriptTest/TypeScriptTest";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TypeScriptTest />} />
      </Routes>
    </BrowserRouter>
  );
}

