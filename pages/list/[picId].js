import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/detail-page.module.css";
const myLoader = ({ src }) => {
  return `https://picsum.photos/id/${src}/384/336`;
};
function DetailPage() {
  const router = useRouter();
  const picId = router.query.picId;
  if (!picId) {
    return <p>No pic found!</p>;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Image Selected</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.img}>
          <Image
            loader={myLoader}
            src={picId}
            alt="another pic without alt"
            layout="responsive"
            width={384}
            height={336}
          />
        </div>
        <div className={styles.square}></div>
      </main>
    </div>
  );
}

export default DetailPage;
