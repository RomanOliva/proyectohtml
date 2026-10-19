function Text({ children, variant = 'p', className }) {
  const Tag = variant // 'h1', 'h3', 'p', 'span', etc.
  return <Tag className={className}>{children}</Tag>
}

export default Text
