import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-32">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Gurumbé</h3>
            <p className="text-sm opacity-75">
              The corridor was always there. We&apos;re building the bridge.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="text-sm space-y-2 opacity-75">
              <li><a href="#corridor" className="hover:opacity-100 transition">The Corridor</a></li>
              <li><a href="#why-now" className="hover:opacity-100 transition">Why Now</a></li>
              <li><a href="#what-we-build" className="hover:opacity-100 transition">What We Build</a></li>
              <li><a href="#how-we-work" className="hover:opacity-100 transition">How We Work</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="text-sm space-y-2 opacity-75">
              <li><a href="#contact" className="hover:opacity-100 transition">Contact</a></li>
              <li><a href="https://dleston.substack.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">Essays</a></li>
              <li><a href="http://promesadevuelta.com/en/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition">Book</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="text-sm space-y-2 opacity-75">
              <li><a href="#" className="hover:opacity-100 transition">Privacy</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Terms</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Disclosures</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>&copy; 2026 Gurumbé Capital. All rights reserved.</p>
          <p>Building the South-to-South corridor.</p>
        </div>
      </div>
    </footer>
  );
}
