import type { User } from "../../shared/types";
import Loader from "~/shared/UI/Loader";
import Pagination from "~/shared/global/Pagination";
import { DataTable } from "~/shared/global/DataTable";
import type { Column } from "~/shared/global/DataTable";
import { ErrorAlert } from "~/shared/UI/ErrorAlert";
import { useUserManagement } from "./hooks/useUserManagement";
import { ActionsCell } from "./ui/ActionsCell";
import { RoleCell } from "./ui/RoleCell";
import { TestStatusCell } from "./ui/TestStatusCell";
import { StatCard } from "./ui/StatCard";
import { ClipboardDocumentCheckIcon, ExclamationCircleIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/Button";
import { ExportButton } from "./ui/ExportButton";
import { RecentActivity } from "./ui/RecentActivity";
import { SystemStatus } from "./ui/SystemStatus";


export default function UserManagement() {
  const {
    users,
    error,
    loading,
    initialLoad,
    pagination,
    setPagination,
    handleDelete,
    handleMakeAdmin,
    fetchUsers,
    handleDeleteTest
  } = useUserManagement();

  if (loading && !initialLoad) return <Loader />;

  if (error && !initialLoad) return <ErrorAlert error={error} />;

  const userColumns: Column<User>[] = [
    { header: "Email", accessor: "email" },
    { header: "Роль", accessor: (user: User) => <RoleCell role={user.role} /> },
    {
      header: "Пройденные тесты",
      accessor: (user: User) => (
        <TestStatusCell
          userId={user.id}
          tests={user.tests?.map(t => ({ ...t, id: String(t.id) }))}
          onDeleteTest={handleDeleteTest} // ← Теперь передаем только ID
        />
      ),
      className: "min-w-[100px]",
    },
    {
      header: "Действия",
      accessor: (user: User) => (
        <ActionsCell user={user} onMakeAdmin={handleMakeAdmin} onDelete={handleDelete} />
      ),
      align: "right",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      Статистика
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatCard
          title="Всего пользователей"
          value={initialLoad ? pagination.total : "—"}
          icon={<UsersIcon className="h-6 w-6" />}
        />
        <StatCard
          title="Администраторов"
          value={initialLoad ? users.filter((u) => u.role === "ADMIN").length : "—"}
          icon={<ShieldCheckIcon className="h-6 w-6" />}
        />
        <StatCard
          title="Пользователи с тестами"
          value={initialLoad ? users.filter((u) => u.tests.length > 0).length : "—"}
          icon={<ClipboardDocumentCheckIcon className="h-6 w-6" />}
        />
      </div>

      {/* Панель управления */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Управление пользователями</h1>
            <p className="mt-2 text-sm text-gray-700">
              {initialLoad
                ? `Загружено ${users.length} из ${pagination.total}`
                : "Нажмите 'Загрузить' для получения данных"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={fetchUsers} loading={loading} variant="primary">
              {initialLoad ? "Обновить данные" : "Загрузить пользователей"}
            </Button>
            {initialLoad && (
              <ExportButton data={users} disabled={users.length === 0} />
            )}
          </div>
        </div>

        {error && (
          <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="text-red-400">
                <ExclamationCircleIcon className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {initialLoad && (
          <>
            <div className="mt-6">
              <DataTable
                data={users}
                columns={userColumns}
                keyField="id"
                emptyMessage="Пользователи не найдены"
                loading={loading}
              />
            </div>

            {pagination.total > 0 && (
              <div className="mt-6">
                <Pagination
                  pagination={pagination}
                  setPagination={(newPagination) => {
                    setPagination(newPagination);
                    fetchUsers();
                  }}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Дополнительные информационные блоки */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <RecentActivity />
        <SystemStatus />
      </div>
    </div>
  );
}