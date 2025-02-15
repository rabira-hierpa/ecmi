import Link from "next/link";

const Contact = () => {
  return (
    <div className="">
      <div className="relative h-80 md:h-80 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white bg-[url('/assets/imgs/header-contact.svg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10 text-sm">
          <h1 className="text-xl md:text-3xl font-bold">
            GET IN TOUCH WITH US
          </h1>
          <p className="text-sm md:text-lg pt-2">
            {" "}
            <Link href={"/"} className="hover:text-slate-300">
              Home
            </Link>{" "}
            / Contact Us
          </p>
        </div>
      </div>

      <div className="p-2 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-primary-main text-center pt-10">
          CONTACT US
        </h2>
        <div className="flex justify-center ">
          <p className="text-sm text-slate-800 text-center pt-5">
            Here you will find our contact information
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 w-1/2 m-auto 2">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-4 flex flex-col items-center justify-center border-r-2">
              <div className="flex items-center mb-2 mt-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 p-4">
                Make a Call
              </h4>
              <p className="justify-center text-center text-sm">
                +251 115 575 633
              </p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center border-r-2">
              <div className="flex items-center mb-2 mt-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 p-4">
                Send an Email
              </h4>
              <p className="justify-center text-center text-sm">
                info@cmi.gov.et
              </p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center ">
              <div className="flex items-center mb-2 mt-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 p-4">
                Locate Us
              </h4>
              <p className="justify-center text-center text-sm">
                In front of Bole Printing Press, Hansem Office Park, 5-7th floor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
