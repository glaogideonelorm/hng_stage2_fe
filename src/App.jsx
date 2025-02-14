import Header from "./layout/header";
import { useEffect, useState, useCallback } from "react";
import TicketSelection from "./components/steps/TicketSelection";
import AttendeeDetails from "./components/steps/AttendeeDetails";
import TicketConfirmation from "./components/steps/TicketConfirmation";

const initialFormData = {
  ticketType: "",
  numberOfTickets: 1,
  name: "",
  email: "",
  specialRequest: "",
  profilePhoto: ""
};

const App = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = useCallback((id) => {
    setSelectedDiv(id);
    setFormData((prev) => ({ ...prev, ticketType: id }));
  }, []);

  const validateForm = useCallback(() => {
    const tempErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.ticketType) {
        tempErrors.ticketType = "Please select a ticket type";
        isValid = false;
      }
    }

    if (step === 2) {
      if (!formData.name.trim()) {
        tempErrors.name = "Name is required";
        isValid = false;
      }
      if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is invalid";
        isValid = false;
      }
      if (!formData.profilePhoto) {
        tempErrors.profilePhoto = "Profile photo is required";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  }, [formData, step]);

  const handleNext = useCallback(
    (e) => {
      if (e && e.key && e.key !== "Enter") return;
      if (validateForm()) {
        localStorage.setItem("ticketData", JSON.stringify(formData));
        setStep(2);
      }
    },
    [formData, validateForm]
  );

  const handleGetTicket = useCallback(
    (e) => {
      if (e && e.key && e.key !== "Enter") return;
      if (validateForm()) {
        localStorage.setItem("attendeeData", JSON.stringify(formData));
        setStep(3);
      }
    },
    [formData, validateForm]
  );

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleFileUpload = useCallback(async (e) => {
    const fileInput = e.target;
    if (fileInput.files?.length) {
      const file = fileInput.files[0];
      if (file.type.startsWith("image/")) {
        setFormData((prev) => ({
          ...prev,
          profilePhoto: URL.createObjectURL(file)
        }));
        setErrors((prev) => ({ ...prev, profilePhoto: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          profilePhoto: "Please upload a valid image file"
        }));
      }
    } else if (fileInput.value.startsWith("http")) {
      setFormData((prev) => ({ ...prev, profilePhoto: fileInput.value }));
      setErrors((prev) => ({ ...prev, profilePhoto: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        profilePhoto: "Please provide a Cloudinary URL or any image link"
      }));
    }
  }, []);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (["dragenter", "dragover"].includes(e.type)) {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: URL.createObjectURL(file)
      }));
      setErrors((prev) => ({ ...prev, profilePhoto: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        profilePhoto: "Please upload a valid image file"
      }));
    }
  }, []);

  const loadData = useCallback(() => {
    const ticketData = JSON.parse(localStorage.getItem("ticketData"));
    const attendeeData = JSON.parse(localStorage.getItem("attendeeData"));
    if (ticketData && attendeeData) {
      setFormData((prev) => ({ ...prev, ...ticketData, ...attendeeData }));
    }
  }, []);

  useEffect(() => {
    if (step === 3) {
      loadData();
    }
  }, [step, loadData]);

  const handleBookAnother = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setSelectedDiv(null);
    setStep(1);
  }, []);

  return (
    <>
      <Header />
      <section
        aria-label={`Step ${step} of 3: ${
          step === 1
            ? "Ticket Selection"
            : step === 2
            ? "Attendee Details"
            : "Ticket Confirmation"
        }`}
      >
        {step === 1 && (
          <TicketSelection
            step={step}
            selectedDiv={selectedDiv}
            formData={formData}
            errors={errors}
            handleClick={handleClick}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleCancel={() => setStep(1)}
          />
        )}

        {step === 2 && (
          <AttendeeDetails
            step={step}
            formData={formData}
            errors={errors}
            isDragging={isDragging}
            handleInputChange={handleInputChange}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleFileUpload={handleFileUpload}
            handleGetTicket={handleGetTicket}
            setStep={setStep}
          />
        )}

        {step === 3 && (
          <TicketConfirmation
            formData={formData}
            handleBookAnother={handleBookAnother}
          />
        )}
      </section>
    </>
  );
};

export default App;
