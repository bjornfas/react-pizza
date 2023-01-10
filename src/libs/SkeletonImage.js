
//Loader
import ContentLoader from "react-content-loader";

const SkeletonImage = (props) => (
	<ContentLoader 
		speed={2}
		width={400}
		height={400}
		viewBox="0 0 400 400"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
		>
		<rect x="121" y="430" rx="10" ry="10" width="140" height="40" /> 
		<rect x="0" y="430" rx="10" ry="10" width="60" height="40" /> 
		<circle cx="193" cy="205" r="183" />
	</ContentLoader>
)

export default SkeletonImage;