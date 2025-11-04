import './style.css'

function React() {

    return (
        <main>
            <div class="conteudoCartao">
                <h2>React.js</h2>
                <p>É uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário (UI) de forma rápida e reativa.</p>
            </div>

            <div class="conteudoCartao">
                <h2>JSX</h2>
                <p>É uma sintaxe parecida com HTML usada dentro do JavaScript.</p>
            </div>

            <div class="conteudoCartao">
                <h2>Componentes</h2>
                <p>São blocos reutilizáveis de código que representam partes da interface.</p>
            </div>

            <div class="conteudoCartao">
                <h2>Props</h2>
                <p>São valores passados para componentes como se fossem "parâmetros".</p>
            </div>

            <div class="conteudoCartao">
                <h2>State (useState)</h2>
                <p>Guarda informações que mudam dentro do componente.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useEffect</h2>
                <p>Executa algo automaticamente quando o componente renderiza ou quando algum valor muda.</p>
            </div>

            <div class="conteudoCartao">
                <h2>fetch / axios</h2>
                <p>Faz requisições a APIs.</p>
            </div>

            <div class="conteudoCartao">
                <h2>Eventos</h2>
                <p>São ações do usuário, como cliques e digitação.</p>
            </div>

            <div class="conteudoCartao">
                <h2>Renderização condicional</h2>
                <p>Mostra algo apenas se uma condição for verdadeira.</p>
            </div>

            <div class="conteudoCartao">
                <h2>Listas (map)</h2>
                <p>Usadas para exibir vários elementos repetidos.</p>
            </div>

            <div class="conteudoCartao">
                <h2>Fragmentos (&lt;&gt;&lt;/&gt;)</h2>
                <p>Permitem agrupar elementos sem adicionar tags extras no HTML.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useRef</h2>
                <p>Cria uma referência a um elemento do DOM.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useContext</h2>
                <p>Permite compartilhar dados entre vários componentes sem precisar passar props manualmente.</p>    
            </div>

            <div class="conteudoCartao">
                <h2>useReducer</h2>
                <p>Alternativa ao useState para lógicas mais complexas.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useMemo</h2>
                <p>Evita recalcular valores desnecessariamente.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useCallback</h2>
                <p>Evita recriar funções em cada renderização.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useNavigate (React Router)</h2>
                <p>Usado para mudar de página.</p>
            </div>

            <div class="conteudoCartao">
                <h2>useParams (React Router)</h2>
                <p>Pega parâmetros da URL.</p>
            </div>
        </main>
    )
}

export default React