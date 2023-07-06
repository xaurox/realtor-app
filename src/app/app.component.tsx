import { Navigate, Route, Routes } from "react-router-dom";

import "./app.module.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/">
        {/* Routes available for non-authorized users */}
        <Route path="offers" />
        <Route path="offer/:offerId" />
        <Route path="login" />
        <Route path="not-found" />

        {/* Routes available to authorize users */}
        <Route path="account" />
        <Route path="create-offer" />

        {/* Redirects */}
        <Route path="" element={<Navigate to="/offers" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
