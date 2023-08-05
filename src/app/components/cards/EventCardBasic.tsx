import React from "react";

export const EventCardBasic = () => {
  return (
    <>
      <div className="card min-w-[200px]  max-w-[400px] rounded border border-gray-100 shadow-2xl">
        <div className=" p-5 text-sm">Nov 18, 2022</div>
        <div className="mx-5 text-xl">
          <div className="p-3">Huawei Gezisi</div>
          <img src={`https://picsum.photos/400/200`} width="250px" alt="i" />
        </div>
        <div className="flex ">
          <div className="p-4">
            <button className="rounded border border-gray-200 p-3 text-sm transition-all hover:bg-gray-400">
              SEE MORE...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCardBasic;
