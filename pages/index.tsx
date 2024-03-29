import Image from "next/image";
import { Inter } from "next/font/google";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { useCallback } from "react";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notifications',
    icon: <BsBell />
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {}, [])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-28">

          <div className="text-2xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter />
          </div>

          <div className="mt-2 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-3 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[rgb(29,155,240)] text-lg rounded-full w-full py-2 px-4 font-semibold">Tweet</button>
            </div>
          </div>
        </div>

        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="right-sidebar col-span-3">
          <div className="border p-5 bg-slate-700 rounded-lg">

            <h1 className="my-2 text-2xl">New To Twitter?</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)} />
          </div>
        </div>
      </div>
    </div>
  );
}
