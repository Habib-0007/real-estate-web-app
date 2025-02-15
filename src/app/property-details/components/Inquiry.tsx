import { useState } from "react";
import { useInquiryStore } from "../../../store/inquiryStore";
import Dropdown from "../../../components/Dropdown";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Inquiry = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formState = useInquiryStore();

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
    // <section className="flex justify-start items-start gap-20 flex-row">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-4">
      <section className="">
        <strong className="text-[38px] leading-[57px] font-semibold mb-2.5">
          Inquire About Seaside Serenity Villa
        </strong>
        <p className="text-[#999] leading-6">
          Interested in this property? Fill out the form below, and our real
          estate experts will get back to you with more details, including
          scheduling a viewing and answering any questions you may have.
        </p>
      </section>
      <section className="">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                onChange={(e) => formState.setField("lastName", e.target.value)}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className={inputClass}
                value={formState.email}
                onChange={(e) => formState.setField("email", e.target.value)}
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
                onChange={(e) => formState.setField("phone", e.target.value)}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>
          <div className="relative">
            <label className={labelClass}>Preferred Location</label>
            <Dropdown
              placeholder="Select Location"
              bg="#262626"
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
          <div>
            <label className={labelClass}>Message</label>
            <textarea
              placeholder="Enter your Message here."
              className={`${inputClass} min-h-[150px] resize-none`}
              value={formState.message}
              onChange={(e) => formState.setField("message", e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-start gap-2">
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  id="terms"
                  className="peer hidden"
                  checked={formState.terms}
                  onChange={(e) =>
                    formState.setField("terms", e.target.checked)
                  }
                />
                <div className="w-5 h-5 border-1 rounded-md flex items-center justify-center transition-all duration-300 border-[#999] text-transparent peer-checked:bg-[#703bf7] peer-checked:border-[#703bf7] peer-checked:text-white">
                  <Check className="w-4 h-4" />
                </div>
              </label>
              <label htmlFor="terms" className="text-sm text-[#999999]">
                I agree with{" "}
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white underline"
                >
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                  to="#"
                  className="text-[#999999] hover:text-white underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <span className="text-red-500 text-sm">{errors.terms}</span>
            )}

            <button
              type="submit"
              className="bg-[#703bf7] text-white px-8.5 py-3.5 rounded-lg hover:bg-[#703bf7]/90 transition-colors"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Inquiry;
