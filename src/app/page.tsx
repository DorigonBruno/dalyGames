import Banner from "./components/banner";
import Container from "./components/container";
import InputSearch from "./components/input";

export default function Home() {
  return (
    <main className="w-full mt-4">
      <Container>
        <h1 className="font-bold text-center text-lg sm:text-2xl">
          Separamos um jogo exclusivo pra você
        </h1>

        <Banner />

        <InputSearch />
      </Container>
    </main>
  );
}
