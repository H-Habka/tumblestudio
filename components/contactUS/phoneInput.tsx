import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

export default function PhoneNumberField({
  handleChange,
  value,
}: {
  value: string
  handleChange: (e: any) => void
}) {
  const handlePhoneChange = (value: any) => {
    handleChange({
      target: {
        name: "phoneNumber",
        value: value,
      },
    })
  }

  return (
    <div>
      <PhoneInput
        id="phone"
        value={value}
        onChange={handlePhoneChange}
        defaultCountry="AE"
        placeholder="Enter phone number *"
        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm !bg-transparent"
        countrySelectProps={{
          className: "bg-theme-3",
        }}
        containerComponentProps={{
          className:
            "w-full flex px-4 focus-within:outline-theme-opposite-2  text-lg border-b outline-none bg-transparent border border-theme-opposite-1 focus:outline-theme-opposite-2 placeholder:text-sm text-theme-opposite-3",
        }}
        numberInputProps={{
          className: "border-none text-sm bg-transparent outline-none",
        }}
      />
    </div>
  )
}
