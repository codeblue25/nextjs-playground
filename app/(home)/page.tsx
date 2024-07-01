import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // console.log("hi i'm here !");
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}

export default async function Page() {
  const movies = await getMovies();
  return (
    <div>
      <h1>Hello NextJS !</h1>
      {JSON.stringify(movies)}
    </div>
  );
}
