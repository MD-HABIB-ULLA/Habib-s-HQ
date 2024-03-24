import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-transparent container m-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img className="md:w-[40%] w-[70%]" src="./banner.svg" alt="" />
          <div className="p-6">
            <h1 className="text-5xl font-bold text-[#533831] lobster">
              Indulge in Culinary Excellence <br /> Welcome to Habib'
              <span className="text-[#6b5d50]">s</span> HQ!
            </h1>
            <p className="py-6 text-[#533831] montserrat1">
              Experience a culinary journey like no other at [Restaurant Name].
              Our passion for flavor, dedication to quality ingredients, and
              commitment to exceptional service combine to create an
              unforgettable dining experience. From tantalizing appetizers to
              decadent desserts, every dish tells a story of craftsmanship and
              creativity. Join us and savor the essence of fine dining.
            </p>
            <Link to="foods">
              <button className="btn text-white bg-[#533831] hover:bg-[#533831a1]">
                Order Food
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center  ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster  py-5">
        Discover Our Story
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.iths.org/wp-content/uploads/cenr-2019-3-8-v2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className=" m-auto py-16">
              <div className=" w-full flex ">
                <div className="bg-[#53383191] py-6 w-4"></div>
                <div className=" ml-5 text-[#533831] md:text-5xl text-3xl font-bold lobster ">
                  Community Engagement
                </div>
              </div>
              <div className="text-base mt-5 py-6 text-[#533831] montserrat1">
                Highlight any community involvement or partnerships. For
                example: "Committed to giving back to the community, Habib's HQ
                actively supports local charities and organizations. Whether
                it's hosting fundraisers, participating in food drives, or
                sponsoring cultural events, we are proud to be a positive force
                for good in Faridgonj.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {" "}
        {/* Flexbox */}
        <Link to="/about">
          {" "}
          {/* Ensure correct path to the "about" route */}
          <button className="btn text-white bg-[#533831] hover:bg-[#533831a1]">
            Read More
          </button>
        </Link>
      </div>

      <div className="text-center  ml-5 text-[#533831] text-4xl md:text-7xl font-bold lobster  py-5">
        Our Customer FeedBack
      </div>

      <div className=" container m-auto  grid md:grid-cols-4  md:grid-row-3  gap-4 mt-5">
        <div className=" md:col-span-2 h-full">
          <div className="card   shadow-xl md:flex-row flex-col bg-[#53383115] p-3 w-full">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">
                Sarah Johnson
              </h2>
              <p className=" text-[#533831] montserrat1">
                The ambiance of your restaurant is so inviting and cozy. From
                the warm lighting to the tasteful decor, it's the perfect
                setting for a relaxed meal with friends or family.
              </p>
            </div>
            <figure>
              <img
                src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/happy-customer-sitting-at-restaurant-table.jpg?itok=WEp3-RyL"
                alt="Shoes"
                className=" h-full w- rounded-lg shadow-2xl"
              />
            </figure>
          </div>
        </div>
        <div className="md:row-span-2 h-full">
          {" "}
          <div className="card   shadow-xl flex-col bg-[#53383115] p-3">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">David Smith</h2>
              <p className=" text-[#533831] montserrat1">
                The service here was outstanding! The staff was incredibly
                friendly and attentive throughout our meal. It really made our
                dining experience memorable.
              </p>
            </div>
            <figure>
              <img
                src="https://thumbnails.production.thenounproject.com/jpzuJzB2HMgwhP3h5ugclcnScCg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/4B3994EA-FF9C-47E2-9172-5B32066EE417.jpg"
                alt="Shoes"
                className=" h-full w- rounded-lg shadow-2xl"
              />
            </figure>
          </div>
        </div>
        <div className="md:row-span-2 h-full">
          {" "}
          <div className="card   shadow-xl flex-col md:flex-col-reverse bg-[#53383115] p-3">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">
                Sarah Johnson
              </h2>
              <p className=" text-[#533831] montserrat1">
                The ambiance of your restaurant is so inviting and cozy. From
                the warm lighting to the tasteful decor, it's the perfect
                setting for a relaxed meal with friends or family.
              </p>
            </div>
            <figure>
              <img
                src="https://www.customerservicemanager.com/wp-content/uploads/2016/08/pastaeat.jpg"
                alt="Shoes"
                className=" h-full w- rounded-lg shadow-2xl"
              />
            </figure>
          </div>
        </div>
        <div className="md:row-span-2 md:block hidden">
          {" "}
          <div className="card   shadow-xl flex-col-reverse  bg-[#53383115] p-3">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">
                Michael Brown
              </h2>
              <p className=" text-[#533831] montserrat1">
                I appreciate the variety on your menu! There were so many
                delicious options to choose from, and I loved that there were
                choices for everyone, including vegetarians like myself.
              </p>
            </div>
            <figure>
              <img
                src="https://envato-shoebox-0.imgix.net/e5a6/b541-87bd-4ed9-9d9e-db696aa15146/IMG_6718.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=09d5d7ee0a2826494b6b59fecafdc44b"
                className=" h-full w- rounded-lg shadow-2xl"
              />
            </figure>
          </div>
        </div>
        <div className="md:row-span-2 md:block hidden">
          {" "}
          <div className="card   shadow-xl flex-col  bg-[#53383115] p-3">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">
                Jessica Rodriguez
              </h2>
              <p className=" text-[#533831] montserrat1">
                Your restaurant offers great value for money! The portion sizes
                were generous, and the prices were reasonable considering the
                quality of the food and service.
              </p>
            </div>
            <figure>
              <img
                src="https://envato-shoebox-0.imgix.net/6391/33d4-6c23-4ae8-8aa0-40f3f42893f8/SAE_1126.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=e539c1c0777eefba672ddbcecee8fbb4"
                alt="Shoes"
                className=" h-full w- rounded-lg shadow-2xl"
              />
            </figure>
          </div>
        </div>
        <div className="md:col-span-2 md:block hidden">
          {" "}
          <div className="card   shadow-xl md:flex-row flex-col bg-[#53383115] p-3">
            <div className="card-body">
              <h2 className="card-title lobster text-[#533831]">
                Kevin Nguyen
              </h2>
              <p className=" text-[#533831] montserrat1">
                Your online presence is top-notch! I follow you on social media,
                and I love seeing updates about new menu items, promotions, and
                events. It really keeps me engaged and excited to visit again.
              </p>
            </div>
            <figure>
              <img
                src="https://envato-shoebox-0.imgix.net/40c5/4597-6db1-4559-b2af-fffae756d85c/DSC01153.JPG?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=800&fit=max&markalign=center%2Cmiddle&markalpha=18&s=374c60bd2329e4a1e2c27336802713e0"
                alt="Shoes"
                className=" h-full w- rounded-lg shadow-2xl"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className=" flex items-center w-full justify-center mt-16">
        <Link to="feedback">
          <button className="  btn text-white bg-[#533831] hover:bg-[#533831a1]">
            See More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
