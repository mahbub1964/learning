import Link from "next/link";
import { RxUpload } from "react-icons/rx";

interface Props {
  price: number;
  isAutoUpload: boolean;
}

const otherAvatars = [
  {
    id: "13",
    title: "Wizard Apprentice - A young wizard with a staff.",
    price: 2.49,
  },
  {
    id: "2",
    title: "Robot Worker - A futuristic worker robot with tools.",
    price: 29.99,
  },
  {
    id: "4",
    title: "Zombie Hunter - A survivor with a shotgun and a backpack.",
    price: 79.99,
  },
];

const PurchaseCard = ({ price, isAutoUpload }: Props) => {
  return (
    <div className="w-full md:w-60 flex flex-col gap-2 rounded-lg border border-neutral-400 p-4 bg-white self-start">
      <p className="font-medium text-3xl flex items-start gap-1">
        <span className="text-base mt-0.5">$</span> {price}
      </p>
      {isAutoUpload && (
        <div className="flex items-center gap-4">
          <p className="font-medium text-xs">
            Auto upload service ready, you can use this avatar within 24 hours
          </p>
          <RxUpload className="text-mutedText w-8 h-8" />
        </div>
      )}
      <h3 className="font-medium text-lg text-green-600">Ready for VR</h3>
      <button className="w-full rounded-full py-1.5 text-sm bg-purpleAccent text-white hover:bg-indigo-800 active:scale-95 transition-all">
        Add to Cart
      </button>
      <button className="w-full rounded-full py-1.5 text-sm bg-violet-600 text-white hover:bg-violet-800 active:scale-95 transition-all">
        Buy Now
      </button>
      <div className="w-full border my-4" />
      <p className="font-semibold text-sm">Add other avatars:</p>
      {otherAvatars.map((item) => {
        return (
          <div key={item.id} className="flex gap-2 items-center">
            <input type="checkbox" className="checkbox checkbox-xs rounded" />
            <Link
              href={`/avatar/${item.id}`}
              className="flex-1 hover:text-redAccent"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
              }}
            >
              {item.title}
            </Link>
            <p className="text-purpleAccent">${item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PurchaseCard;
