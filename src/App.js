import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, useNavigate, Router, Navigate } from 'react-router-dom';

import PostDetails from './components/PostDetails/postDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreateorTag/CreateOrTag';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate()
  console.log(user)
  return (
    // <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/posts" />} />
        <Route path="/posts" exact element={<Home />} />
        <Route path="/posts/search" exact element={<Home />} />
        <Route path="/posts/:id" exact element={<PostDetails />} />
        {/* <Route path={['/creators/:name', '/tags/:name']} element={<CreatorOrTag />} /> */}
        <Route path={'/creators/:name'} element={<CreatorOrTag />} />
        <Route path={'/tags/:name'} element={<CreatorOrTag />} />
        <Route path="/auth" exact element={
          // () => (!user ?
          <Auth />
          // : <Navigate replace to="/posts" />
          // )
        }
        />
      </Routes>
    </Container>
    // </BrowserRouter>
  );
};

export default App;