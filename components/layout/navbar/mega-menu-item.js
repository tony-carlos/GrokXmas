import { v4 as uuidv4 } from "uuid";
export default function MegaMenuItem({ menuItems }) {
	return (
		<li className="col-lg-3">
			<div className="single-dropdown-block">
				<h3>{menuItems?.title}</h3>
			</div>
		</li>
	);
}
