import Link from "next/link";

export const TabNav = () => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden border-b-[1px] border-solid border-white/20 flex justify-center gap-4">
        <Link
          href="/overview"
          className="uppercase font-spartan text-[9px] tracking-[.3em] font-medium px-1 pt-4 pb-3 inline-block border-b-4 border-solid border-mercury">
          Overview
        </Link>
        <Link
          href="/structure"
          className="uppercase font-spartan text-[9px] tracking-[.3em] font-medium text-white/50 px-1 pt-4 pb-3 inline-block border-b-4 border-solid border-transparent">
          Structure
        </Link>
        <Link
          href="/surface"
          className="uppercase font-spartan text-[9px] tracking-[.3em] font-medium text-white/50 px-1 pt-4 pb-3 inline-block border-b-4 border-solid border-transparent">
          Surface
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-4">
        <Link href="/overview">
          {/* <button className="flex gap-4 w-full uppercase font-spartan text-[9px] tracking-[.3em] font-medium p-4 border border-solid border-white/20"> */}
          <button className="flex gap-4 w-full uppercase font-spartan text-[9px] tracking-[.3em] font-medium p-4 bg-mercury">
            <span className="w-4 text-white/50">01</span>
            <span className="text-white">Overview</span>
          </button>
        </Link>
        <Link href="/overview">
          <button className="flex gap-4 w-full uppercase font-spartan text-[9px] tracking-[.3em] font-medium p-4 border border-solid border-white/20">
            <span className="w-4 text-white/50">02</span>
            <span className="text-white">Internal Structure</span>
          </button>
        </Link>
        <Link href="/overview">
          <button className="flex gap-4 w-full uppercase font-spartan text-[9px] tracking-[.3em] font-medium p-4 border border-solid border-white/20">
            <span className="w-4 text-white/50">03</span>
            <span className="text-white">Surface Geology</span>
          </button>
        </Link>
      </div>
    </>
  );
};
