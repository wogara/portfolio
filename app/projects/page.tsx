import CustomCard from "@/components/custom-card/CustomCard";

const projects = [
  {
    image: "/images/hra_cropped.png",
    title: "Custom Internet Speed Test",
    subtitle: <span className="italic">Client: HR&A Advisors</span>,
    technologies: (
      <span>
        HTML, JavaScript, CSS, SQL,{" "}
        <a
          className="text-blue"
          href="https://github.com/m-lab/ndt7-js"
          target="_blank"
        >
          NDT7 Protocol
        </a>
      </span>
    ),
    description: (
      <>
        <p>
          In collaboration with HR&A Advisors, I spearheaded the development of
          an internet speed testing tool as part of a significant statewide
          initiative. This ambitious project was designed to analyze and enhance
          digital equity across several states, contributing substantially to
          the broader goal of digital inclusivity.
        </p>
      </>
    ),
    link: "https://speedtest.hraadvisors.com",
    linkText: "View Here",
    blog: "/blog/speedtest",
  },
  {
    image: "/images/soulacoasta_cropped.png",
    title: "Soulacoasta",
    subtitle: "Artist Landing Page",
    technologies: "Next.js, Sanity.io, TailwindCSS",
    description: (
      <>
        <p>
          I developed a dynamic website for Soulacoasta, an artist from Jamaica,
          to enhance his online presence. The project focused on SEO, a custom
          music player, and a content management system using Sanity.io,
          allowing easy updates for shows and visuals. Built with Next.js, the
          site perfectly reflects Soulacoasta’s brand, connecting him with fans
          and setting the stage for future growth.
        </p>
      </>
    ),
    link: "https://soulacoasta.com",
    linkText: "View Here",
    blog: "/blog/soulacoasta",
  },
  {
    image: "/images/texas-logo_cropped.png",
    title: "Public Comment Form",
    subtitle: "Client: Texas Broadband Development Office",
    technologies: "Node.js, Express, EJS, MySQL, CSS",
    description: (
      <>
        <p>
          I played a key role in the Texas Digital Opportunity Plan by
          developing an interactive public comment platform in collaboration
          with the Texas Broadband Office. The platform, built using Node.js,
          Express, and MySQL, featured a bilingual user interface and automated
          email confirmation system. This initiative was crucial in gathering
          public insights to enhance digital equity across the state.
        </p>
      </>
    ),
    link: "",
    linkText: "Project Ended: No Demo Available",
    blog: "/blogs/publiccomment",
  },
  {
    image: "/images/ricommerce_cropped.png",
    title: "Public Comment Form",
    subtitle: "Client: Rhode Island Commerce",
    technologies: "Node.js, Express, EJS, MySQL, CSS",
    description: (<><p>Similar to Texas, I played a key role in the Rhode Island Digital Opportunity Plan by
          developing an interactive public comment platform in collaboration
          with the Rhode Island Commerce office. The platform, built using Node.js,
          Express, and MySQL, featured a bilingual user interface and automated
          email confirmation system. This initiative was crucial in gathering
          public insights to enhance digital equity across the state.
</p></>),
    link: "",
    linkText: "Project Ended: No Demo Available",
    blog: "/blog/publiccomment",
  },
  {
    image: "/images/drip-drop-logo_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: (
      <>
        <p>
          I developed a stylish and functional e-commerce website for Drip Drop
          Apparel, a cutting-edge clothing brand. The site features secure
          payment processing, real-time order tracking via Google Sheets API,
          and dynamic cart functionality. With MongoDB for robust data
          management and seamless email notifications through the Gmail API, the
          platform embodies the ethos of the brand while delivering a smooth shopping
          experience.
        </p>
      </>
    ),
    link: "https://dripdropapparel.com",
    linkText: "View Here",
    blog: "/blog/dripdrop",
  },
  {
    image: "/images/colorgame_cropped.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
    blog: '',
  },
  {
    image: "/images/patatap.png",
    title: "TITLE",
    subtitle: "SUBTITLE",
    technologies: "technologies",
    description: "description",
    link: "google.com",
    linkText: "LINKTEXT",
    blog: '',
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
            blog={project.blog}
          />
        ))}
      </section>
    </main>
  );
}
