import { Avatar } from "@/interfaces/Avatar.interface";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";
import { RxUpload } from "react-icons/rx";
import AvatarCard from "../MarketPage/components/AvatarList/components/AvatarCard/AvatarCard";
import HeartToggle from "../MarketPage/components/AvatarList/components/AvatarCard/components/HeartToggle/HeartToggle";
import StarRating from "../MarketPage/components/AvatarList/components/AvatarCard/components/StarRating/StarRating";
import ImageViewer from "./components/ImageViewer/ImageViewer";
import PurchaseCard from "./components/PurchaseCard/PurchaseCard";
import Specifications from "./components/AvatarDescription/components/Specifications/Specifications";
import AvatarDescription from "./components/AvatarDescription/AvatarDescription";
import useScreenSize from "@/hooks/useScreenSize";

interface Props {
  avatar: Avatar;
}

const AvatarPage = ({ avatar }: Props) => {
  const { isMobile } = useScreenSize();
  return (
    <div className="flex flex-col flex-1 px-2 md:px4 pb-10">
      <Link
        href="/"
        className="hidden md:flex items-center text-indigo-800 text-xs mt-2 hover:text-purpleAccent"
      >
        <IoChevronBack /> Back to results
      </Link>
      <div className="flex flex-col md:flex-row flex-1 h-full mt-2 md:mt-5 gap-5">
        <ImageViewer
          images={avatar.images.map((image, index) => ({
            src: image,
            alt: `avatarImage ${index + 1}`,
            id: index.toString(),
          }))}
        />

        <div className="flex-1 flex flex-col order-first md:order-none md:gap-2">
          <h2 className="md:font-medium md:text-2xl text-neutral-900">
            {avatar.title}
          </h2>
          <div className="flex gap-2 items-center">
            <Image
              src={avatar.publisher.image}
              alt={avatar.publisher.name}
              className="w-6 h-6 rounded-full"
            />
            <p className="text-xs font-medium text-mutedText">
              {avatar.publisher.name}
            </p>
          </div>
          <div className="flex justify-between md:flex-col order-first md:order-none gap-1">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <p className="text-mutedText text-xs">
                  {avatar.ratings.average}
                </p>
                <StarRating rating={avatar.ratings.average} />
                <p className="text-mutedText text-xs">
                  {avatar.ratings.count} Ratings
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <HeartToggle liked={avatar.liked} />
              <p className="text-mutedText text-xs order-first md:order-last">
                {avatar.likes}
                <span className="hidden md:inline"> likes</span>
              </p>
            </div>
          </div>
          {!isMobile() && (
            <>
              <p className="font-medium text-3xl flex items-start gap-1">
                <span className="text-base mt-0.5">$</span> {avatar.price}
              </p>
              <AvatarDescription avatar={avatar} />
            </>
          )}
        </div>
        <PurchaseCard
          price={avatar.price}
          isAutoUpload={avatar.autoUploadSupport}
        />
        {isMobile() && <AvatarDescription avatar={avatar} />}
      </div>
    </div>
  );
};

export default AvatarPage;
