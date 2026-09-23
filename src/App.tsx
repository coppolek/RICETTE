import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import RecipeOfTheDay from "./components/RecipeOfTheDay";
import RecipeSection from "./components/RecipeSection";
import SeasonalBanner from "./components/SeasonalBanner";
import VideoSection from "./components/VideoSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import { featuredRecipes, latestRecipes, quickRecipes } from "./data/recipes";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Categories />
        <RecipeOfTheDay />
        <RecipeSection title="Le Più Amate" recipes={featuredRecipes} variant="large" />
        <SeasonalBanner />
        <RecipeSection title="Ultime Ricette" recipes={latestRecipes} />
        <VideoSection />
        <RecipeSection title="Ricette Veloci" recipes={quickRecipes} />
        <Newsletter />
      </main>
      <Footer />
      <CookieBanner />
      <ScrollToTop />
    </div>
  );
}
