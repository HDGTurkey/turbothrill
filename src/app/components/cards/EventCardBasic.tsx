import React from "react";

export const EventCardBasic = () => {
  return (
    <>
      <div className="card shadow-2xl  min-w-[200px] max-w-[400px] rounded border border-gray-100">
        <div className=" p-5 text-sm">Nov 18, 2022</div>
        <div className="text-xl mx-5">
          <div className="p-3">Huawei Gezisi</div>
          <img src={`https://picsum.photos/400/200`} width="250px" alt="i" />
        </div>
        <div className="flex ">
          <div className="p-4">
            <button className="text-sm p-3 border border-gray-200 hover:bg-gray-400 rounded transition-all">
              SEE MORE...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCardBasic;
