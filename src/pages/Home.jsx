

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-700 text-white text-center py-10 px-4">
        <h1 className="text-4xl font-bold">Windows Server</h1>
        <p className="mt-2 text-lg">Sistema Operacional para Servidores</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">

        {/* Seção 1 - O que é */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">O que é o Windows Server?</h2>
          <p className="mb-4">
            Criado pela Microsoft em 2003, o Windows Server é um sistema operacional projetado especialmente para servidores. Ele otimiza o trabalho das empresas no controle de redes, usuários, arquivos e sistemas de forma segura e centralizada.
          </p>
          <img src="/windows-server.jpg" alt="Windows Server" className="rounded-xl shadow-md w-full" />
        </section>

        {/* Seção 2 - Para que serve */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Para que serve?</h2>
          <p className="mb-2">
            O Windows Server serve para organizar ambientes corporativos, permitindo que recursos sejam compartilhados com segurança. Ele centraliza dados, acessos, usuários, arquivos, e torna a administração da infraestrutura muito mais prática e segura.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Gerenciar usuários e permissões (Active Directory)</li>
            <li>Compartilhar arquivos e impressoras</li>
            <li>Rodar sites e sistemas da empresa</li>
            <li>Automatizar tarefas com políticas de grupo</li>
            <li>Garantir segurança com criptografia e autenticação</li>
          </ul>
        </section>

        {/* Seção 3 - Virtualização */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Virtualização com Hyper-V</h2>
          <p className="mb-2">
            O Hyper-V permite criar servidores virtuais dentro de um único servidor físico. Com isso, é possível rodar diferentes sistemas isoladamente, economizando recursos e aumentando a eficiência da infraestrutura.
          </p>
          <img src="/virtualizacao.jpg" alt="Hyper-V" className="rounded-xl shadow-md w-full" />
        </section>

        {/* Seção 4 - Integração com a Nuvem */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Integração com a Nuvem</h2>
          <p className="mb-2">
            O Windows Server se integra com serviços como o Microsoft Azure, permitindo backups automáticos e escalabilidade híbrida entre infraestrutura local e nuvem.
          </p>
          <img src="/nuvem.jpg" alt="Nuvem" className="rounded-xl shadow-md w-full" />
        </section>

        {/* Seção 5 - Segurança */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Segurança no Windows Server</h2>
          <p className="mb-2">
            O sistema oferece criptografia, autenticação multifator, políticas de segurança e atualizações constantes. Assim, protege os dados e a rede contra ameaças internas e externas.
          </p>
          <img src="/seguranca.jpg" alt="Segurança" className="rounded-xl shadow-md w-full" />
        </section>

        {/* Seção 6 - Comparação com Linux Server */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Por que escolher o Windows Server ao invés do Linux Server?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Integração nativa com Microsoft 365, Teams, Outlook, Azure</li>
            <li>Interface gráfica amigável</li>
            <li>Active Directory pronto para uso</li>
            <li>Suporte técnico oficial da Microsoft</li>
            <li>Documentação padronizada e confiável</li>
            <li>Compatibilidade com softwares empresariais como SQL Server e Exchange</li>
          </ul>
        </section>

      </main>

      <footer className="bg-gray-200 text-center text-sm py-6 text-gray-600">
        © {new Date().getFullYear()} Desenvolvido por Guilherme Abtibol • Turma Engs241N01
      </footer>
    </div>
  );
}
