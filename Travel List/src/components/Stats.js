export default function Stats({ items }) {
  const packedItemsCount = items.filter((item) => item.packed).length;
  const totalItemsCount = items.length;
  const packedPercentage = totalItemsCount
    ? ((packedItemsCount / totalItemsCount) * 100).toFixed(0)
    : 0;

  if (!totalItemsCount) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {packedPercentage < 100
          ? `👜 You have ${totalItemsCount} items on your list, and you already packed ${packedItemsCount} (${packedPercentage}%)`
          : "You got everything! Ready to go ✈"}
      </em>
    </footer>
  );
}
