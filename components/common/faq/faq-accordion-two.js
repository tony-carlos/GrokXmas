/* eslint-disable @next/next/no-img-element */

import { Accordion } from "react-bootstrap";
export default function FaqAccordionTwo() {
	return (
		<div className="fugu--faq-section2 fugu--section-padding-bottom">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content">
						<h2>FAQs for Grok Xmas</h2>
						<p>
							Frequently asked questions qbout cryptocurrency & blockchain technology. Cryptographic
							security for conducting trusted transactions.
						</p>
					</div>
				</div>
				<div className="fugu--accordion-one accordion-three" id="accordionExample2">
					<div className="row">
						<div className="col-lg-6">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>What is Grok Xmas?</Accordion.Header>
									<Accordion.Body>
Grok Xmas is a 100% community-driven project that is owned and controlled by the community majority. It operates as a meme token with no intrinsic values or returns on investment. The project was stealth-launched and its liquidity has been burned.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>
									Who owns Grok Xmas?
									</Accordion.Header>
									<Accordion.Body>

Grok Xmas is owned by the community, and its control is in the hands of the majority. There is no single entity or individual in charge of the project.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>Is Grok Xmas an investment?</Accordion.Header>
									<Accordion.Body>
									

No, Grok Xmas is not designed as an investment opportunity. It is a meme token, and participants should not expect any financial returns. The project was launched with a focus on community engagement and fun rather than financial gains.


									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col-lg-6">
							<Accordion>
								<Accordion.Item eventKey="3">
									<Accordion.Header>How was Grok Xmas launched?</Accordion.Header>
									<Accordion.Body>
									

Grok Xmas was stealth-launched, meaning that its release on PancakeSwap and other platforms occurred without a pre-announcement. This approach adds an element of surprise and excitement to the project.
									</Accordion.Body>
								</Accordion.Item>
								
								<Accordion.Item eventKey="4">
									<Accordion.Header>Is Grok Xmas affiliated with any other projects or tokens?</Accordion.Header>
									<Accordion.Body>
									

No, Grok Xmas is an independent project and is not affiliated with any other tokens or projects. It operates as a standalone meme token within the community-driven ecosystem.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
			<div className="fugu--circle-shape circle-five">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-six">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="fugu--circle-shape circle-seven">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
