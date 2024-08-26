type SliderImageProps = {
  image: string;
  alt?: string;
  link?: string;
}

export const SliderImage = ({ image, alt, link }: SliderImageProps) => {
  return (
    <>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        {link ? (
          <a href={link}>
            <img src={image} alt={alt} />
          </a>
        ) : (
          <img src={image} alt={alt} />
        )}
      </div>
    </>
  );
};
