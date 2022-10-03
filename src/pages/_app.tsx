import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider, createEmotionCache } from "@mantine/core";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const cache = createEmotionCache({ key: "mantine", prepend: true });
  return (
    <SessionProvider session={session}>
      <MantineProvider
        emotionCache={cache}
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "JetBrains Mono, monospace",
          headings: {
            fontFamily: "JetBrains Mono, monospace",
          },
          globalStyles: (theme) => ({
            body: {
              height: "100vh",
              background:
                "linear-gradient(142deg, rgba(9,9,9,1) 0%, rgba(19,10,31,1) 28%, rgba(0,0,0,1) 100%)",
            },
            ".glass": {
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: 16,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              "-webkit-backdrop-filter": "blur(7.8px)",
              border: "1px solid rgba(255, 255, 255, 0.36)",
            },
            ".glow": {
              textShadow:
                "0 0 0 #ff1,0 0 2px #ff1,0 0 2px #ff1,0 0 2px #fff,0 0 2px #fff,0 0 2px #ff1,0 2px 4px #ff9990,0 2px 20px #fff",
            },
          }),
          colorScheme: "dark",
          defaultGradient: {
            deg: 120,
            from: "#fff",
            to: "#000",
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
};

export default MyApp;
