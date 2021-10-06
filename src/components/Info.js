const Comment = (props) => {
  return (
    <div className="mx-auto container text-center md:text-left ">
      <h2 className=" font-semibold text-2xl mx-10 my-5 md:mx-0 ">
        {props.header}
      </h2>
      <p className="mx-auto tracking-wide mb-10 px-8 md:pl-0 md:max-w-xl max-w-md font-light text-very-dark-grayish-blue">
        {props.text}
      </p>
    </div>
  );
};

export default Comment;
