export const goToWhatsapp = (sector, nombre) => {
  const phoneNumber = "5491155992669";
  const message = `Hola, me interesaría saber más de sus servicios. Estuve revisando lo ofrecido para ${sector}, me interesa el plan ${nombre}.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}