import { Fragment } from "react";
import PicCard from "./pic-card";
import styles from "./pic-list.module.css";

function PicList(props) {
  const { picsList } = props;
  return (
    <Fragment>
      <ul className={styles.list}>
        {picsList.map((pic, index) => (
          <PicCard key={pic.id} id={pic.id} author={pic.author} index={index} />
        ))}
      </ul>
    </Fragment>
  );
}

export default PicList;
