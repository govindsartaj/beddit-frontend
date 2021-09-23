const BedditPanel = ({ className, children }: any) => {
  return (
    <div className="flex justify-center w-full">
      <div
        className={`border-1 border-gray-100 h-auto m-0 p-10 bg-gray-50 rounded-lg shadow-md ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BedditPanel;
