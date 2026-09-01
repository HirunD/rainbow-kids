import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./components/Layout";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";
import CurriculumPage from "./screens/CurriculumPage";
import EventsPage from "./screens/EventsPage";
import GalleryPage from "./screens/GalleryPage";
import ReviewsPage from "./screens/ReviewsPage";
import BlogPage from "./screens/BlogPage";
import BlogPostPage from "./screens/BlogPostPage";
import GetInvolvedPage from "./screens/GetInvolvedPage";
import ContactPage from "./screens/ContactPage";
import NotFoundPage from "./screens/NotFoundPage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 60, easing: "ease-out-cubic" });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
