import { Button } from "flowbite-react";
import { BiBell } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { TbReportSearch } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BiNote } from "react-icons/bi";
import { Link } from "react-router-dom";
//

export default function Home() {
  return (
    <div>
      <header
        className="flex flex-col justify-between items-center p-4 bg-gray-100 shadow h-1/2"
        style={{ backgroundColor: "#1F2587" }}
      >
        <div className="flex justify-between w-full">
          <p className="text-xl font-semibold  text-white">Hi User</p>
          <BiBell
            className="text-2xl cursor-pointer"
            title="Notifications"
            color="white"
          />
        </div>
        <div className="mt-4 w-full">
          <div className="p-4 bg-white shadow-md rounded flex justify-between">
            <div
              className="flex flex-col gap-4
            "
            >
              {/* top */}
              <div>
                <h2 className="text-lg font-semibold">
                  Welcome to Health Desk
                </h2>
                <p>Manage your health services efficiently.</p>
              </div>
              {/* bottom */}
              <div className="mt-auto">
                <div className="p-4">
                  <h2
                    className="text-2xl font-bold flex items-center"
                    style={{ color: "#1F2587" }}
                  >
                    Know your Benefits <MdKeyboardArrowRight className="ml-2" />
                  </h2>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/logo.jpeg"
                alt="doctor"
                className="w-32 h-32 border rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mt-4">
        <div>
          <h3
            className="text-lg font-semibold mb-1 ml-3"
            style={{ color: "#1F2587" }}
          >
            Our Services
          </h3>
          <img
            src="/services.webp"
            alt="Our Services"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* treatments */}

        <div className="mt-4 flex   lg:flex-row bg-white shadow-md rounded-lg p-6 gap-6 items-center justify-center">
          <div className="flex-1">
            <h2
              className="text-xl font-semibold mb-2"
              style={{ color: "#1F2587" }}
            >
              Book Annual Health Checkups
            </h2>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Diabetes</li>
              <li>Thyroid</li>
              <li>Heart</li>
              <li>Kidney</li>
            </ul>
            <Button className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition duration-200">
              Book Now
            </Button>
          </div>
          <div className="flex-1">
            <img
              src="/treatment.jpg"
              alt="Treatment"
              className="w-full h-auto rounded-md shadow-sm object-cover"
            />
          </div>
        </div>

        {/* Quick Access */}

        <div className="mt-4">
          <h3 className="text-lg font-semibold" style={{ color: "#1F2587" }}>
            Quick Access
          </h3>
          <div className="bg-white shadow rounded-lg p-4 mt-2">
            <div className="flex justify-between space-x-4">
              <div className="flex flex-col items-center p-4 bg-gray-100 shadow rounded hover:bg-gray-200 transition duration-200">
                <FaUserDoctor className="text-2xl text-gray-700 mb-2" />
                <span className="text-gray-800">My Doctors</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 shadow rounded hover:bg-gray-200 transition duration-200">
                <Link to={"/appointment"}>
                  <SlCalender className="text-2xl text-gray-700 mb-2" />
                  <span className="text-gray-800">Create Appointment</span>
                </Link>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 shadow rounded hover:bg-gray-200 transition duration-200">
                <TbReportSearch className="text-2xl text-gray-700 mb-2" />
                <span className="text-gray-800">My Reports</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          <div className="w-full bg-gray-100 py-2">
            {" "}
            <ul
              className="flex justify-between space-x-8  mx-5 p-3
             "
            >
              {" "}
              <li className="flex flex-col items-center">
                <FaHome className="text-2xl text-gray-700 mb-1" />
                <a href="/home" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li className="flex flex-col items-center">
                <MdOutlineMiscellaneousServices className="text-2xl text-gray-700 mb-1" />
                <a href="/services" className="text-blue-600 hover:underline">
                  Services
                </a>
              </li>
              <li className="flex flex-col items-center">
                <AiOutlineMail className="text-2xl text-gray-700 mb-1" />
                <a href="/contact" className="text-blue-600 hover:underline">
                  Contact
                </a>
              </li>
              <li className="flex flex-col items-center">
                <BiNote className="text-2xl text-gray-700 mb-1" />{" "}
                {/* Notes Icon */}
                <a href="/notes" className="text-blue-600 hover:underline">
                  Notes
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
