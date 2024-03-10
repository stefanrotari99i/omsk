import Image from "next/image";

const Team = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-40 p-2">
      <h2 className="text-3xl  font-semibold text-[#BBB891]  ">Unser Team</h2>
      <p className="text-md text-[#B3B3B3] font-medium leading-6 mt-2 max-w-screen-md">
        Unser Team besteht aus erfahrenen und qualifizierten Fachleuten, die
        sich auf die Herstellung von Edelstahlprodukten spezialisiert haben.
      </p>
      <div className="grid grid-cols-1 w-full justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20 max-w-screen-lg mx-auto">
        <TeamItem
          name="Michel Smith

"
          position="CEO"
        />
        <TeamItem
          name="Pavel Marker

"
          position="CEO"
        />
        <TeamItem
          name="Ilja Obert

"
          position="CEO"
        />
      </div>
    </div>
  );
};

const TeamItem = ({
  name = "John Doe",
  position = "CEO",
}: {
  name?: string;
  position?: string;
}) => {
  return (
    <div className="flex flex-col w-[260px] items-center justify-center">
      <div className="w-full aspect-square relative">
        <Image
          src="/hero.webp"
          fill
          className="object-cover w-full h-full rounded-full grayscale"
          alt="hero"
        />
      </div>
      <h3 className="text-lg font-semibold text-[#BBB891] mt-4">{name}</h3>
      <p className="text-sm text-[#B3B3B3] font-semibold leading-6">
        {position}
      </p>
    </div>
  );
};

export default Team;
