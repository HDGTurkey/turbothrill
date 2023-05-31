import { Disclosure } from "@headlessui/react";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SwitchLang from "../Context/SwitchLang";

import { SwitchTheme } from "../Context/SwitchTheme";

import { useSite } from "../Context/Context";

import Link from "next/link";
import ActiveLink from "./ActiveLink";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props: any) {
  const { theme } = useSite();
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs?page=1" },
  ];
  return (
    <>
      <div
        className={`  sticky top-0 z-50  ${
          theme === "light" ? "bg-gray-200" : "bg-black"
        } `}
      >
        <Disclosure
          as="nav"
          className={`${theme === "light" ? "bg-gray-100" : "bg-gray-800"}`}
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:pr-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                    <Disclosure.Button className="inline-flex min-w-10 items-center justify-center rounded-md p-2 text-black hover:bg-gray-400 hover:text-white ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <MenuOpenIcon
                          className={`block h-6 w-6 ${
                            theme === "light" ? "text-black" : "text-white"
                          } `}
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className={`block h-6 w-6 ${
                            theme === "light" ? "text-black" : "text-white"
                          } `}
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex p-0.5 flex-shrink-0 items-center sm:ml-[50px]">
                      <img
                        src={
                          require("../assets/Images/staticLogo.png").default.src
                        }
                        alt="logo"
                        width="250px"
                      />
                    </div>
                    <div className="hidden sm:ml-6 lg:block">
                      <div className="flex space-x-6 transition-all">
                        {navigation.map((item, i) => (
                          <ActiveLink key={i} href={item.href} activeClassName="bg-[rgb(255,100,11)] text-white px-5" className="hover:bg-[rgb(255,162,133)] transition-all hover:text-white px-auto px-3 py-2 rounded-[3px] text-sm font-medium" >{item.name}</ActiveLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" flex text-lg transition-all max-w-6xl mx-auto">
                    <div className="absolute gap-8 inset-y-0 text-xs right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* Select Language */}
                      <span className="hidden md:block text-sm">
                        <SwitchLang />
                      </span>

                      <span
                        className={`${
                          theme === "light"
                            ? "bg-white"
                            : "bg-gray-700 border-black"
                        } bg-white rounded hidden md:block border `}
                      >
                        <SwitchTheme />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="block lg:hidden ">
                <div className="space-y-1 px-2 pt-2 pb-3 ">
                  {navigation.map((item,i) => (
                    <Link
                    key={i}
                      href={item.href}
                      className={"bg-[rgb(255,100,11)] text-white px-5"}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex items-center gap-3">
                    <SwitchLang />
                    <button
                      type="button"
                      className={`block md:hidden border rounded-lg  ${
                        theme === "light"
                          ? "bg-white"
                          : "bg-gray-700 border-black"
                      } hover:text-white focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                    >
                      <SwitchTheme />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <hr></hr>
      </div>
    </>
  );
}
