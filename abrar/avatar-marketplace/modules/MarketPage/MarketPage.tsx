import useScreenSize from "@/hooks/useScreenSize";
import Sidebar from "./components/Sidebar/Sidebar";
import SortBySelect from "./components/SortBySelect/SortBySelect";
import { HiChevronDown } from "react-icons/hi";
import AvatarList from "./components/AvatarList/AvatarList";
import { Avatar } from "@/interfaces/Avatar.interface";
import { avatars } from "../../mock/Avatar.mock";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer";

interface Props {
  avatars: Avatar[];
}
const MarketPage = ({ avatars }: Props) => {
  const { isMobile } = useScreenSize();
  return (
    <div className="flex-1 flex flex-col md:flex-row w-full">
      {!isMobile() && <Sidebar />}
      <div className="flex-1 flex flex-col w-full">
        <div className="flex justify-between items-center bg-white">
          <h2 className="hidden md:inline">All Items</h2>
          <div className="flex flex-1 justify-between md:justify-end">
            <SortBySelect />
            {isMobile() && <FilterDrawer />}
          </div>
        </div>
        <AvatarList avatars={avatars} />
      </div>
    </div>
  );
};

export default MarketPage;
