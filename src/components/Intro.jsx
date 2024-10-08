function Intro() {
  return (
    <div>
      <div className="ps-24 flex items-center justify-center">
        <div>
          <h1 className="text-white text-7xl ms-[-5rem] z-30 absolute flex flex-col">
            Bonheur
            <span className="ps-24">Christian</span>
          </h1>
          <img
            src="svg/intro.svg"
            alt="Intro svg"
            width={500}
            height={300}
            className="z-10 "
          />
        </div>
        <img
          src="images/profile.png"
          alt="Profile"
          width={400}
          height={30}
          className="z-20"
        />

        <div className="ps-24 w-[40%] mt-[-2rem] space-y-12">
          <h1 className="text-5xl font-medium text-white">
            Based in RWANDA I’m Software Developer
          </h1>
          <p className="text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptate, cumque optio nobis sequi fuga alias iure beatae
            voluptates vel animi voluptatibus quaerat quia eaque velit nam iusto
            error harum voluptatem natus esse. Corporis distinctio nostrum a
            doloribus rerum commodi cum eaque saepe, quisquam, repellendus earum
            aliquid repudiandae, omnis neque.
          </p>
          <button className="bg-[#ff4900] rounded-full px-6 py-3 text-white font-medium">
            View my Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
