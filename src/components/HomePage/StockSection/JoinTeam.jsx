import React, { useEffect, useRef, useState } from "react";
import { close, tick2 } from "../../../assets";
import emailjs from "@emailjs/browser";
import Confirmation from "./Confirmation";
import { Link } from "react-router-dom";

const JoinTeam = ({ closeModal }) => {
  const form = useRef();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [copartnerChecked, setCopartnerChecked] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
    expertise: "",
    experience: "",
    telegramLink: "",
    telegramMembers: "",
    my_file: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleShowConfirmation();
  };

  // Function to handle form submission after confirmation
  const handleConfirmSubmit = () => {
    // Send form data using emailjs
    emailjs
      .sendForm("service_kjbfrlb", "template_0q7an8s", form.current, {
        publicKey: "t93NEg-srlerr1Vbm",
      })
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessPopup(true);
          setFormValues({
            name: "",
            mobile: "",
            email: "",
            expertise: "",
            experience: "",
            telegramLink: "",
            telegramMembers: "",
            my_file: null,
          });
        },
        (error) => {
          console.error("Email sending error:", error.text);
        }
      );

    handleCloseConfirmation();
    handleOpenModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCopartnerChange = () => {
    setCopartnerChecked(!copartnerChecked);
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        handleCloseModal();
        closeModal();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, handleCloseModal]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181B] p-6 rounded-lg relative">
        <button onClick={closeModal} className="absolute top-2 right-2">
          <img src={close} alt="Close" className="w-8 h-8" />
        </button>
        <h2 className="text-3xl font-bold mb-4 subheading-color">
          Join Our Expert Team
        </h2>
        {/* Add your form here */}
        <form
          ref={form}
          id="myForm"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>
            {/* Mobile Number Field */}
            <div className="relative">
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formValues.mobile}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer"
                placeholder=" "
              />
              <label
                htmlFor="mobile"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Mobile Number
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fffff49]appearance-none dark:text-white dark:border-[#ffffff49] dark:focus:border-[#fffff49] focus:outline-none focus:ring-0 focus:border-[#fffff49] peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>

            {/* PAN Card Number Field */}
            <div className="relative">
              <input
                type="number"
                name="experience"
                id="experience"
                value={formValues.experience}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder=" "
              />
              <label
                htmlFor="experience"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                PAN Card Number
              </label>
            </div>

            {/* Expertise In Field */}
            <div className="relative">
              <div className="custom-select-wrapper">
                <select
                  name="expertise"
                  id="expertise"
                  value={formValues.expertise}
                  onChange={handleInputChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer"
                >
                  <option value="" disabled>
                    Select Expertise
                  </option>
                  <option value="Future & Options" className="bg-[#18181B]">
                    Future & Options
                  </option>
                  <option value="Equity" className="bg-[#18181B]">
                    Equity
                  </option>
                  <option value="Commodity" className="bg-[#18181B]">
                    Commodity
                  </option>
                  {/* Add more options as needed */}
                </select>
                <label
                  htmlFor="expertise"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Expertise In
                </label>
                <span className="custom-arrow"></span>
              </div>
            </div>

            {/* Experience Field */}
            <div className="relative">
              <input
                type="number"
                name="experience"
                id="experience"
                value={formValues.experience}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder=" "
              />
              <label
                htmlFor="experience"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Experience
              </label>
            </div>

            {/* Channel Field */}
            <div className="relative">
              <input
                type="number"
                name="experience"
                id="experience"
                value={formValues.experience}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder=" "
              />
              <label
                htmlFor="experience"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Channel Name
              </label>
            </div>

            {/* Sebi Registration Field */}
            <div className="relative">
              <input
                type="number"
                name="experience"
                id="experience"
                value={formValues.experience}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder=" "
              />
              <label
                htmlFor="experience"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                SEBI Registration Number
              </label>
            </div>

            {/* Free Telegram Channel Link Field */}
            <div className="relative">
              <input
                type="text"
                name="telegramLink"
                id="telegramLink"
                value={formValues.telegramLink}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer"
                placeholder=" "
              />
              <label
                htmlFor="telegramLink"
                className="absolute md:flex hidden text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Free Telegram Channel Link
              </label>
              <label
                htmlFor="telegramLink"
                className="absolute md:hidden text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Channel Link
              </label>
            </div>

            {/* Members in Telegram Channel Field */}
            <div className="relative">
              <input
                type="text"
                name="telegramMembers"
                id="telegramMembers"
                value={formValues.telegramMembers}
                onChange={handleInputChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer"
                placeholder=" "
              />
              <label
                htmlFor="telegramMembers"
                className="absolute md:flex hidden text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Members in Telegram Channel
              </label>
              <label
                htmlFor="telegramMembers"
                className="absolute md:hidden text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Number Of Members
              </label>
            </div>

            {/* SEBI Registration Certificate Field */}

            <div className="relative col-span-2">
              <label htmlFor="my_file" className="text-[#ffffff88] block mb-2">
                Select SEBI Registration Certificate
              </label>
              <div className="border-2 border-dashed rounded-lg">
                <input
                  type="file"
                  name="my_file"
                  id="my_file"
                  value={formValues.my_file}
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="my_file"
                  className="block w-full bg-transparent text-white p-20  rounded-md text-center cursor-pointer"
                >
                  Select
                </label>
                {uploadedFile && (
                  <p className="text-gray-500 text-sm text-center p-2">
                    Uploaded: {uploadedFile.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative flex items-center md:mr-96">
            <input
              type="checkbox"
              id="copartnerCheckbox"
              checked={copartnerChecked}
              onChange={handleCopartnerChange}
              className="md:w-4 w-6 md:h-4 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="copartnerCheckbox"
              className="ml-3 text-sm text-gray-500 dark:text-gray-400"
            >
              Become Copartner
              <div>
                Read our{" "}
                <span className="text-blue-500 cursor-pointer underline">
                  <Link to="terms-of-services">Terms & Conditions</Link>
                </span>
              </div>
            </label>
          </div>
          <Confirmation isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="px-6 pb-6 text-center">
              <img className="w-12 mx-auto mb-4" src={tick2} alt="tick2" />
              <p className="text-sm">
                Your documents have been successfully submitted for
                verification.
              </p>
              <p className="mt-2 text-sm">
                Kindly wait 72 to 96 hours for the verification email.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => {handleCloseModal(); closeModal();}}
                className="bg-[#fff] text-black py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </Confirmation>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#fff] text-black py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-4 bg-[#18181B] rounded-lg max-w-lg w-full">
              <button
                onClick={handleCloseConfirmation}
                className="float-right font-bold"
              >
                X
              </button>
              <h2 className="text-lg font-bold">Terms & Conditions</h2>
              <div className=" max-h-40 max-w-md mx-auto overflow-y-auto mt-4">
                {/* Dummy text */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac lorem ac risus elementum sodales. Fusce vestibulum ante id
                  velit dictum, a ultricies odio fermentum. Morbi porta eros vel
                  lacus iaculis, a interdum sapien posuere. Nunc interdum, enim
                  nec scelerisque convallis, nisi turpis mollis est, nec
                  faucibus nunc ex et nunc. Ut id dolor sapien.
                </p>
                <p>
                  Integer venenatis viverra neque, et eleifend metus blandit
                  nec. Phasellus consequat arcu vel tortor consequat, id
                  dignissim dui vehicula. Duis ut urna vel ligula consequat
                  congue ac in arcu. Duis auctor auctor felis, vel posuere quam
                  ultrices at. Nam ullamcorper nisl vitae arcu condimentum
                  suscipit.
                </p>
                {/* More dummy text */}
              </div>
              <div className="mt-4 text-center">
                By clicking this button, you accept our{" "}
                <Link
                  className="text-blue-500 cursor-pointer underline"
                  to="terms-of-services"
                >
                  terms & conditions
                </Link>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleConfirmSubmit();
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
            Successfully Sent
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinTeam;
