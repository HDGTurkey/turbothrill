import Link from "next/link";
import React, { useState } from "react";

interface MenuData {
  id: number;
  mega_menu: boolean;
  has_dropdown: boolean;
  title: string;
  link: string;
  sub_menus?: {
    title: string;
    link: string;
  }[];
}

interface SidebarContents {
  title: React.ReactNode;
  inst_imgs: string[];
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menu_data: MenuData[] = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: true,
    has_dropdown: false,
    title: "Team",
    link: "/team",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Events",
    link: "/events",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blogs?page=1",
  },
];

const sidebar_contents: SidebarContents = {
  title: <></>,
  inst_imgs: [
    "/assets/img/offcanvas/insta-1.jpg",
    "/assets/img/offcanvas/insta-2.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
  ],
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const { inst_imgs, title } = sidebar_contents;
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <img src="/assets/img/logo/logo-white.png" alt="" />
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li
                    key={i}
                    className={
                      !menu.has_dropdown
                        ? ""
                        : navTitle === menu.title
                        ? "has-droupdown active"
                        : "has-droupdown"
                    }
                  >
                    {menu.has_dropdown && (
                      <button onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}{" "}
                      </button>
                    )}
                    <ul
                      className={
                        navTitle === menu.title ? "sub-menu active" : "sub-menu"
                      }
                    >
                      {menu.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && (
                      <Link href={menu.link}>{menu.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}
      ></div>
    </>
  );
};
export default Sidebar;
