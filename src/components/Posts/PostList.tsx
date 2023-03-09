import { ListItem, Text, List, Center, Spinner } from "@chakra-ui/react";
import { Post, useDummyQuery, usePostsQuery } from '../../api/queries/usePostsQuery';

function PostList() {
  // TODO: use usePostsQuery
  const { data, isLoading, isError } = usePostsQuery()

  /* const { data, isLoading, isError } = useDummyQuery() */

  if (isLoading) {
    return (
      <Center my={4}>
        <Spinner />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center>
        <Text my={4}>Oops! Noe gikk galt :(</Text>
      </Center>
    );
  }

  return (
    <List>
      {data.map(({ id, title, body}) => (
        <ListItem key={id} mb={4} lineHeight={1.5}>
          {title && (
            <Text>
              <strong>Tittel: </strong>
              {title}
            </Text>
          )}
          {body && (
            <Text>
              <strong>Innhold: </strong> {body}
            </Text>
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default PostList;
