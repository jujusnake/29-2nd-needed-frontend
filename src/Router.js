import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import JobList from './pages/JobList/JobList';
import Resume from './pages/Resume/Resume';
import ResumeDocuments from './pages/Resume/Components/ResumeDocuments';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recruitments" element={<JobList />} />
        <Route path="/recruitments/:category" element={<JobList />} />
        <Route
          path="/recruitments/:category/:subcategory"
          element={<JobList />}
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/newresume" element={<ResumeDocuments />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
