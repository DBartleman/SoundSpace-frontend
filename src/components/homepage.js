import React from 'react';
import Navbar from "./components/navbar";
import Coverflow from "./components/coverflow";


export default function Homepage() {
  return (
    <Container component="main" maxWidth="xs">
      <Navbar />
      <Coverflow />
    </Container>
  );
}