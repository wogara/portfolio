export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-24">
      <section className="hero flex flex-col items-center text-center px-6 py-12 md:px-12 lg:py-24">
        <h1 className="text-5xl font-bold text-text mb-6">
          Welcome to my website
        </h1>
        <p className="text-xl text-text mb-8">
          Hey, I am <span className="text-blue">BILLY</span>, a software engineer specializing in website applications. I also write blogs that you can read here.
        </p>
        <a
          href="#projects"
          className="bg-text text-mantle hover:bg-peach hover:border-blue hover:text-white py-3 px-6 rounded-full text-lg font-semibold"
        >
          View My Projects
        </a>
      </section>
    </main>
  );
}
