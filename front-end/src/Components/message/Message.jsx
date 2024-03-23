import React from "react";

export const SuccessMessage = ({ message = "Success" }) => {
  return (
    <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl  text-slate-950 divide-gray-700">
      <div className="flex flex-1 flex-col p-4 border-l-8  border-violet-400">
        <span className="text-2xl">{message}</span>
      </div>
    </div>
  );
};

export const ErrorMessage = ({ message = "Error" }) => {
  return (
    <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl   text-slate-950  divide-gray-700">
      <div className="flex flex-1 flex-col p-4 border-l-8  border-violet-400">
        <span className="text-2xl">{message}</span>
      </div>
    </div>
  );
};

export const WarningMessage = ({ message = "Warning" }) => {
  return (
    <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl    text-slate-950  divide-gray-700">
      <div className="flex flex-1 flex-col p-4 border-l-8  border-violet-400">
        <span className="text-2xl">{message}</span>
      </div>
    </div>
  );
};
