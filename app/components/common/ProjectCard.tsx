import { ExternalLink } from "lucide-react";

interface Props {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
  };
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">

      <img
        src={project.image}
        alt={project.title}
        className="h-72 md:h-96 w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        
        <div className="bg-black bg-opacity-75 rounded-lg p-4">

        <h2 className="text-2xl font-bold mb-3 text-white">
          {project.title}
        </h2>

        <p className="text-gray-200 leading-7 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="flex gap-6">

          {project.live && (
            <a href={project.live} target="_blank">
              <ExternalLink size={24} className="text-white" />
            </a>
          )}

        </div>
        
        </div>
      </div>

      </div>
  );
}