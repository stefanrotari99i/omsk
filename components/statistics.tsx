const Statistics = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-content-center my-40 p-2">
      <StatisticItem title="PROJEKTE" value={32} />
      <StatisticItem title="KUNDEN" value={12} />
      <StatisticItem title="Auszeichnungen" value={5} />
      <StatisticItem title="Jahre" value={10} />
    </div>
  );
};

const StatisticItem = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="flex-1 text-center stats-item">
      <h2 className="text-9xl text-[#BBB891] font-bold">{value}</h2>
      <p className="text-sm uppercase text-[#C8C8C8] font-medium">{title}</p>
    </div>
  );
};

export default Statistics;
