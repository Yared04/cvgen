import React from "react";
import Image from "next/image";
interface SocialRowProps {
  title: string;
  logoUrl: string;
  url: null | string;
}
interface SocialCardProps {
  linkedIn: string;
  github: string;
  other: string;
}
export const SocialCardRow = ({ title, url, logoUrl }: SocialRowProps) => {
  return (
    <div className="flex my-4">
      <Image
        width={12}
        height={12}
        className="rounded-lg w-14 h-14 my-2"
        src={logoUrl}
        alt="LinkedIn"
      />
      <div className="flex-col mx-2 pl-4 max-w-[200px]">
        <h2 className="m-auto font-semibold">{title}</h2>
        <h2 className="flex text-text-secondary text-sm mb-4 max-w-[200px] overflow-wrap break-all">
          {url}
        </h2>
      </div>
    </div>
  );
};
export const SocialCard = ({ linkedIn, github, other }: SocialCardProps) => {
  return (
    <div className="border-2 p-8 rounded-md">
      <h1 className="font-bold text-xl align-start">Social Links</h1>

      <SocialCardRow
        title={"LinkedIn"}
        logoUrl={
          "https://th.bing.com/th/id/OIP.b5oDvUVU5UVN4cefTJGq3wHaHa?pid=ImgDet&rs=1"
        }
        url={linkedIn}
      ></SocialCardRow>
      <SocialCardRow
        title={"GitHub"}
        logoUrl={"https://pngimg.com/uploads/github/github_PNG40.png"}
        url={github}
      ></SocialCardRow>
      <SocialCardRow
        title={"Other Links"}
        logoUrl={
          "https://icon-library.com/images/link-icon-svg/link-icon-svg-2.jpg"
        }
        url={other}
      ></SocialCardRow>
    </div>
  );
};

//usage - <SocialCard linkedIn={"https://www.linkedin.com/in/natnael-tadele-b3534b230/"} github={"https://github.com/natnael16"} other={""} ></SocialCard>
