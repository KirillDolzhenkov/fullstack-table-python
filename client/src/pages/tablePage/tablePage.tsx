import { useParams } from 'react-router-dom';

import { Table } from '@/components/shared';
import { useGetTableDataQuery } from '@/store/apiSlice';

export const TablePage = () => {
  const { tableName } = useParams();
  const { data, error, isLoading } = useGetTableDataQuery(tableName || '');

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки данных.</div>;
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="mb-4 text-2xl font-bold">Таблица: {tableName}</h1>
      {data && data.length > 0 ? <Table data={data} /> : <div>Данные отсутствуют</div>}
    </div>
  );
};
