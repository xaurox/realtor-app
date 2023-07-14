import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ref, getDownloadURL } from "firebase/storage";

import { storage } from "../../utils/firebase/firebase";

import { OfferCardProps } from "./offer-card.types";

import background from "../../assets/home-background.png";

import styles from "./offer-card.module.scss";

const {
  offerCard,
  offerCard__image,
  offerCard__description,
  description,
  description__type,
  description__price,
  description__rooms,
  description__address,
  rooms,
  rooms__item,
  rooms__value,
  rooms__text,
} = styles;

const OfferCard: React.FC<OfferCardProps> = (props) => {
  const { id, image, type, price, address } = props;

  const navigate = useNavigate();

  const [url, setUrl] = useState("");

  const offerCardRedirect = () => {
    navigate(`/offer/${id}`, {
      replace: true,
    });
  };

  useEffect(() => {
    getDownloadURL(ref(storage, `images/${image}`))
      .then((url) => {
        setUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={offerCard} onClick={offerCardRedirect}>
      <div className={offerCard__image}>
        <img src={url || background} alt="house photo" />
      </div>
      <div className={`${offerCard__description} ${description}`}>
        <div className={description__type}>{type}</div>
        <div className={description__price}>{price}</div>
        <div className={`${description__rooms} ${rooms}`}>
          <div className={rooms__item}>
            <span className={rooms__value}>3 </span>
            <span className={rooms__text}>rooms</span>
          </div>
          <div className={rooms__item}>
            <span className={rooms__value}>1 </span>
            <span className={rooms__text}>bath</span>
          </div>
          <div className={rooms__item}>
            <span className={rooms__value}>230 </span>
            <span className={rooms__text}>
              m<sup>2</sup>
            </span>
          </div>
        </div>
        <div className={description__address}>{address}</div>
      </div>
    </div>
  );
};

export default OfferCard;
