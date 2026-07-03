interface Props {
  certificate: {
    title: string;
    provider: string;
    year: string;
    image: string;
    credential: string;
  };
}

export default function CertificateCard({
  certificate,
}: Props) {
  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">

      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-72 md:h-96 object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">

        <div className="bg-black bg-opacity-75 rounded-lg p-4">

        <h3 className="font-bold text-2xl mb-2 text-white">
          {certificate.title}
        </h3>

        <p className="text-blue-300 mb-1">
          {certificate.provider}
        </p>

        <p className="text-gray-300 mb-4">
          {certificate.year}
        </p>

        {certificate.credential && (
          <a
            href={certificate.credential}
            target="_blank"
            className="text-blue-300 inline-block hover:text-blue-200"
          >
            View Credential →
          </a>
        )}

        </div>

      </div>
    </div>
  );
}