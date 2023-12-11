/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Accordion } from "react-bootstrap";
export default function WalletSection() {
	return (
		<div className="fugu--content-section fugu--section-padding2">
			<div className="container">
				<div className="fugu--content-top">
					<div className="row">
						<div className="col-xl-6 d-flex justify-content-center align-items-center order-xl-2">
							<div className="fugu--content-thumb">
								<img
									className="wow fadeInUpX"
									data-wow-delay=".10s"
									src="/images/new_img/thumb.png"
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
			</div>
		</div>
	);
}