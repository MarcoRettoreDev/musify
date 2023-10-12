import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export const ToastMessages = ({ toastMessages, setToastMessages }) => {
    useEffect(() => {
        setTimeout(() => {
            setToastMessages((state) => ({
                ...state,
                show: false,
            }));
        }, toastMessages.duration);
    }, [toastMessages.show]);

    return (
        <AnimatePresence initial={true} mode="popLayout">
            {toastMessages.show && (
                <motion.div
                    initial={{
                        opacity: 0,
                        transition: { duration: 1.2 },
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.4 },
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 1.2 },
                    }}
                    className="absolute bottom-[10%] right-[1%] px-4 py-4 bg-whitePrimary rounded-md flex space-x-2 items-center"
                >
                    <Icon
                        className={toastMessages.iconColor}
                        icon={toastMessages.icon}
                        width="1.5rem"
                    />
                    <div className="text-blackSecondary font-bold text-sm">
                        {toastMessages.message}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
