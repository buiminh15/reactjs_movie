import { FaRegUserCircle } from 'react-icons/fa';
import { CustomIcon } from '../common';

const TextInput = ({ id, label = 'test 11111', value, handleChange }) => {
  return (
    <div className="group relative m-10 inline-flex text-white">
      <input
        type="text"
        id={id}
        className="rounded border border-gray-500 bg-transparent px-4 py-2 outline-none"
        value={value}
        onChange={handleChange}
      />
      <CustomIcon
        providerStyle={{
          className: 'absolute right-4 text-2xl top-1/2 -translate-y-1/2 clr-gray-500'
        }}
        element={<FaRegUserCircle />}
      />

      <label
        htmlFor={id}
        className="absolute-y-center clr-gray-500 bg-primary pointer-events-none absolute left-4 select-none duration-300 group-focus-within:top-0 group-focus-within:left-6"
      >
        {label}
      </label>
    </div>
  );
};

export { TextInput };
