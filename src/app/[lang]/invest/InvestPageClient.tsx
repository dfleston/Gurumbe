'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AssetCard, { AssetStage, AssetMetric } from '@/components/sections/AssetCard'
import Link from 'next/link'

// ─────────────────────────────────────────────────────────────
// Asset data
// ─────────────────────────────────────────────────────────────

interface AssetDef {
  city: string
  district?: string
  country: string
  countryKey: 'kenya' | 'ghana'
  role: string
  thesis: string
  stage: AssetStage
  accentColor: string
  marketDetail: string[]
  metrics: AssetMetric[]
  imageUrl?: string
}

const ASSETS_EN: AssetDef[] = [
  // ── KENYA ────────────────────────────────────────────────
  {
    city: 'Nairobi',
    district: 'Westlands · Kilimani · Upperhill',
    country: 'Kenya',
    countryKey: 'kenya',
    role: "East Africa's technology and financial capital",
    stage: 'OPERATIONAL',
    accentColor: 'var(--color-primary)',
    thesis:
      'Nairobi is home to the African headquarters of over 40 multinational corporations and the ecosystem that produced M-Pesa. Corporate demand for premium serviced accommodation structurally outpaces supply — generating 80%+ annual occupancy in quality-managed stock.',
    marketDetail: [
      '2-bed serviced units in Westlands & Kilimani: $2,500–$4,500 USD/month',
      'Demand driven by corporates, DFIs and tech sector — non-seasonal',
      'USD-denominated rents insulate against Kenyan shilling volatility',
      'Direct flights from Madrid, London, Dubai, and Amsterdam',
    ],
    metrics: [
      { label: 'GROSS RENTAL YIELD', value: '9–12%', sub: 'per annum' },
      { label: '5-YR APPRECIATION', value: '6–9%', sub: 'per annum' },
      { label: 'RIGHT-OF-USE', value: '14–21 nights', sub: 'per token tranche / year' },
    ],
  },
  {
    city: 'Mombasa',
    district: 'Nyali · Bamburi · Shanzu',
    country: 'Kenya',
    countryKey: 'kenya',
    role: 'Swahili coast leisure and boutique hospitality',
    stage: 'CONSTRUCTION',
    accentColor: 'var(--color-primary)',
    thesis:
      "Mombasa's Nyali and Bamburi shoreline is Kenya's premier coastal leisure destination. Tourism is rebounding strongly post-2022 with growing intra-African and European travel. Boutique serviced villas and apartments command premium nightly rates that outperform Nairobi on a per-night basis — with a strong right-of-use story for investors seeking physical discovery.",
    marketDetail: [
      'Boutique serviced units: $180–$380 USD/night (peak season)',
      'Growing diaspora demand: Kenyan expats investing in coastal lifestyle assets',
      'UNESCO-listed Old Town proximity adds cultural tourism draw',
      'Seasonal profile — peak Nov–Mar aligns with European winter escape',
    ],
    metrics: [
      { label: 'PROJ. YIELD ON COMPLETION', value: '10–14%', sub: 'gross, stabilised occupancy' },
      { label: 'PRE-COMPLETION DISCOUNT', value: '15–20%', sub: 'vs estimated completion value' },
      { label: 'RIGHT-OF-USE', value: '10–14 nights', sub: 'per token tranche / year (peak)' },
    ],
  },
  {
    city: 'Tatu City',
    district: 'Kiambu County — 30km north of Nairobi',
    country: 'Kenya',
    countryKey: 'kenya',
    role: "Africa's most advanced planned city — land and early-stage play",
    stage: 'LAND',
    accentColor: 'var(--color-primary)',
    thesis:
      "Tatu City is a 5,000-acre Special Economic Zone 30km from Nairobi CBD — Africa's most advanced planned urban development, with its own governance, power, and road infrastructure. Over 250 companies have signed up. Residential and hospitality land within the SEZ is a fundamentally different risk profile: infrastructure-stage appreciation, not current yield. The thesis is entry price and zoning certainty.",
    marketDetail: [
      'Special Economic Zone status: tax incentives, own governance, infrastructure',
      'Anchor tenants include DHL, Unilever, Krones, and over 250 companies',
      'Phase 3 residential and hospitality plots now available to investors',
      'Nairobi CBD 30-minute drive — growing shuttle and future rail connection',
    ],
    metrics: [
      { label: 'PROJECTED 5-YR LAND APPRECIATION', value: '18–25%', sub: 'per annum (SEZ infrastructure build-out)' },
      { label: 'DEVELOPMENT HORIZON', value: '3–5 yrs', sub: 'to hospitality asset completion' },
      { label: 'ENTRY STAGE', value: 'Pre-zoning', sub: 'maximum appreciation window' },
    ],
  },
  // ── GHANA ────────────────────────────────────────────────
  {
    city: 'Accra',
    district: 'Airport Residential · Cantonments · East Legon',
    country: 'Ghana',
    countryKey: 'ghana',
    role: "West Africa's most stable gateway",
    stage: 'OPERATIONAL',
    accentColor: 'var(--color-tertiary)',
    thesis:
      "Ghana offers what few African markets can: consistent rule of law, democratic stability, and the highest concentration of development finance in West Africa. Accra's market is less mature than Nairobi — a lower entry point and greater appreciation upside.",
    marketDetail: [
      'Premium units in Airport Residential Area: $1,800–$3,200 USD/month',
      'Average 75–85% occupancy for quality-managed stock',
      'Home to diplomatic corps, NGO sector, and growing tech community',
      'Earlier-stage market: greater long-term growth runway vs saturated West',
    ],
    metrics: [
      { label: 'GROSS RENTAL YIELD', value: '8–11%', sub: 'per annum' },
      { label: '5-YR APPRECIATION', value: '8–12%', sub: 'per annum' },
      { label: 'RIGHT-OF-USE', value: '14–21 nights', sub: 'per token tranche / year' },
    ],
  },
  {
    city: 'Takoradi',
    district: "Ghana's oil and gas capital",
    country: 'Ghana',
    countryKey: 'ghana',
    role: 'Energy sector corporate accommodation — defensive USD yield',
    stage: 'CONSTRUCTION',
    accentColor: 'var(--color-tertiary)',
    thesis:
      "Takoradi is Ghana's oil and gas hub — home to the offshore Jubilee, TEN, and Sankofa fields. The corporate accommodation market is driven by energy sector employees, contractors, and visiting executives who require secure, premium serviced apartments on medium-term contracts. Demand is non-seasonal, USD-denominated, and structurally undersupplied relative to the workforce expansion underway.",
    marketDetail: [
      'Corporate serviced units: $2,000–$3,800 USD/month on 3–12 month contracts',
      'Tenants: oil majors, EPC contractors, and DFI staff — very low default risk',
      'Harbour expansion driving new wave of infrastructure investment through 2027',
      'Limited quality stock creates structural supply gap — low competition',
    ],
    metrics: [
      { label: 'PROJ. YIELD ON COMPLETION', value: '11–15%', sub: 'gross — defensive corporate tenant base' },
      { label: 'CONTRACT DURATION', value: '3–12 months', sub: 'medium-term, low vacancy risk' },
      { label: 'CURRENCY', value: 'USD', sub: 'rents denominated in dollars' },
    ],
  },
  {
    city: 'Cape Coast',
    district: 'UNESCO World Heritage coastline',
    country: 'Ghana',
    countryKey: 'ghana',
    role: 'Cultural heritage tourism and diaspora leisure',
    stage: 'LAND',
    accentColor: 'var(--color-tertiary)',
    thesis:
      "Cape Coast is Ghana's UNESCO World Heritage city and the spiritual home of the African diaspora — site of Cape Coast Castle, the departure point of the transatlantic slave trade. 'Year of Return' momentum, launched in 2019, has permanently shifted diaspora tourism to Ghana. Premium boutique hospitality on the Cape Coast shoreline is the highest-alignment asset in the portfolio: where culture, history, and capital meet.",
    marketDetail: [
      'UNESCO listing drives growing European and American cultural tourism',
      'Diaspora investor and visitor demand structurally growing since Year of Return 2019',
      'Very limited premium accommodation — most stock is budget or mid-market',
      'Land values rising but still accessible — clear first-mover advantage',
    ],
    metrics: [
      { label: 'PROJ. 5-YR LAND APPRECIATION', value: '20–28%', sub: 'per annum (early-stage cultural destination)' },
      { label: 'DEVELOPMENT HORIZON', value: '2–4 yrs', sub: 'to boutique hospitality asset' },
      { label: 'CULTURAL ALIGNMENT', value: 'Highest', sub: 'diaspora + corridor investor thesis' },
    ],
  },
]

const ASSETS_ES: AssetDef[] = [
  {
    city: 'Nairobi',
    district: 'Westlands · Kilimani · Upperhill',
    country: 'Kenia',
    countryKey: 'kenya',
    role: 'Capital tecnológica y financiera de África Oriental',
    stage: 'OPERATIONAL',
    accentColor: 'var(--color-primary)',
    thesis:
      'Nairobi alberga las sedes africanas de más de 40 multinacionales y el ecosistema que produjo M-Pesa. La demanda corporativa de alojamiento servicio premium supera estructuralmente la oferta — con ocupaciones superiores al 80% anual en stock bien gestionado.',
    marketDetail: [
      'Unidades de 2 dormitorios en Westlands y Kilimani: $2,500–$4,500 USD/mes',
      'Demanda de corporativos, IFDs y sector tecnológico — no estacional',
      'Rentas en USD protegen contra la volatilidad del chelín keniano',
      'Vuelos directos desde Madrid, Londres, Dubái y Ámsterdam',
    ],
    metrics: [
      { label: 'RENDIMIENTO BRUTO ALQUILER', value: '9–12%', sub: 'anual' },
      { label: 'REVALORIZACIÓN 5 AÑOS', value: '6–9%', sub: 'anual' },
      { label: 'DERECHO DE USO', value: '14–21 noches', sub: 'por tramo de token / año' },
    ],
  },
  {
    city: 'Mombasa',
    district: 'Nyali · Bamburi · Shanzu',
    country: 'Kenia',
    countryKey: 'kenya',
    role: 'Costa suajili — ocio y hospitalidad boutique',
    stage: 'CONSTRUCTION',
    accentColor: 'var(--color-primary)',
    thesis:
      'La costa de Nyali y Bamburi en Mombasa es el principal destino de ocio costero de Kenia. El turismo se recupera con fuerza con creciente demanda intra-africana y europea. Villas y apartamentos servicio boutique alcanzan tarifas nocturnas que superan a Nairobi — con una fuerte narrativa de derecho de uso para inversores.',
    marketDetail: [
      'Unidades boutique servicio: $180–$380 USD/noche (temporada alta)',
      'Creciente demanda de la diáspora keniana en activos costeros',
      'Proximidad al Casco Antiguo declarado Patrimonio de la Humanidad',
      'Perfil estacional — pico noviembre-marzo alineado con el invierno europeo',
    ],
    metrics: [
      { label: 'RENDIMIENTO PROY. EN OPERACIÓN', value: '10–14%', sub: 'bruto, ocupación estabilizada' },
      { label: 'DESCUENTO PRE-CONSTRUCCIÓN', value: '15–20%', sub: 'vs. valor estimado en finalización' },
      { label: 'DERECHO DE USO', value: '10–14 noches', sub: 'por tramo / año (temporada alta)' },
    ],
  },
  {
    city: 'Tatu City',
    district: 'Condado de Kiambu — 30km al norte de Nairobi',
    country: 'Kenia',
    countryKey: 'kenya',
    role: 'La ciudad planificada más avanzada de África — activo de suelo',
    stage: 'LAND',
    accentColor: 'var(--color-primary)',
    thesis:
      'Tatu City es una Zona Económica Especial de 2.000 hectáreas a 30km del centro de Nairobi — el desarrollo urbano planificado más avanzado de África, con gobernanza, energía e infraestructura vial propias. Más de 250 empresas ya están establecidas. El suelo residencial y hotelero dentro de la ZEE es una apuesta por la revalorización en fase de infraestructura.',
    marketDetail: [
      'Estatus de Zona Económica Especial: incentivos fiscales, gobernanza e infraestructura propias',
      'Empresas ancla: DHL, Unilever, Krones y más de 250 compañías',
      'Parcelas residenciales y hoteleras de Fase 3 disponibles para inversores',
      '30 minutos en coche desde el centro de Nairobi — conexión de tren futura',
    ],
    metrics: [
      { label: 'REVALORIZACIÓN SUELO PROY. 5 AÑOS', value: '18–25%', sub: 'anual (desarrollo de infraestructura ZEE)' },
      { label: 'HORIZONTE DE DESARROLLO', value: '3–5 años', sub: 'hasta activo hotelero en operación' },
      { label: 'FASE DE ENTRADA', value: 'Pre-zonificación', sub: 'máxima ventana de revalorización' },
    ],
  },
  {
    city: 'Accra',
    district: 'Airport Residential · Cantonments · East Legon',
    country: 'Ghana',
    countryKey: 'ghana',
    role: 'El ancla más estable de África Occidental',
    stage: 'OPERATIONAL',
    accentColor: 'var(--color-tertiary)',
    thesis:
      'Ghana ofrece lo que pocos mercados africanos pueden: estado de derecho consistente, estabilidad democrática y la mayor concentración de capital de desarrollo en África Occidental. El mercado de Accra es menos maduro que el de Nairobi — un punto de entrada más bajo y mayor potencial de revalorización.',
    marketDetail: [
      'Unidades premium en Airport Residential Area: $1,800–$3,200 USD/mes',
      'Ocupación media del 75–85% en stock de calidad gestionado',
      'Sede del cuerpo diplomático, sector ONG y creciente comunidad tecnológica',
      'Mercado en etapa temprana: mayor potencial de crecimiento a largo plazo',
    ],
    metrics: [
      { label: 'RENDIMIENTO BRUTO ALQUILER', value: '8–11%', sub: 'anual' },
      { label: 'REVALORIZACIÓN 5 AÑOS', value: '8–12%', sub: 'anual' },
      { label: 'DERECHO DE USO', value: '14–21 noches', sub: 'por tramo de token / año' },
    ],
  },
  {
    city: 'Takoradi',
    district: 'Capital del petróleo y gas de Ghana',
    country: 'Ghana',
    countryKey: 'ghana',
    role: 'Alojamiento corporativo sector energético — rendimiento defensivo en USD',
    stage: 'CONSTRUCTION',
    accentColor: 'var(--color-tertiary)',
    thesis:
      'Takoradi es el hub de petróleo y gas de Ghana — sede de los campos offshore Jubilee, TEN y Sankofa. El mercado de alojamiento corporativo está impulsado por empleados del sector energético, contratistas y ejecutivos que requieren apartamentos servicio seguros en contratos de medio plazo. La demanda es no estacional, denominada en USD y estructuralmente inferior a la oferta.',
    marketDetail: [
      'Unidades corporativas servicio: $2,000–$3,800 USD/mes en contratos de 3–12 meses',
      'Inquilinos: grandes petroleras, contratistas EPC y personal de IFDs — riesgo de impago muy bajo',
      'Expansión del puerto impulsa nueva oleada de inversión en infraestructura hasta 2027',
      'Escaso stock de calidad — brecha de oferta estructural y baja competencia',
    ],
    metrics: [
      { label: 'RENDIMIENTO PROY. EN OPERACIÓN', value: '11–15%', sub: 'bruto — base de inquilinos corporativos' },
      { label: 'DURACIÓN DE CONTRATO', value: '3–12 meses', sub: 'medio plazo, bajo riesgo de vacancia' },
      { label: 'DIVISA', value: 'USD', sub: 'rentas denominadas en dólares' },
    ],
  },
  {
    city: 'Cape Coast',
    district: 'Costa Patrimonio de la Humanidad UNESCO',
    country: 'Ghana',
    countryKey: 'ghana',
    role: 'Turismo cultural patrimonial y ocio para la diáspora',
    stage: 'LAND',
    accentColor: 'var(--color-tertiary)',
    thesis:
      'Cape Coast es la ciudad Patrimonio de la Humanidad de Ghana y el hogar espiritual de la diáspora africana — sede del Castillo de Cape Coast, punto de partida de la trata transatlántica. El impulso del "Año del Retorno" de 2019 ha reorientado permanentemente el turismo de la diáspora hacia Ghana. Hospitalidad boutique premium en la costa de Cape Coast es el activo de mayor alineamiento cultural de la cartera.',
    marketDetail: [
      'La declaración UNESCO impulsa el turismo cultural europeo y americano',
      'Demanda de inversores y visitantes de la diáspora en crecimiento estructural desde 2019',
      'Oferta de alojamiento premium muy limitada — mayoría es presupuesto o gama media',
      'Valores del suelo en alza pero aún accesibles — clara ventaja de primer moverder',
    ],
    metrics: [
      { label: 'REVALORIZACIÓN SUELO PROY. 5 AÑOS', value: '20–28%', sub: 'anual (destino cultural en etapa temprana)' },
      { label: 'HORIZONTE DE DESARROLLO', value: '2–4 años', sub: 'hasta activo hotelero boutique' },
      { label: 'ALINEAMIENTO CULTURAL', value: 'Máximo', sub: 'tesis inversor diáspora + corredor' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// Stage explainer data
// ─────────────────────────────────────────────────────────────

function StageExplainer({ isEs }: { isEs: boolean }) {
  const stages = isEs
    ? [
      {
        key: 'SUELO',
        color: '#b5651d',
        title: 'Suelo',
        risk: 'Mayor riesgo · Mayor revalorización',
        body: 'Activos en fase de adquisición de suelo y tramitación de permisos. Sin rendimiento corriente. El inversor captura la máxima revalorización a cambio de un horizonte de desarrollo más largo (3–5 años) y el riesgo de planificación asociado.',
      },
      {
        key: 'EN CONSTRUCCIÓN',
        color: '#c8a84b',
        title: 'En Construcción',
        risk: 'Riesgo medio · Descuento pre-conclusión',
        body: 'Activos con permisos concedidos, financiación asegurada y construcción en curso. El inversor accede con un descuento del 15–20% respecto al valor estimado en finalización. El rendimiento comienza en la fecha de entrada en operación.',
      },
      {
        key: 'OPERATIVO',
        color: '#4a9e6b',
        title: 'Operativo',
        risk: 'Menor riesgo · Rendimiento inmediato',
        body: 'Activos en plena operación con inquilinos establecidos y historial de ocupación. El rendimiento comienza el primer mes. El derecho de uso personal está activo inmediatamente. El perfil de revalorización es más conservador pero el flujo de caja es verificable.',
      },
    ]
    : [
      {
        key: 'LAND',
        color: '#b5651d',
        title: 'Land',
        risk: 'Highest risk · Highest appreciation',
        body: 'Assets in the land acquisition and planning permission phase. No current yield. The investor captures maximum appreciation in exchange for a longer development horizon (3–5 years) and the associated planning risk.',
      },
      {
        key: 'IN CONSTRUCTION',
        color: '#c8a84b',
        title: 'In Construction',
        risk: 'Medium risk · Pre-completion discount',
        body: 'Assets with permits granted, financing secured, and construction underway. The investor enters at a 15–20% discount to estimated completion value. Yield begins at the operational date.',
      },
      {
        key: 'OPERATIONAL',
        color: '#4a9e6b',
        title: 'Operational',
        risk: 'Lowest risk · Immediate yield',
        body: 'Assets in full operation with established tenants and occupancy history. Yield begins month one. Personal right-of-use is active immediately. The appreciation profile is more conservative but cash flow is verifiable.',
      },
    ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="forces-grid">
      {stages.map((s) => (
        <div
          key={s.key}
          style={{ borderLeft: `4px solid ${s.color}`, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: `${s.color}20`,
                border: `1px solid ${s.color}`,
                padding: '0.15rem 0.6rem',
              }}
            >
              <span className="font-label-sm" style={{ color: s.color }}>{s.key}</span>
            </span>
          </div>
          <h4 className="font-headline-md" style={{ color: 'var(--color-parchment)', fontSize: '1.3rem', margin: 0 }}>{s.title}</h4>
          <p className="font-label-sm" style={{ color: s.color, fontStyle: 'italic', margin: 0 }}>{s.risk}</p>
          <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6, margin: 0 }}>{s.body}</p>
        </div>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Country tab component
// ─────────────────────────────────────────────────────────────

type CountryKey = 'kenya' | 'ghana'

// ─────────────────────────────────────────────────────────────
// Page (client component — tabs need interactivity)
// ─────────────────────────────────────────────────────────────

export default function InvestPageClient({ lang, dict }: { lang: string; dict: any }) {
  const isEs = lang === 'es'
  const assets = isEs ? ASSETS_ES : ASSETS_EN

  const [activeCountry, setActiveCountry] = useState<CountryKey>('kenya')

  const filteredAssets = assets.filter((a) => a.countryKey === activeCountry)

  const countries = isEs
    ? [{ key: 'kenya' as CountryKey, label: 'Kenia' }, { key: 'ghana' as CountryKey, label: 'Ghana' }]
    : [{ key: 'kenya' as CountryKey, label: 'Kenya' }, { key: 'ghana' as CountryKey, label: 'Ghana' }]

  const dealRows = isEs
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
        <div className="bg-arc" style={{ width: '600px', height: '600px', right: '-100px', top: '-200px', borderColor: 'rgba(200,132,29,0.05)' }} />
        <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label">{isEs ? 'INVERTIR · INVEST' : 'INVEST · INVERTIR'}</span>
          <h1
            className="font-display animate-fade-up"
            style={{ color: 'var(--color-parchment)', fontSize: '3.5rem', lineHeight: 1.1, marginTop: '1.5rem', marginBottom: '1.5rem', maxWidth: '44rem' }}
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
                  ? 'Gurumbé construye esa infraestructura. Comenzando por el activo con el proof of concept más inmediato: hospitalidad y servicio real estate premium en los mercados más dinámicos del corredor.'
                  : 'Gurumbé is building that infrastructure. Starting with the asset class with the most immediate proof of concept: premium hospitality and serviced real estate in the corridor\'s most dynamic markets.'}
              </p>
              <Link href={`/${lang}/africa`} className="font-label-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', textDecoration: 'none' }}>
                {isEs ? 'La tesis de inversión completa →' : 'The full investment thesis →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-rule-line)', borderBottom: '1px solid var(--color-rule-line)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '3rem' }}>
            <span className="section-label">{isEs ? 'HOJA DE RUTA · ROADMAP' : 'ROADMAP · HOJA DE RUTA'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {isEs ? 'Cuatro clases de activos. Un corredor.' : 'Four asset classes. One corridor.'}
            </h2>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="phases-grid">
            {(isEs
              ? [
                { num: '01', label: 'FASE 1 — RAÍCES', title: 'Inmobiliario Inteligente', active: true },
                { num: '02', label: 'FASE 2 — POTENCIA', title: 'Infraestructura Energética', active: false },
                { num: '03', label: 'FASE 3 — ESCALA', title: 'VC Venture Building', active: false },
                { num: '04', label: 'FASE 4 — LIQUIDEZ', title: 'Acciones Públicas Africanas', active: false },
              ]
              : [
                { num: '01', label: 'PHASE 1 — ROOTS', title: 'Smart Real Estate', active: true },
                { num: '02', label: 'PHASE 2 — POWER', title: 'Energy Infrastructure', active: false },
                { num: '03', label: 'PHASE 3 — SCALE', title: 'VC Venture Building', active: false },
                { num: '04', label: 'PHASE 4 — LIQUIDITY', title: 'African Public Equities', active: false },
              ]
            ).map((phase) => (
              <div
                key={phase.num}
                style={{
                  border: `1px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                  borderTop: `4px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                  padding: '2rem',
                  backgroundColor: phase.active ? 'var(--color-surface-container)' : 'transparent',
                  opacity: phase.active ? 1 : 0.5,
                }}
              >
                <span className="font-label-sm" style={{ color: phase.active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}>{phase.label}</span>
                <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', margin: '0.75rem 0 1rem', fontSize: '1.4rem' }}>{phase.title}</h3>
                <span className="font-label-sm" style={{ color: phase.active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)', border: `1px solid ${phase.active ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`, padding: '0.2rem 0.6rem', display: 'inline-block' }}>
                  {phase.active ? (isEs ? 'ACTIVO' : 'ACTIVE') : (isEs ? 'PRÓXIMA FASE' : 'NEXT PHASE')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAGE EXPLAINER ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '3.5rem' }}>
            <span className="section-label">{isEs ? 'FASES DE DESARROLLO · DEVELOPMENT STAGES' : 'DEVELOPMENT STAGES · FASES DE DESARROLLO'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1rem' }}>
              {isEs ? 'Tres fases. Tres perfiles de riesgo-retorno.' : 'Three stages. Three risk-return profiles.'}
            </h2>
            <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '42rem' }}>
              {isEs
                ? 'El pipeline de Gurumbé incluye activos en distintas fases de desarrollo. Cada fase tiene un perfil de riesgo, horizonte y retorno diferente. Entiende en qué estás invirtiendo antes de asignar.'
                : "Gurumbé's pipeline spans assets at different stages of development. Each stage carries a distinct risk profile, horizon, and return character. Understand what you are investing in before you allocate."}
            </p>
          </header>
          <StageExplainer isEs={isEs} />
        </div>
      </section>

      {/* ── RIGHT-OF-USE CALLOUT ── */}
      <section style={{ paddingTop: '0', paddingBottom: '5rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-primary)',
              padding: '3rem',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="split-layout"
          >
            <div>
              <span className="font-label-sm" style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '1rem' }}>
                {isEs ? 'EL DIFERENCIADOR' : 'THE DIFFERENTIATOR'}
              </span>
              <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-parchment)', lineHeight: 1.3, margin: 0 }}>
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

      {/* ── ASSET PIPELINE — TABBED BY COUNTRY ── */}
      <section
        style={{
          paddingTop: '6rem',
          paddingBottom: '7rem',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-rule-line)',
          borderBottom: '1px solid var(--color-rule-line)',
        }}
      >
        <div className="container-max">
          <header style={{ marginBottom: '3rem' }}>
            <span className="section-label">{isEs ? 'PIPELINE DE ACTIVOS · ASSET PIPELINE' : 'ASSET PIPELINE · PIPELINE DE ACTIVOS'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {isEs ? 'Dónde estamos construyendo.' : 'Where we are building.'}
            </h2>
          </header>

          {/* Country tabs */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', borderBottom: '1px solid var(--color-rule-line)' }}>
            {countries.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCountry(c.key)}
                className="font-label-lg"
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeCountry === c.key ? '2px solid var(--color-primary)' : '2px solid transparent',
                  color: activeCountry === c.key ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                  padding: '1rem 2rem',
                  cursor: 'pointer',
                  marginBottom: '-1px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                {c.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cards — 3 per country in responsive grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="cards-grid">
            {filteredAssets.map((asset) => (
              <AssetCard key={`${asset.city}-${asset.stage}`} {...asset} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DEAL FORMAT ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'var(--color-surface-main)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '5rem', alignItems: 'start' }} className="split-layout">
            <div>
              <span className="section-label">{isEs ? 'FORMATO DE ACTIVO · DEAL FORMAT' : 'DEAL FORMAT · FORMATO DE ACTIVO'}</span>
              <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                {isEs ? 'Lo que estarías evaluando.' : 'What you would be evaluating.'}
              </h2>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: '0 0 2rem' }}>
                {isEs
                  ? 'Estamos en fase pre-cierre. Lo que podemos mostrar es la estructura — el formato que seguirá cada operación.'
                  : 'We are pre-first close. What we can show you is the structure — the format every deal will follow.'}
              </p>
              <p className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.5, lineHeight: 1.6 }}>
                {isEs
                  ? 'Gurumbé está diseñado tanto para asignadores institucionales como para inversores minoristas cualificados. Los tamaños mínimos de ticket son accesibles.'
                  : 'Gurumbé is designed for both institutional allocators and qualified retail investors. Minimum ticket sizes are accessible.'}
              </p>
            </div>
            <div style={{ border: '1px solid var(--color-outline-variant)', overflow: 'hidden' }}>
              {dealRows.map(([label, value], i) => (
                <div
                  key={label}
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', borderBottom: i < dealRows.length - 1 ? '1px solid var(--color-rule-line)' : 'none' }}
                >
                  <div style={{ padding: '1.1rem 1.5rem', backgroundColor: 'var(--color-surface-container-low)', borderRight: '1px solid var(--color-rule-line)' }}>
                    <span className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.7 }}>{label.toUpperCase()}</span>
                  </div>
                  <div style={{ padding: '1.1rem 1.5rem' }}>
                    <span className="font-body-md" style={{ color: 'var(--color-parchment)' }}>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCESS PATH ── */}
      <section style={{ paddingTop: '6rem', paddingBottom: '8rem', backgroundColor: 'var(--color-surface)', borderTop: '1px solid var(--color-rule-line)' }}>
        <div className="container-max">
          <header style={{ marginBottom: '4rem' }}>
            <span className="section-label">{isEs ? 'PROCESO · PROCESS' : 'PROCESS · PROCESO'}</span>
            <h2 className="font-display" style={{ color: 'var(--color-parchment)', marginTop: '0.5rem' }}>
              {isEs ? 'Cómo entrar.' : 'How to get in.'}
            </h2>
          </header>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '5rem' }} className="steps-grid">
            {(isEs
              ? [
                { num: '01', title: 'Expresa tu interés', body: 'Completa el formulario. Selecciona Inversión como tipo de consulta. Te enviaremos el memorando de información preliminar.', accent: 'var(--color-primary)' },
                { num: '02', title: 'Alta vía TokenCity', body: 'Verificación KYC/AML a través de nuestro socio de distribución regulado en la UE. El proceso tarda 10–15 minutos.', accent: 'var(--color-secondary)' },
                { num: '03', title: 'Asigna', body: 'Elige tu tramo. Recibe tus unidades digitales. Las distribuciones comienzan el primer mes tras la entrada en operación del activo.', accent: 'var(--color-tertiary)' },
              ]
              : [
                { num: '01', title: 'Express interest', body: 'Complete the form. Select Investment as inquiry type. We will send you the preliminary information memorandum.', accent: 'var(--color-primary)' },
                { num: '02', title: 'Onboard via TokenCity', body: 'KYC/AML verification through our regulated EU distribution partner. The process takes 10–15 minutes.', accent: 'var(--color-secondary)' },
                { num: '03', title: 'Allocate', body: 'Choose your tranche. Receive your digital units. Distributions begin the first month after the asset goes operational.', accent: 'var(--color-tertiary)' },
              ]
            ).map((step) => (
              <div key={step.num} style={{ backgroundColor: 'var(--color-surface-main)', border: '1px solid var(--color-outline-variant)', borderTop: `4px solid ${step.accent}`, padding: '2.5rem' }}>
                <span className="font-label-lg" style={{ color: step.accent }}>{step.num}</span>
                <h3 className="font-headline-md" style={{ color: 'var(--color-parchment)', margin: '0.75rem 0 1rem', fontSize: '1.5rem' }}>{step.title}</h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--color-rule-line)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <p className="font-body-lg" style={{ fontStyle: 'italic', color: 'var(--color-parchment)', margin: 0, maxWidth: '38rem' }}>
              {isEs ? 'Una semilla no pide permiso para crecer — encuentra su tierra y comienza.' : 'A seed does not ask permission to grow — it finds its ground and begins.'}
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
          .split-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .forces-grid  { grid-template-columns: 1fr !important; }
          .phases-grid  { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
          .cards-grid   { grid-template-columns: 1fr !important; }
          .steps-grid   { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .forces-grid  { grid-template-columns: 1fr 1fr !important; }
          .phases-grid  { grid-template-columns: 1fr 1fr !important; }
          .cards-grid   { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
