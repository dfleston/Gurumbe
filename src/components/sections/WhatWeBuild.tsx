export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-20 md:py-32 px-6 bg-secondary/5">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What We Build</h2>
          <p className="text-lg text-muted">Real Asset Tokenization for the Corridor</p>
        </div>

        <div className="space-y-12">
          {/* Section 1: Real Estate */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-background p-12 rounded-lg border border-border flex items-center justify-center min-h-64">
              <div className="text-7xl">🏢</div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Real Estate Tokens</h3>
              <p className="text-muted mb-4">
                Properties in Kenya, Ghana, Namibia, Angola. Securitized into tradable tokens. Institutional backing. 
                Transparent yields. No middleman extraction.
              </p>
              <ul className="space-y-2 text-muted">
                <li>✓ Commercial real estate</li>
                <li>✓ Residential development</li>
                <li>✓ Mixed-use properties</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Energy */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Energy Assets</h3>
              <p className="text-muted mb-4">
                Solar farms, wind projects, geothermal facilities. Tokenized generation capacity. 
                Off-take agreements. Predictable, long-term yields.
              </p>
              <ul className="space-y-2 text-muted">
                <li>✓ Solar & wind installations</li>
                <li>✓ Renewable energy infrastructure</li>
                <li>✓ Grid modernization projects</li>
              </ul>
            </div>
            <div className="bg-background p-12 rounded-lg border border-border flex items-center justify-center min-h-64">
              <div className="text-7xl">⚡</div>
            </div>
          </div>

          {/* Section 3: Agriculture */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-background p-12 rounded-lg border border-border flex items-center justify-center min-h-64">
              <div className="text-7xl">🌾</div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Agricultural Contracts</h3>
              <p className="text-muted mb-4">
                Land trusts, commodity harvests, sustainable farming. Tokenized production contracts. 
                Direct connection between investor and farm.
              </p>
              <ul className="space-y-2 text-muted">
                <li>✓ Commodity contracts</li>
                <li>✓ Land use rights</li>
                <li>✓ Yield guarantees</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-primary/10 border border-primary/30 rounded-lg">
          <h4 className="text-xl font-serif font-bold mb-3">The Technology</h4>
          <p className="text-muted">
            Blockchain for transparency. Smart contracts for automation. 
            Institutional-grade custody. Regulatory compliance across borders. 
            The infrastructure is no longer the problem. The capital flow is.
          </p>
        </div>
      </div>
    </section>
  );
}
