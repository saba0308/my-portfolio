interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-4xl font-bold mb-10 text-center">
      {title}
    </h2>
  );
}