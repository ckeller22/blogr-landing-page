const Comment = (props) => {
  return (
    <div className="flex flex-col container text-center md:text-left md:pt-5">
      <h2 className="mx-auto font-semibold text-2xl my-5 md:m-0 px-6 md:px-0">
        {props.header}
      </h2>
      <p className="mx-auto tracking-wide mb-10 px-8 md:pl-0 md:max-w-xl md:m-0 md:pt-5 max-w-md font-light text-very-dark-grayish-blue">
        {props.text}
      </p>
    </div>
  );
};

export default Comment;
