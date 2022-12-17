import "./Header.css";

let Header = () => {
	return(
		<header className="header">
			<img src="https://www.lego.com/cdn/cs/set/assets/blt65dad1067eb63ecc/10309.png"/>
			<div className="Name">Plants Store</div>
			<ul>
			<li>Home</li>
			<li>Catalog</li>
			<li>Articles</li>
			<li>Cart</li>
			<li>Contacts</li>
			<li>Payments</li>
			<li>Delivery</li>
			</ul>
		</header>
	)
}

export default Header;