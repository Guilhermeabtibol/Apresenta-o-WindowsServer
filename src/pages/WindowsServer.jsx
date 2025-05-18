export default function WindowsServer() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Windows Server: O que é e para que serve
        </h1>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">O que é?</h2>
          <p className="text-gray-700 leading-relaxed">
            O Windows Server é um sistema operacional da Microsoft voltado para servidores. Ele oferece uma plataforma robusta e segura para empresas gerenciarem redes, armazenarem dados e executarem aplicações críticas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Principais funcionalidades</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Controle de permissões e usuários via Active Directory</li>
            <li>Hospedagem de sites e aplicações com IIS</li>
            <li>Gerenciamento de arquivos e impressoras em rede</li>
            <li>Suporte à virtualização com Hyper-V</li>
            <li>Serviços de DNS, DHCP, e VPN</li>
            <li>Políticas de segurança com Group Policy</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Para que serve?</h2>
          <p className="text-gray-700 leading-relaxed">
            Ele é utilizado para estruturar e organizar ambientes corporativos, permitindo que os recursos de rede sejam centralizados, seguros e acessíveis. É ideal para empresas que precisam de controle sobre seus dados e segurança das informações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Por que usar o Windows Server?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Estabilidade e suporte contínuo da Microsoft</li>
            <li>Integração com outras soluções como Office e Azure</li>
            <li>Administração centralizada da rede</li>
            <li>Escalabilidade para diferentes tamanhos de empresas</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
