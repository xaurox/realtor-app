import { useEffect, useState } from "react";

import { get, child, ref } from "firebase/database";

import { database } from "../../utils/firebase/firebase";

import Header from "../../components/header/header.component";
import OfferCard from "../../layouts/offer-card/offer-card.component";

import { transformRawData } from "../../utils/firebase/get-offers";

import styles from "./offers-page.module.scss";

const { offersPage, offersPage__container } = styles;

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
    <div className={offersPage}>
      <Header />
      <div className={offersPage__container}>
        {offersData.map((offer: OfferType, index) => {
          const { id } = offer;
          const { price, address, propertyType, photos } = offer.offerInfo;

          return (
            <OfferCard
              id={id}
              key={index}
              price={price}
              address={address}
              type={propertyType}
              image={photos[0]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OffersPage;
