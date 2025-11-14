export default function useViberLink() {
  const openViber = (phone = "+9779801170674") => {
    const encodedPhone = encodeURIComponent(phone);

    const viberURI = `viber://chat?number=${encodedPhone}`;
    const fallbackURL = "https://www.viber.com/download/";

    let shouldFallback = true;

    const onBlur = () => {
      shouldFallback = false;
    };

    window.addEventListener("blur", onBlur, { once: true });

    window.location.href = viberURI;

    setTimeout(() => {
      if (shouldFallback) {
        window.open(fallbackURL, "_blank", "noopener,noreferrer");
      }
      window.removeEventListener("blur", onBlur);
    }, 3500);
  };

  return openViber;
}
