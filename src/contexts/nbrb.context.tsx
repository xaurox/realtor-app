import React, { createContext, useState } from "react";

import { RateType } from "../utils/nbrb/types/nbrb-rate.types";
import { CurrencyType } from "../utils/nbrb/types/nbrb-currency.types";

interface NbrbType {
  rates: RateType[];
  setRates: React.Dispatch<React.SetStateAction<RateType[]>>;
  currencies: CurrencyType[];
  setCurrencies: React.Dispatch<React.SetStateAction<CurrencyType[]>>;
}

export const NbrbContext = createContext({} as NbrbType);

export const NbrbProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [rates, setRates] = useState<RateType[]>([]);
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);

  const value: NbrbType = {
    rates,
    setRates,
    currencies,
    setCurrencies,
  };

  return <NbrbContext.Provider value={value}>{children}</NbrbContext.Provider>;
};
