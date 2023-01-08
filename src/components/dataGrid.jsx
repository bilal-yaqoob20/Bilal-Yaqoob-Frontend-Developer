import { useState } from "react";

export const DataGrid = ({ displayData }) => {
  const [selectedCapsule, setSelectedCapsule] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <>
      {displayData?.length ? (
        <dl class="text-left px-8 text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          {displayData?.map((data) => {
            return (
              <div
                onClick={() => {
                  setSelectedCapsule(data);
                  setOpen(true);
                }}
                key={data.capsule_serial}
                class="flex flex-col pb-2 hover:cursor-pointer"
              >
                <dt class="mt-1 mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  {data.capsule_serial}
                </dt>
                <dd class="text-lg font-semibold">{data.details}</dd>
              </div>
            );
          })}
        </dl>
      ) : (
        <div class="px-8 text-left pb-2">No Results Found</div>
      )}
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
            <div class="flex items-center justify-between px-4 py-2 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedCapsule.capsule_serial}
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
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>ID:</p>
              <p>{selectedCapsule.capsule_id}</p>
            </div>
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>Original Launch:</p>
              <p>{new Date(selectedCapsule.original_launch).getDate()}</p>
            </div>
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>Status:</p>
              <p>{selectedCapsule.status}</p>
            </div>
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>Missions:</p>
              <div class="text-left">
                {selectedCapsule.missions?.map((mission) => {
                  return (
                    <>
                      <p>Name: {mission.name}</p>
                      <p>Flights: {mission.flight}</p>
                    </>
                  );
                })}
              </div>
            </div>
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>Landings:</p>
              <p>{selectedCapsule.landings}</p>
            </div>
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>Type:</p>
              <p>{selectedCapsule.type}</p>
            </div>
            <div class="flex justify-between mx-4 py-2 border-b dark:border-gray-600">
              <p>Details:</p>
              <p>{selectedCapsule.details}</p>
            </div>
            <div class="flex justify-between mx-4 py-2">
              <p>Number of Reuse:</p>
              <p>{selectedCapsule.reuse_count}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
