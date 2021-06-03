export default function Home() {
  return (
    <div className="container">

      <div className="paper-white">
        <div className="ramos-header">
          <img className="ramo-left" src="/ramo-1.png"></img>
          <div className="arranjo-container">
            <img className="arranjo-img" src="/logo-suelenecaio.svg"></img>
          </div>
          <img className="ramo-right" src="/ramo-2.png"></img>
        </div>
        
        

        <h2 className="font-light text-center">Nós amamos porque ele nos amou primeiro... 1 João 4:19</h2>

        <div className="pais-bloco">
          <div className="pais">
            <h2 className="font-light">Valdeci da Silva Leite</h2>
            <h2 className="font-light">Zilma Cavalheiro</h2>
          </div>

          <div className="pais">
            <h2 className="font-light">Valdir Luiz Ribeiro</h2>
            <h2 className="font-light">Juliana dos Santos Oliveira</h2>
          </div>
        </div>

        <div className="arranjo-container">
          <img className="su-caio-img" src="/su-caio.svg"></img>
        </div>

        <h2 className="w-70 font-light text-center">Com a benção de Deus convidam para cerimônia de seu casamento </h2>

        <hr/>
        <div>
          <h2 className="font-light text-center font-32">14 DE AGOSTO DE 2021&nbsp;&nbsp;&nbsp;&nbsp;16h00</h2>
        </div>
        <hr/>

        <h2 className="w-70 font-light text-center">A cerimônia será realizada no Santuário São Francisco de Assis
        - R. Francisco Derosso, 715 - Xaxim, Curitiba - PR, 81710-000</h2>
        <h2 className="w-70 font-light text-center">Os convidados serão recepcionados no Porta Romana Ristorante - Trattoria 
        – Av. Manoel Ribas, 4330 - Santa Felicidade, Curitiba - PR, 82025-160</h2>

        <div className="card-flex w-70">
          <div className="card card-1">
            <img className="img-casal" src="/1.jpeg"></img>
          </div>

          <div className="card card-2">
            <img className="img-casal" src="/2.jpeg"></img>
          </div>
        </div>

        <div className="w-85">
          <h2 className="font-light">Nossa lista de casamento está na plataforma Icasei! Optamos por este formato de presentes no intuito de trazer mais praticidade a todos. Clique no botão abaixo para acessar a lista, agradecemos pelo carinho, ficaremos muito felizes, Deus abençoe!</h2>
        </div>

        <a href="https://sites.icasei.com.br/suelenecaio/home" target="_blank"><button>Acessar lista</button></a>

        <div className="ramos-footer">
          <img className="ramo-left" src="/ramo-3.png"></img>
          <img className="ramo-right" src="/ramo-4.png"></img>
        </div>

      </div>

     

      <style jsx global>{`
        @font-face {
          font-family: 'caramella';
          src: url('/fonts/Caramella_Regular.ttf');
        }
        :root {
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #BFD0C8;
          height: 100%;
          font-weight: 1.3rem;
        }
        .paper-white {
          background: #FFFFFF;
          height: 100%;
          width: 80vw;
          padding: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
        }

        .container {
          height: 100%;
          padding: 0;
          align-items: center;
          flex-direction: column;
          display: flex;
        }

        .font-32 {
          font-size: 1.5rem !important;
          font-weight: 300 !important;
        }

        .card {
          display: flex;
          left: 0px;
          top: 0px;
          background: #FFFFFF;
          box-shadow: 0px 0px 30px rgba(51, 48, 62, 0.2);
          border-radius: 12px;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          padding: 10px;
          max-width: 245px;
        }

        .arranjo-img {
          width: 300px;
        }

        .arranjo-container {
          margin-top: 30px;
          margin-left: 20px;
        }

        .img-casal{
          max-width: 225px
        }

        button {
          background: #10A1DC;
          border-radius: 12px;
          width: 220px;
          height: 50px;
          left: 0px;
          top: 0px;
          border: 0;
          cursor: pointer;
          color: white;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 19px;
          margin: 2rem 0;
        }

        button:hover {    
          filter: drop-shadow(10px 6px 12px #10a1dc);
        }

        .w-85 {
          width: 85%;
        }

        .w-70 {
          width: 70%;
        }

        .text-center {
          text-align: center;
        }

        .font-light {
          font-weight: 200;
          font-size: 24px;
          text-align: center;
          font-family: caramella !important;
          color: #2E324A;
        }

        .pais {
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        .su-caio-img {
          width: 350px;
        }

        .pais-bloco {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: stretch;
          justify-content: space-between;
          align-items: center;
          width: 60%;
        }

        .card-flex {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-content: center;
          margin: 20px 0;
        }

        .ramos-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
          flex-direction: row;
          align-content: space-between;
          align-items: flex-start;
        }

        .ramos-footer {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: space-between;
          width: 100%;
        }

        hr {
          width: 70%;
          border: 1px solid #e99b2438;
        }

        .card-1:hover{
          filter: drop-shadow(0px 10px 20px rgba(89, 174, 126, 0.5));
        }

        .card-2:hover{
          filter: drop-shadow(0px 10px 20px rgba(89, 174, 126, 0.5));
        }
        

        @media (max-width : 379px) {
          .paper-white {
            width: 100vw;
          }
          .arranjo-img {
            width: 100px;
          }
          .ramo-left {
            width: 36px;
          }
          .ramo-right {
            width: 56px;
          }
          .font-light {
            font-size: 12px;
          }

          .pais-bloco {
            width: 90%;
          }
          .su-caio-img {
            width: 150px;
          }
          .font-32 {
            font-size: 12px !important;
          }
          button {
            width: 154px;
            height: 25px;
            font-size: 12px;
          }
          .card-1 {
            margin-bottom: 20px;
          }
        }

        @media (min-width: 380px) and (max-width : 500px) {
          .paper-white {
            width: 100vw;
          }
          .font-light {
            font-size: 17px;
          }
          .arranjo-img {
            width: 200px;
          }

          .pais-bloco {
            width: 80%;
          }
          .su-caio-img {
            width: 250px;
          }
          .font-32 {
            font-size: 16px !important;
          }
          .card-1 {
            margin-bottom: 20px;
          }
        }

        @media (min-width : 501px) and (max-width : 800px) {
          .paper-white {
            width: 90vw;
          }
          .pais-bloco {
            width: 80%;
          }
          .font-light {
            font-size: 17px;
          }
          .su-caio-img {
            width: 300px;
          }
          .font-32 {
            font-size: 20px !important;
          }
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
