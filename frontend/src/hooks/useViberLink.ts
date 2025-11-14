export default function useViberLink() {
  const openViber = (phone = "9779801170674") => {
    const cleanNumber = phone.replace("+", "");

    const encoded = encodeURIComponent(cleanNumber);

    const mobileURI = `viber://chat?number=${cleanNumber}`;
    const desktopURI = `viber://chat?number=${encoded}`;
    const fallbackURL = "https://www.viber.com/download/";

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const viberLink = isMobile ? mobileURI : desktopURI;

    let shouldFallback = true;

    const onBlur = () => {
      shouldFallback = false;
    };

    window.addEventListener("blur", onBlur, { once: true });

    window.location.href = viberLink;

    setTimeout(() => {
      if (shouldFallback) {
        window.open(fallbackURL, "_blank", "noopener,noreferrer");
      }
      window.removeEventListener("blur", onBlur);
    }, 3500);
  };

  return openViber;
}
