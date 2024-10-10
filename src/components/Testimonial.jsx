function Testimonials() {
  const Testimonials = [
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
    {
      message:
        "Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores te.",
      image: "/images/ndahiro.jpg",
      name: "Ndahiro Evode",
    },
  ];
  return (
    <div>
      <div className="flex gap-2 items-end">
        <img src="svg/line1.svg" alt="Line" />
        <h1 className="text-4xl font-medium text-white">
          What Our Clients Say
        </h1>
      </div>
      <div className="flex justify-evenly py-12">
        {Testimonials.map((item, index) => (
          <div
            className="bg-[#D9D9D9]/15 rounded-xl w-[23%] px-4 py-4 space-y-6"
            key={index}
          >
            <img src="/svg/quote.svg" alt="Quotation mark" />
            <p className="text-white">{item.message}</p>
            <img src={item.image} alt="" className="rounded-full" width={40} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
