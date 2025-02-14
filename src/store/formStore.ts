import { create } from "zustand";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
  bathrooms: string;
  bedrooms: string;
  budget: string;
  contactMethod: "phone" | "email";
  contactValue: string;
  message: string;
  terms: boolean;
  setField: (field: string, value: string | boolean) => void;
  resetForm: () => void;
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  propertyType: "",
  bathrooms: "",
  bedrooms: "",
  budget: "",
  contactMethod: "phone" as const,
  contactValue: "",
  message: "",
  terms: false,
};

export const useFormStore = create<FormState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  resetForm: () => set(initialState),
}));
