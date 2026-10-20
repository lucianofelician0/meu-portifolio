import whatsapImg from "@/assets/icons/whatsap.png"
export const Whatsap = () => {
  return (
    <img
      className="fixed bottom-4 right-4 sm:hidden hover:scale-110 transition-transform duration-200"
      src={whatsapImg}
      width={60}
      alt="WhatsApp"
    />
  );
};
