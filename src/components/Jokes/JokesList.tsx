import { ListItem, Text, List, Center, Spinner } from "@chakra-ui/react";
import { useJokesQuery } from "../../api/queries/useJokesQuery";

function JokesList() {
  const { data, isLoading, isError } = useJokesQuery();

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
      {data.jokes.map(({ id, joke, setup, delivery }) => (
        <ListItem key={id} mb={4} lineHeight={1.5}>
          {joke && (
            <Text>
              {joke}
            </Text>
          )}
          {setup && (
            <Text>
              <strong>Q: </strong> {setup}
            </Text>
          )}
          {delivery && (
            <Text>
              <strong>A: </strong> {delivery}
            </Text>
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default JokesList;
