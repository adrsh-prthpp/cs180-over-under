interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
  }
  
  export default function InputField({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
  }: InputFieldProps) {
    return (
      <div className="mb-4">
        <label className="block text-gray-300 mb-2">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:ring focus:ring-blue-500"
        />
      </div>
    );
  }
  