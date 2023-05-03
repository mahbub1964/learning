interface Props {
  specs: {
    [key: string]: string;
  };
}

const Specifications = ({ specs }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {Object.keys(specs).map((key) => (
        <div key={key} className="flex text-sm items-center">
          <p className="w-24 font-bold">{key}</p>
          <p>{specs[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default Specifications;
