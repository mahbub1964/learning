import { Avatar } from "@/interfaces/Avatar.interface";
import Image from "next/image";
import Link from "next/link";
import { RxUpload } from "react-icons/rx";
import AddToCartButton from "./components/AddToCartButton/AddToCartButton";
import ContentIndicators from "./components/ContentIndicators/ContentIndicators";
import HeartToggle from "./components/HeartToggle/HeartToggle";
import StarRating from "./components/StarRating/StarRating";

interface Props {
  avatar: Avatar;
}

const AvatarCard = ({ avatar }: Props) => {
  return (
    <Link
      href={`/avatar/${avatar.id}`}
      key={avatar.id}
      className="bg-white rounded-lg flex flex-col hover:shadow-md transition-all duration-75 text-start"
    >
      <div className="relative">
        <Image
          src={avatar.images[0]}
          alt={avatar.title}
          className="rounded-lg"
        />
        <div className="absolute top-2.5 right-2.5">
          <AddToCartButton />
        </div>
      </div>
      <div className="flex flex-col items-stretch p-1 pb-2">
        <h3 className="font-medium hover:text-redAccent">{avatar.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <StarRating rating={avatar.ratings.average} />
            <p className="text-mutedText text-xs">
              {avatar.ratings.average} & {avatar.likes} likes
            </p>
          </div>
          <HeartToggle liked={avatar.liked} />
        </div>
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
        <p className="font-medium text-xl">
          <span className="text-xs">$</span> {avatar.price}
        </p>
        <ContentIndicators content={avatar.content} />
        {avatar.autoUploadSupport && (
          <div className="flex items-center gap-4">
            <p className="font-medium text-xs">
              Auto upload service ready, you can use this avatar within 24 hours
            </p>
            <RxUpload className="text-mutedText w-8 h-8" />
          </div>
        )}
      </div>
    </Link>
  );
};

export default AvatarCard;
