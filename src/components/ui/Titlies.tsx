interface TitliesProps {
  info: string[];
}

export const Titlies = ({ info }: TitliesProps) => {

    let [,,,firstItem] = info;
  return (
    <h1 className="pseudo  relative  z-1 font-honk text-amber-800 font-extralight text-4xl text-center ">
      {firstItem}
    </h1>
  );
};
