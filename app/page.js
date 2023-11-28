import ButtonFill from "@/components/buttons/ButtonFill";
import ButtonOutline from "@/components/buttons/ButtonOutline";
import Modal from "@/components/modals/Modal";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Header -> Title, Sign up & Sign in btn for sm-screen and above */}
        <div className="flex justify-between items-center">
          {/* Title */}
          <h2 className="text-[#00E091] font-[525] text-2xl leading-[normal] not-italic tracking-wide text-center">
            Trible
          </h2>
          {/* User Auth btns -> Signup signin for sm-screen and above */}
          <div className="sm:flex hidden items-center ">
            <ButtonOutline text={"Sign In"}/>
            <ButtonFill text={"Sign Up"}/>
          </div>
          {/* User Auth div ends here */}
        </div>
        {/* Header div ends */}
        {/* Hero section starts */}
        <div className="flex-1">
          <section className="text-white body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-[525] leading-[normal]not-italic tracking-wide text-white">
                  Welcome.
                </h1>
                <p className="mb-8 leading-relaxed text-2xl">
                  Join a community where your work matters.
                </p>
                {/* Get started Button starts*/}
                <div>
                  <ButtonFill className={"hidden sm:block"} text={"Get Started"}/>
                </div>
                {/* Get started Button ends here */}
                {/* Signin and signup for below sm */}
                <div className="sm:hidden flex items-center ">
                <ButtonOutline text={"Sign In"} />
                <ButtonFill text={"Sign Up"}/>
                </div>
                {/* Signin and signup for below sm Buttons end here */}
              </div>
            </div>
          </section>
        </div>
        {/* Footer starts here */}
        <footer className="absolute bottom-0 w-full body-font">
          <div className="mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              
              <span className=" text-primary text-xl text-[#00E091]">Trible</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:mt-0 mt-4">
              © 2023 Trible —
              <a
                href="https://twitter.com/knyttneve"
                className="text-gray-600 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                @tribleapp
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
        <Modal isOpen/>
      </div>
    </>
  );
}
