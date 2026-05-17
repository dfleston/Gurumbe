export default function Corridor() {
  const countries = [
    {
      name: "Spain & Iberia",
      role: "Institutional Gateway",
      description: "Centuries of African-Hispanic synthesis. The duende. The recognition.",
      image: "🟤"
    },
    {
      name: "Kenya",
      role: "East African Hub",
      description: "Demographic dividend. Energy revolution. Tech-native capital markets.",
      image: "🟢"
    },
    {
      name: "Ghana",
      role: "West African Anchor",
      description: "Gold standard. Stable governance. Gateway to the Gold Coast.",
      image: "🟡"
    },
    {
      name: "Namibia",
      role: "Southern Gateway",
      description: "Mineral wealth. Emerging financial center. Strategic position.",
      image: "🟠"
    },
    {
      name: "Angola",
      role: "Energy Power",
      description: "Oil, diamonds, agricultural renaissance. Continental hub.",
      image: "⬛"
    },
  ];

  return (
    <section id="corridor" className="py-20 md:py-32 px-6 bg-primary/5 border-t border-b border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">The Five Nodes</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A corridor of trust and capital. Each node essential. Each node thriving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {countries.map((country) => (
            <div
              key={country.name}
              className="p-6 bg-background border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{country.image}</div>
              <h3 className="text-lg font-serif font-bold mb-1">{country.name}</h3>
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                {country.role}
              </p>
              <p className="text-sm text-muted">{country.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/10 border border-secondary/30 rounded-lg">
          <h3 className="text-xl font-serif font-bold mb-4">The Corridor Principle</h3>
          <p className="text-muted leading-relaxed">
            Capital has always moved South-to-North. Extraction, appropriation, control. 
            <br />
            <br />
            We&apos;re reversing the logic. South-to-South flows. Ownership. Recognition. 
            Real assets. Tokenized for efficiency, but rooted in earth, energy, and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
