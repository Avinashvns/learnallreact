import './VsjWrapper.css';
function VsjWrapper(props)
{
	const style="10";

	return <div className="VsjWrapper">
	{props.children}
	{style}
	</div>
}
export default VsjWrapper;