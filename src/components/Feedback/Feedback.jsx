import { useLoaderData } from "react-router-dom";
import FeedbackCard from "./FeedbackCard";
import { useState } from "react";

const Feedback = () => {
  const [limitedData, setLimitedData] = useState(6);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, feedback } = event.target.elements;
    setFormData({
      name: name.value,
      email: email.value,
      feedback: feedback.value,
    });
    setFormSubmitted(true);
  };

  const users = useLoaderData();

  return (
    <>
      <div className={`${formSubmitted ? "" : "hidden"}`}>
        <div className="text-center ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster py-5">
          Thanks for your feedback
        </div>
        <div className="md:w-[50%] w-[90%] m-auto">
          <div className="card shadow-xl md:flex-row flex-col bg-[#53383115] p-3 w-full">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">
                {formData.name}
              </h2>
              <p className="text-[#533831] montserrat1 text-wrap">
                {formData.feedback}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${formSubmitted ? "hidden" : ""}`}>
        <div className="text-center ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster py-5">
          Add Your Feedback
        </div>
        <div className="hero container m-auto">
          <div className="flex flex-col lg:flex-row-reverse w-full">
            <div className="md:w-[50%] ">
              <img src="./testimonial.svg" className="rounded-lg" alt="" />
            </div>
            <div className="md:w-[40%] w-[90%] m-auto">
              <div className="w-full">
                <form onSubmit={handleSubmit} className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl text-[#533831]">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="User Name"
                      className="input input-bordered border border-[#533831] bg-transparent"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl text-[#533831]">
                        Email
                      </span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered border border-[#533831] bg-transparent"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl text-[#533831]">
                        Feedback
                      </span>
                    </label>
                    <textarea
                      className="bg-transparent border border-[#533831] rounded-lg p-3"
                      cols="30"
                      rows="10"
                      name="feedback"
                    ></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className="btn text-white bg-[#533831] hover:bg-[#533831a1]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster py-5">
        Feedbacks
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 container m-auto gap-6 mt-5">
        {users.slice(0, limitedData).map((user, index) => (
          <FeedbackCard key={index} user={user} />
        ))}
      </div>
      <div className={`w-full flex justify-center mt-6 ${limitedData === users.length ? 'hidden': ''}`}>
        <button
          type="submit"
          className="btn text-white  bg-[#533831] hover:bg-[#533831a1]  "
          onClick={()=> setLimitedData(users.length)}
        >
          See More
        </button>
      </div>
    </>
  );
};

export default Feedback;
