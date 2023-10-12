import { Icon } from "@iconify/react";
import { FormHelperText, InputAdornment, TextField } from "@mui/material";

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
            <form onSubmit={onSubmit} className="">
                <TextField
                    id="outlined-basic"
                    className="text-white rounded-3xl !bg-blackPrimary active:!bg-blackPrimary focus:!bg-blackPrimary "
                    name="searchInput"
                    onChange={handleChange}
                    fullWidth
                    size={size}
                    variant={variant}
                    placeholder="Search"
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
            {errors && <FormHelperText error={true}>{errors}</FormHelperText>}
        </div>
    );
};

export default SearchForm;
