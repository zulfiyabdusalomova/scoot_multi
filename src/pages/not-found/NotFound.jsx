import img404 from "../../../public/mock-images/not-found/not-found.png"
import { Button } from "../../components/common";

export const NotFound = () => {
  return (
    <div className="bg-[#F9FAFE] absolute top-0 left-0 right-0">
      <div className="container">
        <div className="py-[90px] text-center">
          <h1 className="text-[#000] text-[42px] font-[400]">
            Oops, SOmething <br />
            Went Wrong
          </h1>
          <div className="my-[25px] flex justify-center">
            <img src={img404} alt="img404" />
          </div>
          <Button>Return to Homepage</Button>
        </div>
      </div>
    </div>
  );
}