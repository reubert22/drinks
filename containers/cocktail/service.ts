import * as repository from "./repository.ts";

export const listByAlcoholic = async (alcoholic: boolean) => {
  try {
    const response = await repository.getFilterByAlcoholic(alcoholic);
    return response.data.drinks;
  } catch (e) {
    return [];
  }
};

export const listDetails = async (id: string) => {
  try {
    const response = await repository.getDetails(id);
    console.log("listDetails -> response", response);
    return response.data.drinks;
  } catch (e) {
    console.log("listDetails -> e", e);
    return [];
  }
};
