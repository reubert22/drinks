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
          <button onClick={() => setIsAlcoholic(true)} disabled={isAlcoholic}>
            Alcoholic
          </button>
          <button onClick={() => setIsAlcoholic(false)} disabled={!isAlcoholic}>
            Non Alcoholic
          </button>
        </div>
      </div>
      <div className={styles.container_cocktail}>
        {cocktails.map((cocktail) => (
          <div key={`cocktail-${cocktail.idDrink}`} className={styles.cocktail}>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width="120"
              height="120"
            />
            <Link href={`/cocktail/${cocktail.idDrink}/details`}>
              <a>Name: {cocktail.strDrink}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
