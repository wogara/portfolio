import CustomCard from "@/components/custom-card/CustomCard";

const projects = [
  {
    image: "/images/hra_cropped.png",
    title: "Custom Internet Speed Test",
    subtitle: <span className="italic">Client: HR&A Advisors</span>,
    technologies: <span>technologies</span>,
    description: (
      <>
        <p>
          In collaboration with HR&A Advisors, I spearheaded the development of
          an internet speed testing tool as part of a significant statewide
          initiative. This ambitious project was designed to analyze and enhance
          digital equity across several states, contributing substantially to
          the broader goal of digital inclusivity.
        </p>
        <p>
          Key Contributions: Developed a speed test using ndt7 protocol from
          M-Lab. Implemented data storage and management in MySQL and AWS S3.
          Engineered an efficient user interface within a single HTML document
          using advanced techniques. This tool was pivotal in a statewide survey
          initiative, utilized across multiple states with thousands of
          respondents. It played a crucial role in identifying disparities in
          internet access and informing policy decisions aimed at bridging the
          digital divide. Due to the proprietary nature of this project, the
          source code is not publicly available. This ensures the
          confidentiality and integrity of the specialized solutions provided to
          the client. This site has been removed.
        </p>
      </>
    ),
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/soulacoasta_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/texas-logo_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/ricommerce_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/drip-drop-logo_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/colorgame_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
  },
  {
    image: "/images/patatap.png",
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
      <section className="hero flex flex-col items-center text-center px-6 py-12 md:px-12 lg:py-24 cursor-pointer">
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
