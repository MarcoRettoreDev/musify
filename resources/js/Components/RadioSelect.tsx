import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

export const RadioSelect = ({
    formLabel,
    options,
    radioValue,
    handleChange,
}) => {
    return (
        <FormControl>
            <FormLabel id="searchTypeRadio">{formLabel}</FormLabel>
            <RadioGroup
                aria-labelledby="searchTypeRadio"
                name="searchType"
                value={radioValue}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};
