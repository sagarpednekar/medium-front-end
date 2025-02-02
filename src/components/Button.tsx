import Spinner from "./Spinner";

type TButtonProps = {
  onClickHandler: () => void;
  loading?: boolean;
  label: string;
  variant: "primary" | "blue" | "green" | "light";
};
export default function Button({
  label,
  loading = false,
  onClickHandler,
  variant,
}: TButtonProps) {
  if (variant === "blue") {
    return (
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        onClick={onClickHandler}
        disabled={loading}
      >
        {loading ? <Spinner /> : null}
        {label}
      </button>
    );
  } else if (variant === "green") {
    return (
      <button
        type="button"
        className="inline-flex items-center text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={onClickHandler}
        disabled={loading}
      >
        {loading ? <Spinner /> : null}
        {label}
      </button>
    );
  } else if (variant === "light") {
    return (
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
        onClick={onClickHandler}
        disabled={loading}
      >
        {loading ? <Spinner /> : null}
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="inline-flex items-center text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
      onClick={onClickHandler}
      disabled={loading}
    >
      {loading ? <Spinner /> : null}
      {label}
    </button>
  );
}
