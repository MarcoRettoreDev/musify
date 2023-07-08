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
                        x: -2000,
                        opacity: 0,
                        transition: { duration: 0.8 },
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.2 },
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5 },
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
