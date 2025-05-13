export function LayoutInput({
  labelName,
  inputType,
  inputPlaceholder,
  errorMassage,
  value,
  onChange,
  showError,
}) {
  return (
    <div className="flex flex-col mb-4">
      {labelName && (
        <label className="mb-1 text-sm font-semibold">{labelName}</label>
      )}
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        value={value}
        onChange={onChange}
        className={`h-12 px-3 border rounded ${
          showError ? "border-red-500" : "border-gray-300"
        }`}
      />
      {showError && <p className="text-sm text-red-500 mt-1">{errorMassage}</p>}
    </div>
  );
}
