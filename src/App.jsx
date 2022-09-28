import React, { useState } from "react"

function App() {

  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [listaEntradas, setListaEntradas] = useState([]);
  


  function adicionarSaldo() {
    setSaldo(Number(entrada) + Number(saldo));
    setListaEntradas([...listaEntradas, entrada]);
    setEntrada("");
  };

  function retirarSaldo() {
    setSaldo(Number(saldo) - Number(saida));
    setListaEntradas([...listaEntradas, saida]);
    setSaida("");
  }

  return (
    <div className="App bg-stone-500 h-screen flex flex-col items-center">
      <header className="h-14 bg-stone-200 flex justify-center items-center w-screen">
        <h1 className="text-lg font-bold uppercase tracking-widest">Finanças</h1>
      </header>

      <div className="container h-3/4 mt-16 flex flex-col justify-center items-center">
        <div className="inputs-wrapper w-3/4 bg-slate-200 p-4 flex justify-center items-center gap-8 h-18">

          <div className="input flex items-center justify-center gap-4">

            <span className="font-semibold">Adicionar entrada</span>
            <input type="number"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              className="rounded-2xl pl-3 pr-3 h-10 outline-none" />
            <button
              onClick={adicionarSaldo}
              className="bg-teal-700 rounded-2xl p-2 text-slate-200 font-semibold">
              Adicionar
            </button>

          </div>

          <div className="input flex items-center justify-center gap-4">

            <span className="font-semibold">Adicionar saída</span>
            <input type="number"
              value={saida}
              onChange={(e) => setSaida(e.target.value)}
              className="rounded-2xl pl-3 pr-3 h-10 outline-none" />
            <button
              onClick={retirarSaldo}
              className="bg-teal-700 rounded-2xl p-2 text-slate-200 font-semibold">Adicionar</button>

          </div>
        </div>

        <div className="lista bg-stone-300 h-3/4 w-3/4 p-10 overflow-auto">
          {listaEntradas.map( item => (
            <li className="list-none mt-2 bg-stone-200 h-10 border-b-4 p-2 gap-3">{item}</li>
          ))}
        </div>

        <div className="saldo bg-slate-200 h-14 w-3/4 flex items-center justify-end pr-14">
          <h2 className="text-lg font-bold">Saldo: {saldo}</h2>
        </div>

      </div>

    </div>
  )
}

export default App;
