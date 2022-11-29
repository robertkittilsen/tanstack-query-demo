import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../FetchApi";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// TODO definer query key

export const POSTS_CACHE_KEY = "posts";
// TODO lag usePostsQuery som bruker useQuery og fetcher
export const usePostsQuery = () => useQuery<Post[]>([POSTS_CACHE_KEY], () => fetcher(POSTS_URL));


