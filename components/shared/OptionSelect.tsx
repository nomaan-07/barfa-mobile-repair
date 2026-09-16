import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Option<T extends string> = {
  label: string;
  value: T;
};

interface OptionSelectProps<T extends string> {
  label?: string;
  value: T;
  options: Option<T>[];
  onValueChange: (value: T) => void;
}

function OptionSelect<T extends string>({
  label,
  value,
  options,
  onValueChange,
}: OptionSelectProps<T>) {
  return (
    <Select
      items={options}
      value={value}
      onValueChange={(value) => {
        if (value) onValueChange(value);
      }}
    >
      <SelectTrigger className="w-44">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default OptionSelect;
