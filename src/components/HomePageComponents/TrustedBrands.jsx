import React from "react";

const TrustedBrands = () => {
  const brands = [
    {
      name: "Beyoung",
      link: "https://beyoung.in/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/beyoung.png",
      imgAlt: "Beyoung logo",
      imgHeight: "15px",
    },
    {
      name: "Mokobara",
      link: "https://mokobara.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/2.svg",
      imgAlt: "Mokobara logo",
      imgHeight: "20px",
    },
    {
      name: "Estella Collection",
      link: "https://estellacollection.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/estella.webp",
      imgAlt: "Estella Collection logo",
      imgHeight: "35px",
    },
    {
      name: "Eyevos",
      link: "https://eyevos.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/eyevos.webp",
      imgAlt: "Eyevos logo",
      imgHeight: "35px",
    },
    {
      name: "Nish Hair",
      link: "https://www.nishhair.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/nish_hair.png",
      imgAlt: "Nish Hair logo",
      imgHeight: "30px",
    },
    {
      name: "Daily Objects",
      link: "https://www.dailyobjects.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/daily_objects.png",
      imgAlt: "Daily Objects logo",
      imgHeight: "30px",
    },
    {
      name: "Nandog",
      link: "https://www.nandog.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/nandog.avif",
      imgAlt: "Nandog logo",
      imgHeight: "35px",
    },
    {
      name: "Revalsaunas",
      link: "https://revelsaunas.com.au/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/revel.avif",
      imgAlt: "Revalsaunas logo",
      imgHeight: "30px",
    },
    {
      name: "Whole Truth",
      link: "https://www.wholetruth.in/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/whole_truth.png",
      imgAlt: "Whole Truth logo",
      imgHeight: "35px",
    },
    {
      name: "Ultimacosa",
      link: "https://www.ultimacosa.com/",
      imgSrc:
        "https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/home/static/hero-one-sec/trusted-cont/ultima-cosa.avif",
      imgAlt: "Ultimacosa logo",
      imgHeight: "30px",
    },
  ];

  return (
    <div className="logo-grid-container brands-container dark:bg-transparent dark:border-t dark:border-b dark:border-neutral-800">
      <h2 className="title text-neutral-800 dark:text-accent-pink-500">
        Trusted by <span className="text-white">1500+ brands</span>
      </h2>

      {/* Desktop View */}
      <div className="logo-grid grid grid-cols-4 gap-4 border dark:border-neutral-800">
        {brands.map((brand, index) => (
          <a
            href={brand.link}
            target="_blank"
            rel="nofollow"
            key={index}
            className="border dark:border-neutral-800 dark:bg-neutral-800 p-2"
          >
            <img
              src={brand.imgSrc}
              alt={brand.imgAlt}
              title={brand.name}
              className="h-auto"
              style={{ height: brand.imgHeight }}
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {/* Mobile View */}
      <div className="logo-grid mobile">
        <div className="logo-track flex gap-4">
          {brands.map((brand, index) => (
            <a
              href={brand.link}
              target="_blank"
              rel="nofollow"
              key={index}
              className="border dark:border-neutral-800 dark:bg-neutral-800 p-2"
            >
              <img
                src={brand.imgSrc}
                alt={brand.imgAlt}
                title={brand.name}
                className="h-auto"
                style={{ height: brand.imgHeight }}
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
