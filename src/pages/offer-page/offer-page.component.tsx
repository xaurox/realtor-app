import Header from "../../components/header/header.component";

import styles from "./offer-page.module.scss";

const { offerPage } = styles;

const OfferPage = () => {
  return (
    <div className={offerPage}>
      <Header />
    </div>
  );
};

export default OfferPage;
