import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  ButtonGroup,
  Card,
  Code,
  Divider,
  Flex,
  Highlight,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import JokesList from "./JokesList";
import {
  useJokesQuery,
} from "../../api/queries/useJokesQuery";
import { useQueryClient } from "@tanstack/react-query";

function Jokes() {
  const {
    data,
    refetch,
    status,
    fetchStatus,
    isLoading,
    isError,
    isStale,
    isFetched,
    isRefetching,
    isSuccess,
    isFetching,
  } = useJokesQuery();

  const queryClient = useQueryClient();

  const reset = () => {
    queryClient.resetQueries(['jokes']);
  };

  const refetchJokes = () => {
    refetch();
  };

  return (
    <Card p={4}>
      <Heading as="h1" mb={2}>
        Hello, Tanstack Query! 🚀
      </Heading>
      <Divider my={2} />

      <Heading size="md" my={2}>
        useQuery
      </Heading>
      <Code my={2}>
        status:{" "}
        <Highlight
          query={["success", "loading", "error"]}
          styles={{
            bg:
              status === "success"
                ? "green.300"
                : status === "loading"
                ? "yellow.300"
                : "red.300",
          }}
        >
          {status.toLocaleUpperCase()}
        </Highlight>
      </Code>
      <Code my={2}>
        fetchStatus:{" "}
        <Highlight
          query={["fetching", "paused", "idle"]}
          styles={{
            bg:
              fetchStatus === "fetching"
                ? "blue.300"
                : fetchStatus === "idle"
                ? "grey.300"
                : "purple.300",
          }}
        >
          {fetchStatus.toLocaleUpperCase()}
        </Highlight>
      </Code>
      <Code mt={2} mb={4}>
        hasData:{" "}
        <Highlight
          query={["true", "false"]}
          styles={{
            bg: !!data ? "green.300" : "red.300",
          }}
        >
          {JSON.stringify(!!data)}
        </Highlight>
      </Code>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Code>{"const {...} = useQuery()"}</Code>
          </AccordionButton>
          <AccordionPanel>
            <Flex direction="column">
              <Code my={2}>isLoading: {JSON.stringify(isLoading)}</Code>
              <Code my={2}>isError: {JSON.stringify(isError)}</Code>
              <Code my={2}>isSuccess: {JSON.stringify(isSuccess)}</Code>
              <Code my={2}>isStale: {JSON.stringify(isStale)}</Code>
              <Code my={2}>isFetched: {JSON.stringify(isFetched)}</Code>
              <Code my={2}>isFetching: {JSON.stringify(isFetching)}</Code>
              <Code my={2}>isRefetching: {JSON.stringify(isRefetching)}</Code>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <ButtonGroup mt={4}>
        <Button onClick={refetchJokes} size="xs">
          Hent på nytt
        </Button>
        <Button onClick={reset} size="xs">
          Reset
        </Button>
      </ButtonGroup>

      <Heading as="h2" mt={4} mb={4}>
        Vitser 😆
      </Heading>
      <JokesList />
    </Card>
  );
}

export default Jokes;
