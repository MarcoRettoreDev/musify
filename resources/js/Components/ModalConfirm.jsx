import { BackDropModal } from "./BackDropModal";
import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import { AnimatePresence, motion } from "framer-motion";

export const ModalConfirm = ({ show, callBack, message, title }) => {
    if (!show) return;

    return (
        <BackDropModal>
            <AnimatePresence>
                <motion.div
                    initial={{
                        y: -300,
                        opacity: 0,
                        transition: { duration: 0.3 },
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.3 },
                    }}
                    exit={{ x: 300, opacity: 0, transition: { duration: 0.5 } }}
                    className="flex flex-col justify-between bg-blackSecondary px-6 py-4 max-w-[30vw] max-h-[25vh] rounded-md absolute top-[40%] xl:right-[40%] lg:right-[32%] space-y-8"
                >
                    <h1 className="text-xl ">{message}</h1>
                    <p>
                        This action will delete <strong>{title}</strong>
                    </p>
                    <div className="flex space-x-4 ml-auto">
                        <PrimaryButton
                            children="Cancel"
                            onClick={() =>
                                callBack({
                                    modal: false,
                                    confirmation: false,
                                })
                            }
                        />
                        <DangerButton
                            children="Confirm"
                            onClick={() =>
                                callBack({
                                    modal: false,
                                    confirmation: true,
                                })
                            }
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        </BackDropModal>
    );
};
