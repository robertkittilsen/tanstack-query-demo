import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../FetchApi";

export type JokeResult = {
  error: boolean;
  amount: number;
  jokes: Joke[];
};

export type Joke = {
  id: number;
  category: string;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
  safe: boolean;
  lang: string;
};

export const JOKES_QUERY_KEY = "jokes";
const JOKES_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&amount=10";

export const useJokesQuery = () => useQuery<JokeResult>([JOKES_QUERY_KEY], () => fetcher(JOKES_URL));
