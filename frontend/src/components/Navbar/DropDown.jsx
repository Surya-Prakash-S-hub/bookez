export const DropDownNav = () => {
  return (
    <div className="relative mx-auto px-7 h-14 max-w-[1800px]">
      <div className="flex h-full items-center justify-between">
        {/* Bestsellers */}
        <div className="group h-full">
          <button className="h-full font-bold">Academics</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              <div className="grid grid-cols-4 gap-10">
                <div>
                  <h3 className="mb-4 font-semibold">Fiction</h3>
                  <a className="block py-2">Fantasy</a>
                  <a className="block py-2">Mystery</a>
                  <a className="block py-2">Romance</a>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Non Fiction</h3>
                  <a className="block py-2">Biography</a>
                  <a className="block py-2">History</a>
                  <a className="block py-2">Business</a>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Children</h3>
                  <a className="block py-2">Activity Books</a>
                  <a className="block py-2">Story Books</a>
                  <a className="block py-2">Learning Books</a>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Popular</h3>
                  <a className="block py-2">Harry Potter</a>
                  <a className="block py-2">Atomic Habits</a>
                  <a className="block py-2">Ikigai</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals */}
        <div className="group h-full">
          <button className="h-full font-bold">Fiction</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              New Arrivals Content
            </div>
          </div>
        </div>

        {/* Personalisation */}
        <div className="group h-full">
          <button className="h-full font-bold">Non Fiction</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              Personalisation Content
            </div>
          </div>
        </div>

        {/* New */}
        <div className="group h-full">
          <button className="h-full font-bold">Children</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              New Content
            </div>
          </div>
        </div>

        {/* Gifting */}
        <div className="group h-full">
          <button className="h-full font-bold">Young Adults</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              Gifting Content
            </div>
          </div>
        </div>

        {/* Top Publishers */}
        <div className="group h-full">
          <button className="h-full font-bold">Comics & Graphic Novels</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              Top Publishers Content
            </div>
          </div>
        </div>

        {/* Get App */}
        <div className="group h-full">
          <button className="h-full font-bold">Languages</button>

          <div
            className="
          invisible absolute left-0 top-full w-full
          opacity-0 translate-y-4
          transition-all duration-300
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
          >
            <div className="rounded-xl bg-white p-10 shadow-2xl">
              Get App Content
            </div>
          </div>
        </div>

        <button className="flex h-full items-center font-bold text-amber-500">
          YTEducators
        </button>
      </div>
    </div>
  );
};
