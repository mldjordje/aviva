'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import DarkLightToggle from '@/components/common/DarkLightToggle'; 




interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[]
}


const menu_data: DataType[] = [
  {
    id: 1,
    title: "Početna",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "O nama",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Usluge",
    link: "/nase-usluge",
    has_dropdown: true,
    sub_menu: [
      { id: 1, title: "Hijaluronski fileri", link: "/usluge/hijaluronski-fileri" },
      { id: 2, title: "Botox", link: "/usluge/botox" },
      { id: 3, title: "Skinboosteri", link: "/usluge/skinboosteri" },
      { id: 4, title: "PRP tretman", link: "/usluge/prp" },
      { id: 5, title: "Lipoliza", link: "/usluge/lipoliza" },
      { id: 6, title: "Mezoterapija", link: "/usluge/mezoterapija" },
      { id: 7, title: "Anti-aging", link: "/usluge/anti-aging" },
      { id: 8, title: "Savetovanja", link: "/usluge/savetovanja" },
    ],
  },
  {
    id: 4,
    title: "Stranice",
    link: "#",
    has_dropdown: true,
    sub_menu: [
      { id: 1, title: "Naš tim", link: "/nas-tim" },
      { id: 2, title: "Galerija", link: "/galerija" },
      { id: 3, title: "Recenzije", link: "/recenzije" },
      { id: 4, title: "Česta pitanja", link: "/faq" },
      { id: 5, title: "Blog", link: "/blog" },
    ],
  },
  {
    id: 5,
    title: "Kontakt",
    link: "/contact",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Cenovnik",
    link: "/cenovnik",
    has_dropdown: false,
  },
];




const MobileMenu = ({active, navTitle, openMobileMenu} : any) => {

  return (
    <>
      <ul className="cs_nav_list" style={{ display: active ? "block" : "none" }}>
        {menu_data.map((menu) => (
          <li key={menu.id} className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${navTitle === menu.title ? "active" : ""}`}>
            <Link href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
              <ul className="cs_mega_wrapper" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                {menu.sub_menu?.map((subMenu) => (
                  <li key={subMenu.id}>
                    <Link href={subMenu.link}>{subMenu.title}</Link>
                  </li>
                ))}
              </ul>
              <span onClick={() => openMobileMenu(menu.title)} className={`cs_munu_dropdown_toggle ${navTitle === menu.title ? "active" : ""}`}></span>               
              </>
            )}
          </li>
        ))} 
        <DarkLightToggle />
      </ul>

     
    </>
  );
};

export default MobileMenu;