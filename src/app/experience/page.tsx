export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            My Career
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Professional <span className="text-red-500">Experience</span>
          </h1>

          <div className="mt-5 h-1 w-24 bg-red-700" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-3 top-0 hidden h-full w-px bg-red-900 md:block" />

          {/* Experience 1 */}
          <div className="relative mb-16 md:pl-12">

            <div className="absolute left-0 top-2 hidden h-7 w-7 rounded-full border-4 border-black bg-red-600 md:block" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-red-900">

              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <p className="text-sm uppercase tracking-widest text-red-400">
                    2024 — Present
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Senior Software Developer Engineer
                  </h2>

                  <p className="mt-1 text-lg text-gray-400">
                    Exterro
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-gray-300">
                Working on frontend applications and developing
                user-friendly, scalable and maintainable software
                solutions.
              </p>

            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative mb-16 md:pl-12">

            <div className="absolute left-0 top-2 hidden h-7 w-7 rounded-full border-4 border-black bg-red-600 md:block" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-sm uppercase tracking-widest text-red-400">
                2022 — 2024
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Software Developer Engineer
              </h2>

              <p className="mt-1 text-lg text-gray-400">
                Sporfy India Pvt Limited
              </p>

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-white">
                  Projects as a Team Leader
                </h3>

                <ul className="mt-4 space-y-3 text-gray-300">
                  <li>
                    • Created a website for{" "}
                    <strong className="text-white">
                      partner.sporfy.com
                    </strong>{" "}
                    allowing users to join organizations as partners.
                  </li>

                  <li>
                    • Created a website for{" "}
                    <strong className="text-white">
                      TNBCOA
                    </strong>{" "}
                    to view their facilities and booking.
                  </li>
                </ul>

              </div>

              <div className="mt-8">

                <h3 className="text-lg font-semibold text-white">
                  Projects as a Team Player
                </h3>

                <ul className="mt-4 space-y-3 text-gray-300">

                  <li>
                    • Integrated a payment system with Cashfree and
                    implemented Redux for state management.
                  </li>

                  <li>
                    • Developed a Flutter application for{" "}
                    <strong className="text-white">
                      Glossil International Private Limited
                    </strong>.
                  </li>

                  <li>
                    • Developed a website for{" "}
                    <strong className="text-white">
                      Thiram Sports Academy
                    </strong>{" "}
                    to book classes and slots.
                  </li>

                  <li>
                    • Integrated a real-time chat system in Next.js
                    using WebSockets for two-way communication.
                  </li>

                </ul>

              </div>

            </div>
          </div>

          {/* Internship */}
          <div className="relative md:pl-12">

            <div className="absolute left-0 top-2 hidden h-7 w-7 rounded-full border-4 border-black bg-red-600 md:block" />

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-sm uppercase tracking-widest text-red-400">
                2021 — 2022
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Software Developer | Intern
              </h2>

              <p className="mt-1 text-lg text-gray-400">
                Sporfy India Pvt Limited
              </p>

              <ul className="mt-6 space-y-3 text-gray-300">

                <li>
                  • Created a BackOffice application for{" "}
                  <strong className="text-white">
                    Suryabala Foods Group
                  </strong>{" "}
                  to add different users, products and Combo.
                </li>

                <li>
                  • Helped build an E-commerce website for{" "}
                  <strong className="text-white">
                    Amutham Masala
                  </strong>{" "}
                  to buy their products.
                </li>

              </ul>

            </div>
          </div>

        </div>

        {/* Achievement */}
        {/* <section className="mt-20">

          <h2 className="text-3xl font-bold">
            Achievement
          </h2>

          <div className="mt-4 h-1 w-20 bg-red-700" />

          <div className="mt-8 rounded-xl border border-red-900/40 bg-red-950/20 p-6">
            <p className="text-sm text-red-400">
              2021 — 2022
            </p>

            <p className="mt-2 text-lg">
              ⭐ Best Performer
            </p>

            <p className="mt-2 text-gray-400">
              Recognized as a top performer for my contribution and
              performance.
            </p>
          </div>

        </section> */}

      </div>
    </main>
  );
}