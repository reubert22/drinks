import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { listDetails } from "../../../containers/cocktail/service.ts";
import styles from "../../../styles/Details.module.scss";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      console.log(id);
      const response = await listDetails(id);
      setDetails(response);
    };
    if (id) getDetails();
  }, [id]);

  return (
    <div className={styles.container}>
      {details.map((cocktail) => (
        <div
          className={styles.container_cocktail}
          key={`cocktail-${cocktail.idDrink}`}
        >
          <div className={styles.cocktail_img}>
            <Image
              className="avatar"
              alt={cocktail.strDrink}
              src={cocktail.strDrinkThumb}
              layout="responsive"
              width={500}
              height={500}
            />
            <style jsx global>{`
              .avatar {
                height: 300px;
                border-bottom-left-radius: 45px;
                border-bottom-right-radius: 45px;
              }
            `}</style>
          </div>
          <div className={styles.cocktail_info}>
            <span className={styles.strDrink}>{cocktail.strDrink}</span>
            <h3>Category: </h3>
            <p>{cocktail.strCategory}</p>
            <h3>Alcoholic: </h3>
            <p>{cocktail.strAlcoholic}</p>
            <h3>Glass: </h3>
            <p>{cocktail.strGlass}</p>
            <h3>Instructions: </h3>
            <p>{cocktail.strInstructions}</p>

            <div>
              <h1>Ingredients</h1>
              <p>
                ({cocktail.strMeasure1}): {cocktail.strIngredient1}
              </p>
              <p>
                ({cocktail.strMeasure2}): {cocktail.strIngredient2}
              </p>
              <p>
                ({cocktail.strMeasure3}): {cocktail.strIngredient3}
              </p>
              <p>
                ({cocktail.strMeasure4}): {cocktail.strIngredient4}
              </p>
              <p>
                ({cocktail.strMeasure5}): {cocktail.strIngredient5}
              </p>
              <p>
                ({cocktail.strMeasure6}): {cocktail.strIngredient6}
              </p>
              <p>
                ({cocktail.strMeasure7}): {cocktail.strIngredient7}
              </p>
              <p>
                ({cocktail.strMeasure8}): {cocktail.strIngredient8}
              </p>
              <p>
                ({cocktail.strMeasure9}): {cocktail.strIngredient9}
              </p>
              <p>
                ({cocktail.strMeasure10}): {cocktail.strIngredient10}
              </p>
              <p>
                ({cocktail.strMeasure11}): {cocktail.strIngredient11}
              </p>
              <p>
                ({cocktail.strMeasure12}): {cocktail.strIngredient12}
              </p>
              <p>
                ({cocktail.strMeasure13}): {cocktail.strIngredient13}
              </p>
              <p>
                ({cocktail.strMeasure14}): {cocktail.strIngredient14}
              </p>
              <p>
                ({cocktail.strMeasure15}): {cocktail.strIngredient15}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
