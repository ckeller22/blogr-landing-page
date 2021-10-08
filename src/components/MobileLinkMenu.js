const MobileLinkMenu = (props) => {
  const links = props.links.map((link) => {
    return (
      <a href="/" className="text-center font-bold opacity-8 w-full">
        {link}
      </a>
    );
  });

  return (
    <div className="flex flex-col space-y-2 p-4 rounded menu-bg-opacity mt-6 w-full mx-auto ">
      {links}
    </div>
  );
};

export default MobileLinkMenu;
