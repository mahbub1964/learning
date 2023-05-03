import useScreenSize from "@/hooks/useScreenSize";
import avaTownLogo from "@/public/logo_avatown_manual_1_basi_inverse.png";
import userAvatarImage from "@/public/user-avater.png";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "./components/ActionButton/ActionButton";
import { BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Search from "./components/Search/Search";

const Header = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="bg-header-gradient flex flex-col md:px-4 px-2 py-2">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Link href="/" className="text-white text-sm md:text-xl underline">
          <Image
            src={avaTownLogo}
            alt="ava town"
            width={isMobile() ? 120 : 200}
          />
        </Link>
        <div className="flex gap-3 md:order-last">
          <ActionButton contentCount={3}>
            <IoMdNotificationsOutline className="text-white w-6 h-6" />
          </ActionButton>
          <ActionButton contentCount={1}>
            <BsCart className="text-white w-6 h-6 -ml-1" />
          </ActionButton>
          <ActionButton>
            <div className="bg-white rounded-xl overflow-hidden">
              <Image src={userAvatarImage} alt="profile image" />
            </div>
          </ActionButton>
        </div>
        <div className="w-full md:flex-1 md:max-w-md md:ml-auto">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
