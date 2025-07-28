export interface User {
  id: string;          // Добавляем id, который приходит с бекенда
  email: string;
  role: 'USER' | 'ADMIN';
  tests: Test[];
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface UserListResponse {
  users: User[];
  totalCount?: number;  // Для пагинации
}

interface Test {
  id: number;
  type: string;
  score: number;
  createdAt: string;
}

export interface ApiError {
  error: string;
  details: string;
}