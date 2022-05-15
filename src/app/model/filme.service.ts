import { Injectable } from '@angular/core';
import { EstrelaService } from './estrela.service';
import { Filmes } from './filmes';
@Injectable({
  providedIn: 'root',
})
export class filmeService {
  filmes: Filmes[] = [
    {
      nome: 'DOUTOR ESTRANHO NO MULTIVERSO DA LOUCURA',
      ano: 2022,
      duracao: 126,
      elenco: 'Benedict Cumberbatch, Elizabeth Olsen, Rachel McAdams',
      diretor: 'Sam Raimi',
      imagem: 'https://pbs.twimg.com/media/FQ5vbe6WUAM9vJK.jpg:large',
      nota: 8.6,
      trailer: 'https://www.youtube.com/embed/X23XCFgdh2M?autoplay=1',
    },
    {
      nome: 'Homem-Aranha: Sem Volta Para Casa',
      ano: 2021,
      duracao: 147,
      elenco: 'Tom Holland, Zendaya, Benedict Cumberbatch',
      diretor: 'Jon Watts',
      imagem:
        'https://jovemnerd.com.br/wp-content/uploads/2021/11/Homem-Aranha-02-760x1074.jpg',
      nota: 9.5,
      trailer: 'https://www.youtube.com/embed/ae6w0-kZ3-M?autoplay=1',
    },
    {
      nome: ' Sonic the Hedgehog 2',
      ano: 2022,
      duracao: 100,
      elenco: ' James Marsden , Jim Carrey , Tika Sumpter',
      diretor: 'Jeff Fowler',
      imagem:
        'https://sm.ign.com/ign_br/screenshot/default/sth2-intl-dgtl-payoff-1-sht-bra_b76q.jpg',
      nota: 7.1,
      trailer: 'https://www.youtube.com/embed/FtSL2wCTzhw?autoplay=1',
    },
    {
      nome: 'Uncharted: Fora do Mapa',
      ano: 2022,
      duracao: 116,
      elenco: 'Tom Holland, Mark Wahlberg, Sophia Ali',
      diretor: 'Ruben Fleischer',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-WIL4bffuMfcRGdAy-LLiOLPrAyboTJowxrXdVlbkzymFQJxJVEOBoZSMB9XaieFk-w&usqp=CAU',
      nota: 9.1,
      trailer: 'https://www.youtube.com/embed/hR0U_o7m1MA?autoplay=1',
    },
    {
      nome: 'Velozes e Furiosos 9',
      ano: 2021,
      duracao: 145,
      elenco: 'Vin Diesel, Michelle Rodriguez, Jordana Brewster',
      diretor: 'Justin Lin',
      imagem:
        'https://s2.glbimg.com/uV0n1XJjGtofG30ovgI8LKjb1Pk=/362x536/https://s2.glbimg.com/cmwIK3GmWCgGPEdWpz-bp64iib4=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2022/m/g/lHOiSuTqKOoif7ykIplA/6504593-poster.jpg',
      nota: 8.8,
      trailer: 'https://www.youtube.com/embed/X-V1jcj2Zt8?autoplay=1',
    },
    {
      nome: 'Animais Fantásticos: Os Segredos de Dumbledore',
      ano: 2022,
      duracao: 142,
      elenco: 'Eddie Redmayne, Jude Law, Mads Mikkelsen',
      diretor: 'David Yates',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kaBdBBKMJJhXK9gBHHAzRzo8ub6D9uoOOullxEZr8dRRspPL8PsNwE7WvpvnNAnrbtA&usqp=CAU',
      nota: 8.8,
      trailer: 'https://www.youtube.com/embed/LcCrLZceCmg?autoplay=1',
    },
    {
      nome: 'Cidade Perdida',
      ano: 2022,
      duracao: 112,
      elenco: 'Sandra Bullock, Channing Tatum, Daniel Radcliffe',
      diretor: 'Aaron Nee, Adam Nee',
      imagem:
        'https://br.web.img3.acsta.net/pictures/22/02/10/15/10/4068810.jpg',
      nota: 7,
      trailer: 'https://www.youtube.com/embed/vW5kcXYYQRw?autoplay=1',
    },
    {
      nome: 'A NOITE DO TRIUNFO',
      ano: 2022,
      duracao: 107,
      elenco: 'Kad Merad, David Ayala, Lamine Cissokho',
      diretor: 'Emmanuel Courcol',
      imagem:
        'https://cineclick-static.flixmedia.cloud/480/35ad87a8-804a-4958-aa6e-857a90a1db8d.jpg',
      nota: 7.0,
      trailer: 'https://www.youtube.com/embed/IPNcCA3xDYE?autoplay=1',
    },
    {
      nome: 'O PESO DO TALENTO',
      ano: 2022,
      duracao: 107,
      elenco: 'Nicolas Cage, Pedro Pascal, Alessandra Mastronardi',
      diretor: 'Tom Gormican',
      imagem:
        'https://poltronanerd.com.br/wp-content/uploads/2022/04/Poster-Nacional-O-PESO-DO-TALENTO-64x94cm-scaled.jpg',
      nota: 5,
      trailer: 'https://www.youtube.com/embed/4EFgsHrko_Q?autoplay=1',
    },
    {
      nome: 'THE BATMAN',
      ano: 2022,
      duracao: 185,
      elenco: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
      diretor: 'Matt Reeves',
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwtiWtVap5horxELuyRyDNfzrlKQLYO-SQIyOUst9LwM9Kt4t2RfeTaVilFNSPFK4dmw&usqp=CAU',
      nota: 8.8,
      trailer: 'https://www.youtube.com/embed/HJv4LQxbVEA?autoplay=1',
    },
    {
      nome: 'Eduardo e Mônica',
      ano: 2022,
      duracao: 112,
      elenco: 'Gabriel Leone, Alice Braga, Victor Lamoglia',
      diretor: 'René Sampaio',
      imagem:
        'data:image/jpeg;base64,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',
      nota: 7.7,
      trailer: 'https://www.youtube.com/embed/IoSR5tl1AAU?autoplay=1',
    },
  ];

  constructor(private estrela: EstrelaService) {}
  getFilmes(): Filmes[] {
    this.filmes = this.filmes.map((filme) => {
      filme.estrela = this.estrela.getEstrela(filme);
      return filme;
    });

    return this.filmes;
  }
}
