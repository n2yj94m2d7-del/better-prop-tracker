import { useState } from "react";

export default function SlipInput({ addLine }) {
  const [player, setPlayer] = useState("");
  const [prop, setProp] = useState("");
  const [odds, setOdds] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!player.trim() || !prop.trim()) return;

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    addLine({
      id,
      player: player.trim(),
      prop: prop.trim(),
      odds: odds.trim(),
      status: "pending",
    });

    setPlayer("");
    setProp("");
    setOdds("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-3 shadow-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          placeholder="Player (e.g. Justin Jefferson)"
          className="w-full rounded-lg bg-gray-800 border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          value={prop}
          onChange={(e) => setProp(e.target.value)}
          placeholder="Prop (e.g. 80+ receiving yards)"
          className="w-full rounded-lg bg-gray-800 border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <input
          value={odds}
          onChange={(e) => setOdds(e.target.value)}
          placeholder="Odds (e.g. -110)"
          className="w-full rounded-lg bg-gray-800 border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          Add each line with player, prop, and odds. Update status after games.
        </span>
        <button
          type="submit"
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-emerald-400 transition"
        >
          Add Line
        </button>
      </div>
    </form>
  );
}
