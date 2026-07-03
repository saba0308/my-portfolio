interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div className="rounded-xl border p-6 shadow hover:shadow-lg transition bg-white dark:bg-gray-900">
      {children}
    </div>
  );
}