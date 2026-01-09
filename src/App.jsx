import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ProjectsPage } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ParkFlow" element={<ProjectsPage />} />
        {/*  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
