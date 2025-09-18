import React, { useState } from 'react';
import { validateEmail, validatePhone, sanitizeInput, validateFormData } from '../utils/security';

interface SecureFormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

export const SecureForm: React.FC<SecureFormProps> = ({ onSubmit, children }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, any> = {};
    
    // Extract and sanitize form data
    for (const [key, value] of formData.entries()) {
      data[key] = sanitizeInput(value as string);
    }

    // Validate form data
    const validationErrors: Record<string, string> = {};
    
    if (data.email && !validateEmail(data.email)) {
      validationErrors.email = 'Please enter a valid email address';
    }
    
    if (data.phone && !validatePhone(data.phone)) {
      validationErrors.phone = 'Please enter a valid phone number';
    }
    
    if (data.name && data.name.length < 2) {
      validationErrors.name = 'Name must be at least 2 characters long';
    }
    
    if (data.message && data.message.length < 10) {
      validationErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const sanitizedData = validateFormData(data);
      onSubmit(sanitizedData);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {children}
      {Object.entries(errors).map(([field, message]) => (
        <div key={field} className="text-red-500 text-sm mt-1">
          {message}
        </div>
      ))}
    </form>
  );
};

// Secure Input Component
interface SecureInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const SecureInput: React.FC<SecureInputProps> = ({ 
  label, 
  error, 
  type = 'text', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

// Secure Textarea Component
interface SecureTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const SecureTextarea: React.FC<SecureTextareaProps> = ({ 
  label, 
  error, 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};
