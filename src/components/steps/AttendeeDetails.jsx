import Button from "../../components/button.jsx";
import { Mail } from "lucide-react";
import PropTypes from "prop-types";

const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const AttendeeDetails = ({
  step,
  formData,
  errors,
  isDragging,
  handleInputChange,
  handleDrag,
  handleDrop,
  handleFileUpload,
  handleGetTicket,
  setStep,
}) => {
  const uploadContainerClasses = `
    w-[240px] h-[240px] mt-[24px] m-auto relative cursor-pointer 
    ${isDragging ? "bg-[#0E464F]" : "bg-[#0E464F]"}
    ${errors.profilePhoto ? "border-red-500" : "border-[#24A0B5]"}
    border-[4px] rounded-[32px] transition-all duration-300
  `;

  return (
    <section>
      <main className="w-[90%] lg:w-[700px] border-[#0E464F] border-2 p-[24px] lg:p-[48px] rounded-[40px] bg-[#08252B] lg:bg-[#041E23] mt-15 m-auto">
        <div className="w-full lg:w-[604px] h-[78px] lg:h-[48px] mb-[25px]">
          <div className="flex justify-between">
            <h1 className="btnFont text-[32px]">Attendee Details</h1>
            <p className="text-[16px]/[150%] roboto mt-5 font-light">
              Step 2/3
            </p>
          </div>
          <div className="h-[4px] bg-[#0E464F] rounded-full">
            <div
              className="h-full bg-[#24A0B5] rounded-full"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>
        <div className="w-full lg:w-[604px] lg:h-[907px] lg:p-[24px] rounded-[32px] bg-[#08252B] border-0 border-[#0E464F] lg:border-[1px]">
          <div className="w-full lg:w-[556px] lg:h-[323px] h-[328px] p-[16px] lg:p-[24px] rounded-[24px] border-[#07373F] border-[1px] text-center mb-[32px]">
            <h2 className="text-left roboto text-[16px]/[150%]">
              Upload Profile Photo
            </h2>
            <div className="w-full lg:w-[508px] lg:h-[200px] mt-[24px] lg:bg-[#00000048] relative">
              <div
                className={uploadContainerClasses}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    document.getElementById("fileInput").click();
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Upload profile photo"
                aria-describedby={errors.profilePhoto ? "photo-error" : undefined}
              >
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                  aria-label="Choose profile photo"
                />
                {formData.profilePhoto ? (
                  <div className="w-full h-full relative group">
                    <img
                      src={formData.profilePhoto}
                      alt="Preview"
                      className="w-full h-full rounded-[32px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0E464F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px] flex flex-col items-center justify-center">
                      <div className="text-[#fff] mb-2">
                        <UploadIcon />
                      </div>
                      <p className="roboto text-[16px]/[150%] text-[#fff]">
                        Drag and drop or click to upload
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-[#fff] mb-2">
                      <UploadIcon />
                    </div>
                    <p className="roboto text-[16px]/[150%] text-[#fff]">
                      Drag and drop or click to upload
                    </p>
                  </div>
                )}
              </div>
            </div>
            {errors.profilePhoto && (
              <p
                id="photo-error"
                className="text-red-500 text-sm mt-2"
                role="alert"
              >
                {errors.profilePhoto}
              </p>
            )}
          </div>
          <div className="w-[97%] lg:w-[556px] h-[80px] mt-[50px] lg:mt-[25px] flex flex-col">
            <label
              htmlFor="name"
              className="roboto text-[16px]/[150%] font-normal"
            >
              Enter your name *
              <span className="sr-only">(Required)</span>
            </label>
            <input
              id="name"
              className={`p-[12px] w-full lg:w-[556px] h-[48px] border-[#07373F] border-[1px] rounded-[12px] text-[16px] mb-[8px] mt-[8px] transition focus:bg-[#083C46] focus:ring-2 focus:ring-[#24A0B5] focus:outline-none caret-[#24A0B5] ${
                errors.name ? "border-red-500" : ""
              }`}
              type="text"
              name="name"
              placeholder="e.g. Gideon Glago"
              value={formData.name}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div className="w-[97%] lg:w-[556px] h-[80px] mt-[32px] flex flex-col">
            <label
              htmlFor="email"
              className="roboto text-[16px]/[150%] font-normal"
            >
              Enter your email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-[26px] h-[24px] w-[24px] text-[#fff]" />
            </div>
            <input
              id="email"
              className={`p-[12px] pl-[40px] w-full lg:w-[556px] h-[48px] border-[#07373F] border-[1px] rounded-[12px] text-[16px] mb-[8px] mt-[8px] transition focus:bg-[#083C46] focus:ring-2 focus:ring-[#24A0B5] focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              placeholder="e.g. Gideon@example.com"
              value={formData.email}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <hr className="h-[4px] bg-[#07373F] my-4" />
          <div className="w-[97%] lg:w-[556px] h-[159px] mt-[32px] flex flex-col">
            <label
              htmlFor="specialRequest"
              className="roboto text-[16px]/[150%] font-normal mb-[8px]"
            >
              Special request?
            </label>
            <textarea
              id="specialRequest"
              maxLength={100}
              className="w-full lg:w-[556px] h-[127px] p-[12px] rounded-[12px] resize-none focus:bg-[#083C46] border-[#07373F] border-[1px] text-[16px]/[150%] focus:ring-2 focus:ring-[#24A0B5] focus:outline-none"
              placeholder="Enter any special requests here"
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleInputChange}
              aria-label="Special requests"
            ></textarea>
          </div>
          <div className="flex flex-col lg:flex-row justify-between h-[112px] mt-[32px]">
            <Button
              variant="select"
              btnName="Get My Free Ticket"
              onClick={handleGetTicket}
              aria-label="Proceed to Ticket Confirmation"
            />
            <Button variant="select" btnName="Back" onClick={() => setStep(1)} />
          </div>
        </div>
      </main>
    </section>
  );
};

AttendeeDetails.propTypes = {
  step: PropTypes.number.isRequired,
  formData: PropTypes.shape({
    ticketType: PropTypes.string,
    numberOfTickets: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    specialRequest: PropTypes.string,
    profilePhoto: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    profilePhoto: PropTypes.string,
  }),
  isDragging: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
  handleGetTicket: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
};

AttendeeDetails.defaultProps = {
  errors: {},
};

export default AttendeeDetails;
