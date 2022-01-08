import { Fragment, useEffect, useState } from "react";
import PicList from "../../components/pics/pic-list";
import Button from "../../components/ui/button";
import SearchBar from "../../components/ui/search-bar";
import styles from "../../styles/list-page.module.css";

export default function ListPage({ pics, headerLink }) {
  const [picsList, setPicsList] = useState(pics);
  const [pageNumber, setPageNumber] = useState(2);
  const [hasNextPage, setHasNextPage] = useState(headerLink);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(picsList);
  const [loading, setLoading] = useState(false);
  const loadNextPage = () => {
    getPicsList();
  };

  const getPicsList = () => {
    setLoading(true);
    setSearchQuery("");
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=9`)
      .then((res) => {
        const headerLink = res.headers.get("Link");
        setHasNextPage(!!headerLink.includes("next"));
        return res.json();
      })
      .then((response) => {
        const newPics = response;
        setPageNumber(++pageNumber);
        setPicsList([...picsList, ...newPics]);
        setLoading(false);
      });
  };
  useEffect(() => {
    function onChangeQuery() {
      if (searchQuery.length > 0) {
        const filteredPics = picsList.filter((pic) =>
          pic.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredResults([...filteredPics]);
      } else {
        setFilteredResults([...picsList]);
      }
    }
    onChangeQuery();
  }, [picsList, searchQuery]);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Random Images</h1>
        <SearchBar
          searchQuery={searchQuery}
          onChangeQuery={(event) => setSearchQuery(event.target.value)}
        />
      </header>
      <main className={styles.main}>
        <PicList picsList={filteredResults} />
        {(!!loading && <p>loading</p>) || hasNextPage ? (
          <Button onClick={loadNextPage}>{"Load more".toUpperCase()}</Button>
        ) : (
          <p>No more pages</p>
        )}
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=9");
  const pics = await res.json();
  const headerLink = res.headers.get("Link").includes("next");
  return {
    props: {
      pics,
      headerLink,
    },
  };
}
