/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Accordion } from "react-bootstrap";
export default function WalletSection() {
	return (
		<div className="fugu--content-section">
			<div className="container">
				<div className="fugu--content-top">
					<div className="row">
						<div className="col-xl-6 d-flex justify-content-center align-items-center order-xl-2">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".10s"
									src="/images/all-img/v5/thumb.png"
									alt=""
								/>
								<div className="fugu--circle-shape circle-three">
									<img src="/images/all-img/shapes-round.png" alt="" />
									<div className="waves wave-1"></div>
								</div>
								<div className="fugu--circle-shape circle-four">
									<img src="/images/all-img/shapes-round.png" alt="" />
									<div className="waves wave-1"></div>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="fugu--default-content">
								<h3>About Grok Xmas</h3>
								<p>
									GROK XMAS ($GROK XMAS) is a special memecoin designed for community fun and financial empowerment. With a total supply of 6 trillion tokens and 18 decimals, it recently stealth-launched on PancakeSwap, ensuring a fair start for everyone. 
								</p>
								<div className="fugu--meta">
									<ul>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											Zero Taxes: Enjoy fee-free transactions with GROK XMAS, showcasing its community-driven approach.</li>
										<li>
											<img src="/images/svg2/check.svg" alt="" />
											LP Burnt: Boosting transparency, GROK XMAS burned the liquidity pool, easing worries about liquidity.

</li>
	
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fugu--content-bottom">
					<div className="row">
						<div className="col-xl-6 d-flex align-items-center">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInLeft"
									data-wow-delay=".10s"
									src="/images/all-img/v5/thumb2.png"
									alt=""
								/>
								<div className="fugu--bitcoin">
									<img src="/images/new_img/grokn.png" alt="" />
								</div>
								<div className="fugu--content-shape">
									<img src="/images/shape2/shape-video.png" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="fugu--default-content">
								<h3>HOW TO BUY GROK XMAS</h3>
								<div className="fugu--accordion-one accordion-two" id="accordionExample">
									<Accordion defaultActiveKey="0">
										<Accordion.Item eventKey="0">
											<Accordion.Header>Create your wallet</Accordion.Header>
											<Accordion.Body>
											Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.


											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>Get Some BNB</Accordion.Header>
											<Accordion.Body>
											Have BNB in your wallet to switch to $GROK XMAS. If you don’t have any BNB, you can buy directly on metamask OR trustwallet, transfer from another wallet, or buy on another exchange and send it to your wallet.


											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>Go to PancakeSwap</Accordion.Header>
											<Accordion.Body>
											connect to PancakeSwap. Go to pancakeswap.finance in google chrome or on the browser inside your Metamask app or trustwallet. Connect your wallet. Paste the $GROK XMAS token address into PancakeSwap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.


											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>Switch BNB for $GROK XMAS</Accordion.Header>
											<Accordion.Body>
											switch BNB for $GROK XMAS. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="fugu--btn-wrap">
									<Link href={"#"} legacyBehavior>
										<a className="fugu--btn bg-blue">Buy $GROK XMAS</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
