import { Button, ButtonGroup, Card, Code, Divider, Highlight } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { useQueryClient } from '@tanstack/react-query';
import { useDummyQuery, usePostsQuery } from '../../api/queries/usePostsQuery';

function Posts() {

  // TODO refetch, status, fetchStatus med usePostsQuery
  const { refetch, status, fetchStatus } = usePostsQuery()

  /* const { refetch, status, fetchStatus } = useDummyQuery(); */

  const queryClient = useQueryClient();

  const handleReset = () => {
    queryClient.resetQueries(["posts"]);
  };

  return (
    <Card p={4}>
      <Heading as="h1" mb={2}>
        Hello, Posts! ✉️
      </Heading>
      <Divider my={2} />

      <PostForm />

      <Heading size="md" my={2}>
        useQuery
      </Heading>
      <Code my={2}>
        status:{" "}
        <Highlight
          query={["success", "loading", "error", "idle"]}
          styles={{
            bg:
              status === "success"
                ? "green.300"
                : status === "loading"
                ? "yellow.300"
                : status === "error"
                ? "red.300"
                : "grey.300",
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
      <ButtonGroup my={4}>
        <Button onClick={() => refetch()} size="xs">
          Hent på nytt
        </Button>
        <Button onClick={() => handleReset()} size="xs">
          Reset
        </Button>
      </ButtonGroup>
      <Heading as="h2" mt={4} mb={4}>
        Posts
      </Heading>
      <PostList />
    </Card>
  );
}

export default Posts;
