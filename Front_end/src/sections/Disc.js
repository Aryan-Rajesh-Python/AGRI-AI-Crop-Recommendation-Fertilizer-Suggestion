import React from "react";

export default function Disc() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-green-200 min-h-[30vh] max-w-[60vw] rounded-xl">
        <h1 className=" font-extrabold p-6 font-sans">DISCLAIMER</h1>
        <p className="pl-4 pr-4">
          ARGI AI is a proof-of-concept project, and the data used comes with no
          guarantees. It should not be used for making farming decisions, and
          the creator is not responsible for any consequences resulting from its
          use.
        </p>
      </div>
    </div>
  );
}
