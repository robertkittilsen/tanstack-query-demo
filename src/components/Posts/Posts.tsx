import { Button, ButtonGroup, Card, Divider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import PostList from "./PostList";
import { usePostsQuery } from "../../api/queries/usePostsQuery";
import PostForm from "./PostForm";

function Posts() {
  // TODO refetch post query
  const { refetch } = usePostsQuery();

  return (
    <Card p={4}>
      <Heading as="h1" mb={2}>
        Hello, Posts! ✉️
      </Heading>
      <Divider my={2} />

      <PostForm />

      <ButtonGroup mt={4}>
        <Button onClick={() => refetch()} size="xs">
          Hent på nytt
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
