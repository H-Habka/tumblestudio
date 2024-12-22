import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

export default function PhoneNumberField() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePhoneChange = (value: any) => {
    setPhoneNumber(value)
    console.log("Phone Number:", value) // Validated phone number
  }

  return (
    <div>
      <PhoneInput
        id="phone"
        value={phoneNumber}
        onChange={handlePhoneChange}
        defaultCountry="AE"
        placeholder="Enter phone number *"
        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm !bg-transparent"
        countrySelectProps={{
          className: "bg-dark-3",
        }}
        containerComponentProps={{
          className:
            "w-full flex px-4 focus-within:outline-stone-700  text-lg border-b outline-none bg-transparent border border-neutral-700  placeholder:text-sm text-neutral-450",
        }}
        numberInputProps={{
          className: "border-none text-sm bg-transparent outline-none",
        }}
      />
    </div>
  )
}
