type Props = {
  label: string;
  id: string;
  type?: string;
};

const Input = ({ label, id, type = 'text' }: Props) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      id={id}
      type={type}
      required
      className="mt-1 w-full px-4 py-2 bg-[#1f2937] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>
);

export default Input;
