import Button from "../components/button.jsx";
import Ticket from "../assets/thumb.png";
import Ticz from "../assets/ticz.png";

const header = () => {
  return (
    <header className=" bg-[#041E23] flex justify-between mt-5 w-[90%] lg:max-w-[1200px] h-[76px] lg:w-[80%] text-[16px] border-[#197686] m-auto border-2 rounded-[12px] lg:rounded-[24px] p-[12px] ">
      <div className="flex mt-2.5 w-[91.79px] h-[36px">
        <img className="w-[40px] h-[36px]" src={Ticket} alt="ticket" />
        <img
          className="min-w-[44px] h-[23px] mt-1.5 ml-1.5"
          src={Ticz}
          alt="ticket"
        />
      </div>
      <div className="h-[34px] w-[341px] text-[#B3B3B3] hidden lg:block ">
        <ul className="btnFont flex justify-between mt-[10px] mb-[10px]">
          <li className=" text-[#FFF] cursor-pointer ">Events</li>
          <li className=" hover:text-[#FFF] cursor-pointer">My Tickets</li>
          <li className=" hover:text-[#FFF] cursor-pointer">About Project</li>
        </ul>
      </div>
      <div className="flex items-center">
        <Button variant="ticket" btnName={`MY TICKETS `} arr={"→"} />
      </div>
    </header>
  );
};

export default header;
