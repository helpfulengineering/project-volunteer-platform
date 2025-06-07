import { StylesConfig } from "react-select";



export const customSelectStyles: StylesConfig<{ value: string; label: string }, true> = {
  control: (base, state) => ({
    ...base,
    borderRadius: 10,
    borderColor: state.isFocused ? "#1F5378" : "#000",
    boxShadow: "none",
    minHeight: 56,
    fontSize: "1rem",
    paddingLeft: 2,
    "&:hover": { borderColor: "#1F5378" },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#F7F7FA",
    color: "#fff",
    borderRadius: 10,
    padding: "2px 8px",
    alignItems: "center",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#000",
    fontWeight: 500,
    padding: "0 6px",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#CD3333",
    ":hover": {
      backgroundColor: "darkgray",
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

  clearIndicator: (base) => ({
  ...base,
  cursor: "pointer",
  color: "#CD3333",
  padding: "8px",
  ":hover": {
    color: "#000",
    backgroundColor: "#f0f0f0",
  },
}),

};
