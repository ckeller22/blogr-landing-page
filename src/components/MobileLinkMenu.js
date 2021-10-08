import classNames from "classnames";

const MobileLinkMenu = (props) => {
  // slide out items
  const links = props.links.map((link) => {
    return (
      <a href="/" className="block text-center font-bold opacity-8 w-full">
        {link}
      </a>
    );
  });

  const tailwindClasses =
    "flex flex-col space-y-2 p-4 rounded menu-bg-opacity mt-6 w-full mx-auto ";

  const displaySlideOut = classNames(`${tailwindClasses} mobile-slide-out`, {
    open: props.open,
  });

  return <div className={displaySlideOut}>{links}</div>;
};

export default MobileLinkMenu;
