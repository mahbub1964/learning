import {BsSuitHeart, BsSuitHeartFill} from 'react-icons/bs'

interface Props {
  liked: boolean;
}
const HeartToggle = ({ liked }: Props) => {
  return <div className="w-6 h-6">{liked ? <BsSuitHeartFill className="text-redAccent w-5 h-5"/> : <BsSuitHeart className="text-mutedText w-5 h-5"/>}</div> ;
};

export default HeartToggle;
