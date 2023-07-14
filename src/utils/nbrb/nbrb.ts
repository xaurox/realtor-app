import axios from "axios";
import { RateType } from "./types/nbrb-rate.types";
import { CurrencyType } from "./types/nbrb-currency.types";

export const getTodaysRates = async () => {
  const ratesUrl = "https://api.nbrb.by/exrates/rates?periodicity=0";

  const response = await axios.get<RateType[]>(ratesUrl);

  return response.data;
};

export const getCurrencies = async () => {
  const currenciesUrl = "https://api.nbrb.by/exrates/currencies";

  const response = await axios.get<CurrencyType[]>(currenciesUrl);

  return response.data;
};

export const getCurrency = async (currencyId: number) => {
  const currencyUrl = `https://api.nbrb.by/exrates/currencies/${currencyId}`;

  const response = await axios.get<CurrencyType>(currencyUrl);

  return response.data;
};
