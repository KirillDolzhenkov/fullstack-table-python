import { useMemo } from 'react';

interface Props {
  data: Array<Record<string, number | string>>;
}

const getUniqueHeaders = (data: Array<Record<string, number | string>>): string[] => {
  const headersSet = new Set<string>();

  data.forEach((row) => Object.keys(row).forEach((key) => headersSet.add(key)));

  return Array.from(headersSet);
};

const getCellColorClass = (header: string, value: number | string): string => {
  if (
    typeof value === 'string' &&
    (header.includes('Потенциал') || header.includes('Дивиденды') || header.includes('Рост'))
  ) {
    return value.includes('+') ? 'text-green-600' : 'text-red-600';
  }

  return '';
};

const tableWrapperClass = 'overflow-x-auto shadow-md sm:rounded-lg';
const tableClass = 'min-w-full divide-y divide-gray-200 bg-white text-left font-fira-code font-medium text-gray-500';
const headerCellClass =
  'p-2 text-xs font-medium uppercase tracking-wider text-gray-700 sm:px-4 sm:py-3 sm:text-sm md:text-base';
const rowClassEven = 'bg-gray-50';
const rowClassOdd = 'bg-white';
const cellClass = 'whitespace-nowrap p-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base';

export const Table = (props: Props) => {
  const { data } = props;
  const headers = useMemo(() => getUniqueHeaders(data), [data]);

  return (
    <div className={tableWrapperClass}>
      <table className={tableClass}>
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th className={headerCellClass} key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr className={index % 2 === 0 ? rowClassEven : rowClassOdd} key={index}>
              {headers.map((header) => (
                <td className={`${cellClass} ${getCellColorClass(header, row[header])}`} key={header}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
