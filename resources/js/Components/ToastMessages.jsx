import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export const ToastMessages = ({ icon, message, iconColor }) => {
    const [present, setPresent] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPresent(false);
        }, 3000);
    }, [present]);

    useEffect(() => {
        setPresent(message && true);
    }, [message]);

    return (
        <AnimatePresence initial={true} mode="popLayout">
            {present && (
                <motion.div
                    initial={{
                        x: -2000,
                        opacity: 0,
                        transition: { duration: 0.8 },
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}
                    exit={{ x: 300, opacity: 0, transition: { duration: 0.5 } }}
                    className="absolute bottom-[10%] right-[1%] px-4 py-4 bg-whitePrimary rounded-md flex space-x-2 items-center"
                >
                    <Icon className={iconColor} icon={icon} width="1.5rem" />
                    <div className="text-blackSecondary font-bold">
                        {message}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
