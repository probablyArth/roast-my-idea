import { Title, Stack, Center, Text, Button } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const session = useSession();
  return (
    <div>
      <Head>
        <title>Roast my idea</title>
        <meta name="description" content="No bs github issue finder." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Stack
          align={"center"}
          p={20}
          sx={() => ({ height: 300, width: "80%" })}
        >
          <Title className="glow" color={"white"} sx={() => ({ fontSize: 76 })}>
            roast my idea
          </Title>

          <Text italic>
            Discuss your ideas with the world and improvise it.
          </Text>
          {session.status === "authenticated" && (
            <div className="flex gap-8">
              <Button>Post your idea</Button>
              <Button
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
          {session.status === "unauthenticated" && (
            <Button
              onClick={() => {
                signIn();
              }}
            >
              Sign In with google
            </Button>
          )}
        </Stack>
      </Center>
    </div>
  );
};

export default Home;
