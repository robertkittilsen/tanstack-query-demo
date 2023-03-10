import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Code, FormLabel, Input, Highlight } from "@chakra-ui/react";
import { Post } from "../../api/queries/usePostsQuery";
import { Heading } from "@chakra-ui/layout";

const PostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // TODO queryClient

  // TODO: useMutation med createPost, onSuccess: legg til ny post for QueryKey "posts"

  const mutate = (post: Post) => {console.warn(post)};
  const status = "error";

  async function createPost(post: Post) {
    return await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  }

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const create = (e: FormEvent) => {
    e.preventDefault();
    mutate({ id: Date.now(), title: title, body: message, userId: Date.now() } as Post)
    setTitle("");
    setMessage("");
  };

  return (
    <>
      <form onSubmit={create}>
        <Heading size="md" my={2}>
          Post en melding
        </Heading>

        <FormLabel>Tittel</FormLabel>
        <Input mb={2} type="text" value={title} onChange={onChangeTitle} />

        <FormLabel>Melding</FormLabel>
        <Input mb={2} type="text" value={message} onChange={onChangeMessage} />

        <Button my={2} type="submit">
          Legg til
        </Button>
      </form>

      <Heading size="md" my={2}>
        useMutation
      </Heading>
      <Code my={2}>
        status:{" "}
        <Highlight
          query={["success", "loading", "error", "idle"]}
          styles={{
            bg:
              status === "error"
                ? "red.300"
                : status === "loading"
                ? "yellow.300"
                : status === "success"
                ? "green.300"
                : "grey.300",
          }}
        >
          {status.toLocaleUpperCase()}
        </Highlight>
      </Code>
    </>
  );
};

export default PostForm;
