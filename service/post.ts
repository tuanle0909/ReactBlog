import Api from "./api";

type GetPagingPostInput = {
  page: number,
  extraParam: {
    [key: string]: unknown
  }
}
type GetSearchPostInput = {
  page: number,
  searchValue: string
}
type GetPostsByCategoryIdInput = {
  categoriesId: string,
  page: number
}
type Slug = {
  slug: string
}
type GetRelatedPostsInput = {
  author: number,
  exclude: number,
}
const postService = {
  getAll<T>(inputParams: T) {
    return Api.call().get("wp/v2/posts", {
      params: {
        ...inputParams,
        lang: "vi",
      },
    });
  },
  getLated() {
    return this.getAll({ per_page: 3, page: 1 });
  },
  getPostPopular() {
    return this.getAll({ per_page: 3, page: 1, orderby: "post_views" });
  },
  getPagingPost({ page, extraParam }: GetPagingPostInput) {
    return this.getAll({ page: page, ...extraParam });
  },
  getSearchPost({ page, searchValue }: GetSearchPostInput) {
    return this.getAll({ per_page: 2, search: searchValue, page: page });
  },
  getPostsByCategoryId({ categoriesId, page }: GetPostsByCategoryIdInput) {
    return this.getAll({ per_page: 2, page, categories: categoriesId });
  },
  getDetailPost({ slug }: Slug) {
    return this.getAll({ slug });
  },
  getRelatedPosts({ author, exclude }: GetRelatedPostsInput) {
    return this.getAll({ per_page: 3, page: 1, author: author, exclude: exclude });
  },
};
export default postService;
