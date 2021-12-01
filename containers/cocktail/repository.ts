import apiClient from "../client.ts";

export const getFilterByAlcoholic = (alcoholic: boolean) =>
  apiClient.get(`/filter.php?a=${alcoholic ? "Alcoholic" : "Non_Alcoholic"}`);

export const getDetails = (id: string) => apiClient.get(`/lookup.php?i=${id}`);
