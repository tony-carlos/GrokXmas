import FooterHomeFive from "./footer/footer-home-five";
import FooterHomeFour from "./footer/footer-home-four";
import FooterHomeOne from "./footer/footer-home-one";
import FooterHomeThree from "./footer/footer-home-three";
import FooterHomeTwo from "./footer/footer-home-two";
import HeaderHomeFive from "./header/header-home-five";

export default function Layout({ children }) {
	const headerChooseFunc = () => {
		switch (children.props.header) {
			
			case "five":
				return <HeaderHomeFive />;
		}
	};
	const footerChooseFunc = () => {
		switch (children.props.footer) {
			case "one":
				return <FooterHomeOne />;
			case "two":
				return <FooterHomeTwo />;
			case "three":
				return <FooterHomeThree />;
			case "four":
				return <FooterHomeFour />;
			case "five":
				return <FooterHomeFive />;
			default:
				return <FooterHomeOne />;
		}
	};
	return (
		<>
			{headerChooseFunc()}
			<main>{children}</main>
			{footerChooseFunc()}
		</>
	);
}
