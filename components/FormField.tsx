const FormField = ({
  value,
  label,
  placeholder,
  url = false,
  password = false,
  setValue,
  onEnter,
}: any) => {
  return (
    <div className="py-2">
      <label>
        {label}
        {url ? (
          <div className="flex">
            <div className="hidden p-1 font-mono sm:block">{url}</div>
            <input
              placeholder="unique-id"
              className="w-full p-1 font-mono border"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
        ) : (
          <input
            placeholder={placeholder}
            className="w-full p-1 border"
            type={password ? "password" : undefined}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onEnter()}
          ></input>
        )}
      </label>
    </div>
  );
};

export default FormField;
