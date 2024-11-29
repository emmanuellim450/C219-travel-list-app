import Item from "./Item";
export default function PackingList({ items, onDeleteItem, onUpdateItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={onDeleteItem} onUpdate={onUpdateItem} />
          ))}
        </ul>
      </div>
    );
  }