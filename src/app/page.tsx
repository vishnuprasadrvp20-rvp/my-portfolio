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
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-12 sm:px-8 md:px-8 md:py-8">

        <div className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="text-center md:text-left">

            <p
              data-aos="fade-up"
              className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-400 sm:text-sm sm:tracking-[0.3em]"
            >
              Frontend Developer
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
            >
              Hi, I&apos;m
              <br />

              <span className="text-gray-300">
                Vishnu Prasad
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 md:mx-0 md:mt-6"
            >
              I build modern, responsive and interactive web applications
              using Angular, React and modern frontend technologies.
            </p>

            {/* Technologies */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 sm:mt-14 md:mt-16"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-widest">
                Technologies I work with
              </p>

              <div className="flex flex-wrap justify-center gap-2.5 md:justify-start sm:gap-3">

                {[
                  "Angular",
                  "React",
                  "Flutter",
                  "Vue",
                  "React Native",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/5 hover:text-gray-200 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    {tech}
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* =========================
              RIGHT - PROFILE IMAGE
          ========================== */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex justify-center md:justify-end"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-red-900/40 blur-3xl" />

              <img
                src="/images/vishnuHomePage.jpg"
                alt="Vishnu Prasad"
                className="relative h-60 w-60 rounded-full object-cover grayscale-[20%] sm:h-72 sm:w-72 md:h-[420px] md:w-[420px]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}