import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CountersContainer from '../containers/CountersContainer';
import Page404 from '../components/Page404';
import AboutPage from '../components/AboutPage';
import Layout from '../components/Layout';

const basename =
  process.env.NODE_ENV === 'production'
    ? '/TraineeReact'
    : '/';

const AppRoutes = () => (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<div>страница не выбрана.</div> } />
            <Route path="about" element={<AboutPage />} />
            <Route path="counters" element={<CountersContainer />} />
        </Route>

        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace/>} />
      </Routes>
    </BrowserRouter>
);

export default AppRoutes;