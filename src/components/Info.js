const Comment = (props) => {
  return (
    <div className="container">
      <h2 className="text-center font-semibold text-2xl mx-10 my-5">
        {props.header}
      </h2>
      <p className="text-center mb-10 px-4">{props.text}</p>
    </div>
  );
};

export default Comment;
