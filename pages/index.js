import { useEffect, useState } from "react";
import Link from "next/link";
import { listByAlcoholic } from "../containers/cocktail/service.ts";
import styles from "../styles/Home.module.scss";
import { Loading } from "../components/shared/Loading/Loading.tsx";

export default function Home() {
  const [isAlcoholic, setIsAlcoholic] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      const response = await listByAlcoholic(isAlcoholic);
      setCocktails(response);
      setIsLoading(false);
    };
    getList();
  }, [isAlcoholic]);

  return (
    <div className={styles.container}>
      <div className={styles.top_header}>
        <div className={styles.container_menu_search}>
          <img
            className={styles.icon}
            src="/icon-192x192.png"
            width="120"
            height="120"
          />
          <div className={styles.left_icons}>
            <div className={styles.search} />
            <div className={styles.menu} />
          </div>
        </div>
        <div className={styles.divisor} />
        <div className={styles.container_title}>
          <span className={styles.first_title}>Drinks</span>
          <span className={styles.second_title}>Information</span>
        </div>
        <div className={styles.container_filters}>
          <button
            className={`${styles.btn} ${isAlcoholic ? styles.active : ""}`}
            onClick={() => setIsAlcoholic(true)}
          >
            Alcoholic
          </button>
          <button
            className={`${styles.btn} ${!isAlcoholic ? styles.active : ""}`}
            onClick={() => setIsAlcoholic(false)}
          >
            Non Alcoholic
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className={styles.container_loading}>
          <Loading />
        </div>
      ) : (
        <div className={styles.container_cocktail}>
          <div className={styles.flex}>
            {cocktails.slice(0, 20).map((cocktail) => (
              <Link href={`/cocktail/${cocktail.idDrink}/details`}>
                <div className={styles.cocktail}>
                  <div className={styles.container_img}>
                    <img
                      className={styles.img}
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                      width="120"
                      height="120"
                    />
                  </div>
                  <span className={styles.name}>{cocktail.strDrink}</span>
                </div>
              </Link>
            ))}
            <div className={styles.more}>
              <div className={styles.circle}>
                <span>&#8594;</span>
              </div>
              <span>See all</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
