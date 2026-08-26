// ============================================================================
//   HELL BELLS — LINE-UP DAS BANDAS
//   >>> EDITE ESTE ARQUIVO NO VSCODE PARA ALTERAR AS BANDAS DO SITE <<<
// ----------------------------------------------------------------------------
//   COMO EDITAR:
//
//   1. FOTO ...... Coloque a foto da banda na pasta:
//                    public/images/bandas/
//                  e escreva aqui o caminho começando com "/",
//                  por exemplo:  foto: "/images/bandas/minha-banda.jpg"
//                  (pode ser .jpg, .jpeg ou .png)
//
//   2. NOME ...... Nome da banda (aparece em destaque, na fonte metal).
//
//   3. ESTILO .... Genero musical (aparece como etiqueta acima do nome).
//                  Ex.: "Heavy Metal", "Hard Rock", "Grunge"...
//
//   4. DESCRICAO . Texto livre sobre a banda (2 a 4 linhas ficam otimos).
//
//   5. INSTAGRAM . Link COMPLETO do perfil da banda no Instagram.
//                  Ex.: "https://www.instagram.com/nomedabanda/"
//
//   PARA ADICIONAR UMA BANDA: copie um bloco inteiro (do "{" ate o "},")
//   e cole no final da lista, antes do "];".
//
//   PARA REMOVER UMA BANDA: apague o bloco inteiro dela.
// ============================================================================

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
    foto: "/images/bandas/banda-1.jpg",
    instagram: "https://www.instagram.com/citheroniaband/",
  },
  {
    nome: "Não confirmado",
    estilo: "Não confirmado",
    descricao:
      "Não confirmado",
    foto: "/images/bandas/banda-2.jpg",
    instagram: "https://www.instagram.com/",
  },
  {
    nome: "Não confirmado",
    estilo: "Não confirmado",
    descricao:
      "Não confirmado",
    foto: "/images/bandas/banda-3.jpg",
    instagram: "https://www.instagram.com/",
  },
  //{
  //  nome: "Ruína Elétrica",
   // estilo: "Rock Alternativo / Grunge",
  //  descricao:
  //    "Melodia e barulho na medida certa: do sussurro ao grito em segundos. Uma das vozes mais intensas da cena local, entregando tudo em cima do palco. Troque esta descrição pela bio real da banda e conecte o Instagram para a galera acompanhar os próximos shows.",
  //  foto: "/images/bandas/banda-4.jpg",
   // instagram: "https://www.instagram.com/",
  //},
];
