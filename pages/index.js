export default function Home() {
  return (
    <div className="container">

      <div className="paper-white">
        <div className="arranjo-container">
          <img className="arranjo-img" src="/arranjo.svg"></img>
        </div>

        <div className="arranjo-container">
          <img className="arranjo-img" src="/su-caio.svg"></img>
        </div>

        <div className="card">
          <img className="img-casal" src="/1.jpeg"></img>
        </div>

        <div className="card">
          <img className="img-casal" src="/2.jpeg"></img>
        </div>

        <button>Acessar lista</button>
      </div>

      <style jsx global>{`
        :root {
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
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
        }
        .paper-white {
          background: #FFFFFF;
          height: 100%;
          width: 80vw;
          padding: 40px 0px 80px 0px;
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
          margin: 40px;
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
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
