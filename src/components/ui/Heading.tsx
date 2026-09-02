interface HeadingProps {
  title: string
  subtitle: string
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="section-heading">
      <p className="overline">{subtitle}</p>
      <h2>{title}</h2>
      <div className="heading-line" />
    </div>
  )
}
