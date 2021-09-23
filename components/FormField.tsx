const FormField = ({
  value,
  label,
  placeholder,
  url = false,
  password = false,
  setValue,
}: any) => {
  return (
    <div className="py-2">
      <label>
        {label}
        {url ? (
          <div className="flex">
            <div className="font-mono hidden sm:block p-1">{url}</div>
            <input
              placeholder="unique-id"
              className="w-full font-mono border p-1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
        ) : (
          <input
            placeholder={placeholder}
            className="w-full border p-1"
            type={password ? "password" : undefined}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        )}
      </label>
    </div>
  );
};

export default FormField;
