import LineItem from "./lineitem";

export default function LineList({ lines, updateStatus, removeLine }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Lines</h2>
        <span className="text-xs text-gray-400">
          {lines.length} {lines.length === 1 ? "line" : "lines"} added
        </span>
      </div>

      {lines.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900 px-4 py-6 text-center text-sm text-gray-400">
          No lines yet. Add your first line above to start tracking.
        </div>
      ) : (
        <div className="space-y-2">
          {lines.map((line) => (
            <LineItem
              key={line.id}
              line={line}
              updateStatus={updateStatus}
              removeLine={removeLine}
            />
          ))}
        </div>
      )}
    </section>
  );
}
