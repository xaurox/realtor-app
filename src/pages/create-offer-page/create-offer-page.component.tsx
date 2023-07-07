import Header from "../../components/header/header.component";
import CreateOfferForm from "../../layouts/create-offer-form/create-offer-form.component";

import styles from "./create-offer-page.module.scss";

const { createOfferPage } = styles;

const CreateOfferPage = () => {
  return (
    <div className={createOfferPage}>
      <Header />
      <CreateOfferForm />
    </div>
  );
};

export default CreateOfferPage;
