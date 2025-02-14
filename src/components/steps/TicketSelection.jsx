import Button from "../../components/button.jsx";
import PropTypes from "prop-types";

const ProgressHeader = ({ title, step, progressWidth }) => (
  <div className="w-full lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px]">
    <div className="flex justify-between flex-col lg:flex-row">
      <h1 className="btnFont text-[32px]">{title}</h1>
      <p className="text-[16px]/[150%] roboto mt-5 font-light">{`Step ${step}/3`}</p>
    </div>
    <div className="h-[4px] bg-[#0E464F] rounded-full">
      <div className="h-full bg-[#24A0B5] rounded-full" style={{ width: progressWidth }} />
    </div>
  </div>
);

ProgressHeader.propTypes = {
  title: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  progressWidth: PropTypes.string.isRequired,
};

const EventInfo = () => (
  <div className="tech w-full lg:w-[556px] h-[243px] lg:h-[200px] p-[16px] lg:p-[24px] rounded-[24px] border-[#07373F] border-[1px] text-center mb-[25px]">
    <div className="w-full lg:w-[508px] h-[119px] mb-[25px]">
      <h1 className="road text-[41px] lg:text-[62px]">Techember Fest &quot;25</h1>
      <p className="roboto text-[14px] lg:text-[16px]/[150%]">
        Join us for an unforgettable experience at <br /> Tech4Dev! Secure your spot now.
      </p>
    </div>
    <p className="roboto pl-[10px] lg:pl-0 text-[16px]/[150%]">
      📍 04 Rumens road, Ikoyi, Lagos{" "}
      <span className="mr-[16px] hidden md:inline ml-[16px]">||</span>{" "}
      March 15, 2025 | 7:00 PM
    </p>
  </div>
);

const TicketTypeOption = ({ id, selected, onSelect, label, access, seats }) => (
  <div
    className={`flex flex-col justify-between w-full lg:w-[158px] h-[110px] p-[12px] rounded-[12px] cursor-pointer border-[#197686] border-[1px] transition hover:bg-[#2C545B] ${
      selected ? "bg-[#12464E]" : ""
    }`}
    onClick={() => onSelect(id)}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelect(id);
      }
    }}
    tabIndex={0}
    role="radio"
    aria-checked={selected}
    aria-label={`${label} ticket - ${access}`}
  >
    <div className="w-[80px] h-[38px]">
      <h3 className="roboto font-semibold text-[20px]/[110%]">{label}</h3>
    </div>
    <div className="w-[138px] h-[49px] mt-[12px]">
      <h3 className="roboto text-[#FAFAFA] text-[16px]/[150%] mb-[4px]">{access}</h3>
      <p className="roboto text-[14px]/[150%]">{seats}</p>
    </div>
  </div>
);

TicketTypeOption.propTypes = {
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  access: PropTypes.string.isRequired,
  seats: PropTypes.string.isRequired,
};

const TicketSelection = ({
  step,
  selectedDiv,
  formData,
  handleClick,
  handleInputChange,
  handleNext,
  errors,
  handleCancel,
}) => {
  const progressWidth = `${(step - 1) * 33.33}%`;
  return (
    <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto">
        <ProgressHeader title="Ticket Selection" step={1} progressWidth={progressWidth} />
        <div className="w-full lg:w-[604px] lg:h-[682px] lg:p-[24px] rounded-[32px] bg-[#08252B] border-0 border-[#0E464F] lg:border-[1px]">
          <EventInfo />
          <hr className="h-[4px] text-[#07373F]" />
          <div className="w-[97%] lg:w-[556px] h-[442px] lg:h-[174px] mt-[25px]">
            <h3 className="roboto text-[16px]/[150%] font-light">Select Ticket Type:</h3>
            <div
              role="radiogroup"
              aria-label="Ticket Type Selection"
              className="w-full lg:w-[556px] h-[410px] lg:h-[142px] p-[16px] mt-[16px] mb-0 rounded-[24px] bg-[#052228] border-[#07373F] border-[1px] flex flex-col lg:flex-row justify-evenly"
            >
              <TicketTypeOption
                id="free"
                selected={selectedDiv === "free"}
                onSelect={handleClick}
                label="Free"
                access="REGULAR ACCESS"
                seats="20/52"
              />
              <TicketTypeOption
                id="50"
                selected={selectedDiv === "50"}
                onSelect={handleClick}
                label="$50"
                access="VIP ACCESS"
                seats="20/52"
              />
              <TicketTypeOption
                id="150"
                selected={selectedDiv === "150"}
                onSelect={handleClick}
                label="$150"
                access="VVIP ACCESS"
                seats="20/52"
              />
            </div>
            {errors?.ticketType && (
              <p className="text-[#ff1616] text-lg mt-4" role="alert">
                {errors.ticketType}
              </p>
            )}
          </div>
          <div className="w-[97%] lg:w-[556px] h-[80px] mt-[40px] mb-[25px]">
            <label htmlFor="numberOfTickets" className="roboto text-[16px]/[150%] mb-[8px]">
              Number of Tickets
            </label>
            <select
              id="numberOfTickets"
              className="w-full lg:w-[556px] h-[48px] p-[12px] rounded-[12px] border-[#07373F] border-[1px]"
              name="numberOfTickets"
              value={formData.numberOfTickets}
              onChange={handleInputChange}
              aria-label="Select number of tickets"
            >
              <option className="bg-[#24A0B5]" value="1">
                1
              </option>
              <option className="bg-[#24A0B5]" value="2">
                2
              </option>
              <option className="bg-[#24A0B5]" value="3">
                3
              </option>
            </select>
          </div>
          <div className="flex justify-between flex-col h-[112px] lg:flex-row">
            <Button
              variant="select"
              btnName="Next"
              onClick={handleNext}
              aria-label="Proceed to Attendee Details"
            />
            <Button
              variant="select"
              btnName="Cancel"
              onClick={handleCancel}
              aria-label="Cancel ticket selection"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

TicketSelection.propTypes = {
  step: PropTypes.number.isRequired,
  selectedDiv: PropTypes.string,
  formData: PropTypes.shape({
    ticketType: PropTypes.string,
    numberOfTickets: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    specialRequest: PropTypes.string,
    profilePhoto: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    ticketType: PropTypes.string,
    numberOfTickets: PropTypes.string,
  }),
  handleCancel: PropTypes.func.isRequired,
};

TicketSelection.defaultProps = {
  selectedDiv: null,
  errors: {},
};

export default TicketSelection;
