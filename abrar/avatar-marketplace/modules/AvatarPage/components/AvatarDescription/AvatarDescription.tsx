import { Avatar } from "@/interfaces/Avatar.interface";
import Specifications from "./components/Specifications/Specifications";

interface Props {
  avatar: Avatar;
}
const aboutAvatar = [
  "The elf avatar is slender and tall, with pointed ears, delicate features, and a graceful, fluid movement style. The avatar has long, flowing hair in a muted shade of green, and is dressed in a forest-inspired outfit, complete with leafy accents and intricate embroidery.",
  "The elf avatar draws inspiration from a variety of sources, including classic fantasy literature, nature, and mythology. The avatar's outfit is based on traditional elven clothing, with an added emphasis on natural materials and textures. The muted green color palette is meant to evoke the feeling of a peaceful forest glade.",
  "The creator of this elf avatar is an experienced 3D artist with a passion for character design and storytelling. They have created several other avatars, including other fantasy creatures, and have a dedicated following on social media.",
  "This elf avatar is ideal for role-playing scenarios, as well as for socializing and exploring virtual environments. The avatar's natural grace and fluid movement make it well-suited for dance performances and other artistic endeavors.",
  "Users can customize the elf avatar's outfit and accessories, including the color scheme, hairstyle, and weapon of choice.",
  "The elf avatar is compatible with a variety of virtual reality platforms, including VRChat and Oculus, and can be used with both PC and VR headsets.",
];
const AvatarDescription = ({ avatar }: Props) => {
  return (
    <>
      <div className="w-full border my-4" />
      <Specifications
        specs={{
          Publisher: avatar.publisher.name,
          Style: avatar.category,
          "Polygon Count": avatar.polygonCount.toLocaleString(),
          "Auto Upload Support": avatar.autoUploadSupport
            ? "Supported"
            : "Unsupported",
          "Compatible Platforms": [
            "VRChat",
            "Unity",
            "Oculus",
            "Steam VR",
          ].join(", "),
        }}
      />
      <div className="w-full border my-4" />
      <div>
        <p className="font-bold mb-2">About this avatar:</p>
        <ul className="list-disc ml-4 text-sm">
          {aboutAvatar.map((text, index) => {
            return <li key={index}>{text}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default AvatarDescription;
