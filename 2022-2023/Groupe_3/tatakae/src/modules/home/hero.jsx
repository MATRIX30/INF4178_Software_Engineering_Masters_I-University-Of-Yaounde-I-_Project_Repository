export default function Hero() {

    return (
        <>

      <div className="pt-9 md:py-1 xl:container m-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-20 rotate-45 bg-gradient-to-r from-green to-primary blur-3xl opacity-50 dark:opacity-20"
        ></div>
        <div className="relative lg:flex lg:items-center lg:gap-x-12">
          <div className="text-center lg:text-left md:mt-0 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
              Together, let's build an Africa full of {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary to-green dark:from-primaryLight dark:to-green">
                 opportunities
              </span>
            </h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300">
              TATAKAE is an Web platform that make as easiest as possible
              the matching of work opportunities and workers.
              <br /> <span className="font-bold text-black">Join us and let's build Together !</span>
            </p>
            
            <div className="mt-6 mx-1 xl:mx-auto">
                    <button
                      type="button"
                      title="Start buying"
                      className="relative h-12 w-32 w-max-40 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full bg-gradient-to-r rounded-lg from-primary to-green dark:before:bg-green before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative w-auto text-white dark:text-gray-900 font-semibold md:block">
                        Have a look
                      </span>
                    </button>
                  </div>
            <div>
            </div>
          </div>
          <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <img
              src='https://tailus.io/sources/blocks/sass/preview/images/project.svg'
              alt="project illustration"
              height=""
              width=""
            />
          </div>
        </div>
      </div>
        </>
    )
}