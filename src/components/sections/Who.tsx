export default function Who() {
  return (
    <section id="who" className="py-20 md:py-32 px-6 bg-foreground/5 border-t border-b border-border">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Who Is Behind This</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-serif font-bold mb-4">David F. Leston</h3>
              
              <p className="text-muted leading-relaxed mb-4">
                Author of <em>La Promesa Devuelta</em> (The Promise Returned), a historical and spiritual 
                examination of the African-Hispanic synthesis that shaped the world. David has spent years 
                studying the forgotten corridors of power and capital that connected Africa, the Levant, and Iberia.
              </p>

              <p className="text-muted leading-relaxed mb-4">
                He is not a typical venture capitalist or investment banker. He is a historian, philosopher, 
                and strategist who believes that understanding the past is the only way to build a different future.
              </p>

              <p className="text-muted leading-relaxed mb-6">
                His work spans culture, technology, economy, and the spirit that moves them. He writes publicly 
                on <a href="https://dleston.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">
                  Substack
                </a>, and his broader work on the Hispanic-African promise is available at{" "}
                <a href="http://promesadevuelta.com/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">
                  La Promesa Devuelta
                </a>.
              </p>

              <h4 className="text-lg font-serif font-bold mb-3">The Philosophy</h4>
              <p className="text-muted leading-relaxed">
                Gurumbé is not just an investment vehicle. It&apos;s a recognition. A statement that the South 
                can invest in itself without permission from the North. That Africa doesn&apos;t need to be saved—
                it needs to be recognized. That capital, like truth, finds its own way when given the chance.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-background p-8 rounded-lg border border-border text-center">
              <div className="text-8xl mb-4">📖</div>
              <p className="text-sm font-medium text-muted">Author & Strategist</p>
            </div>

            <div className="p-6 bg-primary/10 border border-primary/30 rounded-lg">
              <h4 className="font-serif font-bold mb-3 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://dleston.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">
                    Essays & Thoughts
                  </a>
                </li>
                <li>
                  <a href="http://promesadevuelta.com/en/" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">
                    La Promesa Devuelta
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:opacity-80">
                    Direct Message
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
