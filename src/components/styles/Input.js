import { CustomIcon } from '../common';

const Input = ({ label, name, type = 'text', icon, register, errors, ...rest }) => {
  return (
    <div className="relative text-white">
      <div>
        <input
          {...rest}
          {...register(name)}
          id={name}
          type={type}
          placeholder=" "
          className="block w-full appearance-none rounded border active:bg-transparent border-gray-500 bg-transparent px-4 py-2 outline-none "
        />
        <CustomIcon
          providerStyle={{
            className: 'absolute right-4 text-2xl top-1/2 -translate-y-1/2 clr-gray-500'
          }}
          element={icon}
        />
        <label
          htmlFor={name}
          className="absolute-y-center bg-primary clr-gray-500 pointer-events-none left-2 select-none px-2 duration-300">
          {label}
        </label>
      </div>
      {
        errors?.[name]?.message && <span className='text-xs text-red-500 mt-2 absolute -bottom-5'>{errors?.[name]?.message}</span> 
      }
    </div>
  );
};

export { Input };
