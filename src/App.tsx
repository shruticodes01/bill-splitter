import "./App.css";
import TipSplitterContextProvider from "./store/SplitterContextProvider.tsx";
import Container from "./components/Container.tsx";
import Header from "./components/Header.tsx";
import CalculationResults from "./components/ResultsSection.tsx";
import BillSection from "./components/BillSection.tsx";

function App() {
  return (
    <TipSplitterContextProvider>
      <Container className="flex flex-col">
        <Header />
        <main className="w-full flex max-lg:flex-col items-center max-md:gap-8 md:max-lg:gap-10 lg:gap-12 bg-white py-8 px-6 md:max-lg:px-20 md:max-lg:py-12 lg:p-8 max-md:rounded-tl-xl max-md:rounded-tr-xl md:rounded-[1.5625rem]">
          <BillSection />
          <CalculationResults />
        </main>
      </Container>
    </TipSplitterContextProvider>
  );
}

export default App;
