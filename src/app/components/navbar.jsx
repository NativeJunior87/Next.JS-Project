import React from 'react';
import style from '../styles/navbar.module.css'
import Link from 'next/link';

function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.Logo_Cover}>
        <img src='lornix-logo' alt='LORNIXE'></img>
      </div>
      <div className={style.links_navi}>
        <Link href='#'>Home</Link>
        <Link href='#'>Releases</Link>
        <Link href='#'>Contact</Link>
        <Link href='#'>About</Link>
      </div>
      <button className={style.support_btn}></button>
    </div>
  )
}

export default Navbar
