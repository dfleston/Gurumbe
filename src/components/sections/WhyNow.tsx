export default function WhyNow() {
  const factors = [
    {
      title: "Demographic Dividend",
      description: "Africa has the youngest, fastest-growing population. 2.4B by 2050. Capital-hungry. Opportunity-ready.",
      icon: "📈"
    },
    {
      title: "Energy Transition",
      description: "Solar, wind, geothermal. African resources can power the world. The market is finally paying attention.",
      icon: "⚡"
    },
    {
      title: "Technology Leapfrog",
      description: "No legacy infrastructure. Mobile-first, blockchain-native, crypto-literate. Innovation moves fast here.",
      icon: "🚀"
    },
    {
      title: "Real Asset Tokenization",
      description: "Real estate, commodities, energy. Formerly illiquid. Now tradable. Accessible. Transparent.",
      icon: "🔗"
    },
    {
      title: "Institutional Readiness",
      description: "Regulation maturing. Funds opening. The corridor is no longer fringe. It&apos;s institutional.",
      icon: "🏛️"
    },
    {
      title: "Historical Moment",
      description: "The power shift is real. The promised return is no mythology. This is the decade of recognition.",
      icon: "🌍"
    },
  ];

  return (
    <section id="why-now" className="py-20 md:py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Now?</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Six converging trends that make this moment inevitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {factors.map((factor) => (
            <div key={factor.title} className="flex flex-col">
              <div className="text-4xl mb-4">{factor.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-3">{factor.title}</h3>
              <p className="text-muted leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-accent/5 rounded-lg border border-accent/20">
          <h3 className="text-2xl font-serif font-bold mb-4">The Thesis</h3>
          <p className="text-lg text-muted leading-relaxed">
            Wealth follows capital. Capital follows yield. Yield is highest where risk is cheapest and growth is fastest. 
            That&apos;s Africa. That&apos;s the South. That&apos;s now.
            <br />
            <br />
            We&apos;re not chasing trends. We&apos;re following fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
