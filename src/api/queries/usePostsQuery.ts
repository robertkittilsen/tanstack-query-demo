import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetch";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// TODO lag usePostsQuery med useQuery som bruker query key 'posts' og fetcher til i hente POSTS_URL
export const usePostsQuery = () => useQuery<Post[]>(['posts'], () => fetcher(POSTS_URL))

export const useDummyQuery = () => {
  return {
    data: [] as Post[],
    isLoading: false,
    isError: true,
    status: "error",
    fetchStatus: "idle",
    refetch: () => {},
  };
};
