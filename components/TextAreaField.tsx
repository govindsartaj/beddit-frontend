const TextAreaField = ({ value, label, placeholder, setValue }: any) => {
  return (
    <div className="py-2">
      <label>
        {label}

        <textarea
          placeholder={placeholder}
          className="w-full border p-1 min-h-12"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </label>
    </div>
  );
};

export default TextAreaField;
