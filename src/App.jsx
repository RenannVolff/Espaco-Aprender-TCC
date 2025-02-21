import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <img src="/logo.png" alt="Espaço Aprender" className="logo" />
        <h1>Espaço Aprender</h1>
      </header>

      {/* Seção sobre os recursos */}
      <section className="recursos elevacao">
        <h2>Principais Recursos</h2>
        <p>Conheça mais sobre ABA, Neuropsicopedagogia, Psicomotricidade e Alunos Especiais.</p>
      </section>

      {/* Citações */}
      <section className="citacoes panoramica">
        <h2>Citações de Especialistas</h2>
        <div className="citacao-card">“A educação inclusiva é um direito, não um privilégio.”</div>
        <div className="citacao-card">“Cada aluno aprende de maneira única, e devemos respeitar isso.”</div>
      </section>

      {/* Apresentação dos profissionais */}
      <section className="profissionais panoramica-horizontal">
        <h2>Nossos Profissionais</h2>
        <div className="profissionais-container">
          <div className="profissional-card left">
            <img src="/profissional1.jpg" alt="Profissional" className="profissional-foto" />
            <div className="profissional-info">
              <h3>Nome do Profissional</h3>
              <p>Especialista em ...</p>
            </div>
          </div>
          <div className="profissional-card right">
            <img src="/profissional2.jpg" alt="Profissional" className="profissional-foto" />
            <div className="profissional-info">
              <h3>Nome do Profissional</h3>
              <p>Especialista em ...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="contato formulario-impressionante">
        <h2>Entre em Contato</h2>
        <form>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;