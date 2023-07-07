import { useEffect, useState } from "react";

import { get, child, ref } from "firebase/database";

import { database } from "../../utils/firebase/firebase";

import OfferCard from "../../layouts/offer-card/offer-card.component";

import { transformRawData } from "../../utils/firebase/get-offers";

import styles from "./offers-page.module.scss";

const { offersPage__container } = styles;

export interface OfferInfo {
  address: string;
  area: number;
  description: string;
  id: string;
  numberOfRooms: number;
  photos: string[];
  price: number;
  propertyType: string;
}

export interface OfferType {
  id: string;
  offerInfo: OfferInfo;
}

const OffersPage = () => {
  const [offersData, setOffersData] = useState<OfferType[]>([]);

  useEffect(() => {
    let data: OfferType[] = [];

    const dbRef = ref(database);

    get(child(dbRef, "offers/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          data = transformRawData(snapshot.val());
          setOffersData(data);
        } else {
          throw new Error("No data.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={offersPage__container}>
      {offersData.map((offer: OfferType, index) => {
        const { id, price, address, propertyType, photos } = offer.offerInfo;

        return (
          <OfferCard
            key={index}
            price={price}
            address={address}
            type={propertyType}
            image={photos[0]}
          />
        );
      })}
    </div>
  );
};

export default OffersPage;
