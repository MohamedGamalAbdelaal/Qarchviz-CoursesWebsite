import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./pages/Layout/Layout";
import Loading from "./components/Loading/Loading";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
import Courses from './pages/Courses/Courses';
import SingleCourse from './pages/SingleCourse/SingleCourse';
import Getstarted from "./pages/Getstarted/Getstarted";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="courses" element={<SingleCourse/>} />
            <Route path="getstarted" element={<Getstarted/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
