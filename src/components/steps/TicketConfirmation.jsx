import Button from "../../components/button.jsx";
import BarCode from "../../assets/barCode.png"; 
import PropTypes from "prop-types";

const TicketHeader = ({ progress, title, stepText }) => (
  <div className="w-full lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px]">
    <div className="flex justify-between">
      <h1 className="btnFont text-[32px]">{title}</h1>
      <p className="text-[16px]/[150%] roboto mt-5 font-light">{stepText}</p>
    </div>
    <div className="h-[4px] bg-[#0E464F] rounded-full">
      <div
        className="h-full bg-[#24A0B5] rounded-full"
        style={{ width: progress }}
      ></div>
    </div>
  </div>
);

TicketHeader.propTypes = {
  progress: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stepText: PropTypes.string.isRequired,
};

const TicketCard = ({ formData }) => (
  <div className="back w-[300px] h-[600px] bg-[#12464E] border-[#24A0B5] border-[1px] relative">
    <div className="w-[90%] max-w-[260px] h-[446px] p-[14px] m-auto mt-[20px] absolute left-[20px] rounded-[16px] border-[#24A0B5] border-[1px]">
      <div className="max-w-[232px] h-[416px] m-auto">
        <div className="w-full lg:w-[175px] h-[76px] m-auto text-center">
          <h1 className="road text-[34px]">Techember Fest &quot;25</h1>
          <p className="roboto text-[10px]">📍 04 Rumens road, Ikoyi, Lags</p>
          <p className="roboto text-[10px]">📅 March 15, 2025 | 7:00 PM</p>
        </div>
        <div className="rounded-[12px] w-[140px] h-[140px] m-auto border-[#249fb580] border-[5px]">
          <img
            className="w-full h-full"
            src={formData.profilePhoto || User}
            alt="User"
          />
        </div>
        <div className="w-[95%] max-w-[232px] h-[160px] p-[4px] bg-[#08343C] border-[#133D44] border-[1px] rounded-[24px] mt-[20px]">
          <div className="w-[224px] h-[45px] flex border-b border-[#133D44]">
            <div className="w-[108px] h-[45px] p-[4px]">
              <p className="roboto text-[10px] opacity-33">Name</p>
              <h2 className="roboto text-[12px] font-bold">{formData.name}</h2>
            </div>
            <div className="w-[108px] h-[45px] p-[4px]">
              <p className="roboto text-[10px] opacity-33">Email</p>
              <h2 className="roboto text-[7px] font-bold">{formData.email}</h2>
            </div>
          </div>
          <div className="w-[224px] h-[45px] flex border-b border-[#133D44]">
            <div className="w-[108px] h-[45px] p-[4px]">
              <p className="roboto text-[10px] opacity-33">Ticket Type</p>
              <h2 className="roboto text-[10px]">{formData.ticketType}</h2>
            </div>
            <div className="w-[108px] h-[45px] p-[4px]">
              <p className="roboto text-[10px] opacity-33">Ticket for:</p>
              <h2 className="roboto text-[10px]">{formData.numberOfTickets}</h2>
            </div>
          </div>
          <div className="w-[224px] h-[65px] flex flex-col p-[8px]">
            <p className="roboto text-[10px] opacity-33">Special request:</p>
            <h2 className="roboto text-[10px]">{formData.specialRequest}</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="bod w-[30px] h-[30px] bg-[#08252B] lg:bg-[#041E23] rounded-full absolute -left-[15px] bottom-[574px] rotate-[30deg]"></div>
    <div className="bod w-[30px] h-[30px] bg-[#08252B] lg:bg-[#041E23] rounded-full absolute -right-[12px] bottom-[580px] rotate-[140deg]"></div>
    <div className="bod w-[30px] h-[30px] bg-[#08252B] lg:bg-[#041E23] rounded-full absolute -right-[15px] bottom-[90px] rotate-[180deg]"></div>
    <div className="bod w-[30px] h-[30px] bg-[#08252B] lg:bg-[#041E23] rounded-full absolute -left-[15px] bottom-[90px]"></div>
    <div className="bod w-[30px] h-[30px] bg-[#08252B] lg:bg-[#041E23] rounded-full absolute -left-[10px] top-[580px] rotate-[-40deg]"></div>
    <div className="bod w-[30px] h-[30px] bg-[#08252B] lg:bg-[#041E23] rounded-full absolute -right-[15px] top-[580px] rotate-[-140deg]"></div>
    <hr className="zig absolute bottom-[105px] w-full" />
    <div className="max-w-[236px] m-auto h-[68px] absolute bottom-[15px] left-[30px]">
      <img src={BarCode} alt="Ticket barcode" className="w-full h-full" />
    </div>
  </div>
);

TicketCard.propTypes = {
  formData: PropTypes.shape({
    ticketType: PropTypes.string.isRequired,
    numberOfTickets: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    specialRequest: PropTypes.string,
    profilePhoto: PropTypes.string,
  }).isRequired,
};

const TicketConfirmation = ({ formData, handleBookAnother }) => {
  return (
    <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto">
        <TicketHeader progress="100%" title="Ready" stepText="Step 3/3" />

        <div className="w-full lg:w-[604px]">
          <div className="w-full h-[81px]">
            <h1 className="text-[32px] text-center alatsi mb-[16px]">
              Your Ticket is Booked!
            </h1>
            <p className="roboto text-center text-[16px]/[150%]">
              You can download or check your email for a copy
            </p>
          </div>
          <div className="w-full max-w-[604px] min-h-[664px] flex justify-center items-center py-8">
            <TicketCard formData={formData} />
          </div>
          <div className="flex justify-between flex-col h-[112px] lg:flex-row mt-[32px]">
            <Button variant="select" btnName="Download Ticket" />
            <Button
              variant="select"
              btnName="Book Another Ticket"
              onClick={handleBookAnother}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

TicketConfirmation.propTypes = {
  formData: PropTypes.shape({
    ticketType: PropTypes.string.isRequired,
    numberOfTickets: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    specialRequest: PropTypes.string,
    profilePhoto: PropTypes.string,
  }).isRequired,
  handleBookAnother: PropTypes.func.isRequired,
};

TicketConfirmation.defaultProps = {
  formData: {
    specialRequest: "",
    profilePhoto: "",
  },
};

export default TicketConfirmation;
