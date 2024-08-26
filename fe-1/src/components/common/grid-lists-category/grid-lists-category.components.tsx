type GridListsCategoryProps = {
  image: string;
  title: string;
  slug: string;
  alt?: string;
  link: string;
}

export const GridListsCategoryHomepage = (props: GridListsCategoryProps) => {
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
