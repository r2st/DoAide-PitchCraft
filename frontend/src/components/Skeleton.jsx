export function SkeletonLine({ width = "100%" }) {
  return <div className="skeleton h-4 mb-2" style={{ width }} />;
}

export function SkeletonPanel({ lines = 3, label }) {
  return (
    <div className="panel" aria-busy="true" aria-label={label || "Loading"}>
      {Array.from({ length: lines }, (_, i) => (
        <SkeletonLine key={i} width={i === lines - 1 ? "60%" : "100%"} />
      ))}
    </div>
  );
}
