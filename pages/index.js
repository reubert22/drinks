import { useEffect, useState } from "react";
import Link from "next/link";
import { listByAlcoholic } from "../containers/cocktail/service.ts";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [isAlcoholic, setIsAlcoholic] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await listByAlcoholic(isAlcoholic);
      setCocktails(response);
    };
    getList();
  }, [isAlcoholic]);

  return (
    <div className={styles.container}>
      <div className={styles.top_header}>
        <div className={styles.container_menu_search}></div>
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
      <div className={styles.container_cocktail}>
        <div className={styles.flex}>
          {cocktails.map((cocktail) => (
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
        </div>
      </div>
    </div>
  );
}
