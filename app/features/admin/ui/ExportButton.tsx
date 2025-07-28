import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

interface ExportButtonProps {
  data: any[];
  disabled?: boolean;
  onExport?: (data: any[]) => void;
  className?: string;
}

export const ExportButton = ({ 
  data, 
  disabled = false, 
  onExport,
  className = ''
}: ExportButtonProps) => {
  const handleExport = () => {
    if (onExport) {
      onExport(data);
    } else {
      // Стандартная логика экспорта
      const csvContent = [
        Object.keys(data[0]).join(','),
        ...data.map(item => Object.values(item).join(','))
      ].join('\n');
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `export_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={disabled}
      className={`inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
      Экспорт в CSV
    </button>
  );
};