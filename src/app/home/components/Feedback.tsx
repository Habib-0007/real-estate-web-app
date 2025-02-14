import { useState } from "react";
import { useFormStore } from "../../../store/formStore";
import Dropdown from "../../../components/Dropdown";

const Feedback = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formState = useFormStore();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.firstName) newErrors.firstName = "First name is required";
    if (!formState.lastName) newErrors.lastName = "Last name is required";
    if (!formState.email) newErrors.email = "Email is required";
    if (!formState.phone) newErrors.phone = "Phone is required";
    if (!formState.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formState);
      formState.resetForm();
    }
  };

  const inputClass =
    "w-full bg-[#262626] rounded-lg px-4 py-3 text-white placeholder:text-[#666666] focus:outline-none focus:ring-2 focus:ring-[#703bf7]";
  const labelClass = "block text-white mb-2";

  return (
    <section className="mt-15 grid grid-cols-12 px-5 py-3 lg:px-0">
      <section className="col-start-1 col-end-13 lg:col-start-2 lg:col-end-12">
        <section className="flex justify-start items-stretch gap-5 flex-col">
          <section className="flex justify-start items-stretch flex-col gap-4">
            <strong className="text-3xl leading-8">Let's Make it Happen</strong>
            <p className="text-white/70 text-md leading-6">
              Ready to make the first step toward your dream propertY? Fill out
              the form below and our real estate wizard will work magic to find
              your perfect match. Don't wait, let's embark on this exciting
              journey
            </p>
          </section>
          <section>
            <form
              onSubmit={handleSubmit}
              className="max-w-6xl mx-auto space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className={inputClass}
                    value={formState.firstName}
                    onChange={(e) =>
                      formState.setField("firstName", e.target.value)
                    }
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className={inputClass}
                    value={formState.lastName}
                    onChange={(e) =>
                      formState.setField("lastName", e.target.value)
                    }
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </span>
                  )}
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className={inputClass}
                    value={formState.email}
                    onChange={(e) =>
                      formState.setField("email", e.target.value)
                    }
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className={inputClass}
                    value={formState.phone}
                    onChange={(e) =>
                      formState.setField("phone", e.target.value)
                    }
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="relative">
                  <label className={labelClass}>Preferred Location</label>
                  {/* <select
                    className={selectClass}
                    value={formState.location}
                    onChange={(e) =>
                      formState.setField("location", e.target.value)
                    }
                  >
                    <option value="">Select Location</option>
                    <option value="downtown">Downtown</option>
                    <option value="suburban">Suburban</option>
                    <option value="rural">Rural</option>
                  </select>
                  <ChevronDownIcon className="absolute right-4 top-[42px] text-white pointer-events-none" /> */}
                  <Dropdown
                    placeholder="Select Location"
                    options={[
                      {
                        value: "downtown",
                        label: "Downtown",
                      },
                      { value: "suburban", label: "Suburban" },
                      { value: "rural", label: "Rural" },
                    ]}
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>Property Types</label>
                  <Dropdown
                    placeholder="Select Property Type"
                    options={[
                      { value: "house", label: "House" },
                      { value: "apartment", label: "Apartment" },
                      { value: "condo", label: "Condo" },
                    ]}
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>No. of Bathrooms</label>
                  <Dropdown
                    placeholder="Select No. Bathrooms"
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                    ]}
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>No. of Bedrooms</label>
                  <Dropdown
                    placeholder="Select No. Bedrooms"
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4" },
                      { value: "5", label: "5" },
                    ]}
                  />
                </div>
              </div>
              <div className="relative">
                <label className={labelClass}>Budget</label>

                <Dropdown
                  placeholder="Pricing Range"
                  options={[
                    { value: "0-100k", label: "$0 - $100,000" },
                    { value: "100k-500k", label: "$100,000 - $500,000" },
                    { value: "500k+", label: "$500,000+" },
                  ]}
                />
              </div>
              <div>
                <label className={labelClass}>Preferred Contact Method</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="radio"
                      id="phone"
                      name="contactMethod"
                      className="hidden w-4 h-4 accent-[#703bf7]"
                      checked={formState.contactMethod === "phone"}
                      onChange={() =>
                        formState.setField("contactMethod", "phone")
                      }
                    />
                    <label htmlFor="phone" className="w-full">
                      <input
                        type="tel"
                        placeholder="Enter Your Number"
                        className={inputClass}
                        value={
                          formState.contactMethod === "phone"
                            ? formState.contactValue
                            : ""
                        }
                        onChange={(e) =>
                          formState.setField("contactValue", e.target.value)
                        }
                      />
                    </label>
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="radio"
                      id="email"
                      name="contactMethod"
                      className="hidden w-4 h-4 accent-[#703bf7]"
                      checked={formState.contactMethod === "email"}
                      onChange={() =>
                        formState.setField("contactMethod", "email")
                      }
                    />
                    <label htmlFor="email" className="w-full">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={inputClass}
                        value={
                          formState.contactMethod === "email"
                            ? formState.contactValue
                            : ""
                        }
                        onChange={(e) =>
                          formState.setField("contactValue", e.target.value)
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  placeholder="Enter your Message here."
                  className={`${inputClass} min-h-[150px] resize-none`}
                  value={formState.message}
                  onChange={(e) =>
                    formState.setField("message", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 rounded accent-[#703bf7]"
                    checked={formState.terms}
                    onChange={(e) =>
                      formState.setField("terms", e.target.checked)
                    }
                  />
                  <label htmlFor="terms" className="text-sm text-[#999999]">
                    I agree with{" "}
                    <a
                      href="#"
                      className="text-[#999999] hover:text-white underline"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#999999] hover:text-white underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.terms && (
                  <span className="text-red-500 text-sm">{errors.terms}</span>
                )}

                <button
                  type="submit"
                  className="bg-[#703bf7] text-white px-6 py-3 rounded-lg hover:bg-[#703bf7]/90 transition-colors"
                >
                  Send Your Message
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Feedback;
