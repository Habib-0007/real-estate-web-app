const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#262626] via-[#1a1a1a] to-[#1a1a1a] grid grid-cols-12 px-5 py-3 lg:px-0 h-75">
      <section className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12">
        <section className="flex justify-center text-left items-start gap-5 flex-col h-full">
          <strong className="text-3xl">Find Your Dream Property</strong>
          <p className="text-white/70 text-md leading-6">
            Welcome to Estatein, where your dream property awaits in every
            corner of the beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer journey
          </p>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
