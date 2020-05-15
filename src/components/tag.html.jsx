import getTagInfo from "../getTagInfo";

export default ({ tag }) => {
  let tagInfo = getTagInfo(tag);
  return (
    <span className="tag">
      <img src={tagInfo.icon} alt="icon" />
      <span>{tagInfo.properName}</span>
    </span>
  );
};
