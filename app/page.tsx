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
          Med Method.
        </h1>

        {/* CTA */}
        <div className="relative top-[-2px] sm:top-[-4px]">
          <Underline delayMs={1700} thicknessPx={2}>
            <a
              href="#contact"
              className="type-logo font-medium cursor-pointer text-sm sm:text-base"
            >
              Réserver
            </a>
          </Underline>
        </div>


    </div>


      {/* HERO */}
      <section className="relative pt-18 overflow-visible">
        <div className="mx-auto max-w-5xl px-6 flex flex-col justify-center items-center">

            <h1 className="type-h1 tracking-[-0.04em] sm:leading-[0.8] text-center sm:max-w-[80%]">
              Sites internet clairs et fiables, pensés pour durer
            </h1>

          <div className="mt-8 h-2 w-[30%]">
              <HeroLine />
          </div>

          <p className="type-body-lg mt-5 sm:max-w-[70%] text-center">
            Conçus pour soutenir votre activité, avec une méthode simple et une base technique solide.
          </p>

            <a
              href="#contact"
              className="
                mt-8
                py-2 px-5
                font-bold
                text-white
                type-body-lg
                bg-gradient-to-b from-[#0095FF] to-[#0065AE]
                border-2 border-black
                transition-[background,transform] duration-150 ease-out
                hover:bg-gradient-to-b hover:from-[#0089EB] hover:to-[#005C9C]
                active:scale-[0.98]
                cursor-pointer
              "
            >
            Réserver une consultation
          </a>



        </div> 
      </section >
      

      {/* TRUST 1 */}
      <section className="sm:pt-80 pt-72 mx-auto max-w-5xl px-6">
        
        <div className="mx-auto md:mx-0 w-[40%] md:text-left text-center mb-6 md:mb-0">
          <h2 className="type-h1-sm tracking-[-0.04em] text-left">
            Présentation
          </h2>
        </div>

        <div className="flex flex-row">
          <CornerLine></CornerLine>
          <div className="w-[5%] md:w-[10%]" />

          <div className="w-[70%] md:w-[50%]">
            <p className="type-body-lg font-medium">
              Issu du développement backend, avec plusieurs années d'expérience en industrie. Je crée des sites internet orientés résultats, sur mesure, et construits from scratch avec une base technique solide.
            </p>
          </div>
        </div>

      </section>

      {/* TRUST 2 */}
      <section className="pt-40 mx-auto max-w-5xl px-6">
        
        {/* Title */}
        <div className="mx-auto md:mx-0 w-[40%] md:text-left text-center mb-6 md:mb-0">
          <h2 className="type-h1-sm tracking-[-0.04em] text-left">
            Fondations
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-row">
          <CornerLine />

          <div className="w-[5%] md:w-[10%]" />

          <div className="w-[70%] md:w-[50%]">
            <h3 className="type-h3 tracking-[-0.04em] font-medium">
              Valeur business
            </h3>
            <p className="type-body-lg font-normal">
              Des sites conçus pour soutenir vos objectifs et convertir.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              Sur-mesure
            </h3>
            <p className="type-body-lg font-normal">
              Un design adapté à votre marque, sans modèle imposé.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              Robustesse technique
            </h3>
            <p className="type-body-lg font-normal">
              Des sites conçus par un ingénieur pour soutenir vos objectifs et convertir.
            </p>
          </div>
        </div>

      </section>


      {/* TRUST 3 */}
      <section className="pt-40 mx-auto max-w-5xl px-6">
        
        {/* Title */}
        <div className="mx-auto md:mx-0 md:text-left text-center w-full mb-6 md:mb-0">
          <h2 className="type-h1-sm tracking-[-0.04em]">
            Méthode
          </h2>
        </div>



        {/* Content */}
        <div className="flex flex-row">
          <CornerLine />

          <div className="w-[5%] md:w-[10%]" />

          <div className="w-[70%] md:w-[50%]">
            <h3 className="type-h3 tracking-[-0.04em] font-medium">
              1. Cadrage &amp; objectifs
            </h3>
            <p className="type-body-lg font-normal">
              Un premier échange pour comprendre vos besoins, vos contraintes et vos objectifs business.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              2. Conception itérative
            </h3>
            <p className="type-body-lg font-normal">
              Le design est posé progressivement, avec des allers-retours pour affiner la structure, l’esthétique et le message.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              3. Développement &amp; mise en ligne
            </h3>
            <p className="type-body-lg font-normal">
              Le site est développé sur mesure, optimisé techniquement, puis déployé. Des ajustements finaux sont possibles avant validation.
            </p>

            <h3 className="pt-5 type-h3 tracking-[-0.04em] font-medium">
              4. Évolution &amp; maintenance
            </h3>
            <p className="type-body-lg font-normal">
              Le site reste vivant : mises à jour, améliorations continues et ajout de nouvelles pages selon vos besoins.
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
              Obtenez un premier design gratuit pour votre entreprise
            </h2>
          </Underline>
        </div>



        <div className="flex md:flex-row flex-col justify-center items-center md:pt-20 pt-8">

          <div className="md:w-[50%] w-full">
            <p className="type-body-lg md:w-[90%] w-full">
              Envoyez un mail ou appelez sur mon numéro.
              Je vous fait une premiere maquette gratuitement pour votre site. Si vous aimez, on peux continuer.
            </p>
          </div>

          <div className="md:w-[50%] w-full mt-5">
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
            Med Method.
          </h1>

          <p className="mt-2 text-white/70 max-w-md">
            Conception et développement de sites web efficaces, pensés pour la performance, la clarté et la durabilité.
          </p>

          <div className="mt-6 text-sm text-white/50">
            © {new Date().getFullYear()} MedMethod Digital · Tous droits réservés
          </div>
        </div>
      </footer>



    </main>
  );
}
