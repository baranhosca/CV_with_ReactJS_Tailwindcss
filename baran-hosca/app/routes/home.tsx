import type { Route } from "./+types/home";
import { Welcome } from "../Homepage/Homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Baran Hoşca" }
  ];
}

export default function Home() {
  return <Welcome />;
}
