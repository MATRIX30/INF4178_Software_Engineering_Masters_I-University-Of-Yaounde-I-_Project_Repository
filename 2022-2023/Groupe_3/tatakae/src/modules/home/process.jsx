import process from "../../assets/images/process.svg";

export default function Process() {
  return (
    <div className="py-16 mx-6">
      <div className="m-auto text-gray-600 md:px-1 xl:px-1">
        <div className="lg:bg-gray-100 dark:lg:bg-darker text-left lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 md:space-y-0 ">
          <div className="md:5/12 lg:w-1/2">
            <img src={process} alt="image" loading="lazy" width="" height="" />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <div className="group">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary to-green dark:from-primaryLight dark:to-secondaryLight md:text-4xl">
                How to proceed
                <p className="text-lg text-black">Follow the steps</p>
                <p className="w-2 translate-x-0 transition duration-300 group-hover:translate-x-1 group-hover:w-36 relative rounded-full bg-primary h-1"></p>
              </h2>
            </div>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              By following these steps, you will be able to find the best job or
              the best worker.
            </p>
            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full items-center text-center  bg-indigo-100 dark:bg-indigo-900/20">
                  <p className="w-6 h-6 text-indigo-500 mx-auto font-700 text-lg dark:text-indigo-400">
                    1
                  </p>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                    Sign in
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Create an account as a worker or as a job provider.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full items-center text-center  bg-emerald-100 dark:bg-indigo-900/20">
                  <p className="w-6 h-6 text-emerald-500 mx-auto font-700 text-lg dark:text-indigo-400">
                    2
                  </p>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                    Fill your profile
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill your profile with your skills and your interests.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full items-center text-center  bg-orange-100 dark:bg-indigo-900/20">
                  <p className="w-6 h-6 text-orange-500 mx-auto font-700 text-lg dark:text-orane-400">
                    3
                  </p>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                    Find what you are interests by
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Find the best job or the best worker by using our search engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
