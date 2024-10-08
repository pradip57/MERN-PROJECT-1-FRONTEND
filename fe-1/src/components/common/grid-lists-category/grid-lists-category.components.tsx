import { NavLink } from "react-router-dom";

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
        <NavLink to={props.slug}>
          <img
            className="h-auto max-w-full rounded-lg"
            src={props.image}
            alt={props.alt}
          />
        </NavLink>
      </div>
    </>
  );
};
