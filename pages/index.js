import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { listByAlcoholic } from "../containers/cocktail/service.ts";
import Link from "next/link";

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
      <div>
        Filter cocktails by
        <button onClick={() => setIsAlcoholic(true)} disabled={isAlcoholic}>
          Alcoholic
        </button>
        <button onClick={() => setIsAlcoholic(false)} disabled={!isAlcoholic}>
          Non Alcoholic
        </button>
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
