import React from "react";

export const ComingEventCard = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
        <div className="flex animate-pulse space-x-4">
          <div className="bg-slate-700 h-10 w-10 rounded-full"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="bg-slate-700 h-2 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-700 col-span-2 h-2 rounded"></div>
                <div className="bg-slate-700 col-span-1 h-2 rounded"></div>
              </div>
              <div className="bg-slate-700 h-2 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingEventCard;
