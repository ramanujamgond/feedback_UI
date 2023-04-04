import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

const FeedBackList = ({ feedBack, handleDelete }) => {
    if (!feedBack || feedBack.length === 0) {
        return <p>No FeedBack Yet</p>
    }

    return (
        <React.Fragment>
            <div className="feedback-list">
                <AnimatePresence>
                    {feedBack.map((item) => (
                        <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </React.Fragment>
    )

    // return (
    //     <React.Fragment>
    //         <div className="feedback-list">
    //             {feedBack.map((item) => (
    //                 <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //             ))}
    //         </div>
    //     </React.Fragment>
    // )
}

FeedBackList.propTypes = {
    // feedBack: PropTypes.array.isRequired,
    feedBack: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
}

export default FeedBackList