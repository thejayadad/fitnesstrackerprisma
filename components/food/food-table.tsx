'use client'

import React, { useEffect, useState } from 'react';
import {  deleteFoodEntry,  } from '@/lib/actions/user/delete-food';
import FoodTableRow from './food-row';
import { fetchFoodByUser } from '@/lib/actions/user/food-by-user';
import { updateFoodEntry } from '@/lib/actions/user/update-food';

interface Food {
  id: string;
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  category: string;
}

const FoodTable: React.FC<{ userEmail: string }> = ({ userEmail }) => {
  const [foodData, setFoodData] = useState<Food[]>([]);
  const [sortKey, setSortKey] = useState<'protein' | 'carbs' | 'fats' | 'category' | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFoodByUser(userEmail);
      setFoodData(data);
    };

    fetchData();
  }, [userEmail]);

  const handleSort = (key: 'protein' | 'carbs' | 'fats' | 'category') => {
    const direction = sortKey === key && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortDirection(direction);
    setFoodData((prev) =>
      [...prev].sort((a, b) => {
        if (direction === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      })
    );
  };

  const handleDelete = async (id: string) => {
    await deleteFoodEntry(id);
    setFoodData((prev) => prev.filter((food) => food.id !== id));
  };

  const handleUpdate = async (id: string, updatedData: Partial<Food>) => {
    const updatedFood = await updateFoodEntry(id, updatedData);
    setFoodData((prev) => prev.map((food) => (food.id === id ? updatedFood : food)));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={() => handleSort('protein')} className="cursor-pointer">
              Protein
            </th>
            <th onClick={() => handleSort('carbs')} className="cursor-pointer">
              Carbs
            </th>
            <th onClick={() => handleSort('fats')} className="cursor-pointer">
              Fats
            </th>
            <th onClick={() => handleSort('category')} className="cursor-pointer">
              Category
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((food) => (
            <FoodTableRow
              key={food.id}
              food={food}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;
