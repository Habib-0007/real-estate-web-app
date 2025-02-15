import { create } from "zustand";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  terms: boolean;
  message: string;
  setField: (field: string, value: string | boolean) => void;
  resetForm: () => void;
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  message: "",
  terms: false,
};

export const useInquiryStore = create<FormState>((set) => ({
  ...initialState,
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  resetForm: () => set(initialState),
}));
