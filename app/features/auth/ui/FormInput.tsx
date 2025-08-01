import { useState } from "react";

interface FormInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  showPasswordToggle?: boolean;
  error?: string | null;
}

export const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  required = true,
  showPasswordToggle = false,
  error
}: FormInputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPasswordToggle ? (passwordShown ? "text" : "password") : type}
          placeholder={placeholder}
          className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            error ? "border-red-500" : ""
          }`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          autoComplete={type === "password" ? "current-password" : "username"}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            onClick={() => setPasswordShown(!passwordShown)}
            disabled={disabled}
          >
            {passwordShown ? (
              <EyeOffIcon />
            ) : (
              <EyeIcon />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);