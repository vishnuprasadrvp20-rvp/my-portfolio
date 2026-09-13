import Image from "next/image";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(100,0,0,0.45),transparent_40%),linear-gradient(120deg,#180000,#050505_55%,#000000)]" />

      {/* Cross / grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex  max-w-7xl items-center px-8 pt-8" style={{height : "calc(100vh - 80px)"}}>

        <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Frontend Developer
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I&apos;m
              <br />
              <span className="text-gray-300">
                Vishnu Prasad
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
              I build modern, responsive and interactive web applications
              using Angular, React and modern frontend technologies.
            </p>
            {/* <button className="mt-20">
            <a  href="https://www.linkedin.com/in/vishnu-prasad-ravindran-27854829b/" target="_blank" className="mt-20 rounded-md bg-lime-500 px-8 py-4 font-medium text-black transition hover:bg-lime-400">
              Let&apos;s work together →
            </a >
            </button> */}

            {/* Technologies */}
            <div className="mt-16">
              <p className="mb-5 text-xs uppercase tracking-widest text-gray-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Angular",
                  "React",
                  "Flutter",
                  "Vue",
                  "React Native",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="rounded border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-400"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-red-900/40 blur-3xl" />

              <img
                src="/images/profile.jpg"
                alt="Vishnu Prasad"
                className="relative h-72 w-72 rounded-full object-cover grayscale-[20%] md:h-[420px] md:w-[420px]"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
