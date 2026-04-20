export const Services = () => {
  const items = [
    {
      title: "Web Development",
      desc: "High-performance, scalable web applications using modern frameworks.",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, user-focused interfaces that enhance user experience.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your visibility and ranking on search engines.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition bg-white"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl mb-6" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}