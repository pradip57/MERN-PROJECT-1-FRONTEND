interface HomeTitleProps {
  title: string;
  link?: string | null;
}

const HomeTitle = ({ title, link }: HomeTitleProps) => {
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-teal-600 hover:text-teal-900 hover:cursor-pointer ">
            {title}
          </h1>
          {link ? (
            <a
              href={link}
              className="rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              View All →
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default HomeTitle;
