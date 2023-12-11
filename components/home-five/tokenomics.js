/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function FeatureSection() {
	return (
		<div className="fugu--feature-section fugu--section-padding1">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX" data-wow-delay="0s">
						
							<div className="fugu--iconbox-data">
								<h4>Name</h4>
                                <p>
								GROK X GPT                                </p>
								
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX" data-wow-delay=".10s">
							
							<div className="fugu--iconbox-data">
								<h4>Symbol</h4>
								<p>
								GROK X GPT								</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6">
    <div className="fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX" data-wow-delay=".20s" style={{ backgroundColor: 'red' }}>
        <div className="fugu--iconbox-data">
            <h4>Supply </h4>
            <p>
			599, 000,000,000 (599B)            </p>
        </div>
    </div>
</div>

                    <div className="col-xl-3 col-md-6">
						<div className="fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX" data-wow-delay=".20s">
							
							<div className="fugu--iconbox-data">
								<h4>Decimal  </h4>
								<p>
                                18
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
