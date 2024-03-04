import Benefits from "./components/Benefits";
import CustomerSays from "./components/CustomerSays";
import LatestArticles from "./components/LatestArticles";
import Products from "./components/Products";
import SpecialOffer from "./components/SpecialOffer";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <main className="mb-auto">
      <Benefits />
      <Trending />
      <SpecialOffer />
      <Products />
      <CustomerSays />
      <LatestArticles />
    </main>
  );
}
