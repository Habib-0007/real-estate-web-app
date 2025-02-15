import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="flex justify-start items-start flex-col gap-15 mt-30">
      <section>
        <strong className="text-[38px] leading-[57px] font-semibold mb-2.5">
          Comprehensive Pricing Details
        </strong>
        <p className="text-[#999] leading-6">
          At Estatein, transparency is key. We want you to have a clear
          understanding of all costs associated with your property investment.
          Below, we break down the pricing for Seaside Serenity Villa to help
          you make an informed decision
        </p>
      </section>
      <section className="self-stretch">
        <div className="px-10 py-5 gap-4 border border-[#262626] bg-[#141414] flex justify-start items-center">
          <p className="text-xl leading-8 font-semibold">Note</p>
          <small className="h-[30px] w-[1px] bg-[#262626]"></small>
          <p className="text-sm leading-[21px] font-medium text-[#999]">
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </p>
        </div>
        <section className="mt-10 flex justify-start items-start flex-col md:flex-row gap-10">
          <div>
            <p className="text-[#999] leading-6">Listing Price</p>
            <strong className="text-[38px] leading-[45px] font-semibold mb-2.5">
              $1,250,000
            </strong>
          </div>
          <section className="w-full">
            <div className="p-10 flex justify-start items-stretch flex-col gap-[30px] rounded-xl border-1 border-[#262626]">
              <div className="flex justify-between items-center gap-10">
                <strong className="text-xl leading-[30px] font-semibold">
                  Additional Fees
                </strong>
                <Link
                  to="#"
                  className="block bg-[#1a1a1a] border border-[#262626] py-3.5 px-5 rounded transition-colors hover:border-[#1a1a1a] hover:bg-[#262626]"
                >
                  Learn More
                </Link>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-between items-stretch flex-row gap-5">
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Property Transfer Tax
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $25,000
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      Based on the sale price and local regulations
                    </button>
                  </div>
                </div>
                <small className="block h-[66px] w-[1px] bg-[#262626]"></small>
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Legal Fees
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $3,000
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      Approximate cost for legal services, including title
                      transfer
                    </button>
                  </div>
                </div>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-between items-stretch flex-row gap-5">
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Home Inspection
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $500
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      Recommended for due diligence
                    </button>
                  </div>
                </div>
                <small className="block h-[66px] w-[1px] bg-[#262626]"></small>
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Property Insurance
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $1,200
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      Annual cost for comprehensive property insurance
                    </button>
                  </div>
                </div>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-start items-stretch flex-col gap-3">
                <p className="text-sm leading-[21px] text-[#999] font-medium">
                  Mortgage Fees
                </p>
                <div className="flex justify-start items-center flex-row gap-3">
                  <strong className="text-xl leading-[30px] text-white font-semibold">
                    Varies
                  </strong>
                  <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                    If applicable, consult with your lender for specific details
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 p-10 flex justify-start items-stretch flex-col gap-[30px] rounded-xl border-1 border-[#262626]">
              <div className="flex justify-between items-center gap-10">
                <strong className="text-xl leading-[30px] font-semibold">
                  Monthly Costs
                </strong>
                <Link
                  to="#"
                  className="block bg-[#1a1a1a] border border-[#262626] py-3.5 px-5 rounded transition-colors hover:border-[#1a1a1a] hover:bg-[#262626]"
                >
                  Learn More
                </Link>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-start items-stretch flex-col gap-3">
                <p className="text-sm leading-[21px] text-[#999] font-medium">
                  Property Taxes
                </p>
                <div className="flex justify-start items-center flex-row gap-3">
                  <strong className="text-xl leading-[30px] text-white font-semibold">
                    $1,200
                  </strong>
                  <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                    Approximate monthly property tax based on the sale price and
                    local rates
                  </button>
                </div>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-start items-stretch flex-col gap-3">
                <p className="text-sm leading-[21px] text-[#999] font-medium">
                  Homeowners' Association Fee
                </p>
                <div className="flex justify-start items-center flex-row gap-3">
                  <strong className="text-xl leading-[30px] text-white font-semibold">
                    $300
                  </strong>
                  <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                    Monthly fee for common area maintenance and security
                  </button>
                </div>
              </div>
            </div>
            <div className="p-10 flex justify-start items-stretch flex-col gap-[30px] rounded-xl border-1 border-[#262626]">
              <div className="flex justify-between items-center gap-10">
                <strong className="text-xl leading-[30px] font-semibold">
                  Total Initial Costs
                </strong>
                <Link
                  to="#"
                  className="block bg-[#1a1a1a] border border-[#262626] py-3.5 px-5 rounded transition-colors hover:border-[#1a1a1a] hover:bg-[#262626]"
                >
                  Learn More
                </Link>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-between items-stretch flex-row gap-5">
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Listing Price
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $1,250,000
                    </strong>
                  </div>
                </div>
                <small className="block h-[66px] w-[1px] bg-[#262626]"></small>
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Additional Fees
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $29,700
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      Property transfer tax, legal fees, inspection, insurance
                    </button>
                  </div>
                </div>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-between items-stretch flex-row gap-5">
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Down Payment
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $250,000
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                     20%
                    </button>
                  </div>
                </div>
                <small className="block h-[66px] w-[1px] bg-[#262626]"></small>
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Mortgage Amount
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $1,000,000
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      If applicable
                    </button>
                  </div>
                </div>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-start items-stretch flex-col gap-3">
                <p className="text-sm leading-[21px] text-[#999] font-medium">
                  Mortgage Fees
                </p>
                <div className="flex justify-start items-center flex-row gap-3">
                  <strong className="text-xl leading-[30px] text-white font-semibold">
                    Varies
                  </strong>
                  <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                    If applicable, consult with your lender for specific details
                  </button>
                </div>
              </div>
            </div>
            <div className="p-10 flex justify-start items-stretch flex-col gap-[30px] rounded-xl border-1 border-[#262626]">
              <div className="flex justify-between items-center gap-10">
                <strong className="text-xl leading-[30px] font-semibold">
                  Monthly Expenses
                </strong>
                <Link
                  to="#"
                  className="block bg-[#1a1a1a] border border-[#262626] py-3.5 px-5 rounded transition-colors hover:border-[#1a1a1a] hover:bg-[#262626]"
                >
                  Learn More
                </Link>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-between items-stretch flex-row gap-5">
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Property Taxes
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $1,250
                    </strong>
                  </div>
                </div>
                <small className="block h-[66px] w-[1px] bg-[#262626]"></small>
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Homeowners' Association Fee
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $3,00
                    </strong>
                  </div>
                </div>
              </div>
              <small className="block w-full h-[1px] bg-[#262626]"></small>
              <div className="flex justify-between items-stretch flex-row gap-5">
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Mortgage Payment
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      Varies based on terms and interest rate
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      If applicable
                    </button>
                  </div>
                </div>
                <small className="block h-[66px] w-[1px] bg-[#262626]"></small>
                <div className="flex justify-start items-stretch flex-col gap-3">
                  <p className="text-sm leading-[21px] text-[#999] font-medium">
                    Property Insurance
                  </p>
                  <div className="flex justify-start items-center flex-row gap-3">
                    <strong className="text-xl leading-[30px] text-white font-semibold">
                      $100
                    </strong>
                    <button className="rounded-3xl border border-[#262626] bg-[#1a1a1a] px-3 py-1.5 text-sm leading-[21px] text-[#999] font-medium">
                      Approximate monthly cost
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Pricing;
