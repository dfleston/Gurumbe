export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Identify",
      description: "We locate real assets in the corridor with genuine yield potential and institutional credibility."
    },
    {
      number: "02",
      title: "Structure",
      description: "Legal, regulatory, and technical infrastructure. Multiple jurisdictions. Full transparency."
    },
    {
      number: "03",
      title: "Tokenize",
      description: "Convert real asset ownership into tradable tokens. Institutional-grade custody and settlement."
    },
    {
      number: "04",
      title: "Deploy",
      description: "Access to global institutional capital. Yield flowing back to token holders. Transparency live."
    },
  ];

  return (
    <section id="how-we-work" className="py-20 md:py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From identification to yield distribution. The corridor flows in four steps.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <div className="text-5xl font-serif font-bold text-primary opacity-50">{step.number}</div>
              </div>
              <div className="md:col-span-10">
                <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
                <p className="text-lg text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-background border border-border rounded-lg">
            <h4 className="font-serif font-bold mb-2">Our Advantage</h4>
            <p className="text-sm text-muted">
              We speak the language of the corridor. We understand the history. We honor the trust.
            </p>
          </div>
          <div className="p-6 bg-background border border-border rounded-lg">
            <h4 className="font-serif font-bold mb-2">Your Protection</h4>
            <p className="text-sm text-muted">
              Independent audits. Legal recourse across borders. Regulatory compliance in every jurisdiction.
            </p>
          </div>
          <div className="p-6 bg-background border border-border rounded-lg">
            <h4 className="font-serif font-bold mb-2">The Result</h4>
            <p className="text-sm text-muted">
              Access to yields previously locked behind geography, language, and institutional bias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
