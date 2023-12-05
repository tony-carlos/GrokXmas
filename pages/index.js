import Head from "next/head";
import FaqAccordionTwo from "../components/common/faq/faq-accordion-two";
import ClientSliderOne from "../components/common/sliders/client/client-slider-one";
import VideoSectionFour from "../components/common/video/video-section-four";
import CtaSection from "../components/home-five/cta-section";
import FeatureSection from "../components/home-five/feature-section";
import HeroSection from "../components/home-five/hero-section";
import WalletSection from "../components/home-five/wallet-section";
import ValueSection from "../components/home-five/value-section";

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
			<FeatureSection />
			<WalletSection />
			<FaqAccordionTwo />
			<CtaSection />
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "five", footer: "five" } };
}
