import Hello from "../components/hello";

export default function Home() {

  console.log("What am i doing here --- Server/Client?")

  return (
    <>
    <h3 className="underline">Welcome to nextjs</h3>
    <Hello />
    </>
  );
}
