import Header from "../../components/header/header.component";

import styles from "./account-page.module.scss";

const { accountPage } = styles;

const AccountPage = () => {
  return (
    <div className={accountPage}>
      <Header />
    </div>
  );
};

export default AccountPage;
