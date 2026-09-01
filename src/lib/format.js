// Shared formatting helpers.

export const formatDate = (iso, opts = { day: "numeric", month: "long", year: "numeric" }) =>
  new Date(iso).toLocaleDateString("en-GB", opts);

export const formatShortDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });

export const isUpcoming = (iso) => {
  const d = new Date(iso);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d >= today;
};

// Group events by "Month Year" preserving order.
export const groupByMonth = (items) => {
  const groups = [];
  const index = new Map();
  for (const item of items) {
    const key = new Date(item.date).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    if (!index.has(key)) {
      index.set(key, groups.length);
      groups.push({ key, items: [] });
    }
    groups[index.get(key)].items.push(item);
  }
  return groups;
};
