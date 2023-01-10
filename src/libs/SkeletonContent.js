
//Loader
import ContentLoader from "react-content-loader";

const SkeletonContent = (props) => (
	<ContentLoader 
		speed={2}
		width={620}
		height={200}
		viewBox="0 0 620 200"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
		>
		<rect x="121" y="430" rx="10" ry="10" width="140" height="40" /> 
		<rect x="0" y="430" rx="10" ry="10" width="60" height="40" /> 
		<rect x="0" y="0" rx="10" ry="10" width="400" height="40" /> 
		<rect x="0" y="70" rx="10" ry="10" width="620" height="60" /> 
		<rect x="0" y="158" rx="10" ry="10" width="80" height="40" /> 
		<rect x="115" y="159" rx="10" ry="10" width="140" height="40" />
	</ContentLoader>
)

export default SkeletonContent;