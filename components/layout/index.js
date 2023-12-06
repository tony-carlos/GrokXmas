import FooterHomeFive from "./footer/footer-home-five";
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
			case "five":
				return <FooterHomeFive />;
			default:
				return <FooterHomeFive />;
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
