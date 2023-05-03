import { useState } from "react";
import { Avatar } from "@/interfaces/Avatar.interface";
import styles from "./AvatarList.module.css";
import AvatarCard from "./components/AvatarCard/AvatarCard";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

interface Props {
  avatars: Avatar[];
}

const AvatarList = ({ avatars }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const noOfPages = Math.ceil(avatars.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indesOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = avatars.slice(indesOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className={`${styles.autoGrid} gap-2 p-1`}>
        {currentItems.map((avatar) => {
          return <AvatarCard key={avatar.id} avatar={avatar} />;
        })}
      </div>
      <div className="flex justify-center my-4">
        <PaginationButtons noOfPages={noOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};
export default AvatarList;
