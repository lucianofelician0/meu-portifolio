interface TitliesProps {
  info: string;
}

export const Titlies = ({ info }: TitliesProps) => {
  return (
    <h1 className="font-honk font-bold md:font-extralight  text-4xl text-center">
      {info}
    </h1>
  );
};
