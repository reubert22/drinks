export const Ingredients = ({ cocktail }) => (
  <div>
    <h1>Ingredients</h1>
    {Array(15)
      .fill("")
      .map((_, id) => {
        const ingredient = cocktail[`strIngredient${id + 1}`];
        const measure = cocktail[`strMeasure${id + 1}`];

        return (
          !!ingredient && (
            <p>
              ({measure}): {ingredient}
            </p>
          )
        );
      })}
  </div>
);
