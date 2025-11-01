import './style.css'

function Introducao() {

    return (
        <main>
            <h2>Esse é um website explicativo com conhecimentos adquiridos de HTML, CSS, JS, React e NodeJS, e abaixo terá outros conhecimentos:</h2>

            <div className='conteudo'>
                <h1>Criando uma chave SSH</h1>
                <p>As chaves SSH servem para conectar-se a servidores e repositórios de forma segura, sem precisar digitar senha toda vez. Veja como criar a sua:</p>
                <h2>1. Gerar a chave</h2>
                <p>No terminal, execute o comando abaixo (substitua pelo seu e-mail):</p>
                <p>ssh-keygen -t ed25519 -C "seu_email@exemplo.com"</p>
                <h2>2. Ver suas chaves</h2>
                <p>Depois de criada, você terá dois arquivos:</p>
                <p>~/.ssh/id_ed25519 → chave privada (nunca compartilhe)</p>
                <p>~/.ssh/id_ed25519.pub → chave pública (é essa que você envia)</p>
                <h2>3. Iniciar o ssh-agent</h2>
                <p>No terminal, execute o comando abaixo</p>
                <p>$ eval "$(ssh-agent -s)"</p>
                <h2>4. Adicione sua chave SSH privada ao ssh-agent.</h2>
                <p>No terminal, execute o comando abaixo</p>
                <p>ssh-add ~/.ssh/id_ed25519</p>
                <h2>5. Copie a chave pública SSH para a sua área de transferência.</h2>
                <p>No terminal, execute o comando abaixo</p>
                <p>$ cat ~/.ssh/id_ed25519.pub</p>
                <p>Selecione e copie o resultado</p>
                <h2>6. Adicione a chave ao Github</h2>
                <p>Vá em "Settings", "SSH and GPG Keys", e crie a chave ssh</p>
            </div>

            <div className='conteudo'>
                <h1>Criando uma página Vite/React</h1>
                <h2>1. Digite no teminal:</h2>
                <p>npm create vite@latest . --template react</p>
                <h2>2. Se perguntar:</h2>
                <p>Current directory is not empty. Please choose how to proceed:</p>
                <h2>3. Selecione a opção:</h2>
                <p>Remove existing files and continue</p>
                <h2>4. Selecione depois:</h2>
                <p>Select a framework:React</p>
                <h2>5. Depois:</h2>
                <p>Select a variant:JavaScript</p>
                <h2>6. Depois rode/escreva:</h2>
                <p>npm install</p>
                <h2>7. Depois rode/escreva:</h2>
                <p>npm run dev</p>
            </div>

            <div className='conteudo'>
                <h1>Hospedando uma página estática no Github Pages</h1>
                <h2>1. Assistir a um vídeo de um canal muito bacana:</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jai8qrxX_Zo?si=vWxKCGCQU8aHQpVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2>Depois siga os seguintes passos</h2>
                <p>Vá em "Settings", no seu repositório do Github, depois em "Pages", e mude "branch" para "main"</p>
            </div>

            <div className='conteudo'>
                <h1>Hospedando uma página dinâmica no Github Pages</h1>
                <h2>1. Assistir a um vídeo de um canal muito bacana:</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jai8qrxX_Zo?si=vWxKCGCQU8aHQpVp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h1>Hospendando uma página em React, logo após ver o vídeo :)</h1>
                <h2>Depois siga os seguintes passos</h2>
                <p>Crie uma pasta chamada ".github", e depois dentro dela crie uma pasta chamada "workflows", depois crie um arquivo dentro das pastas chamado "build.yml" e copie o seguinte código do seguinte link:</p>
                <p>https://github.com/Mateus-Lipinski/WebSite-Explicativo-2025/blob/main/.github/workflows/build.yml</p>
                <h2>Depois:</h2>
                <p>Vá no arquivo 'package.json' e adicione '"homepage": "nome_do_seu_repositório_aqui"' acima dos "scripts"</p>
                <p>Logo após isso vá em "vite.config.js" e adicione o seguinte código dentro da função "defineConfig": "base: '/nome_do_seu_repositório_aqui/'"</p>
                <p>Depois vá em "Settings", no seu repositório do Github, depois em "Pages", e mude "branch" para "gh-pages"</p>
            </div>

        </main>
    )
}

export default Introducao