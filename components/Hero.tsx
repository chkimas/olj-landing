export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-16 scroll-mt-20"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Building modern web experiences with Next.js
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
