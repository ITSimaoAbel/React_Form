import './App.css'

export const App = () => {
 

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>REPÚBLICA DE MOÇAMBIQUE</h1>
        <h2>SERVIÇO NACIONAL DE SAÚDE</h2>
        <h3>MAPA DA JUNTA</h3>
      </div>

      <form className="form">
        {/* Input de pesquisa */}
        <div className="input-group">
          <input type="text" placeholder="Pesquisar..." className="search-input" />
          <span className="search-icon">🔍</span>
        </div>

        {/* Campos de input */}
        {Array.from({ length: 9 }, (_, index) => (
          <div className="input-group" key={index}>
            <label>{`Campo ${index + 1}`}</label>
            <input type="text" placeholder={`Digite o campo ${index + 1}`} />
          </div>
        ))}

        {/* Botões */}
        <div className="buttons">
          <button type="submit" className="btn">Enviar</button>
          <button type="reset" className="btn">Limpar</button>
          <button type="button" className="btn">Imprimir</button>
        </div>
      </form>
    </div>
  )
}

