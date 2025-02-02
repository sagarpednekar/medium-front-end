export default function Avatar({
  username,
  size = 10,
}: {
  username: string;
  size?: number;
}) {
  return (
    <div>
      <div
        className={`w-${size} h-${size} rounded-full bg-slate-500 flex items-center justify-center text-white`}
      >
        {username[0].toUpperCase()}
      </div>
    </div>
  );
}
