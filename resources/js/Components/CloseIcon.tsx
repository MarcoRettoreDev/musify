import { Icon } from "@iconify/react";

export const CloseIcon = ({
    width = "1.5rem",
    height = "1.5rem",
    color = "currentColor",
    handleClick,
    className,
}) => {
    return (
        <Icon
            className={className}
            onClick={handleClick}
            icon="mdi:close-circle"
            width={width}
            height={height}
            color={color}
        />
    );
};
