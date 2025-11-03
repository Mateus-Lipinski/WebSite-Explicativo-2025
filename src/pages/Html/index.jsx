import './style.css'

function HTML() {

    return (
        <main>
            <div class="conteudoCartao">
                <h2>HTML (HyperText Markup Language)</h2>
                <p>É a linguagem base para criar páginas da web. Ela define a estrutura e o conteúdo de um site.</p>
            </div>

            <div class="conteudoCartao">
                <h2>head</h2>
                <p>Contém informações invisíveis da página, como o título, metadados e links para arquivos externos (CSS, JS, etc).</p>
            </div>

            <div class="conteudoCartao">
                <h2>body</h2>
                <p>É a parte visível do site, onde ficam os textos, imagens, botões e demais elementos que o usuário vê.</p>
            </div>

            <div class="conteudoCartao">
                <h2>a</h2>
                <p>Cria links para outras páginas ou sites. Exemplo: <code>&lt;a href="https://example.com"&gt;Clique aqui&lt;/a&gt;</code>.</p>
            </div>

            <div class="conteudoCartao">
                <h2>img</h2>
                <p>Serve para inserir imagens na página. Exemplo: <code>&lt;img src="imagem.jpg" alt="Descrição"&gt;</code>.</p>
            </div>

            <div class="conteudoCartao">
                <h2>ul e li</h2>
                <p>Usadas para criar listas não ordenadas (com marcadores). Cada item é representado por <code>&lt;li&gt;</code>.</p>
            </div>

            <div class="conteudoCartao">
                <h2>ol e li</h2>
                <p>Semelhantes às listas não ordenadas, mas numeradas automaticamente.</p>
            </div>

            <div class="conteudoCartao">
                <h2>form</h2>
                <p>Cria formulários para o usuário digitar e enviar informações, como nome, email e senha.</p>
            </div>

            <div class="conteudoCartao">
                <h2>input</h2>
                <p>É um campo dentro de um formulário. Pode ser de vários tipos: texto, senha, email, botão, etc.</p>
            </div>

            <div class="conteudoCartao">
                <h2>button</h2>
                <p>Cria botões interativos, geralmente usados para enviar formulários ou executar ações.</p>
            </div>

            <div class="conteudoCartao">
                <h2>footer</h2>
                <p>Representa o rodapé da página, onde normalmente ficam informações de contato ou direitos autorais.</p>
            </div>

            <div class="conteudoCartao">
                <h2>header</h2>
                <p>Usado para representar o cabeçalho da página ou de uma seção, geralmente contendo o logo e o menu principal.</p>
            </div>

            <div class="conteudoCartao">
                <h2>nav</h2>
                <p>Define uma área de navegação, onde ficam os links para outras partes do site, como “Início”, “Sobre” e “Contato”.</p>
            </div>

            <div class="conteudoCartao">
                <h2>section</h2>
                <p>Indica uma seção temática do conteúdo, ajudando a organizar o layout e a estrutura semântica do site.</p>
            </div>

            <div class="conteudoCartao">
                <h2>main</h2>
                <p>Delimita o conteúdo principal da página, diferenciando-o de menus, rodapés e informações secundárias.</p>
            </div>

            <div class="conteudoCartao">
                <h2>br</h2>
                <p>Cria uma quebra de linha dentro de um texto, sem iniciar um novo parágrafo.</p>
            </div>

            <div class="conteudoCartao">
                <h2>iframe</h2>
                <p>Exibe outro site ou conteúdo dentro da página, como vídeos do YouTube ou mapas do Google.</p>
            </div>

            <div class="conteudoCartao">
                <h2>meta</h2>
                <p>Define informações sobre a página, como idioma, descrição e codificação de caracteres, dentro do &lt;head&gt;.</p>
            </div>

            <div class="conteudoCartao">
                <h2>link</h2>
                <p>Usado para conectar o HTML a arquivos externos, como folhas de estilo CSS ou ícones de aba (favicons).</p>
            </div>

            <div class="conteudoCartao">
                <h2>script</h2>
                <p>Permite adicionar códigos JavaScript que tornam o site interativo e dinâmico.</p>
            </div>
        </main>
    )
}

export default HTML