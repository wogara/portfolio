interface CustomCardProps {
  image: string;
  title: string;
  subtitle: string;
  technologies: string;
  description: string;
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
    <div className="max-w-full rounded overflow-hidden shadow-lg m-4 h-96 flex flex-col">
      <div className="w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="px-6 py-4 flex-grow overflow-hidden">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
        <p className="text-gray-700 text-base mt-2">
          <strong>Technologies:</strong> {technologies}
        </p>
        <p className="text-gray-700 text-base mt-2 overflow-hidden overflow-ellipsis">
          {description}
        </p>
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
