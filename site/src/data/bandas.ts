export interface Banda {
  nome: string;
  estilo: string;
  descricao: string;
  foto: string;
  instagram: string;
}

export const bandas: Banda[] = [
  {
    nome: "Citheronia",
    estilo: "new metal / crossover",
    descricao:
      "Banda de metal alternativo com influências de nu metal, heavy metal e outros generos. letras profundas, agressivas ou ireverentes.",
    foto: "./images/bandas/banda-1.jpg",
    instagram: "https://www.instagram.com/citheroniaband/",
  },
  {
    nome: "Não confirmado",
    estilo: "Não confirmado",
    descricao:
      "Não confirmado",
    foto: "./images/bandas/banda-2.jpg",
    instagram: "https://www.instagram.com/",
  },
  {
    nome: "Não confirmado",
    estilo: "Não confirmado",
    descricao:
      "Não confirmado",
    foto: "./images/bandas/banda-3.jpg",
    instagram: "https://www.instagram.com/",
  },
  //{
  //  nome: "Não confirmado",
   // estilo: "Não confirmado",
  //  descricao:
  //    "Não confirmado",
  //  foto: "./images/bandas/banda-4.jpg",
   // instagram: "https://www.instagram.com/",
  //},
];
