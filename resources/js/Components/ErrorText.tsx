import { FormHelperText } from "@mui/material";

export const ErrorText = ({ wrapperClass, text }) => {
    return (
        <div
            className={`MuiFormHelperText-root Mui-error css-1d1r5q-MuiFormHelperText-root ${wrapperClass}`}
        >
            <FormHelperText error={true}>{text}</FormHelperText>
        </div>
    );
};
