type GridListsBrandProps = {
  image: string;
  title: string;
  slug: string;
  alt?: string;
  link: string;
};

export const GridListsBrandHomepage = (props: GridListsBrandProps) => {
  return (
    <>
      <div>
        <a href={props.link}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={props.image}
            alt={props.alt}
          />
        </a>
      </div>
    </>
  );
};
