import Api from "./api";

type CategoriesInput = {
  per_page: number,
  page: number
}
const categoryService = {
  getAll<T>(inputParams: T) {
    return Api.call().get("wp/v2/categories", {
      params: {
        ...inputParams,
      },
    });
  },
  getCategories() {
    return this.getAll<CategoriesInput>({ per_page: 100, page: 1 });
  },
};
export default categoryService;
