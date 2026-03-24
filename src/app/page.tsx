import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ColorPalette from "@/components/ColorPalette";
import TypographyShowcase from "@/components/TypographyShowcase";
import LogoShowcase from "@/components/LogoShowcase";
import LayoutPrinciples from "@/components/LayoutPrinciples";
import SkillLibrary from "@/components/SkillLibrary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ColorPalette />
      <TypographyShowcase />
      <LogoShowcase />
      <LayoutPrinciples />
      <SkillLibrary />
      <Footer />
    </>
  );
}
