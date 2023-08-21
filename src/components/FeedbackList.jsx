import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
// import PropType from "prop-types";
import FeedbackItem from "./FeedbackItem";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet!</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) =>
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

// FeedbackList.propTypes = {
//     feedback: PropType.arrayOf(
//         PropType.shape({
//             id: PropType.number.isRequired,
//             text: PropType.string.isRequired,
//             rating: PropType.number.isRequired,
//         })
//     ),
// }

export default FeedbackList