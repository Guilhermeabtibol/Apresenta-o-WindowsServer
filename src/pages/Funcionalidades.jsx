export default function Funcionalidades() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 text-center sm:text-left">
        Funcionalidades do Windows Server
      </h1>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg">
        <li><strong>Active Directory:</strong> Gerenciamento de usuários e permissões</li>
        <li><strong>Serviços de arquivos e impressão:</strong> Compartilhamento em rede</li>
        <li><strong>IIS:</strong> Hospedagem de sites</li>
        <li><strong>Hyper-V:</strong> Virtualização de servidores</li>
        <li><strong>DHCP e DNS:</strong> Serviços de rede essenciais</li>
      </ul>
    </div>
  );
}
