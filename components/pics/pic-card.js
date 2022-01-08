import Image from "next/image";
import Link from "next/link";
import styles from "./pic-card.module.css";
const myLoader = ({ src }) => {
  return `https://picsum.photos/id/${src}/384/336`;
};
function PicCard(props) {
  const { id, author, index } = props;
  const picLink = `/list/${id}`;
  return (
    <li key={id} className={styles.item}>
      <span className={styles.numberBox}>{`#${index + 1}`}</span>
      <Image
        priority
        loader={myLoader}
        src={id}
        alt="another pic without alt"
        layout="responsive"
        width={384}
        height={336}
      />
      <div className={styles.author}>
        <Link href={picLink}>
          <a className={styles.authorLink}>{author}</a>
        </Link>
      </div>
    </li>
  );
}

export default PicCard;
