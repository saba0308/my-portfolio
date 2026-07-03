import Image from "next/image";

interface Props {
  company: string;
  role: string;
  period: string;
  logo?: string;
  description: string[];
}

export default function Timeline({
  company,
  role,
  period,
  logo,
  description,
}: Props) {
  return (
    <div className="border-l-4 border-blue-600 pl-6 py-6">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt={company}
              width={60}
              height={60}
              className="rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{role}</h3>

          <p className="text-blue-600">
            {company}
          </p>

          <p className="text-gray-500 mb-4">
            {period}
          </p>

          <ul className="list-disc ml-6 space-y-2">
            {description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}