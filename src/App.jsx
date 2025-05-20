import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A20] text-white flex">
      {/* Sidebar de Documentação */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 bg-[#070714] border-r-2 border-[#00FFCC] shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-center mb-8">
            <span className="text-[#00FFCC] text-6xl font-bold text-2xl">&#123;</span>
            <h1 className="text-xl text-[#00FFCC] font-bold mx-2">Windows Server</h1>
            <span className="text-[#00FFCC] text-6xl font-bold text-2xl">&#125;</span>
          </div>
          
          <nav className="space-y-1">
            <div className="mb-4">
              <div className="text-[#00FFCC] text-xs uppercase tracking-wider mb-2 font-bold">Introdução</div>
              <a href="#home" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Início</a>
              <a href="#sobre" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">O que é Windows Server</a>
              <a href="#reflexao" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Reflexão</a>
            </div>
            
            <div className="mb-4">
              <div className="text-[#00FFCC] text-xs uppercase tracking-wider mb-2 font-bold">Conceitos Básicos</div>
              <a href="#objetivos" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Objetivos</a>
            </div>
            
            <div className="mb-4">
              <div className="text-[#00FFCC] text-xs uppercase tracking-wider mb-2 font-bold">Funcionalidades</div>
              <a href="#virtualizacao" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Virtualização</a>
              <a href="#integracao-nuvem" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Integração com Nuvem</a>
              <a href="#seguranca" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Segurança</a>
              <a href="#aplicacoes" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Suporte a Aplicações</a>
            </div>
            
            <div className="mb-4">
              <div className="text-[#00FFCC] text-xs uppercase tracking-wider mb-2 font-bold">Comparações</div>
              <a href="#vantagens" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Vantagens vs Linux</a>
              <a href="#integracao-microsoft" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Integração Microsoft</a>
            </div>
            
            <div className="mb-4">
              <div className="text-[#00FFCC] text-xs uppercase tracking-wider mb-2 font-bold">Referências</div>
              <a href="#versoes" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Versões</a>
              <a href="#contato" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors mb-1 text-sm">Contato</a>
            </div>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header Mobile */}
        <header className="sticky top-0 z-50 bg-[#070714]/90 backdrop-blur-sm p-4 border-b-2 border-[#00FFCC] shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] lg:hidden">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-[#00FFCC] text-6xl font-bold text-2xl">&#123;</span>
              <h1 className="text-xl text-[#00FFCC] font-bold mx-2">Windows Server</h1>
              <span className="text-[#00FFCC] text-6xl font-bold text-2xl">&#125;</span>
            </div>
            <button
              className="text-[#00FFCC] focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Menu Mobile */}
          {menuOpen && (
            <div className="mt-4 space-y-2 bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-4 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <div className="grid grid-cols-2 gap-2">
                <a href="#home" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Início</a>
                <a href="#sobre" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>O que é</a>
                <a href="#reflexao" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Reflexão</a>
                <a href="#objetivos" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Objetivos</a>
                <a href="#virtualizacao" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Virtualização</a>
                <a href="#integracao-nuvem" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Nuvem</a>
                <a href="#seguranca" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Segurança</a>
                <a href="#aplicacoes" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Aplicações</a>
                <a href="#vantagens" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Vantagens</a>
                <a href="#versoes" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Versões</a>
                <a href="#contato" className="block px-3 py-2 rounded-md text-white hover:bg-[#00FFCC]/20 hover:text-[#00FFCC] transition-colors text-sm border border-[#00FFCC]/50" onClick={() => setMenuOpen(false)}>Contato</a>
              </div>
            </div>
          )}
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="py-16 px-4 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center mb-8">
              <span className="text-[#00FFCC] text-6xl font-bold">&#123;</span>
              <div className="mx-4">
                <h2 className="text-5xl md:text-7xl font-bold">Eng. SOFTWARE</h2>
                <p className="text-[#00FFCC] text-xl md:text-3xl mt-2">Apresentação</p>
              </div>
              <span className="text-[#00FFCC] text-6xl font-bold">&#125;</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-[#00FFCC] mb-8">Windows Server</h1>
            
            <div className="relative max-w-xl">
              <div className="absolute inset-0 border-2 border-[#00FFCC] rounded-lg transform rotate-3 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]"></div>
              <div className="relative bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="text-lg mb-4">Apresentação técnica completa sobre o Windows Server, suas funcionalidades, vantagens e aplicações em ambientes empresariais.</p>
                <div className="flex justify-center">
                  <a href="#sobre" className="inline-block px-6 py-3 bg-[#070714] text-[#00FFCC] border-2 border-[#00FFCC] rounded-lg font-bold shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] hover:bg-[#00FFCC] hover:text-[#070714] transition-all duration-300">Iniciar Leitura</a>
                </div>
              </div>
            </div>
            
            <p className="text-right self-end mt-8 text-sm">Turma: Engs241N01</p>
          </section>

          {/* Sobre Section */}
          <section id="sobre" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">01</span>
              <h2 className="text-3xl md:text-4xl font-bold">O que é Windows Server?</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <p className="mb-4">
                Criado pela Microsoft, em 2003, foi feito especialmente para servidores. Com o intuito de otimizar o trabalho das
                empresas no controle de redes, usuários, arquivos e sistemas de forma segura.
              </p>
              <p>
                Com ferramentas voltadas para ambientes profissionais para gerar uma rede organizada.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Características Principais</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Sistema operacional para servidores empresariais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Gerenciamento centralizado de recursos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Controle de acesso e segurança avançados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Suporte a virtualização e serviços em nuvem</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Aplicações Comuns</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Servidores de arquivos e impressão</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Controladores de domínio (Active Directory)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Servidores web e de aplicações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Infraestrutura de rede (DNS, DHCP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Reflexão Section */}
          <section id="reflexao" className="py-16 px-4 max-w-6xl mx-auto bg-[#070714]/30">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">02</span>
              <h2 className="text-3xl md:text-4xl font-bold">Reflexão</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Já parou pra pensar?</h3>
              <p className="mb-4">
                Com o Windows Server instalado, esses servidores podem gerenciar dados, segurança e acesso de centenas de
                usuários ao mesmo tempo.
              </p>
              <div className="border-l-4 border-[#00FFCC] pl-4 my-6">
                <h4 className="text-xl font-bold text-[#00FFCC] mb-2">E se não houvesse o Windows Server?</h4>
                <p>
                  Imagine se não existisse um sistema assim: Sem o Windows Server, cada computador da empresa teria que ser configurado e controlado
                  individualmente, uma tarefa complicada, demorada e cheia de riscos.
                </p>
              </div>
            </div>
          </section>

          {/* Objetivos Section */}
          <section id="objetivos" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">03</span>
              <h2 className="text-3xl md:text-4xl font-bold">Objetivos</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Para que serve?</h3>
              <p className="mb-4">
                Entre as principais características estão a gestão de usuários e grupos, a criação de políticas de segurança,
                a virtualização com o Hyper-V, e o suporte a serviços de rede como DHCP e DNS.
              </p>
              <p>
                Essas funcionalidades permitem que os administradores de TI configurem e mantenham a infraestrutura de TI de forma eficiente
                e segura.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="mb-2">
                  Controlar quem pode acessar os computadores e arquivos, garantindo que só as pessoas autorizadas entrem
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="mb-2">
                  Guardar e compartilhar arquivos para que todos possam usar e trabalhar em equipe facilmente.
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="mb-2">
                  Gerenciar impressoras e outros equipamentos conectados à rede, facilitando o uso por várias pessoas.
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="mb-2">
                  Rodar sites e sistemas da empresa, deixando os serviços disponíveis para funcionários e clientes
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="mb-2">
                  Automatizar tarefas importantes, como backups e atualizações, economizando tempo e evitando erros.
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <p className="mb-2">
                  Garantir a segurança dos dados e da rede, protegendo contra acessos indevidos e ataques.
                </p>
              </div>
            </div>
          </section>

          {/* Virtualização Section */}
          <section id="virtualizacao" className="py-16 px-4 max-w-6xl mx-auto bg-[#070714]/30">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">04</span>
              <h2 className="text-3xl md:text-4xl font-bold">Virtualização</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Windows Server e Virtualização</h3>
              <p className="mb-4">O Hyper-V é o programa do Windows Server que cria e controla esses computadores menores dentro do servidor grande.</p>
              <p>Com o Hyper-V, o Windows Server transforma um servidor físico em vários servidores virtuais menores, que podem rodar sistemas diferentes ao mesmo tempo. Isso ajuda as empresas a economizar, usar melhor os recursos e testar novidades sem riscos.</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">O que é virtualização no Windows Server?</h4>
                <p>A virtualização no Windows Server é a tecnologia que permite criar múltiplas máquinas virtuais dentro de um único servidor físico, possibilitando a execução simultânea de diferentes sistemas operacionais e aplicações isoladas.</p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">Benefícios da Virtualização</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Melhor aproveitamento de recursos de hardware</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Isolamento entre sistemas e aplicações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Facilidade para backup e recuperação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Ambiente de testes seguro e controlado</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Integração com Nuvem Section */}
          <section id="integracao-nuvem" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">05</span>
              <h2 className="text-3xl md:text-4xl font-bold">Integração com Nuvem</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Integração com Serviços em Nuvem</h3>
              <p className="mb-4">O Windows Server também se integra perfeitamente com serviços em nuvem, como o Microsoft Azure. Essa integração permite que as empresas aproveitem o melhor dos dois mundos, combinando a infraestrutura local com a escalabilidade e flexibilidade da nuvem.</p>
              <p>Dá pra fazer backup (cópia de segurança) dos dados na nuvem para proteger contra problemas.</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">O que é Integração com Serviços em Nuvem?</h4>
                <p>Integração com serviços em nuvem é a capacidade do Windows Server de se conectar e operar junto com plataformas de nuvem, como o Azure, permitindo que recursos locais e remotos trabalhem em conjunto para maior eficiência e segurança.</p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">Serviços Integrados</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Azure Active Directory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Azure Backup e Site Recovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Azure File Sync</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Serviços de Migração para Azure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Segurança Section */}
          <section id="seguranca" className="py-16 px-4 max-w-6xl mx-auto bg-[#070714]/30">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">06</span>
              <h2 className="text-3xl md:text-4xl font-bold">Segurança</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Segurança no Windows Server</h3>
              <p className="mb-4">A segurança é uma prioridade no Windows Server, que inclui diversas funcionalidades para proteger dados e sistemas. O sistema oferece criptografia de dados, autenticação multifator e políticas de segurança configuráveis.</p>
              <p>Além disso, o Windows Server é frequentemente atualizado com patches de segurança para proteger contra vulnerabilidades e ameaças emergentes, garantindo que as empresas mantenham um ambiente seguro para suas operações.</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">O que é Segurança no Windows Server?</h4>
                <p>Segurança no Windows Server refere-se às medidas e tecnologias implementadas para proteger o servidor, os dados e as aplicações contra acessos não autorizados, ataques cibernéticos e outras ameaças, mantendo a integridade e a confidencialidade dos recursos da empresa.</p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">Recursos de Segurança</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Windows Defender for Server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>BitLocker para criptografia de discos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Políticas de Grupo (GPO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Windows Firewall Avançado</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Aplicações Section */}
          <section id="aplicacoes" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">07</span>
              <h2 className="text-3xl md:text-4xl font-bold">Suporte a Aplicações</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Suporte a Aplicações Empresariais</h3>
              <p>O Windows Server é compatível com uma ampla gama de aplicações empresariais, incluindo software de ERP, CRM e bancos de dados. Essa compatibilidade permite que as empresas implementem soluções que atendam às suas necessidades específicas, garantindo que as aplicações funcionem de forma eficiente e integrada com a infraestrutura existente.</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">O que é Suporte a Aplicações Empresariais?</h4>
                <p>É a capacidade do Windows Server de oferecer suporte técnico e estrutural a softwares utilizados por empresas, garantindo desempenho, estabilidade e integração com os demais sistemas corporativos.</p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">Aplicações Suportadas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Microsoft SQL Server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Microsoft Exchange Server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>SharePoint Server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Dynamics 365</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Integração Microsoft Section */}
          <section id="integracao-microsoft" className="py-16 px-4 max-w-6xl mx-auto bg-[#070714]/30">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">08</span>
              <h2 className="text-3xl md:text-4xl font-bold">Integração Microsoft</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Integração total com ecossistema Microsoft</h3>
              <p className="mb-4">
                O Windows Server se integra perfeitamente com Microsoft 365, Teams, Outlook, OneDrive e Azure. Para empresas que já usam o pacote Microsoft, essa integração é oficial, rápida e sem complicações.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">Windows Server</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Integração oficial com Microsoft 365, Teams, Outlook, OneDrive e Azure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Suporte direto da Microsoft</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Experiência unificada e sincronizada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Redução de manutenção e configuração</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">Linux Server</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Sem integração nativa com ferramentas Microsoft</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Exige soluções de terceiros ou configurações manuais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Pode gerar instabilidade e maior manutenção</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span>Não possui suporte oficial da Microsoft para essas integrações</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vantagens Section */}
          <section id="vantagens" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">09</span>
              <h2 className="text-3xl md:text-4xl font-bold">Vantagens vs Linux</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Por que o Windows Server se destaca nas empresas?</h3>
              <p>O Windows Server oferece diversas vantagens em comparação com o Linux Server, especialmente em ambientes corporativos que já utilizam outros produtos Microsoft.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">🖥 Interface gráfica fácil de usar</h4>
                <p className="mb-2">
                  O Windows Server tem uma GUI parecida com o Windows normal, facilitando o uso.
                </p>
                <p>
                  No Linux, a maioria dos servidores roda no terminal, o que exige mais prática e conhecimento técnico.
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">🔐 Active Directory (AD)</h4>
                <p className="mb-2">
                  O AD é exclusivo do Windows Server e permite o controle centralizado de usuários, permissões e computadores.
                </p>
                <p>
                  No Linux, é possível imitar usando Samba e outras ferramentas, mas com mais esforço, sem a mesma integração.
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">📚 Documentação oficial e padronizada</h4>
                <p className="mb-2">
                  A Microsoft oferece documentação centralizada, atualizada e confiável.
                </p>
                <p>
                  No Linux, a documentação varia entre distribuições, o que causa confusão e falta de padrão.
                </p>
              </div>
              
              <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                <h4 className="text-xl font-bold mb-4 text-[#00FFCC]">🛠 Suporte oficial e estabilidade empresarial</h4>
                <p className="mb-2">
                  O Windows Server tem suporte técnico da Microsoft, com atualizações frequentes e segurança garantida.
                </p>
                <p className="italic">
                  "Empresas que não podem parar precisam de suporte profissional confiável — o Windows Server entrega isso."
                </p>
              </div>
            </div>
          </section>

          {/* Versões Section */}
          <section id="versoes" className="py-16 px-4 max-w-6xl mx-auto bg-[#070714]/30">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">10</span>
              <h2 className="text-3xl md:text-4xl font-bold">Versões</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC] mb-8">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Versões Populares</h3>
              <p>O Windows Server passou por diversas versões ao longo dos anos, cada uma trazendo melhorias e novos recursos.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  versao: 'Windows Server 2012 R2',
                  desc: 'Introduziu melhorias no Hyper-V e armazenamento.'
                },
                {
                  versao: 'Windows Server 2016',
                  desc: 'Trouxe contêineres e melhor segurança.'
                },
                {
                  versao: 'Windows Server 2019',
                  desc: 'Foco em híbrido, segurança e infraestrutura.'
                },
                {
                  versao: 'Windows Server 2022',
                  desc: 'Segurança avançada e melhor integração com Azure.'
                }
              ].map((item) => (
                <div key={item.versao} className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-0 overflow-hidden shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
                  <div className="p-4 bg-[#00FFCC] text-[#070714] font-bold text-center">
                    {item.versao}
                  </div>
                  <div className="p-4">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contato Section */}
          <section id="contato" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="flex items-center mb-8 pb-4 border-b border-[#00FFCC]">
              <span className="text-[#00FFCC] font-mono text-xl md:text-2xl font-bold mr-4 bg-[#070714] px-3 py-1 rounded-lg border border-[#00FFCC]">11</span>
              <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
            </div>
            
            <div className="bg-[#070714] border-2 border-[#00FFCC] rounded-lg p-6 shadow-[0_0_5px_#00FFCC,0_0_10px_#00FFCC]">
              <h3 className="text-2xl font-bold mb-4 text-[#00FFCC]">Referências e Contato</h3>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2">Fontes de Pesquisa:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Programaê. O que é Windows Server e para que ele é utilizado?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>YouTube – Tecnologia Simplificada. Para que serve o Windows Server?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Microsoft. Página oficial do Windows Server.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Canaltech. O que é Windows Server?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FFCC] mr-2">→</span>
                    <span>Columbia TI. O que é o Windows Server?</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t-2 border-[#00FFCC]/30 pt-6">
                <h4 className="text-xl font-bold mb-4">Desenvolvido por:</h4>
                <p>Guilherme Abtibol</p>
                <p className="mt-2">Email: gui@gmail.com.com</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-4 bg-[#070714] border-t-2 border-[#00FFCC]">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
              <div className="flex items-center mb-4">
                <span className="text-[#00FFCC] text-6xl font-bold">&#123;</span>
                <h2 className="text-3xl font-bold mx-2">Eng. SOFTWARE</h2>
                <span className="text-[#00FFCC] text-6xl font-bold">&#125;</span>
              </div>
              <h3 className="text-2xl font-bold text-[#00FFCC] mb-4">Obrigado pela atenção!</h3>
              <p className="text-sm">Turma: Engs241N01</p>
              <p className="text-sm mt-4">© {new Date().getFullYear()} Desenvolvido por Guilherme Abtibol</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
