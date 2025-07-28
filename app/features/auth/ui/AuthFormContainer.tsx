interface AuthFormContainerProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const AuthFormContainer = ({ title, children, footer }: AuthFormContainerProps) => (
  <main className="container mx-auto max-w-md p-4">
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
      {children}
      {footer && <div className="mt-4 text-center text-sm text-gray-600">{footer}</div>}
    </div>
  </main>
);