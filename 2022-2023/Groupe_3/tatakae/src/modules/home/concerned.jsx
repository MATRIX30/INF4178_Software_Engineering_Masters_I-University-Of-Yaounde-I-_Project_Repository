import workers from "../../assets/images/workers.svg";
import worker from "../../assets/images/worker.svg";
import hire from "../../assets/images/hire.svg";

export default function Concerned() {
  return (
    <div className="pt-16 bg-gray/200 mx-auto w-full">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
      <div className="group w-auto mb-16">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary to-green dark:from-primaryLight dark:to-secondaryLight md:text-4xl">
              Concerned people
              <p className="text-lg text-black">Who can benefit from this service</p>
              <p className="w-2 translate-x-0 transition duration-300 group-hover:translate-x-4 group-hover:w-36 relative rounded-full mx-auto bg-primary h-1"></p>
            </h2>
          </div>
        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-3">
            <div className="space-t-4 ring rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
              <img
                src={workers}
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Get your account
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                You can join us as a worker or as a job provder. We will help
                you to find the best job or the best worker.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col ring ring-green/20 hover:ring-green ease-in-out duration-300 justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
              <div className="mb-3 space-y-4">
                <img
                  src={hire}
                  alt="illustration"
                  loading="lazy"
                  width="316"
                  height="200"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Join as a job provider
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As a job provider, you can find the best workers for your
                  company. We will help you to find the best workers for your
                  company. You have the possibility to accurate your search by a lot of criteria.
                </p>
              </div>
              <div className=" mx-1 xl:mx-auto">
                <button
                  type="button"
                  title="Start buying"
                  className="relative h-12 w-32 w-max-40 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r rounded-lg hover:from-green transition ease-out duration-300 hover:to-primary from-primary to-green dark:before:bg-green before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative w-auto text-white dark:text-gray-900 font-semibold md:block">
                    Join as a job provider
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col ring ring-green/20 hover:ring-green ease-in-out duration-300 justify-between rounded-3xl border border-gray-100 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-white dark:bg-gray-800 px-8 py-12  sm:px-12 lg:px-8">
              <div className="mb-3 space-y-4">
                <img
                  src={worker}
                  alt="illustration"
                  loading="lazy"
                  width="675"
                  height="450"
                />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Join as a worker
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As a worker, you can find the best job for you. We will help
                  you to find the best job for you. You have the possibility to
                  accurate your search by a lot of criteria. 
                </p>
              </div>
              <div className="mx-1 xl:mx-auto">
                <button
                  type="button"
                  className="relative h-12 w-32 w-max-40 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r rounded-lg hover:from-green transition ease-out duration-300 hover:to-primary from-primary to-green dark:before:bg-green before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <span className="relative w-auto text-white dark:text-gray-900 font-semibold md:block">
                    Join as a worker
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
