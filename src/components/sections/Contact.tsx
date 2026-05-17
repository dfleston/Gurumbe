'use client'

import { useState } from 'react'

type InquiryType = 'investment' | 'partnership' | 'media'

type ContactProps = {
  dict: any
}

export default function Contact({ dict }: ContactProps) {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    type: '' as InquiryType | '',
    message: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: connect to API route / email service
    console.log('Dossier submitted:', form)
    setSubmitted(true)
    setForm({ name: '', organization: '', type: '', message: '', email: '' })
    setTimeout(() => setSubmitted(false), 6000)
  }

  const inquiryTypes: { value: InquiryType; label: string }[] = [
    { value: 'investment', label: dict.inquiryInvestment },
    { value: 'partnership', label: dict.inquiryPartnership },
    { value: 'media', label: dict.inquiryMedia },
  ]

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-surface-main)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--color-rule-line)',
      }}
    >
      <div className="container-max">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 7fr',
            gap: '5rem',
            alignItems: 'flex-start',
          }}
          className="contact-grid"
        >
          {/* Left — intro & info */}
          <div>
            <span className="section-label">{dict.label}</span>

            <h2
              className="font-display"
              style={{ color: 'var(--color-parchment)', marginBottom: '2rem', whiteSpace: 'pre-line' }}
            >
              {dict.headline}
            </h2>

            {/* Seed quote */}
            <div style={{ marginBottom: '3rem' }}>
              <p
                className="font-body-lg"
                style={{
                  color: 'var(--color-on-surface-variant)',
                  fontStyle: 'italic',
                  borderLeft: '2px solid var(--color-tertiary)',
                  paddingLeft: '1.5rem',
                  lineHeight: 1.7,
                }}
              >
                {dict.quote}
              </p>
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-tertiary-container)"
                  strokeWidth="1.5"
                  style={{ marginTop: '0.15rem', flexShrink: 0 }}
                >
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-label-sm" style={{ color: 'var(--color-parchment)', marginBottom: '0.25rem' }}>
                    {dict.hqLabel}
                  </p>
                  <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                    {dict.hqAddress}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-tertiary-container)"
                  strokeWidth="1.5"
                  style={{ marginTop: '0.15rem', flexShrink: 0 }}
                >
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-label-sm" style={{ color: 'var(--color-parchment)', marginBottom: '0.25rem' }}>
                    {dict.commsLabel}
                  </p>
                  <a
                    href="mailto:hello@gurumbe.capital"
                    className="font-body-md"
                    style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
                  >
                    hello@gurumbe.capital
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — dossier form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface-container)',
              border: '1px solid var(--color-outline-variant)',
              padding: '3.5rem',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 0',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    border: '2px solid var(--color-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="font-headline-md"
                  style={{ color: 'var(--color-parchment)', marginBottom: '0.75rem' }}
                >
                  {dict.successTitle}
                </h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {dict.successBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* Name + Organization */}
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}
                  className="form-row"
                >
                  <div>
                    <label className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', display: 'block', marginBottom: '0.5rem' }}>
                      {dict.formName} *
                    </label>
                    <input
                      className="input-line"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={dict.formNamePlaceholder}
                      required
                    />
                  </div>
                  <div>
                    <label className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', display: 'block', marginBottom: '0.5rem' }}>
                      {dict.formOrg}
                    </label>
                    <input
                      className="input-line"
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder={dict.formOrgPlaceholder}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', display: 'block', marginBottom: '0.5rem' }}>
                    {dict.formEmail} *
                  </label>
                  <input
                    className="input-line"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={dict.formEmailPlaceholder}
                    required
                  />
                </div>

                {/* Inquiry type */}
                <div>
                  <label className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', display: 'block', marginBottom: '1.25rem' }}>
                    {dict.formInquiryType}
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                    {inquiryTypes.map(({ value, label }) => (
                      <label
                        key={value}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={value}
                          checked={form.type === value}
                          onChange={() => setForm((p) => ({ ...p, type: value }))}
                          style={{
                            accentColor: 'var(--color-tertiary-container)',
                            width: '1rem',
                            height: '1rem',
                          }}
                        />
                        <span
                          className="font-label-sm"
                          style={{
                            color: form.type === value ? 'var(--color-tertiary-container)' : 'var(--color-on-surface-variant)',
                            transition: 'color 0.2s',
                          }}
                        >
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-label-sm" style={{ color: 'var(--color-on-surface-variant)', display: 'block', marginBottom: '0.5rem' }}>
                    {dict.formMessage}
                  </label>
                  <textarea
                    className="input-line"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={dict.formMessagePlaceholder}
                    rows={4}
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <div style={{ paddingTop: '0.5rem' }}>
                  <button type="submit" className="btn-ghost" style={{ width: '100%', cursor: 'pointer' }}>
                    {dict.formSubmit}
                  </button>
                  <p
                    className="font-label-sm"
                    style={{
                      color: 'var(--color-on-surface-variant)',
                      textAlign: 'center',
                      marginTop: '1rem',
                      opacity: 0.6,
                    }}
                  >
                    {dict.formPrivacy}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
