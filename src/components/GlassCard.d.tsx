type GlassCardProps = {
  title: string;
  version: string;
  children: React.ReactNode;
};

export default function GlassCard({
  title,
  version,
  children,
}: GlassCardProps) {
  return (
    <div className="glass-card">
      <h2>{title}</h2>
      <p>{version}</p>
      {children}
    </div>
  );
}
