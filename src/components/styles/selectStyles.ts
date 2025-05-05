import { StylesConfig } from "react-select";



export const customSelectStyles: StylesConfig<{ value: string; label: string }, true> = {
  control: (base, state) => ({
    ...base,
    borderRadius: 28,
    borderColor: state.isFocused ? "#1F5378" : "#000",
    boxShadow: "none",
    minHeight: 56,
    fontSize: "1.15rem",
    paddingLeft: 2,
    "&:hover": { borderColor: "#1F5378" },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#1F5378",
    color: "#fff",
    borderRadius: 16,
    padding: "2px 8px",
    alignItems: "center",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
    fontWeight: 500,
    padding: "0 6px",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#CD3333",
    ":hover": {
      backgroundColor: "#fff",
      color: "#a80000",
    },
    fontSize: "1.1em",
    marginLeft: 6,
    marginRight: 2,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
  }),
};
