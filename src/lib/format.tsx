import React from 'react'

/**
 * Parses and formats inline tags `<italic>...</italic>` and `<bold>...</bold>` securely
 * using native React elements, supporting nesting (e.g. bold inside italic).
 */
export function formatText(text: string): React.ReactNode {
  if (!text) return null

  // Capture either <italic>...</italic> or <bold>...</bold> segments
  const regex = /(<italic>.*?<\/italic>|<bold>.*?<\/bold>)/g
  const parts = text.split(regex)

  return parts.map((part, i) => {
    if (part.startsWith('<italic>') && part.endsWith('</italic>')) {
      const inner = part.slice(8, -9)
      return (
        <em key={i} style={{ fontStyle: 'italic' }}>
          {formatText(inner)}
        </em>
      )
    }
    if (part.startsWith('<bold>') && part.endsWith('</bold>')) {
      const inner = part.slice(6, -7)
      return (
        <strong key={i} style={{ fontWeight: 'bold', color: 'var(--color-parchment)' }}>
          {formatText(inner)}
        </strong>
      )
    }
    return part
  })
}
