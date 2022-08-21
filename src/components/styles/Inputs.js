import { FaRegUserCircle } from "react-icons/fa";
import { CustomIcon } from "../common";

const TextInput = ({ id, label = "test 11111", value, handleChange }) => {
  return (
    <div className="text-white m-10 inline-flex relative group">
      <input
        type="text"
        id={id}
        className="border-gray-500 border bg-transparent outline-none px-4 py-2 rounded"
        value={value}
        onChange={handleChange}
      />
      <CustomIcon
        providerStyle={{
          className: "absolute right-4 text-2xl top-1/2 -translate-y-1/2 clr-gray-500",
        }}
        element={<FaRegUserCircle />}
      />

      <label
        htmlFor={id}
        className="absolute left-4 absolute-y-center duration-300 select-none clr-gray-500 pointer-events-none group-focus-within:top-0 group-focus-within:left-6 bg-primary"
      >
        {label}
      </label>
    </div>
  );
};

export { TextInput };
