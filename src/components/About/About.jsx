import { useLoaderData } from "react-router-dom";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const About = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
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
              <div className="text-xl mt-5">
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
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.almfamilyhotel.com/andsrv/content/files/almfamilyhotel-a-scherer-essen-1-klein.995.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className=" m-auto py-16">
              <div className=" w-full flex ">
                <div className="bg-[#53383191] py-6 w-4"></div>
                <div className=" ml-5 text-[#533831] md:text-5xl text-3xl font-bold   lobster">
                  Philosophy
                </div>
              </div>
              <div className="text-xl mt-5">
                Share the restaurant's philosophy when it comes to food
                preparation and hospitality. For example: "At Habib's HQ, we
                believe that great food starts with great ingredients. That's
                why we partner with local farmers and suppliers to ensure the
                freshest seasonal produce and highest quality meats and seafood.
                Our dedication to excellence extends to every aspect of the
                dining experience, from meticulous preparation to attentive
                service.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" hero-content flex-col container m-auto">
        <div className=" w-full flex ">
          <div className="bg-[#53383191] py-6 w-4"></div>
          <div className=" ml-5 text-[#533831] md:text-5xl text-3xl font-bold lobster ">
            Customer Count Trend from 2000 to 2024
          </div>
        </div>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              width={1000}
              height={400}
              data={data}
              margin={{
                top: 90,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="customers"
                stroke="#533831"
                fill="#53383191"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://www.laneaward.com/wp-content/uploads/2023/10/Custom-Awards-by-Lane-Award-Designs-1536x658.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className=" m-auto py-16">
              <div className=" w-full flex ">
                <div className="bg-[#53383191] py-6 w-4"></div>
                <div className=" ml-5 text-[#533831] md:text-5xl text-3xl font-bold lobster lobster ">
                  Awards and Recognitions
                </div>
              </div>
              <div className="text-xl mt-5">
                {" "}
                If applicable, mention any awards or accolades received by
                Habib's HQ. For example: "Our commitment to culinary excellence
                has been recognized by one star, earning us
                accolades such as 'Best Restaurant' and 'Chef of the Year.' We
                are grateful for the support of our loyal patrons and the
                recognition of our peers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.squarespace-cdn.com/content/v1/51a615dbe4b0643b1caad822/1622037411076-C4J3W4FA4KQLUTNGGBNC/mission+vision+values.jpg?format=1500w"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className=" m-auto py-16">
              <div className=" w-full flex ">
                <div className="bg-[#53383191] py-6 w-4"></div>
                <div className=" ml-5 text-[#533831] md:text-5xl text-3xl font-bold lobster ">
                  Mission and Values
                </div>
              </div>
              <div className="text-xl mt-5">
                {" "}
                If applicable, mention any awards or accolades received by
                Habib's HQ. For example: "Our commitment to culinary excellence
                has been recognized by [publication/organization], earning us
                accolades such as 'Best Restaurant' and 'Chef of the Year.' We
                are grateful for the support of our loyal patrons and the
                recognition of our peers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="http://pasthistory.unaux.com/wp-content/uploads/2022/06/istockphoto-1092170968-612x612-1.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className=" m-auto py-16">
              <div className=" w-full flex ">
                <div className="bg-[#53383191] py-6 w-4"></div>
                <div className=" ml-5 text-[#533831] md:text-5xl text-3xl font-bold lobster ">
                  History
                </div>
              </div>
              <div className="text-xl mt-5">
                {" "}
                Start by providing a brief overview of the restaurant's history.
                For example: "Established in [year], Habib's HQ has been a
                culinary landmark in [location] for over [number] years. Founded
                by [founder's name], our restaurant has evolved from humble
                beginnings into a beloved dining destination renowned for its
                exquisite cuisine and warm hospitality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
