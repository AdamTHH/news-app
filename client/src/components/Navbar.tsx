import Subscribe from "./Subscribe";
import { Button } from "./ui/button";
import image from "../assets/company-logo.jpg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer"
import { GiHamburgerMenu } from "react-icons/gi";
import { News } from "../../Interfaces";
import NewsBlock from "./NewsBlock";
import { ScrollArea } from "../components/ui/scroll-area"
import { CiClock1 } from "react-icons/ci";
import { DialogDescription } from "@radix-ui/react-dialog";


const Navbar = ({ popularNews }: { popularNews: News[] }) => {
  const links = [
    { label: "Projects", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Investigations", href: "#" },
    { label: "Tabs", href: "#" },
    { label: "RSS", href: "#" },
  ];


  return (
    <nav id="navbar" className="bg-slate-900 text-white fixed w-full z-50">
      <div className="mx-auto">
        <div className="flex items-center h-16 lg:px-8">
          <div className="flex-shrink-0 flex items-center">
            <LeftDrawer popularNews={popularNews} links={links}/>
            <img className="h-16 w-16" src={image} alt="Logo" />
          </div>
          <div className="hidden md:block ml-auto">
            <div className="flex items-center">

              <span className="text-xs flex text-gray-400 mr-4 mt-1 nofont saira">
                <CiClock1 className="mr-1" />
                {new Date().toLocaleDateString()}
              </span>

              {links.map((link) => (
                <Button variant="link" key={link.label} className="text-sm font-medium text-inherit"><p className="nofont saira">{link.label}</p></Button>
              ))}

              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const LeftDrawer = ({ popularNews, links }: {
  popularNews: News[], links: {
    label: string;
    href: string;
  }[]
}) => {

  return (
    <Drawer modal={false} direction="left" dismissible={false}>
      <DrawerTrigger><GiHamburgerMenu size={25} className="mx-4" /></DrawerTrigger>
      <DialogDescription className="hidden" />
      <DrawerContent>
        <ScrollArea>

          <div className="flex flex-col items-start">
            {links.map((link) => (
              <Button variant="link" key={link.label} className="text-xl font-medium text-inherit mb-2"><p className="nofont saira">{link.label}</p></Button>
            ))}
          </div>
          <Subscribe />

          <DrawerTitle className="m-4 text-2xl">Popular News</DrawerTitle>
          <div className="background-pattern">
            {popularNews.splice(0, 4).map((news, index) => (
              <NewsBlock key={index} section={news.section} date={news.date} likes={news.likes} comments={news.comments}>
                {news.title}
              </NewsBlock>
            ))}
          </div>

          <DrawerClose />

          <DrawerTitle className="m-4 text-2xl">Categories</DrawerTitle>

          {/* AI */}
          {Object.entries(
            popularNews.reduce((acc, news) => {
              acc[news.section] = (acc[news.section] || 0) + 1;
              return acc;
            }, {} as Record<string, number>)
          ).map(([section, count]) => (
            <div key={section} className="flex justify-between items-center py-2 px-4">
              <span className="text-sm font-medium">{section}</span>
              <span className="text-sm text-gray-500">{count}</span>
            </div>
          ))}

        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
export default Navbar;