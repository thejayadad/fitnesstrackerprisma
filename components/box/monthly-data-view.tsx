'use client';

import React, { useEffect, useState } from 'react';
import { fetchMonthlyData } from '@/lib/actions/user/monthly-data';
import DataTable from './data-table';

const MonthlyDataView: React.FC<{ userEmail: string }> = ({ userEmail }) => {
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString());
  const [selectedMonth, setSelectedMonth] = useState<string>((new Date().getMonth() + 1).toString());
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedYear && selectedMonth) {
        const fetchedData = await fetchMonthlyData(userEmail, selectedYear, selectedMonth);
        setData(fetchedData);
      }
    };

    fetchData();
  }, [userEmail, selectedYear, selectedMonth]);

  const columns = [
    { header: 'Date', accessor: 'entryDate' },
    { header: 'Name', accessor: 'name' },
    { header: 'Protein', accessor: 'protein' },
    { header: 'Carbs', accessor: 'carbs' },
    { header: 'Fats', accessor: 'fats' },
    { header: 'Category', accessor: 'category' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Monthly Food Data</h2>
      <FilterComponent
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        onYearChange={handleYearChange}
        onMonthChange={handleMonthChange}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default MonthlyDataView;
