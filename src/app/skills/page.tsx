const skillGroups = [
  {
    title: "Frameworks & Libraries",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "Vue.js",
      "Flutter",
      "React Native",
    ],
  },
  {
    title: "Languages",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Java",
      "Dart",
    ],
  },
  {
    title: "State Management",
    skills: [
      "Redux",
      "NgRx",
    ],
  },
  {
    title: "Styling",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "REST APIs",
      "WebSockets",
      "API Integration",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Module Federation",
    ],
  },
];

const softSkills = [
  "Team Player",
  "Language Enthusiast",
  "Multi-tasking",
  "Adaptability",
  "Problem Solving",
  "Leadership",
];

const languages = [
  { name: "Tamil", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Beginner" },
  // { name: "Japanese", level: "Beginner" },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            What I Know
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Technical <span className="text-red-500">Skills</span>
          </h1>

          <div className="mt-5 h-1 w-24 bg-red-700" />
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-red-900 hover:bg-white/[0.05]"
            >
              <h2 className="text-xl font-semibold">
                {group.title}
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-red-900/40 bg-red-950/20 px-4 py-2 text-sm text-gray-200 transition hover:border-red-500 hover:bg-red-900/20"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* Soft Skills */}
        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Soft <span className="text-red-500">Skills</span>
          </h2>

          <div className="mt-4 h-1 w-20 bg-red-700" />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">

            {softSkills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:border-red-900"
              >
                <span className="text-gray-300">
                  {skill}
                </span>
              </div>
            ))}

          </div>

        </section>

        {/* Languages */}
        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Languages
          </h2>

          <div className="mt-4 h-1 w-20 bg-red-700" />

          <div className="mt-8 space-y-4">

            {languages.map((language) => (
              <div
                key={language.name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4"
              >
                <span className="font-medium">
                  {language.name}
                </span>

                <span className="text-sm text-red-400">
                  {language.level}
                </span>
              </div>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}