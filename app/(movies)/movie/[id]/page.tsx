import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie",
};

export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>#{id} Movie page</h1>
    </div>
  );
}
