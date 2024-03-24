const FeedbackCard = ({ user }) => {
  const { name, photo, feedback } = user;
  return (
    <div className="card   shadow-xl md:flex-row flex-col bg-[#53383115] p-3 w-full">
      <div className="card-body">
        <h2 className="card-title lobster text-[#533831]">{name}</h2>
        <p className=" text-[#533831] montserrat1 text-wrap">{feedback}</p>
      </div>
      <figure className="md:w-[60%]">
        <img src={photo} alt="Shoes" className="  w-full rounded-lg " />
      </figure>
    </div>
  );
};

export default FeedbackCard;
