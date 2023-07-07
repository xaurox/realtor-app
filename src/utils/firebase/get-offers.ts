import { ref, child, get } from "firebase/database";

import { database } from "./firebase";

import {
  OfferInfo,
  OfferType,
} from "../../pages/offers-page/offers-page.component";

export const transformRawData = (rawData: OfferInfo): OfferType[] => {
  const data: OfferType[] = [];

  for (const [key, value] of Object.entries(rawData)) {
    data.push({ id: key, offerInfo: value });
  }

  return data;
};
