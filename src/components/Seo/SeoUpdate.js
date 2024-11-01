// SEOUpdater.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEOUpdate = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    const updateMetaTags = (title, description, imageUrl) => {
      document.title = title;

      const descriptionMeta = document.querySelector("meta[name='description']");
      if (descriptionMeta) descriptionMeta.setAttribute("content", description);

      const ogTitle = document.querySelector("meta[property='og:title']");
      if (ogTitle) ogTitle.setAttribute("content", title);

      const ogDescription = document.querySelector("meta[property='og:description']");
      if (ogDescription) ogDescription.setAttribute("content", description);

      const ogImage = document.querySelector("meta[property='og:image']");
      if (ogImage) ogImage.setAttribute("content", imageUrl);
    };

    switch (pathname) {
      case "/":
        updateMetaTags("Home Page", "Welcome to the home page", "home-image.jpg");
        break;
      case "/service":
        updateMetaTags("Our Services", "Learn about our services", "service-image.jpg");
        break;
      case "/contact":
        updateMetaTags("Contact Us", "Get in touch with us", "contact-image.jpg");
        break;
      case "/helloworld":
        updateMetaTags("Hello World", "Say Hello to the World", "hello-world-image.jpg");
        break;
      default:
        updateMetaTags("Your App", "Default description", "default-image.jpg");
        break;
    }
  }, [location]);

  return null;
};

export default SEOUpdate;
