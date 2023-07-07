import Header from "../../components/header/header.component";

import styles from "./not-found-page.module.scss";

const { notFoundPage } = styles;

const NotFoundPage = () => {
  return (
    <div className={notFoundPage}>
      <Header />
    </div>
  );
};

export default NotFoundPage;
