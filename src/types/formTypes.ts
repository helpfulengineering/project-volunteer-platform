// Signup Form types and props
import { FormEvent } from "react";

export interface FormData {
  name: string;
  timezone: string;
  profession: string;
  yearsOfExperience: string;
  languages: { value: string; label: string }[];
  skills: { value: string; label: string }[];
}

export interface SignupFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitting: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  userName?: string;
}
