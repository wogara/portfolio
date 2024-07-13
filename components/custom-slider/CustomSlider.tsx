import { useState } from "react";
import Slider from "@mui/material/Slider";

interface CustomSliderProps {
  onChange: (value: number) => void;
}
export default function CustomSlider({ onChange }: CustomSliderProps) {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newValueNumber = newValue as number;
    setValue(newValueNumber);
    onChange(newValueNumber);
  };
  return (
    <Slider
      value={value}
      defaultValue={0}
      onChange={handleChange}
      step={10}
      min={0}
      max={100}
      sx={{ color: "white", boxShadow: "none" }}
    />
  );
}
