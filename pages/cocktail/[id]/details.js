import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { listDetails } from "../../../containers/cocktail/service.ts";
import styles from "../../../styles/Details.module.scss";
import { Ingredients } from "../../../components/Details/Ingredients/Ingredients.tsx";

const DetailsFirstSection = ({ label, info, className }) => (
  <div className={styles[className]}>
    <span>
      {label || ""}
      {info || ""}
    </span>
  </div>
);

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

  const handleScroll = () => {
    document.getElementById("details-ingredients").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

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
            <span className={styles.alcoholic_flag}>
              {cocktail.strAlcoholic}
            </span>
            <div className={styles.last_section}>
              {!!cocktail.strInstructions && (
                <DetailsFirstSection
                  info={cocktail.strInstructions}
                  className="instructions"
                />
              )}
              {!!cocktail.strCategory && (
                <DetailsFirstSection
                  label="Category: "
                  info={cocktail.strCategory}
                  className="category"
                />
              )}
              {!!cocktail.strGlass && (
                <DetailsFirstSection
                  label="Glass: "
                  info={cocktail.strGlass}
                  className="glass"
                />
              )}
              {/* <button onClick={handleScroll} className={styles.button}>
                <span className={styles.arrow}>ꜜ</span>
              </button> */}
            </div>

            <Ingredients cocktail={cocktail} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
