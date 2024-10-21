// import {
//   locationActivitiesData,
//   locationData,
//   locationDocumentsData,
// } from "../../lib/db";


import Filter from "./../../shared/Filter";
import { FaLocationDot } from "react-icons/fa6";
import Card from "./../dashboard/Card";
import { locationActivitiesData, locationData, locationDocumentsData } from "../../Common/lib";

const Location = () => {
  return (
    <div>
      <Filter
        welcome="Incidents - DR-4699 March 2023 Severe Storms "
        heading="DR-4699 March 2023 Severe Storms"
        btnText="+ New Location"
        img="/tree.png"
        className={"md:text-2xl text-base"}
      />
      {/* details */}
      <div className="flex md:flex-row flex-col md:justify-around justify-center md:items-start items-center my-12 gap-3 w-full">
        <div className="flex flex-col justify-start md:ms-5 ms-0 items-start gap-3 md:w-1/2 w-full">
          <div className="flex justify-center items-center gap-4">
            <FaLocationDot className="bg-whiteLight text-grayBold rounded-full md:w-10 w-7 md:h-10 h-7 px-2 py-1" />

            <div>
              <p className="text-14 text-grayBold leading-6">location</p>
              <h1 className="font-bold text-xl text-blackBold md:leading-7 leading-5">
                Tulare County, Los Angles, CA 23415
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <img
              src="/location-icon.png"
              alt=""
              className="bg-whiteLight text-grayBold rounded-full md:w-10 w-7 md:h-10 h-7 px-2 py-1"
            />
            <div>
              <p className="text-14 text-grayBold leading-6">Approx. Cost:</p>
              <h1 className="font-bold text-xl text-blackBold md:leading-7 leading-5">
                $60,607,456.00
              </h1>
            </div>
          </div>
          <hr className="w-full bg-whiteLight h-[2px] my-8" />
          <div className="md:ms-0 ms-5">
            <h1 className="font-bold text-black text-14 leading-6 ">
              Description
            </h1>
            <p className="text-base text-grayBold leading-6">
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>
          <hr className="w-full bg-whiteLight h-[2px] my-8" />
          <div className="w-full">
            <div className="flex md:justify-between justify-around">
              <h3 className="text-14 text-blackBold leading-6 font-bold">
                Location
              </h3>
              <p className="text-14 leading-6 text-grayBold underline hover:cursor-pointer">
                see all
              </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center">
              {locationData.map(({ img, title, description, amount }, i) => (
                <Card
                  key={i}
                  img={img}
                  title={title}
                  description={description}
                  amount={amount}
                />
              ))}
            </div>
            <hr className="w-full bg-whiteLight h-[2px] my-8" />
            <div>
              <div className="flex md:justify-between justify-around">
                <h3 className="text-14 text-blackBold leading-6 font-bold">
                  activities
                </h3>
                <p className="text-14 leading-6 text-grayBold underline hover:cursor-pointer">
                  see all
                </p>
              </div>
              <div>
                {locationActivitiesData.map(
                  ({ img, title, locationName, amount }, i) => (
                    <Card
                      key={i}
                      img={img}
                      title={title}
                      description={locationName}
                      amount={amount}
                      imgClass={"w-[78px] h-[78px]"}
                      className={
                        "flex flex-row justify-start items-center gap-3 bg-whiteLight md:w-full w-[90%] mx-auto"
                      }
                    />
                  )
                )}
              </div>
            </div>
            <hr className="w-full bg-whiteLight h-[2px] my-8" />
            <div>
              <div className="flex md:justify-between justify-around">
                <h3 className="text-14 text-blackBold leading-6 font-bold">
                  Documents
                </h3>
                <p className="text-14 leading-6 text-grayBold underline hover:cursor-pointer">
                  see all
                </p>
              </div>
              <div>
                {locationDocumentsData.map(
                  ({ img, title, locationName, amount }, i) => (
                    <Card
                      key={i}
                      img={img}
                      title={title}
                      description={locationName}
                      amount={amount}
                      imgClass={"w-[78px] h-[78px]"}
                      className={
                        "flex flex-row justify-start items-center gap-3 bg-whiteLight md:w-full w-[90%] mx-auto"
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="md:w-1/2 ms-5 w-[90%] flex flex-col justify-center items-start">
          <p className="text-14 leading-6 text-grayBold mb-5">Incident Map</p>
          <img src="/location-map.png" alt="" />
          <p className="text-14 leading-6 text-grayBold mb-5">
            Start 19.1232, -118.233 End 19.3245, -119.2323
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
