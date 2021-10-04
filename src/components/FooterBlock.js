import FooterItem from "./FooterItem";

const FooterBlock = (props) => {
  const footerItems = props.item.links.map((link) => {
    return <FooterItem link={link} />;
  });

  return (
    <div className="">
      <h2 className=" text-white font-bold my-5">{props.item.title}</h2>
      <div className="flex flex-col">{footerItems}</div>
    </div>
  );
};

export default FooterBlock;
