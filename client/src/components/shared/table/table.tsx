import { cn } from '@/lib/utils';

export interface TableRow {
  avgPrice: number;
  currentPrice: number;
  date: string;
  growth: number;
  name: string;
  profitability: number;
  share: number;
  shares: number;
  target: number;
  type: string;
}

interface Props {
  data: TableRow[];
}

const tableHeaders = [
  { key: 'name', label: 'Название' },
  { key: 'type', label: 'Тип' },
  { key: 'shares', label: 'Кол-во акций' },
  { key: 'avgPrice', label: 'Средняя цена' },
  { key: 'currentPrice', label: 'Текущая цена' },
  { key: 'target', label: 'Цель' },
  { key: 'growth', label: 'Потенциал роста' },
  { key: 'profitability', label: 'Доходность' },
  { key: 'share', label: 'Доля' },
  { key: 'date', label: 'Дата' }
];

const headerClass =
  'p-2 text-xs font-medium uppercase tracking-wider text-gray-700 sm:px-4 sm:py-3 sm:text-sm md:text-base';
const cellClass = 'whitespace-nowrap p-2 text-xs text-gray-900 sm:px-4 sm:py-3 sm:text-sm md:text-base';
const positiveClass = 'text-green-600';
const negativeClass = 'text-red-600';

export const Table = (props: Props) => {
  const { data } = props;
  const hasData = data.length > 0;

  const renderRow = (row: TableRow, index: number) => {
    const isEvenRow = index % 2 === 0;
    const growthClass = row.growth > 0 ? positiveClass : negativeClass;
    const profitabilityClass = row.profitability > 0 ? positiveClass : negativeClass;

    return (
      <tr className={cn(isEvenRow ? 'bg-gray-50' : 'bg-white')} key={index}>
        <td className={cellClass}>{row.name}</td>
        <td className={cellClass}>{row.type}</td>
        <td className={cellClass}>{row.shares}</td>
        <td className={cellClass}>{row.avgPrice.toFixed(2)}</td>
        <td className={cellClass}>{row.currentPrice.toFixed(2)}</td>
        <td className={cellClass}>{row.target}</td>
        <td className={cn(cellClass, growthClass)}>
          {row.growth > 0 ? `+${row.growth.toFixed(2)}` : `${row.growth.toFixed(2)}`}%
        </td>
        <td className={cn(cellClass, profitabilityClass)}>
          {row.profitability > 0 ? `+${row.profitability.toFixed(2)}` : `${row.profitability.toFixed(2)}`}%
        </td>
        <td className={cellClass}>{row.share.toFixed(2)}%</td>
        <td className={cellClass}>{row.date}</td>
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 bg-white text-left font-fira-code font-medium text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            {tableHeaders.map((header) => (
              <th className={headerClass} key={header.key} scope="col">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {hasData ? (
            data.map(renderRow)
          ) : (
            <tr>
              <td className="p-4 text-center text-gray-500" colSpan={tableHeaders.length}>
                Тут пока ничего нет
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
