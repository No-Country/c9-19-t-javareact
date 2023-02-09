import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route > */}
        <Route path="/login" element={<Login />} />
        {/* </Route> */}
        <Route path="/" element={<Layout />}>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

{/* <div>
<Header />
<h1>Good Learner</h1>
</div> */}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
