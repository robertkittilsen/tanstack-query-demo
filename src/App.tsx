import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import Jokes from "./components/Jokes/Jokes";
import Posts from "./components/Posts/Posts";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container size="container.xl" p={4}>
      <Button onClick={() => setToggle(!toggle)} size="xs" my={4}>
        {!toggle ? "--->" : "<---"}
      </Button>
      {!toggle ? <Jokes /> : <Posts />}
    </Container>
  );
}

export default App;
