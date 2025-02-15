import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[url('/assets/cta-bg.svg')] grid grid-cols-12 px-5 py-3 lg:px-0">
      <section className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12">
        <section className="flex justify-start items-stretch flex-col md:justify-between md:items-center gap-3 md:gap-6 md:flex-row h-full py-10">
          <div className="flex justify-center items-start gap-4 flex-col">
            <strong className="text-2xl">
              Start Your Real Estate Journey Today
            </strong>
            <p className="text-white/70 text-md leading-6">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <Link
            to="/"
            className="bg-[#703bf7] hover:bg-[#703bff]/70 text-white py-3 px-4 rounded-lg w-full text-center md:w-fit shrink-0 self-stretch md:self-center"
          >
            Explore Properties
          </Link>
        </section>
      </section>
    </section>
  );
};

export default CTA;
