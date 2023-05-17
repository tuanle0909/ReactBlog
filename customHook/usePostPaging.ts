import { useEffect, useState } from 'react';
import { PostType, formatPost } from '../helpers/formatApi';
import postService from '../service/post';
import useGlobalState from '../state';

type Props = {
  initialPost: PostType[]
  extraParam: {
    [key: string]: any
  }
  triggerChange?: any
}
function usePostPaging({ initialPost, extraParam = {}, triggerChange }: Props) {
  const [pagingPost, setPagingPost] = useGlobalState("pagingPost");
  const { currentPage, totalPage, totalPost } = pagingPost;
  const [loading, setLoading] = useState(false);
  const posts = currentPage == 0 ? initialPost : pagingPost.posts;

  const getPost = (p: number) => {
    setLoading(true);
    postService.getPagingPost({ page: p, extraParam }).then((response) => {
      const totalPage = parseInt(response.headers["x-wp-totalpages"]);
      const totalPost = parseInt(response.headers["x-wp-total"]);
      const formatPosts = response.data.map((e: any) => formatPost(e));
      const newPagingPosts = p === 1 ? formatPosts : [...pagingPost.posts, ...formatPosts];

      setPagingPost({
        currentPage: p,
        totalPage,
        totalPost,
        posts: newPagingPosts
      })
      setLoading(false);
    })
  }
  useEffect(() => {
    if (triggerChange) {
      getPost(1);
    }
  }, [triggerChange]);

  const loadMore = () => {
    if (!loading) {
      const nextPage = currentPage + 1;
      getPost(nextPage);
    }
  }
  const isLastPage = ((currentPage === totalPage) && !loading) || totalPage === 0;

  return {
    loadMore,
    loading,
    isLastPage,
    posts,
    totalPost
  }
}

export default usePostPaging;
