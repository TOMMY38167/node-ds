import React, { useEffect, useRef, useState } from "react";
import { ScrollObserver, valueAtPercentage } from "aatjs";
import "./carrusel.css";
import Baires from "../../img/baires.png";
import Boscova from "../../img/boscova.png";
import Fulltex from "../../img/fulltex.png";
import Iaproyectos from "../../img/iaproyectos.png";

const Carrusel = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cards = document.querySelectorAll(".card");

    if (cardsContainer && cards.length > 0) {
      cardsContainer.style.setProperty("--cards-count", cards.length);
      cardsContainer.style.setProperty(
        "--card-height",
        `${cards[0].clientHeight}px`
      );

      Array.from(cards).forEach((card, index) => {
        const offsetTop = 20 + index * 20;
        card.style.paddingTop = `${offsetTop}px`;

        if (index === cards.length - 1) {
          return;
        }

        const toScale = 1 - (cards.length - 1 - index) * 0.1;
        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".card__inner");

        ScrollObserver.Element(nextCard, {
          offsetTop,
          offsetBottom: window.innerHeight - card.clientHeight,
        }).onScroll(({ percentageY }) => {
          cardInner.style.transform = `scale(${valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY,
          })})`;
          cardInner.style.filter = `brightness(${valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY,
          })})`;
          cardInner.style.filter = `blur(${valueAtPercentage({
            from: 0,
            to: 5,
            percentage: percentageY,
          })}px)`;
        });
      });
    }
  }, []);

  return (
    <>
      
      <div  class="cards">
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img class="card__image" src={Baires} alt="" />
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img class="card__image" src={Boscova} alt="" />
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img class="card__image" src={Fulltex} alt="" />
            </div>
          </div>
        </div>
        <div class="card" data-index="0">
          <div class="card__inner">
            <div class="card__image-container">
              <img class="card__image" src={Iaproyectos} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      
    </>
  );
};

export default Carrusel;
