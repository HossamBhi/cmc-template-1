import "../css/product.css";
const Product = () => {
  return (
    <main>
      <header>
        <img
          src={require("../assets/logo.jpg")}
          alt="Logo"
          style={{ height: 50 }}
        />
        <h1>CMS Website first</h1>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/articale">Article</a>
      </nav>

      <section style={{ marginBottom: "20vh" }}>
        <article>
          <h2>Product Page</h2>
          <ul>
            <li>
              <img
                src={require("../assets/img.jpeg")}
                alt="Product 1"
                style={{ width: 100 }}
              />
              Product 1 Title
            </li>
            <li>
              <img
                src={require("../assets/img.jpeg")}
                alt="Product 2"
                style={{ width: 100 }}
              />
              Product 2 Title
            </li>
            {/* Add more products as needed */}
          </ul>
        </article>
      </section>

      <footer>
        <p>
          Address: Your Address | Phone: Your Phone Number | Small Text Article
          Sample
        </p>
      </footer>
    </main>
  );
};

export default Product;
