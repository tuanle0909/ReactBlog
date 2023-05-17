import Api from "./api";
type GetCommentsInput = {
  postId: number,
  exclude: number[],
  page: number,
  perPage?: number,
  commentId?: number
}
type SendCommentInput = {
  author: number,
  content: string,
  postId: number,
  parent: number
}
const commentService = {
  getAll<T>(inputParams: T) {
    return Api.call().get("wp/v2/comments", {
      params: {
        ...inputParams,
      },
    });
  },
  getComments({ postId, exclude, page, perPage = 5, commentId = 0 }: GetCommentsInput) {
    return this.getAll({
      per_page: perPage,
      page,
      post: postId,
      exclude,
      parent: commentId,
      order: "asc",
    });
  },
  sendComment({ author, content, postId, parent = 0 }: SendCommentInput) {
    return Api.callWithToken().post("wp/v2/comments", {
      author,
      content,
      post: postId,
      parent,
    });
  },
};
export default commentService;
