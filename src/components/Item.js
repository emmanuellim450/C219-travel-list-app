export default function Item({ item, onDelete, onUpdate }) {
    return (
      <li
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
              <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onUpdate(item.id)}
        />
        {item.description} ({item.quantity}){" "}
        <button onClick={() => onDelete(item.id)}>🚮</button>
      </li>
    );
  }