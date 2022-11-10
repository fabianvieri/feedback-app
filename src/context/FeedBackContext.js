import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

	const addFeedback = (newFeedback) => {
		setFeedback([...feedback, newFeedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};

	const updateFeedback = (id, newItem) => {
		const newFeedback = feedback.map((item) => {
			if (item.id === id) {
				return newItem;
			}
			return item;
		});

		setFeedback(newFeedback);
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
