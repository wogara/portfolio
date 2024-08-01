import Image from "next/image";
import { ReactNode } from "react";

interface CustomCardProps {
  image: string;
  title: string;
  subtitle: ReactNode;
  technologies: ReactNode;
  description: ReactNode;
  link: string;
  linkText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  image,
  title,
  subtitle,
  technologies,
  description,
  link,
  linkText,
}) => {
  return (
    <div className="max-w-2xl bg-mantle rounded overflow-hidden shadow-lg m-4 flex flex-col">
      <div className="w-full h-48 overflow-hidden">
        <Image className="w-full h-full object-cover" width={500} height={500} src={image} alt={title} />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-text">{subtitle}</p>
        <p className="text-text mt-2">
          <strong>Technologies:</strong> {technologies}
        </p>
        <div className="text-text text-base mt-2">
          {description}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={link}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default CustomCard;
