import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Route />
        </BrowserRouter>
      </div>
    </>
  );
}