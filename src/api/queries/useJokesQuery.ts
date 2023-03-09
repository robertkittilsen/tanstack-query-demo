import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../fetch";

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

// Disclaimer: blacklisted flags are not guaranteed to be filtered out 😅
const JOKES_URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&amount=10";

export const useJokesQuery = () =>
  useQuery<JokeResult>(["jokes"], () => fetcher(JOKES_URL));
