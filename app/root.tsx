import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import preflight from "@unocss/reset/tailwind.css";
import styles from "./uno.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: preflight,
  },
  { rel: "stylesheet", href: styles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&family=Fira+Code&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return { title: "Remix with UnoCSS" };
};

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body, #container {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;
              }
              .dark {
                color: #fff;
                background: #050505;
              }`,
          }}
        />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
