import { useState, ChangeEvent } from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import TermsModal from "./TermsModal"; 
import languages from "../data/languages";
import skills from "../data/skills";
import timezones from "../data/timezones";
import { SignupFormProps } from "../types/formTypes";
import { customSelectStyles } from "./styles/selectStyles";
import "./styles/signupForm.css";

// Setup skills options for react-select
const skillOptions = skills.map((skill) => ({
  value: skill,
  label: skill,
}));

// Setup language options for react-select
const languageOptions = languages.map((language) => ({
  value: language,
  label: language,
}));

const yearsOfExperienceOptions = Array.from({ length: 81 }, (_, i) =>
  i.toString()
);

const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  setFormData,
  submitting,
  onSubmit,
  userName,
}) => {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);
  const [hasReadTerms, setHasReadTerms] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement & HTMLSelectElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    return (
      termsAccepted &&
      !!formData.name &&
      !!formData.timezone &&
      !!formData.profession &&
      !!formData.yearsOfExperience &&
      formData.languages.length > 0 &&
      formData.skills.length > 0
    );
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setHasScrolledToBottom(true);
    }
  };

  return (
    <>
      <h1 className="signup-title">
        Welcome <span className="highlight">{userName || "!"}</span>! Tell us more about you
      </h1>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={onSubmit} autoComplete="off">
          <div className="signup-form-fields">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="First Last"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timezone">Time Zone</label>
              <select
                className="form-control"
                id="timezone"
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time zone</option>
                {timezones.map((tz) => (
                  <option key={tz.value} value={tz.value}>
                    {tz.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="profession">Current Profession</label>
              <input
                className="form-control"
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                placeholder="E.g., Data analyst, student"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="yearsOfExperience">Years of Experience</label>
              <select
                className="form-control"
                id="yearsOfExperience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                required
              >
                <option value="">Please select</option>
                {yearsOfExperienceOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            {/* Languages with react-select */}
            <div className="form-group">
              <label htmlFor="languages">Languages</label>
              <Select
                id="languages"
                name="languages"
                options={languageOptions}
                value={formData.languages}
                onChange={(selected) =>
                  setFormData((prev) => ({
                    ...prev,
                    languages: selected as { value: string; label: string }[],
                  }))
                }
                isMulti
                placeholder="Select your languages..."
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                required
              />
              <small className="form-text">
                Start typing to filter and select multiple languages.
              </small>
            </div>
            {/* Skills with react-select */}
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <Select
                id="skills"
                name="skills"
                options={skillOptions}
                value={formData.skills}
                onChange={(selected) =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: selected as { value: string; label: string }[],
                  }))
                }
                isMulti
                placeholder="Select your skills..."
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                required
              />
              <small className="form-text">
                Start typing to filter and select multiple skills.
              </small>
            </div>
          </div>
          <div className="form-group terms-group">
            <Button
              variant="link"
              type="button"
              className="terms-link"
              onClick={() => setModalIsOpen(true)}
            >
              Read Full Terms
            </Button>
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              disabled={!hasReadTerms}
            />
            <label htmlFor="termsAccepted">
              I accept the terms and conditions
            </label>
          </div>
          <Button
            type="submit"
            disabled={!termsAccepted || submitting || !validateForm()}
            variant="primary"
            className="submit-btn"
          >
            {submitting ? "Saving..." : "Save"}
          </Button>
        </form>
      </div>
      <TermsModal
  isOpen={modalIsOpen}
  onClose={() => setModalIsOpen(false)}
  hasScrolledToBottom={hasScrolledToBottom}
  onScroll={handleScroll}
  onAccept={() => setHasReadTerms(true)}
/>
    </>
  );
};

export default SignupForm;
