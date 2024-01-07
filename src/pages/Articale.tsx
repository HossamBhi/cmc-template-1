import "../css/articale.css";
const Articale = () => {
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
          <img
            src={require("../assets/img.jpeg")}
            alt="Article"
            style={{ width: "100%" }}
          />
          <h2>Article Title</h2>
          <p>Full article content goes here.</p>
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

export default Articale;
