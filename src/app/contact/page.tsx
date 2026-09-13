const contactOptions = [
  {
    name: "WhatsApp",
    description: "Let's chat directly",
    value: "+91 XXXXX XXXXX",
    href: "https://wa.me/919003886433",
    icon: "💬",
  },
  {
    name: "Email",
    description: "Send me an email",
    value: "your@email.com",
    href: "mailto:vishnuprasadrvp20@email.com",
    icon: "✉️",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/vishnu-prasad-ravindran-27854829b/",
    icon: "in",
  },
  {
    name: "Instagram",
    description: "Follow me on Instagram",
    value: "@yourusername",
    href: "https://www.instagram.com/vish_nuprasadd/",
    icon: "◎",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Get In Touch
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Contact <span className="text-red-500">Me</span>
          </h1>

          <div className="mt-5 h-1 w-24 bg-red-700" />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out to me through any of the platforms below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

          {contactOptions.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-700 hover:bg-red-950/20"
            >
              <div className="flex items-center gap-6">

                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-red-900/50 bg-red-950/30 text-xl font-bold text-red-400 transition group-hover:border-red-500 group-hover:bg-red-900/30">
                  {contact.icon}
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold">
                    {contact.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {contact.description}
                  </p>

                  <p className="mt-3 truncate text-gray-300">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow */}
                <div className="ml-auto text-xl text-gray-600 transition group-hover:translate-x-1 group-hover:text-red-500">
                  →
                </div>

              </div>
            </a>
          ))}

        </div>

        {/* Bottom CTA */}
        <section className="mt-20 rounded-2xl border border-red-900/40 bg-red-950/20 p-10 text-center md:p-16">

          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Available for opportunities
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Let's build something
            <span className="text-red-500"> great together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            I'm open to frontend development opportunities,
            interesting projects, and collaborations.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-8 inline-block rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-500"
          >
            Send Me an Email →
          </a>

        </section>

      </div>
    </main>
  );
}