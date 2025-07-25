import type { User } from '../../../shared/types';

export const ActionsCell = ({
  user,
  onMakeAdmin,
  onDelete,
}: {
  user: User;
  onMakeAdmin: (email: string) => void;
  onDelete: (id: string) => void;
}) => (
  <div className="space-x-2 text-right">
    {user.role !== 'ADMIN' && (
      <button
        onClick={() => {
          if (window.confirm(`Сделать ${user.email} админом?`)) {
            onMakeAdmin(user.email);
          }
        }}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Сделать админом
      </button>
    )}
    <button
      onClick={() => {
        if (window.confirm(`Удалить пользователя ${user.email}?`)) {
          onDelete(user.id);
        }
      }}
      className="text-red-600 hover:text-red-900"
    >
      Удалить
    </button>
  </div>
);