const MobileLinkMenu = (props) => {
  const links = props.links.map((link) => {
    return <div>{props.links}</div>;
  });

  return <div className="absolute bg-gray-200 w-full">{links}</div>;
};

export default MobileLinkMenu;
