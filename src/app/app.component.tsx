import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { NbrbContext } from "../contexts/nbrb.context";

import OffersPage from "../pages/offers-page/offers-page.component";
import OfferPage from "../pages/offer-page/offer-page.component";
import LoginPage from "../pages/login-page/login-page.component";
import NotFoundPage from "../pages/not-found-page/not-found-page.component";
import AccountPage from "../pages/account-page/account-page.component";
import CreateOfferPage from "../pages/create-offer-page/create-offer-page.component";

import { getCurrencies, getTodaysRates } from "../utils/nbrb/nbrb";

import "./app.module.scss";

const App = () => {
  const { setRates, setCurrencies } = useContext(NbrbContext);

  useEffect(() => {
    console.log("rates");

    getTodaysRates()
      .then((data) => setRates(data))
      .catch((error) => {
        console.error(error);
        setRates([]);
      });
  }, []);

  useEffect(() => {
    console.log("currencies");

    getCurrencies()
      .then((data) => setCurrencies(data))
      .catch((error) => {
        console.error(error);
        setCurrencies([]);
      });
  }, []);

  return (
    <Routes>
      <Route path="/">
        {/* Routes available for non-authorized users */}
        <Route path="offers" element={<OffersPage />} />
        <Route path="offer/:offerId" element={<OfferPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="not-found" element={<NotFoundPage />} />

        {/* Routes available to authorize users */}
        <Route path="account" element={<AccountPage />} />
        <Route path="create-offer" element={<CreateOfferPage />} />

        {/* Redirects */}
        <Route path="" element={<Navigate to="/offers" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
