import { MdOutlineClose } from "react-icons/md";
import Button from "./../../common/Button";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center h-[85vh]">
        <MdOutlineClose className="w-16 h-16 p-3 bg-red-500 text-white rounded-full" />
        <h1 className="font-bold font-babesNeue md:text-5xl text-2xl text-center md:tracking-[10px] tracking-[5px]">
          Data Not Available
        </h1>
        <Button
          className="md:text-4xl text-2xl lg:w-1/4 w-1/2 px-3 bg-sky-400 h-16 rounded-2xl"
          handleChange={back}
        >
          Back Home
        </Button>
      </div>
    </>
  );
};

export default Error;