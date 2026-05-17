import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full">
          <span className="text-sm font-medium text-accent">The South-to-South Corridor</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-balance leading-tight">
          The Corridor Was Always There
        </h1>

        <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto text-balance font-light">
          We&apos;re building a bridge between Africa and Iberia. Not to exploit. To invest. To recognize. To unlock capital that was always meant to flow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact">
            <button className="primary w-full sm:w-auto">
              Show Your Interest
            </button>
          </a>
          <a href="#corridor">
            <button className="secondary w-full sm:w-auto">
              Explore the Vision
            </button>
          </a>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-sm text-muted uppercase tracking-wider mb-8">Trust. Vision. Capital.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">8</div>
              <p className="text-sm text-muted">Countries in the Corridor</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-secondary mb-2">∞</div>
              <p className="text-sm text-muted">Possibilities Unlocked</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-accent mb-2">Now</div>
              <p className="text-sm text-muted">The Time is Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
