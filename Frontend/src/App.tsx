import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [quizIniciado, setQuizIniciado] = useState(false)
  const [sessaoAtiva, setSessaoAtiva] = useState('inicio')

  useEffect(() => {
  const secoes = document.querySelectorAll('main > section[id]')

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          setSessaoAtiva(entrada.target.id)
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  secoes.forEach((secao) => observador.observe(secao))

  return () => observador.disconnect()
}, [])

  return (
    <>
      <header className="cabecalho">
        <a className="marca" href="#inicio">
          <span className="marca-icone" aria-hidden="true">✳</span>
          <span>DeBÍ TiRAR<br />MáS FOToS</span>
        </a>

        <nav className="navegacao" aria-label="Navegação principal">
            <a href="#inicio" onClick={() => setSessaoAtiva('inicio')}> O álbum {sessaoAtiva === 'inicio' && (
                <span>
                  <img src="/imagens/icone-concho.png" alt="" className="icone-menu concho-inicio" />
                </span>
              )}
            </a>
            <a href="#linha-do-tempo" onClick={() => setSessaoAtiva('linha-do-tempo')}>Linha do tempo {sessaoAtiva === 'linha-do-tempo' && (
              <span>
                <img src="/imagens/icone-concho.png" alt="" className="icone-menu concho-trajetoria" />
              </span>
            )}
            </a>
            <a href="#faixas" onClick={() => setSessaoAtiva('faixas')}>As faixas {sessaoAtiva === 'faixas' && (
              <span>
                <img src="/imagens/icone-concho.png" alt="" className="icone-menu concho-faixas" />
              </span>
            )}
            </a>
            <a href="#porto-rico" onClick={() => setSessaoAtiva('porto-rico')}>Porto Rico {sessaoAtiva === 'porto-rico' && (
              <span>
                <img src="/imagens/icone-concho.png" alt="" className="icone-menu concho-porto-rico" />
              </span>
            )}
            </a>
            <a href="#quiz" onClick={() => setSessaoAtiva('quiz')}>Quiz {sessaoAtiva === 'quiz' && (
              <span>
                <img src="/imagens/icone-concho.png" alt="" className="icone-menu concho-quiz" />
              </span>
            )}
            </a>  
        </nav>
      </header>

      <main>
        {sessaoAtiva === 'inicio' && (
          <img
            src="/imagens/icone-concho.png"
            alt=""
            className="concho-espiando"
          />
        )}
        <section id="inicio">
          <div className="imagem-capa" aria-hidden="true"></div>
          <div className='texto-capa'>
            <h1>DeBÍ TiRAR MáS FOToS</h1>
            <p>Uma viagem pela memória, pela música e por Porto Rico.</p>
          </div>
          <img 
            key={sessaoAtiva === 'inicio' ? 'inicio' : 'outra-secao'}
            src="/imagens/concho-em-pe.png"
            alt=""
            className="concho-capa"
          />
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

        <section id="porto-rico">
          <p className='sobretitulo'>CAPÍTULO 03 · AS RAÍZES</p>
          <h2>Porto Rico: o coração do álbum</h2>
          <div className='conteudo-porto-rico'>          
            <div className='texto-porto-rico'>
              <p>
                  O álbum resgata memórias, sons e imagens da ilha, fala da sua gente,
                  da cultura que resiste e das tensões do presente.
              </p>
              <div className="nota-musica">
                <h3>A bandeira azul-clara em “LA MuDANZA”</h3>
                <p>
                  Na faixa, Bad Bunny menciona a bandeira azul-clara ao falar de Eugenio
                  María de Hostos e do desejo de trazer seus restos mortais de volta a Porto
                  Rico. Essa tonalidade também carrega associações históricas com a
                  identidade porto-riquenha e o movimento independentista.
                </p>
              </div>
            </div>
            <div className='bandeira-porto-rico' aria-label='Bandeira de Porto Rico'>
              <span className='triangulo-bandeira'>
                <span className='estrela-bandeira'>★</span>
              </span>
            </div>
            <div className="capa-album">
              <img 
                src="/imagens/capa-album.webp" 
                alt="Capa do álbum DeBÍ TiRAR MáS FOToS, com duas cadeiras diante de bananeiras" 
              />
            </div>
          </div>
        </section>

        <section id="quiz">
          <p className='sobretitulo'>CAPÍTULO 04 · TESTE SUA MEMÓRIA</p>
          <h2>O que ficou na memória?</h2>
          <p>
                Descubra o quanto você conhece sobre o álbum, as faixas e as referências
                de Porto Rico.
          </p>
          {!quizIniciado ? (
            <div className="convite-quiz">
              <h3>Vamos testar sua memória?</h3>
              <p>Responda algumas perguntas sobre a trajetória e os sons do álbum.</p>
              <button 
              type='button'
              onClick={() => setQuizIniciado(true)}
              >
                Começar o quiz
              </button>
            </div>
          ) : (
            <div className="convite-quiz">
              <h3>Primeira pergunta</h3>
              <p>Em que ano foi lançado DeBÍ TiRAR MáS FOToS?</p>
              <button type="button">2024</button>
              <button type="button">2025</button>
              <button type="button">2026</button>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default App
