export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-red-400">
            Who I Am
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            About <span className="text-red-500">Me</span>
          </h1>

          <div className="mt-5 h-1 w-24 bg-red-700" />
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Profile */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">

              <div className="absolute inset-0 rounded-2xl bg-red-900/40 blur-3xl" />
              <img
                src="/images/blackandredVishnu.jpg"
                alt="Vishnu Prasad"
                className="relative h-72 w-72 rounded-2xl object-cover grayscale-[15%]"
              />

            </div>
          </div>

          {/* Introduction */}
          <div className="md:col-span-2">

            <h2 className="mb-5 text-3xl font-semibold">
              Frontend Developer
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-300">
              I am a results-driven software developer with experience
              building efficient, user-friendly and responsive web
              applications.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-300">
              My experience includes working with modern frontend
              technologies such as Angular, React, Vue and Flutter.
              I enjoy building reusable components, solving complex
              problems and creating applications that provide a great
              user experience.
            </p>

            <p className="text-lg leading-8 text-gray-300">
              I am passionate about learning new technologies and
              continuously improving my development skills. I focus on
              writing clean, maintainable code and delivering
              high-quality solutions.
            </p>

          </div>
        </div>

        {/* Personal Information */}
        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            A little more <span className="text-red-500">about me</span>
          </h2>

          <div className="mt-4 h-1 w-20 bg-red-700" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">Role</p>
              <p className="mt-2 text-lg font-semibold">
                Frontend Developer
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">Specialization</p>
              <p className="mt-2 text-lg font-semibold">
                Web Application Development
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">Main Technologies</p>
              <p className="mt-2 text-lg font-semibold">
                Angular & React
              </p>
            </div>

          </div>
        </section>

        {/* Education */}
        <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Education
          </h2>

          <div className="mt-4 h-1 w-20 bg-red-700" />

          <div className="mt-10 space-y-6">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-red-400">
                2018 — 2022
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Dr. NGP Institute of Technology
              </h3>

              <p className="mt-2 text-gray-400">
                Bachelor of Engineering in Electronics and Communication
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-red-400">
                12th
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Suguna RIP V School
              </h3>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-red-400">
                10th
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                P R Sidha Naidu Matric School
              </h3>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}