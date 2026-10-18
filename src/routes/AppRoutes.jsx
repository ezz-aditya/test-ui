import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "../pages/Hero/Hero";
import Docs from "../pages/Docs/Docs";
import DocsLayout from "../pages/Docs/layout/DocsLayout";
import DocsPage from "../pages/Docs/DocsPage/DocsPage";
import Playground from "../pages/Playground/Playground";
import PageTitle from "./PageTitle";
import TypeScriptTest from "../pages/TypeScriptTest/TypeScriptTest";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/typescript-test" element={<TypeScriptTest />} />

        <Route element={<DocsLayout />}>
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/:slug" element={<DocsPage />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/playground/:slug" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
