import * as yup from "yup";

const bookingClassOptions = [
  "Regular fair",
  "Economy",
  "Business Class",
  "First Class",
  "Armed",
];
const bookingTypeOption = ["One-way", "Round"];

const bookingSchema = yup.object().shape({
  booking_type: yup
    .string()
    .required("Flight type is required")
    .oneOf(bookingTypeOption),
  passengers: yup.array().of(
    yup.object().shape({
      category: yup
        .string()
        .required("Category is required")
        .oneOf(["adult", "children", "infant"], "Invalid category"),
      count: yup
        .number()
        .required("Count is required")
        .min(0, "Count cannot be negative"),
    })
  ),
  fromAirport: yup.string().required("Airport is required"),
  toAirport: yup.string().required("Airport is required"),
  booking_class: yup
    .string()
    .required("Booking class is required")
    .oneOf(bookingClassOptions, "Invalid booking class"),
});

export default bookingSchema;
