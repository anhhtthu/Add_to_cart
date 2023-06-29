export default function CountItem(props) {
  const { data } = { ...props };
  return <div className="count-item">{data.length} Items</div>;
}
