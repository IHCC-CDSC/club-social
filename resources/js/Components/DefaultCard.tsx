import { PropsWithChildren } from "react";

export default function DefaultCard({ children }: PropsWithChildren) {
  return (
    <div className="relative flex w-11/12 bg-ihccBlack text-ihccWhite bg-gradient-to-t from-ihccRed rounded-xl p-4 my-3 min-h-64 overflow-hidden shadow-md shadow-zinc-700">
      {children}
    </div>
  );
}
