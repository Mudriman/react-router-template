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

export default function UserManagement() {
  const {
    users,
    error,
    loading,
    pagination,
    setPagination,
    handleDelete,
    handleMakeAdmin
  } = useUserManagement();

  if (loading) return (
    <Loader />
  );

  if (error) return <ErrorAlert error={error} />;

  const userColumns: Column<User>[] = [
  { header: 'Email', accessor: 'email' },
  { header: 'Роль', accessor: (user: User) => <RoleCell role={user.role} /> },
  {
    header: 'Пройденные тесты',
    accessor: (user: User) => <TestStatusCell tests={user.tests} />,
    className: 'min-w-[250px]'
  },
  {
    header: 'Действия',
    accessor: (user: User) => (
      <ActionsCell user={user} onMakeAdmin={handleMakeAdmin} onDelete={handleDelete} />
    ),
    align: 'right',
  },
];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Управление пользователями</h1>
          <p className="mt-2 text-sm text-gray-700">
            Всего пользователей: {pagination.total}
          </p>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <DataTable
              data={users}
              columns={userColumns}
              keyField="id"
              emptyMessage="Пользователи не найдены"
            />
          </div>
        </div>
      </div>
      <Pagination pagination={pagination} setPagination={setPagination} />
    </div>
  );
}