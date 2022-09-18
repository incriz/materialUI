import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { About } from "./About";

import { NotFound } from "./NotFound";
import "./App.css";
import {HomePage} from "./HomePage";

function App(props) {
  console.log(props)
  return (
    <Container sx={{ marginTop: 5 }} maxWidth="md">
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
