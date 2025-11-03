import './style.css'

function Css() {

    return (
        <main>
            <div class="conteudoCartao">
                <h2>CSS (Cascading Style Sheets)</h2>
                <p>É a linguagem usada para definir o estilo de uma página HTML — cores, tamanhos, margens, fontes e layout.</p>
            </div>

            <div class="conteudoCartao">
                <h2>seletor</h2>
                <p>Indica qual elemento HTML será estilizado. Pode ser uma tag, classe, id ou grupo de elementos.</p>
            </div>

            <div class="conteudoCartao">
                <h2>classe (.)</h2>
                <p>Usada para aplicar estilos a vários elementos. Exemplo: .botao color: red;</p>
            </div>

            <div class="conteudoCartao">
                <h2>id (#)</h2>
                <p>Aplica estilo a um elemento único. Exemplo: #titulo font - size: 24px;</p>
            </div>

            <div class="conteudoCartao">
                <h2>color</h2>
                <p>Define a cor do texto. Pode usar nomes, códigos hexadecimais ou RGB. Exemplo: color: blue;</p>
            </div>

            <div class="conteudoCartao">
                <h2>background-color</h2>
                <p>Define a cor de fundo de um elemento. Exemplo: background-color: lightgray;</p>
            </div>

            <div class="conteudoCartao">
                <h2>font-family</h2>
                <p>Escolhe o tipo de fonte do texto. Exemplo: font-family: Arial, sans-serif;</p>
            </div>

            <div class="conteudoCartao">
                <h2>font-size</h2>
                <p>Controla o tamanho do texto. Pode usar px, em, rem ou %. Exemplo: font-size: 18px;</p>
            </div>

            <div class="conteudoCartao">
                <h2>margin</h2>
                <p>Cria espaçamento externo entre o elemento e outros ao redor. Exemplo: margin: 20px;</p>
            </div>

            <div class="conteudoCartao">
                <h2>padding</h2>
                <p>Cria espaçamento interno entre o conteúdo e a borda do elemento. Exemplo: padding: 10px;</p>
            </div>

            <div class="conteudoCartao">
                <h2>border</h2>
                <p>Cria uma borda ao redor do elemento. Exemplo: border: 2px solid black;</p>
            </div>

            <div class="conteudoCartao">
                <h2>border-radius</h2>
                <p>Arredonda os cantos de um elemento. Exemplo: border-radius: 10px;</p>
            </div>

            <div class="conteudoCartao">
                <h2>display</h2>
                <p>Controla como o elemento é exibido (block, inline, flex, grid, etc.). Exemplo: display: flex;</p>
            </div>

            <div class="conteudoCartao">
                <h2>flexbox</h2>
                <p>Um modelo de layout moderno que organiza elementos em linhas ou colunas com alinhamento fácil e responsivo.</p>
            </div>

            <div class="conteudoCartao">
                <h2>grid</h2>
                <p>Outro sistema de layout que divide a página em colunas e linhas, ideal para estruturas complexas.</p>
            </div>

            <div class="conteudoCartao">
                <h2>justify-content</h2>
                <p>Alinha os itens no eixo principal do flexbox. Exemplo: justify-content: center;</p>
            </div>

            <div class="conteudoCartao">
                <h2>align-items</h2>
                <p>Alinha os itens no eixo cruzado do flexbox. Exemplo: align-items: center;</p>
            </div>

            <div class="conteudoCartao">
                <h2>position</h2>
                <p>Define o tipo de posicionamento do elemento (static, relative, absolute, fixed, sticky).</p>
            </div>

            <div class="conteudoCartao">
                <h2>hover</h2>
                <p>É um estado aplicado quando o mouse passa sobre o elemento. Exemplo: button:hover background: blue; .</p>
            </div>

            <div class="conteudoCartao">
                <h2>width</h2>
                <p>Define a largura de um elemento. Pode usar unidades como px, %, vw, etc. Exemplo: width: 100%;</p>
            </div>

            <div class="conteudoCartao">
                <h2>height</h2>
                <p>Define a altura de um elemento. Exemplo: height: 200px;</p>
            </div>

            <div class="conteudoCartao">
                <h2>max-width e min-width</h2>
                <p>Limitam o tamanho máximo e mínimo de um elemento, ajudando na responsividade.</p>
            </div>

            <div class="conteudoCartao">
                <h2>box-shadow</h2>
                <p>Adiciona uma sombra ao redor de um elemento. Exemplo: box-shadow: 2px 2px 10px gray;.</p>
            </div>

            <div class="conteudoCartao">
                <h2>opacity</h2>
                <p>Define a transparência do elemento, variando de 0 (invisível) a 1 (opaco).</p>
            </div>

            <div class="conteudoCartao">
                <h2>transition</h2>
                <p>Cria animações suaves ao mudar propriedades. Exemplo: transition: 0.3s;</p>
            </div>
        </main>
    )
}

export default Css