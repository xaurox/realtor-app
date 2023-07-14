import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ref as refDatabase, get, child } from "firebase/database";
import { ref as refStorage, getDownloadURL } from "firebase/storage";

import { storage, database } from "../../utils/firebase/firebase";

import Header from "../../components/header/header.component";

import { OfferInfo } from "../offers-page/offers-page.component";

import styles from "./offer-page.module.scss";

const { offerPage, offerPage__container, offerPage__photos, photo } = styles;

const OfferPage = () => {
  const { offerId } = useParams();

  const [offerData, setOfferData] = useState<OfferInfo>({} as OfferInfo);
  const [urls, setUrls] = useState<string[]>([]);
  const [uniqueUrls, setUniqueUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dbRef = refDatabase(database);

    get(child(dbRef, `offers/${offerId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setOfferData(snapshot.val());
        } else {
          throw new Error("No data.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (offerData?.photos && offerData.photos.length > 0) {
      const photoUrls: string[] = [];

      offerData.photos.forEach((photo) => {
        getDownloadURL(refStorage(storage, `images/${photo}`))
          .then((url) => {
            console.log(typeof url);
            photoUrls.push(url);
            console.log(`photoUrls: ${photoUrls}`);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }, [offerData]);

  return (
    <div className={offerPage}>
      <Header />
      <div className={offerPage__container}>
        <div className={offerPage__photos}>
          {uniqueUrls.length > 0
            ? uniqueUrls.map((url, index) => (
                <div className={photo} key={index}>
                  <img src={url} alt="property photo" />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
