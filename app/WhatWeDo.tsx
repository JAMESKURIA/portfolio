const WhatWeDo = () => {
  return (
    <div className="relative py-16">
      <div className="mb-20">
        <h2 className="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          A technology-first approach to payments{" "}
          <br className="lg:block" hidden />
          and finance
        </h2>
      </div>
      <div className="container relative m-auto px-6 text-gray-500 md:px-12">
        <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto w-24"
              src="https://tailus.io/sources/blocks/illustrated/preview/images/icons/code.png"
              alt="illustration"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Web development
            </h3>
            <p>
              Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
              cum, consectetur ullam tempora ipsa iste officia sed officiis!
              Incidunt ea animi officiis.
            </p>
            <a
              href="#"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <span className="text-primary"> &#8594;</span>
            </a>
          </div>
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto w-24"
              src="https://tailus.io/sources/blocks/illustrated/preview/images/icons/magic.png"
              alt="illustration"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Seo
            </h3>
            <p>
              Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
              cum, consectetur ullam tempora ipsa iste officia sed officiis!
              Incidunt ea animi officiis.
            </p>

            <a
              href="#"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <span className="text-primary"> &#8594;</span>
            </a>
          </div>
          <div className="group space-y-6 border border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-12 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <img
              className="mx-auto w-24"
              src="https://tailus.io/sources/blocks/illustrated/preview/images/icons/graphic.webp"
              alt="illustration"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Web Design
            </h3>
            <p>
              Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
              cum, consectetur ullam tempora ipsa iste officia sed officiis!
              Incidunt ea animi officiis.
            </p>
            <a
              href="#"
              className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
            >
              <span className="text-primary"> &#8594;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
