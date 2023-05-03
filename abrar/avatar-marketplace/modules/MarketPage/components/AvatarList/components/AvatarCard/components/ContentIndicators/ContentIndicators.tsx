import { useEffect } from "react";

interface Props {
  content: string[];
}

const ContentIndicators = ({ content }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {content.includes("vrChatPcVr") && (
        <>
          <div className="rounded-full w-4 h-4 bg-skyAccent"/> {content.length === 1 && <p className="font-medium text-xs">PC only</p>}
        </>
      )}
    </div>
  );
};

export default ContentIndicators;
