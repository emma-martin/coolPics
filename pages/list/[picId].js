import Image from "next/image";
import { useRouter } from "next/router";
const myLoader = ({ src, width, height }) => {
  return `https://picsum.photos/id/${src}/${width}/${height || 267}`;
};
function DetailPage() {
  const router = useRouter();
  const picId = router.query.picId;
  if (!picId) {
    return <p>No pic found!</p>;
  }
  return (
    <div>
      <h1>Image Selected</h1>
      <Image
        loader={myLoader}
        src={picId}
        alt="another pic without alt"
        width={384}
        height={336}
      />
    </div>
  );
}

export default DetailPage;
