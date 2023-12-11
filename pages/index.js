import Head from "next/head";
import FaqAccordionTwo from "../components/common/faq/faq-accordion-two";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import VideoSectionFour from "../components/common/video/about";
import CtaSection from "../components/home-five/cta-section";
import RoadMap from "../components/home-five/road-map";
import HeroSection from "../components/home-five/hero-section";
import WalletSection from "../components/home-five/about";
import ValueSection from "../components/home-five/tokenomics";
import HowToBuy from "../components/home-five/how-to-buy-grok"

export default function IndexFive() {
	return (
		<>
			<Head>
				<title>Grok Xmas </title>
			</Head>
			<HeroSection />
			<ValueSection />
			<ClientSliderOne />
			<VideoSectionFour />
			<WalletSection />
			<HowToBuy />
			<RoadMap />
			<FaqAccordionTwo />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "five", footer: "five" } };
}
