export default function Navbar() {

    return (
        
        <body className="bg-white dark:bg-gray-900">
        <header>
            <nav className="fixed z-40 w-full border-b dark:border-gray-700 bg-white dark:bg-gray-800 md:absolute md:bg-transparent">
                <div className="container m-auto px-2 md:px-12 lg:px-7">
                    <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                        <input type="checkbox" name="" id="toggleNav" className="peer hidden" />
                        <label for="toggleNav" role="overlaynav" className="fixed left-0 top-0 transition-all 
                        md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 
                        peer-checked:opacity-75 peer-checked:block w-full h-screen
                        bg-gray-200 bg-opacity-75 dark:bg-darker dark:opacity-80"></label>
                        <div className="relative z-40">
                            <a href="#" aria-label="logo">
                                <img src="images/logo.svg" className="w-32 sm:w-36 dark:hidden" alt="tailus logo" width="144" height="68" />
                                <img src="images/logo-white.svg" className="w-32 sm:w-36 hidden dark:block" alt="tailus logo" width="144" height="68" />
                            </a>
                        </div>
                        
                        <div id="navlinks"
                            className="fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white dark:bg-gray-800 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max">
                            <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
                                <ul className="pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                                    <li className="max-w-max">
                                        <a href="#" className="block md:px-3">
                                            <div
                                                className="relative text-cyan-800 dark:text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400">
                                                <span>Nike</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="max-w-max">
                                        <a href="#" className="block md:px-3 group">
                                            <div
                                                className="relative text-gray-600 dark:text-gray-300
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">Adiddas</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="max-w-max">
                                        <a href="#" className="block md:px-3 group">
                                            <div
                                                className="relative text-gray-600 dark:text-gray-300
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                                <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">Cart</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex sm:hidden pt-4 w-full">
                                    <button type="button" title="Start buying"
                                        className=" flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800">
                                        <span className="block text-white text-sm">
                                            Shop now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="block-endnav w-max flex items-center gap-4">
                            <button type="button" title="Start buying"
                                className="hidden sm:block w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max">
                                <span className="block text-white text-sm">
                                    Shop now
                                </span>
                            </button>
    
                            <div className="flex items-center md:hidden max-h-10">
                                <label role="button" for="toggleNav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                    <div role="hidden" id="line"
                                        className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"></div>
                                    <div role="hidden" id="line2"
                                        className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300">
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className="border-b dark:border-gray-700">
            <div className="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
                <div className="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
                    <div className="col-span-1">
                        <div className="relative w-full">
                            <img src="images/shoes2.jpg" alt="shoes" loading="lazy" width="100%" height="640" />
                            <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800">
                                <div className="flex p-1">
                                    <button aria-label="button-left" className="p-3 border-r dark:border-gray-600">
                                        <svg className="fill-gray-800 rotate-180 dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-chevron-right"
                                            viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                    <button aria-label="button-right" className="p-3">
                                        <svg className="fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="relative col-span-1">
                        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">A Look for every <span
                                className="text-cyan-800 dark:text-cyan-400">mood</span>.</h1>
                        <div className="mt-8 lg:mt-16 space-y-8">
                            <p className="text-gray-700 dark:text-gray-300">Sit amet consectetur adipisicing elit. eligendi tenetur nihil
                                quaerat suscipit, sunt dignissimos.</p>
                            <div className="flex space-x-4 mt-6">
                                <button type="button" title="Start buying"
                                    className="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max">
                                    <span className="block text-white text-sm">
                                        Shop now
                                    </span>
                                </button>
                                <button type="button" title="Start buying"
                                    className="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:border-gray-700 sm:w-max">
                                    <span className="block text-gray-800 text-sm dark:text-white">
                                        View store
                                    </span>
                                </button>
                            </div>
                        </div>'
                    </div>
                </div>
            </div>
        </div>
    </body>

    )
}