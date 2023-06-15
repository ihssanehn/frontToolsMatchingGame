import angular from "./assets/angular.png";
import css from "./assets/css.png";
import electronjs from "./assets/electronjs.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import nextjs from "./assets/nextjs.png";
import ngrx from "./assets/ngrx.svg";
import react from "./assets/react.svg";
import redux from "./assets/redux.png";
import rxjs from "./assets/rxjs.png";
import tailwind from "./assets/tailwind.png";
import ts from "./assets/ts.png";
import vercel from "./assets/vercel.png";
import vite from "./assets/vite.png";
import vue from "./assets/vue.png";
import bootstrap from "./assets/bootstrap.png";

export interface Card {
  id: number;
  content: string;
}
export const cardsDataUnique: Card[] = [
  {
    id: 1,
    content: react,
  },
  {
    id: 2,
    content: angular,
  },
  {
    id: 3,
    content: vue,
  },
  {
    id: 4,
    content: js,
  },
  {
    id: 5,
    content: ts,
  },
  {
    id: 6,
    content: html,
  },
  {
    id: 7,
    content: css,
  },
  {
    id: 8,
    content: bootstrap,
  },
  {
    id: 9,
    content: tailwind,
  },
  {
    id: 10,
    content: redux,
  },
  {
    id: 11,
    content: ngrx,
  },
  {
    id: 12,
    content: rxjs,
  },
  {
    id: 13,
    content: nextjs,
  },
  {
    id: 14,
    content: vite,
  },
  {
    id: 15,
    content: vercel,
  },
  {
    id: 16,
    content: electronjs,
  },
];
