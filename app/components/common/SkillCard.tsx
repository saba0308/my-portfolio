interface Skill {
  name: string;
  level: number;
  image?: string;
}

interface Props {
  skill: Skill;
}

export default function SkillCard({ skill }: Props) {
  const initials = skill.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-6">
        {skill.image ? (
          <img
            src={skill.image}
            alt={skill.name}
            className="h-16 w-16 rounded-3xl object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-xl font-bold text-blue-600">
            {initials}
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold">{skill.name}</h3>
          <p className="text-sm text-gray-500">Score: {skill.level}%</p>
        </div>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-blue-600 transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}