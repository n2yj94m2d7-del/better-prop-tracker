export default function Summary({ legs }) {
  const total = legs.length;
  const won = legs.filter((leg) => leg.status === "won").length;
  const lost = legs.filter((leg) => leg.status === "lost").length;
  const pending = legs.filter((leg) => leg.status === "pending").length;

  const progress =
    total === 0 ? 0 : Math.round(((won + lost) / total) * 100);

  return (
    <section className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Summary</h2>
        <span className="text-xs text-gray-400">
          Track the state of your parlay at a glance
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <SummaryCard label="Total Legs" value={total} />
        <SummaryCard label="Pending" value={pending} tone="amber" />
        <SummaryCard label="Won" value={won} tone="emerald" />
        <SummaryCard label="Lost" value={lost} tone="rose" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Progress</span>
          <span>{progress}% resolved</span>
        </div>
        <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}

function SummaryCard({ label, value, tone }) {
  const color =
    tone === "emerald"
      ? "text-emerald-300 border-emerald-500/30 bg-emerald-500/10"
      : tone === "rose"
      ? "text-rose-300 border-rose-500/30 bg-rose-500/10"
      : tone === "amber"
      ? "text-amber-300 border-amber-500/30 bg-amber-500/10"
      : "text-slate-200 border-gray-700 bg-gray-800";

  return (
    <div
      className={`rounded-xl border px-4 py-3 shadow-sm ${color}`}
    >
      <p className="text-xs uppercase tracking-wide text-gray-300">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
