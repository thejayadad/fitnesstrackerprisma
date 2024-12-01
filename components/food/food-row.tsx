'use client'
import React, { useState } from 'react';

interface Food {
  id: string;
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  category: string;
}

interface FoodTableRowProps {
  food: Food;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedData: Partial<Food>) => void;
}

const FoodTableRow: React.FC<FoodTableRowProps> = ({ food, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState<Partial<Food>>({
    name: food.name,
    protein: food.protein,
    carbs: food.carbs,
    fats: food.fats,
    category: food.category,
  });

  const handleSave = () => {
    onUpdate(food.id, updatedData);
    setIsEditing(false);
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={updatedData.name || ''}
              onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
              className="input input-sm w-full"
            />
          </td>
          <td>
            <input
              type="number"
              value={updatedData.protein || 0}
              onChange={(e) => setUpdatedData({ ...updatedData, protein: Number(e.target.value) })}
              className="input input-sm w-full"
            />
          </td>
          <td>
            <input
              type="number"
              value={updatedData.carbs || 0}
              onChange={(e) => setUpdatedData({ ...updatedData, carbs: Number(e.target.value) })}
              className="input input-sm w-full"
            />
          </td>
          <td>
            <input
              type="number"
              value={updatedData.fats || 0}
              onChange={(e) => setUpdatedData({ ...updatedData, fats: Number(e.target.value) })}
              className="input input-sm w-full"
            />
          </td>
          <td>
            <input
              type="text"
              value={updatedData.category || ''}
              onChange={(e) => setUpdatedData({ ...updatedData, category: e.target.value })}
              className="input input-sm w-full"
            />
          </td>
          <td>
            <button onClick={handleSave} className="btn btn-sm btn-primary">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-secondary">
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{food.name}</td>
          <td>{food.protein}</td>
          <td>{food.carbs}</td>
          <td>{food.fats}</td>
          <td>{food.category}</td>
          <td>
            <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-warning">
              Edit
            </button>
            <button onClick={() => onDelete(food.id)} className="btn btn-sm btn-error">
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default FoodTableRow;
