import FooterItem from "./FooterItem";

const FooterBlock = (props) => {
  const footerItems = props.item.links.map((link) => {
    return <FooterItem link={link} key={link} />;
  });

  return (
    <div className="lg:text-left lg:mr-20">
      <h2 className=" text-white font-bold my-5">{props.item.title}</h2>
      <div className="flex flex-col">{footerItems}</div>
    </div>
  );
};

export default FooterBlock;
