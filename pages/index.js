export default function Home() {
  return (
    <div className="container">

      <div className="paper-white">
        <div className="arranjo-container">
          <img className="arranjo-img" src="/logo-suelenecaio.svg"></img>
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
          <img className="arranjo-img" src="/su-caio.svg"></img>
        </div>

        <h2 className="w-70 font-light text-center">Com a benção de Deus convidam para cerimônia de seu casamento </h2>

        <hr className="w-70"></hr>
        <div>
          <h2 className="font-light text-center font-32">14 DE AGOSTO DE 2021&nbsp;&nbsp;&nbsp;&nbsp;16h00</h2>
        </div>
        <hr className="w-70"></hr>

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
          <h2 className="font-light">Nossa lista de casamento está na plataforma EBANX Beep!! Como boa parte da nossa casa está mobiliada, optamos por está forma de presentes! Clique no botão abaixo para acessar a lista... agradecemos pelo carinho, ficaremos muito felizes, Deus abençoe!!</h2>
        </div>
        <button>Acessar lista</button>
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
          padding: 40px 0px 200px 0px;
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
          margin: 25px;
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
          font-size: 16px;
          line-height: 19px;
          margin: 2rem 0;
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
        }

        .pais {
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: center;
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
