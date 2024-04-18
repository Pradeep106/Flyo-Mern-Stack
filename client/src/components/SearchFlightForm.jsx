import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import bookingSchema from "../helper/BookingSchema";
import AirportInput from "../helper/SearchFlightForm/AirportInputField";
import PassengerDetails from "../helper/SearchFlightForm/PassangerDetails";
// import BookingTypeRadioGroup from "../helper/SearchFlightForm/RadioInputField";
import DateTimeInput from "../helper/SearchFlightForm/DateTimeInput";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import BookingTypeSelect from "../helper/SearchFlightForm/SelectOption";
import { useNavigate } from "react-router-dom";

const bookingClassOptions = [
  "Regular fair",
  "Economy",
  "Business Class",
  "First Class",
  "Armed",
];
const bookingTypeOption = ["One-way", "Round"];

const SearchFlightForm = () => {
  const [open, setOpen] = useState(true);
  console.log("open", open);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowISOString = tomorrow.toISOString().split("T")[0];

  const navigate = useNavigate();

  /*.......................... React form hook logic............*/
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      passengers: [
        { category: "adult", count: 1 },
        { category: "children", count: 0 },
        { category: "infant", count: 0 },
      ],
      booking_date: new Date().toISOString().split("T")[0],
      roundtrip_date: tomorrowISOString,
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "passengers",
  });
  const watchPassengers = watch("passengers");
  const watchBookingType = watch("booking_type");
  console.log("watchBooking type", watchBookingType);

  const roundTrip = watchBookingType === "Round" ? "roundtrip" : "oneway";

  const sum = watchPassengers.reduce((acc, current) => {
    return (acc = acc + current.count);
  }, 0);

  useEffect(() => {}, [touchedFields]);

  const incrementCount = (index) => {
    const updatedPassengers = [...watchPassengers];
    updatedPassengers[index].count++;
    setValue("passengers", updatedPassengers);
  };
  const decrementCount = (index) => {
    if (watchPassengers[index].count > 0) {
      const updatedPassengers = [...watchPassengers];
      updatedPassengers[index].count--;
      setValue("passengers", updatedPassengers);
    }
  };

  /*.......................... React form hook logic............*/

  const onSubmit = (data) => {
    console.log(data);
    navigate("/flight-search");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border mt-10 z-0 bg-white mini:p-5  p-10 mini:rounded-lg rounded-xl">
      <div className="flex  mini:flex-col gap-20 mini:gap-5  z-10 relative">
        <BookingTypeSelect
          label="Booking type"
          options={bookingTypeOption}
          name="booking_type"
          register={register}
          onBlur={() => {
            console.log("Booking type field blurred");
          }}
          errors={errors}
          touchedFields={touchedFields}
        />

        <div className="cursor-pointer w-[25%]" onClick={() => setOpen(!open)}>
          <div className="flex">
            <p className="block text-sm font-medium text-gray-700">
              Travellers
            </p>
            <MdExpandMore className=" block text-lg font-medium text-gray-700" />
          </div>
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm sm:text-sm">
            <p className="font-bold">{sum} Travellers</p>
          </div>
        </div>
        <PassengerDetails
          fields={fields}
          decrementCount={decrementCount}
          incrementCount={incrementCount}
          onBlur={() => {
            console.log("Passenger details field blurred");
          }}
          touchedFields={touchedFields}
          errors={errors}
          open={open}
        />
      </div>

      <div className="flex mt-4 sm:flex-wrap mini:flex-wrap items-center gap-5">
        <AirportInput
          name="fromAirport"
          register={register}
          onBlur={() => {
            console.log("From Airport field blurred");
          }}
          errors={errors}
          touchedFields={touchedFields}
          setValue={setValue}
        />
        <AirportInput
          name="toAirport"
          register={register}
          onBlur={() => {
            console.log("To Airport field blurred");
          }}
          errors={errors}
          touchedFields={touchedFields}
          setValue={setValue}
        />
        <div className="flex ">
          <DateTimeInput
            name="booking_date"
            register={register}
            onBlur={() => {
              console.log("Booking date and time field blurred");
            }}
            touchedFields={touchedFields}
            errors={errors}
            setValue={setValue}
            roundTrip={roundTrip}
          />
          <DateTimeInput
            name="roundtrip_date"
            register={register}
            onBlur={() => {
              console.log("Booking date and time field blurred");
            }}
            touchedFields={touchedFields}
            errors={errors}
            setValue={setValue}
            roundTrip={roundTrip}
          />
        </div>
      </div>

      <div className="flex gap-5 mini:flex-col mt-4 flex-wrap items-center">
        <BookingTypeSelect
          label="Booking class"
          options={bookingClassOptions}
          name="booking_class"
          register={register}
          onBlur={() => {
            console.log("Booking type field blurred");
          }}
          errors={errors}
          touchedFields={touchedFields}
        />
        <button
          type="submit"
          className="bg-blue-500 mini:w-full mt-6 w-[25%] text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchFlightForm;
