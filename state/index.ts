import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { CategoryType, CommentType, MenuType, PostType, UserInfoType } from '../helpers/formatApi';

type InitialStateType = {
  user: UserInfoType,
  menu: MenuType[],
  categories: { [key: string]: CategoryType },
  pagingPost: {
    posts: PostType[],
    currentPage: number,
    totalPage: number,
    totalPost: number
  },
  commentsPaging: {
    exclude: number[],
    totalComment: number,
    currentPage: number,
    totalPage: number,
    comments: CommentType[],
  },
  replies: {
    [key: string]: {
      currentPage: number,
      totalPage: number,
      totalComment: number,
      comments: CommentType[],
      exclude: number[]
    }
  },
}
const initialState: InitialStateType = {
  user: {
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    link: "",
    name: "",
    nickname: "",
    slug: "",
    avatarUrls: "",
    description: "",
    simpleLocalAvatar: {
      full: "",
      mediaId: 0
    },
  },
  menu: [],
  categories: {},
  pagingPost: {
    posts: [],
    currentPage: 0,
    totalPage: 0,
    totalPost: 0
  },
  commentsPaging: {
    exclude: [],
    totalComment: 0,
    currentPage: 0,
    totalPage: 0,
    comments: [],
  },
  replies: {
    //commentID-> reply
  },
};
const { useGlobalState } = createGlobalState(initialState);
export default useGlobalState;