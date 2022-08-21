import { FaRegUserCircle } from 'react-icons/fa';
import { CustomIcon } from '../common';

const TextInput = ({ label = 'placeholder', name, type = 'text', ...rest }) => {
  return (
    <div className="relative m-10 text-white">
      <input
        {...rest}
        id={name}
        type={type}
        placeholder=" "
        className="block w-full appearance-none rounded border border-gray-500 bg-transparent px-4 py-2 outline-none "
      />
      <CustomIcon
        providerStyle={{
          className: 'absolute right-4 text-2xl top-1/2 -translate-y-1/2 clr-gray-500'
        }}
        element={<FaRegUserCircle />}
      />
      <label
        htmlFor={name}
        className="absolute-y-center bg-primary clr-gray-500 pointer-events-none left-4 select-none duration-300">
        {label}
      </label>
    </div>
  );
};

export { TextInput };
