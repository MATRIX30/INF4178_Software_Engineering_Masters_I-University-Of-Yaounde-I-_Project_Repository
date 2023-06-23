import Footer from "../../layouts/footer/footer";
import Concerned from "./concerned";
import Process from "./process";
import Nav from "../../layouts/nav/nav";
import Hero from "./hero";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="pt-16">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div className="group w-auto">
            <h2 className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-primary to-green dark:from-primaryLight dark:to-secondaryLight md:text-4xl">
              Our purpose
              <p className="text-lg text-black">Why is this service has been build for</p>
              <p className="w-2 translate-x-0 transition duration-300 group-hover:translate-x-4 group-hover:w-36 relative rounded-full mx-auto bg-primary h-1"></p>
            </h2>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Facilitating the job search
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Offering an efficient, user-friendly way for workers to find
                    job opportunities that match their skills and interests.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Provide an accurate match
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Use advanced matching algorithms and systems to match
                    workers with job promoters based on their specific needs and
                    criteria.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    Encourage flexibility and autonomy
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Offer flexible work options, such as part-time jobs, ad hoc
                    assignments or remote working, to meet workers' changing
                    needs and promote their autonomy.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary">
                    More features
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Neque Dolor, fugiat non cum doloribus aperiam voluptates
                    nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Concerned />
      <Process />
      <Footer />
    </>
  );
}
