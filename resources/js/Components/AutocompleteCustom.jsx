import { Icon } from "@iconify/react";
import {
    Autocomplete,
    FormHelperText,
    InputAdornment,
    TextField,
} from "@mui/material";

const AutocompleteCustom = ({
    name,
    handleChange,
    wrapperclass,
    options,
    size,
    value,
    errors,
    fullWidth,
}) => {
    return (
        <div className={wrapperclass}>
            <Autocomplete
                fullWidth={fullWidth}
                disablePortal
                name={name}
                options={options ?? []}
                size={size}
                value={options.find((e) => e.id === value)}
                onChange={(e, value) => handleChange(value)}
                popupIcon={null}
                clearOnEscape={true}
                isOptionEqualToValue={(option, value) =>
                    option.label === value.label
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon
                                        width="1.5rem"
                                        height="1.5rem"
                                        icon="ic:round-search"
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
            {errors && <FormHelperText error={true}>{errors}</FormHelperText>}
        </div>
    );
};

export default AutocompleteCustom;
