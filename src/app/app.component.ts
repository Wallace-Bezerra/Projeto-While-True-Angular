import { Component, SecurityContext, VERSION } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { filmeService } from './model/filme.service';
import { Filmes } from './model/filmes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filmeEscolhido: Filmes;
  trailer: SafeResourceUrl;
  filmes: Filmes[];
  sanitizer: DomSanitizer;

  abrir: string = 'botao-trailer';
  // video: string = 'video-none';

  constructor(filme: filmeService, sanitizer: DomSanitizer) {
    this.filmes = filme.getFilmes();
    this.sanitizer = sanitizer;
  }
  ngOnInit() {}

  clicouImagem(filme: Filmes) {
    this.filmeEscolhido = filme;
    this.trailer = null;
  }

  fecharFilme() {
    this.filmeEscolhido = null;
    this.filmeEscolhido.trailer = null;
  }

  abrirTrailer() {
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.filmeEscolhido.trailer
    );
    // this.video = 'video';
  }
}
