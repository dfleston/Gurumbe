import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AssetCard from '@/components/sections/AssetCard'
import { getDictionary } from '@/i18n/getDictionary'
import type { Locale } from '@/i18n/config'
import Link from 'next/link'

export default async function InvestPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as Locale)

  const nairobiCard = {
    city: 'Nairobi',
    country: 'Kenya',
    role: lang === 'es' ? 'El nodo tecnológico y financiero de África Oriental' : "East Africa's technology and financial hub",
    thesis:
      lang === 'es'
        ? 'Nairobi es la sede africana de más de 40 multinacionales y el ecosistema que produjo M-Pesa. La demanda corporativa de alojamiento servicio premium supera estructuralmente la oferta local — generando ocupaciones superiores al 80% anual en stock bien gestionado.'
        : 'Nairobi is home to the African headquarters of over 40 multinational corporations and the ecosystem that produced M-Pesa. Corporate demand for premium serviced accommodation structurally outpaces local supply — generating 80%+ annual occupancy in quality-managed stock.',
    marketDetail:
      lang === 'es'
        ? [
            'Alquileres de 2 dormitorios en Westlands y Kilimani: $2,500–$4,500 USD/mes',
            'Demanda impulsada por corporativos, DFIs y el sector tecnológico: no estacional',
            'El mercado denominado en USD protege contra la volatilidad del chelín keniano',
            'Infraestructura de vuelos directos desde Madrid, Londres, Dubai y Ámsterdam',
          ]
        : [
            '2-bed serviced units in Westlands & Kilimani: $2,500–$4,500 USD/month',
            'Demand driven by corporates, DFIs and tech sector — non-seasonal',
            'USD-denominated market insulates against Kenyan shilling volatility',
            'Direct flight infrastructure from Madrid, London, Dubai, and Amsterdam',
          ],
    yieldRange: '9–12%',
    appreciation: '6–9%',
    rightOfUse: lang === 'es' ? '14–21 noches' : '14–21 nights',
    accentColor: 'var(--color-primary)',
  }

  const accraCard = {
    city: 'Accra',
    country: 'Ghana',
    role: lang === 'es' ? 'El ancla más estable de África Occidental' : "West Africa's most stable gateway",
    thesis:
      lang === 'es'
        ? 'Ghana ofrece lo que pocos mercados africanos pueden: estado de derecho consistente, estabilidad democrática y el mayor concentración de finanzas de desarrollo en África Occidental. El mercado de Accra es menos maduro que el de Nairobi — lo que significa un punto de entrada más bajo y mayor potencial de apreciación.'
        : "Ghana offers what few African markets can: consistent rule of law, democratic stability, and the highest concentration of development finance capital in West Africa. Accra's market is less mature than Nairobi — meaning a lower entry point and greater appreciation upside.",
    marketDetail:
      lang === 'es'
        ? [
            'Unidades premium en Airport Residential Area: $1,800–$3,200 USD/mes',
            'Ocupación promedio del 75–85% en stock de calidad gestionado',
            'Mercado en etapa temprana: mayor potencial de crecimiento a largo plazo',
            'Sede diplomática, ONG y comunidad tecnológica en expansión',
          ]
        : [
            'Premium units in Airport Residential Area: $1,800–$3,200 USD/month',
            'Average 75–85% occupancy for quality-managed stock',
            'Earlier-stage market: greater long-term growth runway',
            'Home to diplomatic corps, NGO sector, and growing tech community',
          ],
    yieldRange: '8–11%',
    appreciation: '8–12%',
    rightOfUse: lang === 'es' ? '14–21 noches' : '14–21 nights',
    accentColor: 'var(--color-tertiary)',
  }

  const dealRows =
    lang === 'es'
      ? [
          ['Tipo de activo', 'Apartamento servicio premium, 2–4 unidades'],
          ['Geografía', 'Nairobi (Fase 1a) · Accra (Fase 1b)'],
          ['Vehículo legal', 'SPV constituida en Kenia / SPV constituida en Ghana'],
          ['Estándar de token', 'ERC-3643 (token de seguridad regulado)'],
          ['Ticket mínimo', 'Por confirmar con TokenCity — objetivo €5,000'],
          ['Distribución', 'Mensual, automatizada vía contrato inteligente'],
          ['Derecho de uso', 'Noches anuales proporcionales, reserva con conserje'],
          ['Salida', 'Mercado secundario vía plataforma TokenCity'],
          ['Auditoría', 'Valoración independiente anual'],
          ['Rail de distribución', 'TokenCity (compatible MiCA, regulado en la UE)'],
        ]
      : [
          ['Asset type', 'Premium serviced apartment, 2–4 units'],
          ['Geography', 'Nairobi (Phase 1a) · Accra (Phase 1b)'],
          ['Legal vehicle', 'Kenya-incorporated SPV / Ghana-incorporated SPV'],
          ['Token standard', 'ERC-3643 (regulated security token)'],
          ['Minimum ticket', 'TBC with TokenCity — targeting €5,000'],
          ['Distribution', 'Monthly, automated via smart contract'],
          ['Right-of-use', 'Proportional annual nights, concierged booking'],
          ['Exit', 'Secondary market via TokenCity platform'],
          ['Audit', 'Annual independent valuation'],
          ['Distribution rail', 'TokenCity (MiCA-compliant, EU-regulated)'],
        ]

  const phases =
    lang === 'es'
      ? [
          { num: '01', label: 'FASE 1 — RAÍCES', title: 'Inmobiliario Inteligente', status: 'ACTIVO', active: true },
          { num: '02', label: 'FASE 2 — POTENCIA', title: 'Infraestructura Energética', status: 'PRÓXIMA FASE', active: false },
          { num: '03', label: 'FASE 3 — ESCALA', title: 'VC Venture Building', status: 'PRÓXIMA FASE', active: false },
          { num: '04', label: 'FASE 4 — LIQUIDEZ', title: 'Acciones Públicas Africanas', status: 'PRÓXIMA FASE', active: false },
        ]
      : [
          { num: '01', label: 'PHASE 1 — ROOTS', title: 'Smart Real Estate', status: 'ACTIVE', active: true },
          { num: '02', label: 'PHASE 2 — POWER', title: 'Energy Infrastructure', status: 'NEXT PHASE', active: false },
          { num: '03', label: 'PHASE 3 — SCALE', title: 'VC Venture Building', status: 'NEXT PHASE', active: false },
          { num: '04', label: 'PHASE 4 — LIQUIDITY', title: 'African Public Equities', status: 'NEXT PHASE', active: false },
        ]

  const isEs = lang === 'es'

  return (
    <main className="min-h-screen bg-surface-main">
      <Navigation dict={dict.navigation} lang={lang} />

      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface)',
          borderBottom: '1px solid var(--color-rule-line)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle background arc */}
        <div
          className="bg-arc"
          style={{ width: '600px', height: '600px', right: '-100px', top: '-200px', borderColor: 'rgba(200,132,29,0.05)' }}
        />
        <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">{isEs ? 'INVERTIR · INVEST' : 'INVEST · INVERTIR'}</span>
          <h1
            className="font-display animate-fade-up"
            style={{ color: 'var(--color-parchment)', fontSize: '3.5rem', lineHeight: 1.1, marginTop: '1.5rem', marginBottom: '1.5rem', maxWidth: '42rem' }}
          >
            {isEs ? 'Acceso fraccionado a activos reales africanos.' : 'Fractional access to real African assets.'}
          </h1>
          <p
            className="font-body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem', lineHeight: 1.7, borderLeft: '2px solid var(--color-primary)', paddingLeft: '1.5rem' }}
          >
            {isEs
              ? 'Infraestructura premium. Entrada accesible. Rieles regulados. Y un derecho personal a descubrir África desde dentro.'
              : 'Premium infrastructure. Accessible entry. Regulated rails. And a personal right to discover Africa from the inside.'}
          </p>
        </div>
      </section>

      {/* ── THE CASE ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '5rem', alignItems: 'start' }} className="split-layout">
            <div>
              <span className="section-label">{isEs ? 'LA TESIS · THE CASE' : 'THE CASE · LA TESIS'}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
                {isEs ? 'Por qué ahora. Por qué aquí.' : 'Why now. Why here.'}
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="font-body-lg" style={{ color: 'var(--color-parchment)', lineHeight: 1.7, margin: 0 }}>
                {isEs
                  ? 'Los activos reales africanos están entre los más infravaluados, menos líquidos e inaccesibles del mundo. No por falta de valor — sino por falta de la infraestructura que los conecte al capital global.'
                  : 'African real assets are among the most underliquified, underpriced, and underaccessed on Earth. Not because they lack value — because they lack the infrastructure to connect them to global capital.'}
              </p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7, margin: 0 }}>
                {isEs
                  ? 'Gurumbé está construyendo esa infraestructura. Comenzando por la clase de activo con el proof of concept más inmediato, la mecánica de rendimiento más clara y el mayor alineamiento cultural con el corredor: el inmobiliario de hospitalidad y servicio premium.'
                  : 'Gurumbé is building that infrastructure. Starting with the asset class that has the most immediate proof of concept, the clearest yield mechanics, and the strongest cultural alignment with the corridor: hospitality and premium serviced real estate.'}
              </p>
              <div style={{ paddingTop: '0.5rem' }}>
                <Link
                  href={`/${lang}/africa`}
                  className="font-label-lg"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  {isEs ? 'La tesis de inversión completa →' : 'The full investment thesis →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSET ROADMAP ── */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '3rem' }}>
            <span className="section-label">{isEs ? 'HOJA DE RUTA · ROADMAP' : 'ROADMAP · HOJA DE RUTA'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {isEs ? 'Cuatro clases de activos. Un corredor.' : 'Four asset classes. One corridor.'}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="phases-grid">
            {phases.map((phase) => (
              <div
                key={phase.num}
                style={{
                  border: `1px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                  borderTop: `4px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                  padding: '2rem',
                  backgroundColor: phase.active ? 'var(--color-surface-container)' : 'transparent',
                  position: 'relative',
                }}
              >
                <span className="font-label-sm" style={{ color: phase.active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)', opacity: phase.active ? 1 : 0.5 }}>
                  {phase.label}
                </span>
                <h3 className="font-headline-md" style={{ color: phase.active ? 'var(--color-parchment)' : 'var(--color-on-surface-variant)', margin: '0.75rem 0 1rem', fontSize: '1.4rem', opacity: phase.active ? 1 : 0.5 }}>
                  {phase.title}
                </h3>
                <div
                  style={{
                    display: 'inline-block',
                    border: `1px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                    padding: '0.2rem 0.6rem',
                    opacity: phase.active ? 1 : 0.4,
                  }}
                >
                  <span className="font-label-sm" style={{ color: phase.active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}>
                    {phase.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 1 DEEP DIVE — CATEGORY THESIS ── */}
      <section style={{ paddingTop: '7rem', paddingBottom: '5rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '5rem', maxWidth: '52rem' }}>
            <span className="section-label">{isEs ? 'FASE 1 · INMOBILIARIO' : 'PHASE 1 · REAL ESTATE'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '2rem' }}>
              {isEs
                ? 'Inmobiliario africano tokenizado. Rendimiento programable. Derecho personal de uso.'
                : 'Tokenized African serviced real estate. Programmable yield. Personal right-of-use.'}
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.75, margin: 0 }}>
              {isEs
                ? 'El inmobiliario de hospitalidad y servicio premium en África Oriental y Occidental se encuentra en la intersección de tres fuerzas estructurales:'
                : 'Serviced and hospitality real estate in East and West Africa sits at the intersection of three structural forces:'}
            </p>
          </header>

          {/* Three force cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '6rem' }} className="forces-grid">
            {[
              {
                num: '01',
                title: isEs ? 'La demanda es estructural, no cíclica' : 'Demand is structural, not cyclical',
                body: isEs
                  ? 'El viaje corporativo intra-africano crece más rápido que el ocio. La expansión de multinacionales, instituciones de desarrollo y el sector tecnológico en Nairobi y Accra crea una demanda sostenida y no estacional de alojamiento servicio premium que la oferta local no puede satisfacer.'
                  : 'Intra-African corporate travel is growing faster than leisure. The expansion of multinational presence, development finance institutions, and tech-sector activity in Nairobi and Accra is creating sustained, non-seasonal demand for premium serviced accommodation that local supply cannot meet.',
                color: 'var(--color-primary)',
              },
              {
                num: '02',
                title: isEs ? 'Los rendimientos son altos porque el mercado es ineficiente' : 'Yields are higher because the market is less efficient',
                body: isEs
                  ? 'Los apartamentos servicio premium en Nairobi generan rendimientos brutos de alquiler del 8–12% — dos a tres veces más que en Madrid o Lisboa. La prima refleja la brecha de acceso, no el riesgo. La tokenización cierra esa brecha de acceso.'
                  : 'Premium serviced apartments in Nairobi generate gross rental yields of 8–12% — two to three times the equivalent in Madrid or Lisbon. The premium reflects the access gap, not the risk. Tokenization closes the access gap.',
                color: 'var(--color-secondary)',
              },
              {
                num: '03',
                title: isEs ? 'El derecho de uso es único en esta estructura' : 'The right-of-use is unique to this structure',
                body: isEs
                  ? 'Los titulares de tokens no solo poseen un instrumento financiero. Tienen un derecho programable a usar el inmueble — estancias con conserje, a tarifas que reflejan su participación. Es la invitación directa a descubrir África que ningún otro vehículo de inversión ofrece.'
                  : "Token holders don't just own a financial claim. They hold a programmable right to use the property — concierged stays, at rates reflecting their ownership stake. This is the direct invitation to discover Africa that no other investment vehicle offers.",
                color: 'var(--color-tertiary)',
              },
            ].map((card) => (
              <div
                key={card.num}
                style={{
                  borderLeft: `4px solid ${card.color}`,
                  paddingLeft: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <span className="font-label-sm" style={{ color: card.color }}>{card.num}</span>
                <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', fontSize: '1.3rem', margin: 0 }}>
                  {card.title}
                </h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          {/* Right-of-use callout */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-primary)',
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '7rem',
            }}
            className="split-layout"
          >
            <div>
              <span className="font-label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '1rem' }}>
                {isEs ? 'EL DIFERENCIADOR' : 'THE DIFFERENTIATOR'}
              </span>
              <p
                style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-parchment)', lineHeight: 1.3, margin: 0 }}
              >
                {isEs
                  ? 'No es solo una posición financiera. Es una invitación a estar dentro.'
                  : 'This is not just a financial position. It is an invitation to be inside.'}
              </p>
            </div>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.7, margin: 0 }}>
              {isEs
                ? 'Tu token incluye un derecho programable de uso personal — noches en la propiedad, con servicio de conserje, a tarifas proporcionales a tu participación. Para el inversor de la diáspora que tiene lazos familiares en la región. Para el europeo consciente del impacto que quiere ver lo que posee. Para el nómada digital que quiere acceso a África con alojamiento de calidad institucional. Ningún otro vehículo de inversión africana ofrece esto.'
                : 'Your token includes a programmable personal right-of-use — nights in the property, concierged, at rates proportional to your stake. For the diaspora investor with family ties in the region. For the impact-minded European who wants to see what they own. For the digital nomad who wants Africa access with institutional-grade accommodation. No other African investment vehicle offers this.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCATION THESIS — BIG ASSET CARDS ── */}
      <section
        style={{
          paddingTop: '2rem',
          paddingBottom: '7rem',
          backgroundColor: 'var(--color-surface-main)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">{isEs ? 'TESIS DE UBICACIÓN · LOCATION THESIS' : 'LOCATION THESIS · TESIS DE UBICACIÓN'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {isEs ? 'Por qué Nairobi y Accra.' : 'Why Nairobi and Accra.'}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="cards-grid">
            <AssetCard {...nairobiCard} />
            <AssetCard {...accraCard} />
          </div>
        </div>
      </section>

      {/* ── DEAL FORMAT ── */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '6rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '5rem', alignItems: 'start' }} className="split-layout">
            <div>
              <span className="section-label">{isEs ? 'FORMATO DE ACTIVO · DEAL FORMAT' : 'DEAL FORMAT · FORMATO DE ACTIVO'}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                {isEs ? 'Lo que estarías evaluando.' : 'What you would be evaluating.'}
              </h2>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: 0 }}>
                {isEs
                  ? 'Estamos en fase pre-cierre. Lo que podemos mostrar es la estructura — el formato que seguirá cada operación — para que puedas evaluar si este es el vehículo adecuado para tu asignación.'
                  : 'We are pre-first close. What we can show you is the structure — the format every deal will follow — so you can evaluate whether this is the right vehicle for your allocation.'}
              </p>
              <p
                className="font-label-sm"
                style={{ color: 'var(--color-on-surface-variant)', opacity: 0.5, marginTop: '2.5rem', lineHeight: 1.6 }}
              >
                {isEs
                  ? 'Gurumbé está diseñado tanto para asignadores institucionales como para inversores minoristas cualificados. Los tamaños mínimos de ticket son accesibles.'
                  : 'Gurumbé is designed for both institutional allocators and qualified retail investors. Minimum ticket sizes are accessible.'}
              </p>
            </div>

            {/* Deal structure table */}
            <div style={{ border: '1px solid var(--color-outline-variant)', overflow: 'hidden' }}>
              {dealRows.map(([label, value], i) => (
                <div
                  key={label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.6fr',
                    borderBottom: i < dealRows.length - 1 ? '1px solid var(--color-rule-line)' : 'none',
                  }}
                >
                  <div
                    style={{
                      padding: '1.1rem 1.5rem',
                      backgroundColor: 'var(--color-surface-container-low)',
                      borderRight: '1px solid var(--color-rule-line)',
                    }}
                  >
                    <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.7 }}>
                      {label.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ padding: '1.1rem 1.5rem' }}>
                    <span className="font-body-md" style={{ color: 'var(--color-parchment)' }}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESS PATH ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '8rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">{isEs ? 'PROCESO · PROCESS' : 'PROCESS · PROCESO'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {isEs ? 'Cómo entrar.' : 'How to get in.'}
            </h2>
            <div style={{ width: '4rem', height: '1px', backgroundColor: 'var(--color-rule-line)', marginTop: '1.5rem' }} />
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '5rem' }} className="steps-grid">
            {[
              {
                num: '01',
                title: isEs ? 'Expresa tu interés' : 'Express interest',
                body: isEs
                  ? 'Completa el formulario. Selecciona Inversión como tipo de consulta. Te enviaremos el memorando de información preliminar.'
                  : 'Complete the form below. Select Investment as inquiry type. We will send you the preliminary information memorandum.',
                accent: 'var(--color-primary)',
              },
              {
                num: '02',
                title: isEs ? 'Alta vía TokenCity' : 'Onboard via TokenCity',
                body: isEs
                  ? 'Verificación KYC/AML a través de nuestro socio de distribución regulado en la UE. El proceso tarda 10–15 minutos.'
                  : 'KYC/AML verification through our regulated EU distribution partner. The process takes 10–15 minutes.',
                accent: 'var(--color-secondary)',
              },
              {
                num: '03',
                title: isEs ? 'Asigna' : 'Allocate',
                body: isEs
                  ? 'Elige tu tramo. Recibe tus unidades digitales. Las distribuciones comienzan el primer mes tras la entrada en operación del activo.'
                  : 'Choose your tranche. Receive your digital units. Distributions begin the first month after the asset goes operational.',
                accent: 'var(--color-tertiary)',
              },
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-outline-variant)',
                  borderTop: `4px solid ${step.accent}`,
                  padding: '2.5rem',
                }}
              >
                <span className="font-label-lg" style={{ color: step.accent }}>{step.num}</span>
                <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', margin: '0.75rem 0 1rem', fontSize: '1.5rem' }}>
                  {step.title}
                </h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div
            style={{
              borderTop: '1px solid var(--color-rule-line)',
              paddingTop: '4rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <p
              className="font-body-lg"
              style={{ fontStyle: 'italic', color: 'var(--color-parchment)', margin: 0, maxWidth: '38rem' }}
            >
              {isEs
                ? 'Una semilla no pide permiso para crecer — encuentra su tierra y comienza.'
                : 'A seed does not ask permission to grow — it finds its ground and begins.'}
            </p>
            <Link href={`/${lang}/contact`} className="btn-ghost" style={{ padding: '1.25rem 3rem' }}>
              {isEs ? 'Unirse a la lista de espera →' : 'Join the waitlist →'}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict.footer} lang={lang} />

      <style>{`
        @media (max-width: 767px) {
          .split-layout  { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .forces-grid   { grid-template-columns: 1fr !important; }
          .phases-grid   { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
          .cards-grid    { grid-template-columns: 1fr !important; }
          .steps-grid    { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .forces-grid   { grid-template-columns: 1fr 1fr !important; }
          .phases-grid   { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
