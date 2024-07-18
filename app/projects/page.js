import CustomCard from "@/components/custom-card/CustomCard";

const projects = [
  {
    image: "/images/speedtest.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/soulacoasta.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/texas-logo.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/ricommerce.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/drip-drop.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
];

export default function Projects() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-24">
      <section className="hero flex flex-col items-center text-center px-6 py-12 md:px-12 lg:py-24">
        {projects.map((project, index) => (
          <CustomCard
            key={index}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </section>
    </main>
  );
}
