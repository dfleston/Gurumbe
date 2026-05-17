export default function Thoughts() {
  const articles = [
    {
      title: "The Corridor Was Always There",
      excerpt: "A historical examination of the overlooked capital flows between Africa and Iberia. Why this moment is different.",
      category: "History",
      image: "📜"
    },
    {
      title: "Tokenization as Recognition",
      excerpt: "Blockchain isn't just technology. It's a statement. A way of saying: your assets matter. Your yield is real.",
      category: "Technology",
      image: "⛓️"
    },
    {
      title: "The Demographics are Real",
      excerpt: "2.4 billion Africans by 2050. The capital required is staggering. The opportunity is incomparable.",
      category: "Economics",
      image: "📊"
    },
    {
      title: "Beyond ESG",
      excerpt: "We don't invest in Africa for moral reasons. We invest because the fundamentals are strongest there.",
      category: "Investment",
      image: "🎯"
    },
  ];

  return (
    <section id="thoughts" className="py-20 md:py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Thought Leadership</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Essays and insights on the corridor, capital, and the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.title}
              className="p-8 bg-background border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{article.image}</div>
              <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                {article.category}
              </p>
              <h3 className="text-xl font-serif font-bold mb-3">{article.title}</h3>
              <p className="text-muted mb-4">{article.excerpt}</p>
              <a href="https://dleston.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:opacity-80">
                Read More →
              </a>
            </article>
          ))}
        </div>

        <div className="p-12 bg-accent/5 border border-accent/20 rounded-lg">
          <h3 className="text-2xl font-serif font-bold mb-4">The Newsletter</h3>
          <p className="text-muted mb-6 max-w-2xl">
            Subscribe to David&apos;s Substack for weekly essays on history, technology, and the 
            future of capital flows. Direct from the corridor.
          </p>
          <a href="https://dleston.substack.com" target="_blank" rel="noopener noreferrer">
            <button className="primary">Subscribe Now</button>
          </a>
        </div>
      </div>
    </section>
  );
}
