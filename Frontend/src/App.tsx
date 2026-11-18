import './App.css'

function App() {
  return (
    <>
      <header className="cabecalho">
        <a className="marca" href="#inicio">
          <span className="marca-icone" aria-hidden="true">✳</span>
          <span>DeBÍ TiRAR<br />MáS FOToS</span>
        </a>

        <nav className="navegacao" aria-label="Navegação principal">
          <a href="#inicio">O álbum</a>
          <a href="#linha-do-tempo">Linha do tempo</a>
          <a href="#faixas">As faixas</a>
          <a href="#porto-rico">Porto Rico</a>
          <a href="#quiz">Quiz</a>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <div className="imagem-capa" aria-hidden="true"></div>
          <div className='texto-capa'>
            <h1>DeBÍ TiRAR MáS FOToS</h1>
            <p>Uma viagem pela memória, pela música e por Porto Rico.</p>
          </div>
        </section>

        <section id="linha-do-tempo">
          <p className='sobretitulo'>CAPÍTULO 01 · A TRAJETÓRIA</p>
          <h2>A jornada do álbum</h2>
          <p>
            Dos primeiros sinais ao reconhecimento global, acompanhe os marcos de 
            <i> DeBÍ TiRAR MáS FOToS</i>
          </p>
        
          <div className='marcos'>
            <article className='marco'>
              <p className='data'>26 de Dezembro de 2024</p>
              <span className='ponto' aria-hidden='true'></span>
              <h3>Anúncio</h3>
              <p>Bad Bunny revela o título e inicia uma nova era.</p>
            </article>
            <article className='marco'>
              <p className='data'>17 de Janeiro de 2025</p>
              <span className='ponto' aria-hidden='true'></span>
              <h3>Lançamento</h3>
              <p>O álbum chega ao mundo, celebrando a identidade e as raízes de Porto Rico.</p>
            </article>
            <article className='marco'>
              <p className='data'>14 de Novembro de 2025</p>
              <span className='ponto' aria-hidden='true'></span>
              <h3>Latin Grammy</h3>
              <p>Reconhecimento de Álbum do Ano no Latin Grammy.</p>
            </article>            
            <article className='marco'>
              <p className='data'>1 de Fevereiro de 2026</p>
              <span className='ponto' aria-hidden='true'></span>
              <h3>Grammy</h3>
              <p>O álbum conquista o prêmio de Álbum do Ano no Grammy.</p>
            </article>
          </div>

        </section>
        <section id="faixas">
          <p className='sobretitulo'>CAPÍTULO 02 · O SOM</p>
          <h2>Faixas em destaque</h2>
          <p>
            Algumas músicas que contam a história, o sentimento e as referências de
            <i> DeBÍ TiRAR MáS FOToS</i>.
          </p>

          <div className='cartoes-faixas'>
            <article className='cartao-faixa cartao-1'>
              <div className='imagem-faixa foto-dtmf'></div>
              <h3>DtMF</h3>
              <p>Memória e saudade</p>
            </article>
            <article className='cartao-faixa cartao-2'>
              <div className='imagem-faixa foto-nuevayol'></div>
              <h3>NUEVAYoL</h3>
              <p>Ilha e Diáspora</p>
            </article>
            <article className='cartao-faixa cartao-3'>
              <div className='imagem-faixa foto-baile-inolvidable'></div>
              <h3>BAILE INoVIDABLE</h3>
              <p>Ritmos que ficam</p>
            </article>
            <article className='cartao-faixa cartao-4'>
              <div className='imagem-faixa foto-turista'></div>
              <h3>TURiSTA</h3>
              <p>Olhar para o caminho</p>
            </article>
            <article className='cartao-faixa cartao-5'>
              <div className='imagem-faixa foto-hawaii'></div>
              <h3>LO QUE LE PASÓ A HAWAii</h3>
              <p>Identidade e território</p>
            </article>
          </div>
        </section>

        <section id="porto-rico"><h2>Porto Rico: o coração do álbum</h2></section>
        <section id="quiz"><h2>O que ficou na memória?</h2></section>
      </main>
    </>
  )
}

export default App
