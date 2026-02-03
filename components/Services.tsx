const services = [
  {
    title: "Web Development",
    description: "Full-stack applications with Next.js and TypeScript",
  },
  {
    title: "UI/UX Design",
    description: "Responsive, accessible interfaces with Tailwind CSS",
  },
  {
    title: "Performance Optimization",
    description: "Fast, SEO-friendly server-side rendering",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
