import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes/Routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
