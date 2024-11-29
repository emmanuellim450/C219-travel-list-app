export default function Stats({ items }) {
    const allItems = items.length; 
    const packedItems = items.filter((item) => item.packed).length; 
    const percentage = allItems > 0 ? (packedItems / allItems) * 100 : 0; 
  
    return (
      <footer className="stats">
        {percentage === 100 ? (
          <em>You got everything!</em>
        ) : (
          <em>
            You have {allItems} items in the list. You already packed {packedItems} (
            {Math.round(percentage)}%).
          </em>
        )}
      </footer>
    );
  }
  