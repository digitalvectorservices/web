import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5491155992669"; // include country code, no +
  const message = "Hola, me interesaría saber más de sus servicios.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition flex items-center justify-center"
    >
      <MessageCircle size={28} />
    </a>
  );
};