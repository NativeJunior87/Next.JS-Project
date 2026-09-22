import React from "react";
import Navbar from "./components/navbar";
import ParticleNetwork from "./components/hero";
import HorizontalCards from "./components/HorizontalCards";
import { Herr_Von_Muellerhoff } from "next/font/google";
import style from './styles/herosection.module.css'
const Home = () =>{
  return(
    <>
      <Navbar></Navbar>
      <section className={style.hero}>
        <ParticleNetwork />

        <div className={style.hero_content}>
          <h1 className={style.hero_title}>Building Realities Worth Playing</h1>
          <p className={style.hero_parag}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque maxime aperiam minima ipsa iure? Perspiciatis a, laudantium minima delectus earum nulla! Nobis nam accusamus, deserunt assumenda dolorum deleniti ipsa!</p>
        </div>
      </section>
      <HorizontalCards></HorizontalCards>

    </>
  )
}
export default Home;