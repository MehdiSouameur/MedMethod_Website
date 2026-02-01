"use client";

import { useEffect, useState } from "react";
import { CornerLine } from "./components/CornerLine";
import { HeroLine } from "./components/HeroLine";
import { Reveal } from "./components/Reveal";
import { Underline } from "./components/Underline";
import { RectangleLine } from "./components/RectangleLine";
import { PhoneIcon, MailIcon } from "./components/Icons";

export default function Home() {
  return (
    <main>
      
      
    {/* NAV */}
    <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-3 sm:pt-2 flex items-center justify-between w-full">
        
        {/* Brand */}
        <h1 className="type-logo tracking-[-0.04em]">
          MedMethod.
        </h1>

        {/* CTA */}
        <div className="relative top-[-2px] sm:top-[-4px]">
          <Underline delayMs={1700} thicknessPx={2}>
    <a
      href="#contact"
      className="
        type-logo
        font-medium
        cursor-pointer
        text-sm sm:text-base

        text-black

        transition-transform transition-colors
        duration-150
        ease-out

        hover:scale-[1.04]
        hover:text-[#1AA1FF]

        active:scale-[0.98]
        active:text-[#0095FF]
      "
    >
      Contact
    </a>

          </Underline>
        </div>


    </div>


      {/* HERO */}
      <section className="relative pt-18 overflow-visible">
        <div className="mx-auto max-w-5xl px-6 flex flex-col justify-center items-center">

            <h1 className="type-h1 tracking-[-0.04em] sm:leading-[0.8] text-center sm:max-w-[80%]">
              Sites web réalisés avec rigueur pour votre entreprise.
            </h1>

          <div className="mt-8 h-2 w-[50%] sm:w-[30%]">
              <HeroLine />
          </div>

          <p className="type-body-lg mt-5 sm:max-w-[70%] text-center">
            Une méthode structurée et une base technique solide, au service d’un site clair, agréable à parcourir et pensé pour durer.
          </p>

          <a
            href="#contact"
            className="
              mt-8
              py-2 px-5
              font-bold
              type-body-lg

              text-white
              bg-gradient-to-b from-[#0095FF] to-[#0065AE]
              border-2 border-black

              transition-all
              duration-150
              ease-out

              hover:scale-[1.04]
              hover:from-[#1AA1FF] hover:to-[#0072C4]

              active:scale-[0.98]
              active:text-black
              active:from-[#7CCBFF]
              active:to-[#1AA1FF]

              cursor-pointer
            "
          >
            Discuter de votre projet
          </a>






        </div> 
      </section >
      

      {/* TRUST 1 */}
      <section className="pt-105 sm:pt-80 mx-auto max-w-5xl px-6">
        
        <div className="mx-auto md:mx-0 w-[40%] md:text-left text-center mb-6 md:mb-3">
          <h2 className="type-h1-sm tracking-[-0.04em] text-left">
            Présentation
          </h2>
        </div>

        <div className="flex flex-row gap-[5%] sm:gap-[4%]">

          <CornerLine></CornerLine>

          <div className="w-[70%] md:w-[50%]">
            <p className="type-body-lg font-medium">
              Je travaille comme ingénieur logiciel depuis plusieurs années, en développant des logiciels et des sites web complexes utilisés en conditions réelles.<br></br><br></br>

              Cette expérience me permet d’avoir une grande attention aux détails, à la fois techniques et visuels, afin de concevoir des sites clairs, agréables à utiliser et, surtout, <b><Underline delayMs={2500}>des sites qui marchent.</Underline></b><br></br><br></br>

              Je développe mes sites sur mesure, sans dépendre de solutions toutes faites, afin d’éviter les limites invisibles des outils génériques.
            </p>
          </div>
        </div>

      </section>

      {/* TRUST 2 */}
      <section className="pt-40 mx-auto max-w-5xl px-6">
        
        {/* Title */}
        <div className="mx-auto md:mx-0 w-[40%] md:text-left text-center mb-6 md:mb-3">
          <h2 className="type-h1-sm tracking-[-0.04em] text-left">
            Fondations
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-row gap-[5%] sm:gap-[4%]">
          <CornerLine />

          <div className="w-[70%] md:w-[50%]">
            <h3 className="type-h3 tracking-[-0.04em] font-medium">
              Objectifs business
            </h3>
            <p className="type-body-lg font-normal">
              Des sites conçus pour servir vos objectifs et générer des résultats mesurables.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              Conception sur mesure
            </h3>
            <p className="type-body-lg font-normal">
              Une conception pensée pour votre identité et vos usages, sans modèle imposé.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              Robustesse technique
            </h3>
            <p className="type-body-lg font-normal">
              Une structure technique solide et sécurisée, pensée pour durer dans le temps
            </p>
          </div>
        </div>

      </section>


      {/* TRUST 3 */}
      <section className="pt-40 mx-auto max-w-5xl px-6">
        
        {/* Title */}
        <div className="mx-auto md:mx-0 md:text-left text-center w-full mb-6 md:mb-3">
          <h2 className="type-h1-sm tracking-[-0.04em]">
            Méthode
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-row gap-[5%] sm:gap-[4%]">
          <CornerLine />

          <div className="w-[70%] md:w-[50%]">
            <h3 className="type-h3 font-semibold mb-6">
              Je m'occupe de la complexité. De votre côté, tout reste simple.
            </h3>
            <h3 className="type-h3 tracking-[-0.04em] font-medium">
              1. Clarification du projet
            </h3>
            <p className="type-body-lg font-normal">
              Un premier échange pour aligner les attentes, définir les priorités et assurer un déroulement fluide par la suite.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              2. Conception progressive
            </h3>
            <p className="type-body-lg font-normal">
La conception avance par étapes, avec des retours simples pour valider la structure et le message avant d’aller plus loin.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              3. Développement &amp; mise en ligne
            </h3>
            <p className="type-body-lg font-normal">
              Le site est développé conformément à la conception validée, puis mis en ligne. Des ajustements finaux sont possibles avant validation.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              4. Évolution &amp; maintenance
            </h3>
            <p className="type-body-lg font-normal">
              Le site est entretenu et peut évoluer dans le temps : mises à jour, améliorations et ajout de nouvelles pages selon vos besoins.
            </p>
          </div>
        </div>

      </section>

      {/* CONTACT  */}
      <section className="pt-40 mx-auto max-w-5xl px-6 w-full">

        <div className="flex justify-center items-center w-full">
          <Underline thicknessPx={5} width={0.6}>
            <h2
              id="contact"
              className="scroll-mt-32 type-h2 p-5 text-center tracking-[-0.04em]"
            >
              Un premier design offert, sans engagement
            </h2>
          </Underline>
        </div>



        <div className="
          flex
          flex-col md:flex-row
          justify-center md:justify-start
          items-center md:items-start
          pt-8 md:pt-20
        ">


          <div className="md:w-[50%] w-full">
            <p className="type-body-lg md:w-[90%] w-full">
              Je vous propose une première maquette afin de poser les bases de votre site.
              Si la direction vous convient, nous pouvons ensuite poursuivre le projet.<br></br><br></br>
              Vous pouvez me contacter par <b>email</b> ou par <b>téléphone</b> pour en discuter.
            </p>
          </div>

          <div className="md:w-[50%] w-full mt-5 md:mt-0">
            <RectangleLine thicknessPx={4}>
              <div className="px-4 py-4 space-y-3">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-7 w-7 flex-shrink-0" />
                  <p className="type-body-lg font-semibold">
                    07 83 91 66 28
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <MailIcon className="h-6.5 w-6.5 flex-shrink-0" />
                  <p className="type-body-lg font-semibold">
                    medmethod@gmail.com
                  </p>
                </div>
              </div>
            </RectangleLine>
          </div>
        </div>
      </section>

      <footer className="mt-40 max-w-7xl bg-black text-white">
        <div className="max-w-5xl p-6 pt-15 mx-auto">
          <h1 className="type-logo text-white">
            MedMethod.
          </h1>

          <p className="mt-2 text-white/70 max-w-md">
            Conception et développement de sites web efficaces, pensés pour la performance, la clarté et la durabilité.
          </p>

          <div className="mt-6 text-sm text-white/50">
            © {new Date().getFullYear()} Med Method · Tous droits réservés
          </div>
        </div>
      </footer>



    </main>
  );
}
