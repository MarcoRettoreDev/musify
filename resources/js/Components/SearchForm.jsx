import { Icon } from "@iconify/react";
import {
    Autocomplete,
    FormHelperText,
    InputAdornment,
    TextField,
} from "@mui/material";

const SearchForm = ({
    handleChange,
    wrapperclass,
    size,
    errors,
    variant,
    onSubmit,
}) => {
    return (
        <div className={wrapperclass}>
            <form onSubmit={onSubmit}>
                <TextField
                    id="outlined-basic"
                    className="text-white"
                    name="searchInput"
                    onChange={handleChange}
                    fullWidth
                    size={size}
                    variant={variant}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon
                                    color="#fafafa"
                                    width="1.5rem"
                                    height="1.5rem"
                                    icon="ion:search-sharp"
                                />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>

            {/* <Autocomplete
                sx={{
                    color: "#fafafa",
                }}
                placeholder="Search"
                fullWidth={fullWidth}
                disablePortal
                options={options ?? []}
                size={size}
                value={options.find((e) => e.id === value)}
                onChange={(e, value) => handleChange(value)}
                popupIcon={null}
                clearOnEscape={true}
                getOptionLabel={(option) =>
                    option.hasOwnProperty("name") ? option.name : option.title
                }
                isOptionEqualToValue={(option, value) =>
                    option.label === value.label
                }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        paddingLeft: "0.3rem",
                                    }}
                                >
                                    <Icon
                                        color="#fafafa"
                                        width="1.5rem"
                                        height="1.5rem"
                                        icon="ion:search-sharp"
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            /> */}
            {errors && <FormHelperText error={true}>{errors}</FormHelperText>}
        </div>
    );
};

export default SearchForm;
