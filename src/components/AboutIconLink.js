import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutIconLink = () => {
	// kalau pakai anchor akan membuat pagenya refresh
	// pakai Link tidak
	return (
		<div className="about-link">
			<Link to={{ pathname: '/about', search: '?sort=name', hash: '#hallo' }}>
				<FaQuestion size={30} />
			</Link>
		</div>
	);
};

export default AboutIconLink;
