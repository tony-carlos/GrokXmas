/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

// const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionFour() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="fugu--video-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-6">
						<div className="fugu--video-thumb wow fadeInUpX" data-wow-delay="0.10s">
							<img src="/images/new_img/grokn1.png" alt="" />
							<div className="fugu--popup">
								<img src="/images/new_img/gbutton.png" alt="" />
								<div className="waves wave-1"></div>
								<div className="waves wave-2"></div>
								<div className="waves wave-3"></div>
							</div>
							<div className="fugu--video-shape1">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div>
							<div className="fugu--video-shape2">
								<img src="/images/shape2/shape-video.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-xl-6 d-flex align-items-center">
						<div className="fugu--default-content">
							<h3>Grok Xmas is a 100% COMMUNITY driven project owned by community, control by majority</h3>
							<p>
							Grok xmas is completely Meme token with no values or returns on investment, stealth launched and Liquidity burned.
							</p>
							<p>
							Meme on it's finest, stealth launch on PancakeSwap
							</p>
							<div className="fugu--btn-wrap">
								<Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-blue">Buy GROK XMAS</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId=""
				onClose={() => setOpen(false)}
			/> */}
		</div>
	);
}
