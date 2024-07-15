import React, { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('onClick', handleClickOutside);

    return () => {
      document.removeEventListener('onClick', handleClickOutside);
    };
  }, []);



  return (
    <>
    <div className="fixed inset-0 bg-customGray text-white w-1/3 h-14  ">
      <div className="mt-4 relative flex items-center ">
        {/* Margin added to the left */}
        <div className="ml-4 mb-4">
          <button
            className="flex items-center text-white px-2 py-2 ml-4 rounded-full  hover:bg-customButton "
            onClick={toggleMenu}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div ref={menuRef} className="absolute w-64 top-full mt-2 pl-2 p-2 ml-6  text-white rounded-lg shadow-md z-20 text-left   bg-customBlack bg-opacity-96" >
              <ul >
                <li className="flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    color="white"
                    fill="none"
                  >
                    <path
                      d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Saved Messages
                </li>
                <li className=" flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <path d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
                  My Stories
                  </li>
                <li className="flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <path d="M12 22C7.99306 22 5.98959 22 4.7448 20.682C3.5 19.364 3.5 17.2426 3.5 13C3.5 8.75736 3.5 6.63604 4.7448 5.31802C5.98959 4 7.99306 4 12 4C16.0069 4 18.0104 4 19.2552 5.31802C20.5 6.63604 20.5 8.75736 20.5 13C20.5 17.2426 20.5 19.364 19.2552 20.682C18.0104 22 16.0069 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 4V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M16 4V2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.018 9.49261C14.018 10.5972 13.1226 11.4926 12.0181 11.4926C10.9135 11.4926 10.0181 10.5972 10.0181 9.49261C10.0181 8.38808 10.9135 7.49268 12.0181 7.49268C13.1226 7.49268 14.018 8.38808 14.018 9.49261Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.06298 16.7161C9.12133 15.0868 10.802 14.4762 12.0181 14.4774C13.2341 14.4787 14.8656 15.0868 15.9239 16.7161C15.9923 16.8215 16.0112 16.9512 15.9494 17.0607C15.7019 17.4996 14.9334 18.3705 14.3784 18.4296C13.7406 18.4974 12.0723 18.5069 12.0194 18.5072C11.9664 18.5069 10.2466 18.4974 9.60851 18.4296C9.05345 18.3705 8.28496 17.4996 8.03745 17.0607C7.9757 16.9512 7.99456 16.8215 8.06298 16.7161Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                  Contacts
                  </li>
                <li className="flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <path d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z" stroke="currentColor" stroke-width="1.5" />
</svg>
                  Settings
                  </li>
                <li className="flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                  Dark Mode
                  </li>
                <li className=" flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg width="17" height="20" viewBox="0 0 430 430" fill="none" >
<path d="M30 110C30 93.4315 43.4315 80 60 80H370C386.569 80 400 93.4315 400 110V320C400 336.569 386.569 350 370 350H60C43.4315 350 30 336.569 30 320V110Z" stroke="white" stroke-width="25" stroke-linejoin="round"/>
<path d="M131 188.611V187.222C131 174.949 140.949 165 153.222 165H172.667C184.94 165 194.889 174.949 194.889 187.222V192.778C194.889 205.051 184.94 215 172.667 215H162.944M131 240V242.778C131 255.051 140.949 265 153.222 265H175.444C187.717 265 197.667 255.051 197.667 242.778V237.222C197.667 224.949 187.717 215 175.444 215H146.278" stroke="white" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M227.667 165H266.555C284.965 165 299.889 179.924 299.889 198.333V231.667C299.889 250.076 284.965 265 266.555 265H227.667V165Z" stroke="white" stroke-width="25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  Animations</li>
                <li className=" flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M11.992 17H12.001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                  Telegram Features</li>
                <li className=" flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <path d="M3.012 6.59766C2.89208 7.65695 3.65834 10.1953 5.87687 10.2552" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M18.2891 10.1953C19.3683 10.2552 20.9873 8.99606 20.9873 6.59766" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M20.0876 20.9882C20.1475 19.6091 19.2481 17.4745 17.5093 17.4146" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3.90131 20.9883C3.84003 19.5999 4.75934 17.451 6.53668 17.3907" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3.01221 13.793H5.21751" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M20.9999 13.793L18.8281 13.793" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M11.9931 13.7928V10.8548M16.4901 3L14.6913 4.7988M7.49609 3L9.2949 4.7988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M6.95605 8.6123C8.57498 9.77553 12.5923 11.4544 16.9694 8.68426" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M16.8259 7.67688C13.2523 2.70019 8.6953 5.09859 7.07638 7.82078C6.02087 9.5956 4.37817 13.8887 7.4961 18.5656C10.8539 22.6669 14.8112 20.8082 16.4302 18.6496C17.9891 16.7908 19.5241 11.994 16.8259 7.67688Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
                  Report Bug</li>
                <li className=" flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                  <div className="pl-1">A</div>
                  Switch to a Version</li>
                <li className=" flex gap-4 items-center text-white py-2 px-2 cursor-pointer rounded-2xl hover:bg-customButton">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="white" fill="none">
    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M4.64856 5.07876C4.7869 4.93211 4.92948 4.7895 5.0761 4.65111M7.94733 2.72939C8.12884 2.6478 8.31313 2.57128 8.5 2.5M2.5 8.5C2.57195 8.31127 2.64925 8.12518 2.73172 7.94192" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 8V16M16 12L8 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                  Install App</li>
              </ul>
            </div>
          )}
        </div>



        {/* //search  */}
        <div className="relative w-full ml-1 mb-4  mr-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <svg
              width="25"
              height="25"
              viewBox="0 0 430 430"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M293.7 89.3996C350.4 146.1 350.4 238 293.7 294.7C237 351.4 145.1 351.4 88.4 294.7C31.7 238 31.7 146 88.4 89.3996C145.1 32.7996 237 32.6996 293.7 89.3996Z"
                stroke="white"
                strokeWidth="16"
                strokeMiterlimit="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M82.0996 147.5C87.7996 133.4 96.2996 120.2 107.8 108.8C121.5 95.0996 137.7 85.5996 154.9 80.0996"
                stroke="white"
                strokeWidth="16"
                strokeMiterlimit="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M296.1 296.6L384.1 383.1"
                stroke="white"
                strokeWidth="14"
                strokeMiterlimit="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-1 text-white bg-customBlack rounded-full focus:outline-none border border-transparent transition-all duration-600 ease-out hover:border-gray-500"
          />
        </div>
        
      </div>
    </div>
     
      </>
  );
};

export default Sidebar;
