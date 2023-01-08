import { useEffect, useState } from "react";

export const SearchBox = ({ allCapsules, setDisplayData }) => {
  const [open, setOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState({
    boxSearch: "",
    status: "",
    date: "",
    type: "",
  });
  const [statusFilter, setStatusFilter] = useState("");
  const [originalLaunchFilter, setOriginalLaunchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    if (open) {
      setStatusFilter(searchFilter.status);
      setOriginalLaunchFilter(searchFilter.date);
      setTypeFilter(searchFilter.type);
    }
  }, [open]);

  const handleFilterApplyClick = () => {
    setSearchFilter({
      ...searchFilter,
      status: statusFilter,
      date: originalLaunchFilter,
      type: typeFilter,
    });

    let filteredData = allCapsules.filter((capsule) =>
      capsule.capsule_serial
        .toLowerCase()
        .includes(searchFilter.boxSearch.toLowerCase())
    );

    if (statusFilter) {
      filteredData = filteredData?.filter(
        (data) => data.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }
    if (originalLaunchFilter) {
      filteredData = filteredData?.filter(
        (data) =>
          new Date(data.original_launch).setHours(0, 0, 0, 0) ===
          new Date(originalLaunchFilter).setHours(0, 0, 0, 0)
      );
    }

    if (typeFilter) {
      filteredData = filteredData?.filter(
        (data) => data.type.toLowerCase() === typeFilter.toLowerCase()
      );
    }
    setDisplayData(filteredData);
    setOpen(false);
  };

  return (
    <div class="flex items-center px-8 py-4">
      <label class="sr-only">Search</label>
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <input
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleFilterApplyClick();
            }
          }}
          value={searchFilter.boxSearch}
          onChange={(e) =>
            setSearchFilter({ ...searchFilter, boxSearch: e.target.value })
          }
          type="text"
          id="voice-search"
          class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:border-2 focus:outline-none"
          placeholder="Search Capsules..."
        />
      </div>
      <button
        onClick={handleFilterApplyClick}
        type="submit"
        class="mr-2 inline-flex items-center py-2.5 px-3 ml-2 text-white bg-black rounded-lg hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-2 -ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        Search
      </button>
      <div class="self-center">
        <button
          id="dropdownInformationButton"
          class="text-white bg-black hover:bg-slate-800 focus:outline-none rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          type="button"
          onClick={() => setOpen(true)}
        >
          Filter
        </button>
      </div>

      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        class={`fixed top-0 left-0 right-0 z-50 ${
          open ? "" : "hidden"
        } w-full p-4 pt-24 overflow-x-hidden overflow-y-auto h-modal h-full backdrop-blur-sm`}
      >
        <div class="relative w-full h-full m-auto max-w-md md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Search Filter
              </h3>
              <button
                onClick={() => setOpen(false)}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="flex justify-between p-4 items-center">
              Status:
              <input
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                class="appearance-none block text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div class="flex justify-between px-4 items-center">
              Original Launch:
              <input
                placeholder="YYYY-MM-DD"
                value={originalLaunchFilter}
                onChange={(e) => setOriginalLaunchFilter(e.target.value)}
                class="appearance-none block text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div class="flex justify-between p-4 items-center">
              Type:
              <input
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                class="appearance-none block text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={handleFilterApplyClick}
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-black hover:bg-slate-800 focus:outline-none rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
