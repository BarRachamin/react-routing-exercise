import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  AboutPage,
  ContactUsPage,
  GamesPage,
  MoviesPage,
  NotFoundPage,
  HomePage,
} from "./Pages";

import "./App.css";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

export const App = () => {
  return (
    <>
      <SidebarComponent />

      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="contactus" element={<ContactUsPage />}></Route>
        <Route path="/games" element={<GamesPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
