
//Content Loader
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
	<ContentLoader 
		speed={2}
		width={260}
		height={470}
		viewBox="0 0 260 470"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
		>
		<circle cx="125" cy="125" r="125" /> 
		<rect x="0" y="278" rx="10" ry="10" width="260" height="24" /> 
		<rect x="0" y="321" rx="10" ry="10" width="260" height="90" /> 
		<rect x="121" y="430" rx="10" ry="10" width="140" height="40" /> 
		<rect x="0" y="430" rx="10" ry="10" width="60" height="40" />
	</ContentLoader>
)

export default Skeleton;