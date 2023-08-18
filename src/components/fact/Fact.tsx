interface FactProps {
  property: string;
  value: string;
}

export const Fact = ({ property, value }: FactProps) => (
  <div
    className="uppercase border border-white/20 px-5 py-3 md:py-4
     flex md:inline-flex md:flex-col md:gap-1 items-center md:items-start justify-between
     object-cover">
    <h6 className="font-spartan font-medium tracking-widest text-white/50 text-[8px]">
      {property}
    </h6>
    <span className="font-antonio font-light text-white text-[20px] md:text-[24px]">
      {value}
    </span>
  </div>
);
