import { FaFacebookMessenger } from "react-icons/fa6";

const Messenger = () => {
  const handleChat = () => {
    window.open("https://m.me/md.delowarhossenmi", "_blank");
  };

  return (
<div className="fixed bottom-24 right-6 group">
<button
  onClick={handleChat}
  className="fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300 animate-pulse before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-blue-400 before:opacity-50 before:blur-lg before:animate-ping"
>
  <FaFacebookMessenger size={24} />
  <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-[12px] px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap w-max drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
  Message me
</span>
</button>
</div>
  );
};

export default Messenger;
