import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import FormContainer from '../components/FormContainer';
import Error from '../components/Error';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path=":id" element={<FormContainer />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;