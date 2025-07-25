import type { ReactNode } from 'react';

export type Column<T> = {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
  align?: 'left' | 'center' | 'right';
  className?: string;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  emptyMessage?: string;
  className?: string;
};

export function DataTable<T>({
  data,
  columns,
  keyField,
  emptyMessage = 'Данные не найдены',
  className = '',
}: DataTableProps<T>) {
  return (
    <div className={`overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg ${className}`}>
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, idx) => (
              <th
                key={idx}
                scope="col"
                className={`py-3.5 px-3 text-${column.align || 'left'} text-sm font-semibold text-gray-900 ${
                  idx === 0 ? 'pl-4 sm:pl-6' : ''
                } ${column.className || ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={String(item[keyField])} className="hover:bg-gray-50">
                {columns.map((column, idx) => (
                  <td
                    key={idx}
                    className={`whitespace-nowrap py-4 px-3 text-sm ${
                      typeof column.accessor === 'function' ? '' : 'text-gray-500'
                    } ${idx === 0 ? 'pl-4 sm:pl-6 font-medium text-gray-900' : ''}`}
                  >
                    {typeof column.accessor === 'function'
                      ? column.accessor(item)
                      : String(item[column.accessor])}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center text-sm text-gray-500">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}