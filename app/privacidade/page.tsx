import CafoLogo from '../CafoLogo';

export const metadata = {
  title: 'Política de Privacidade — Cafo',
  description: 'Política de privacidade e proteção de dados da plataforma Cafo, em conformidade com a LGPD.',
};

const toc = [
  { id: 'cobertura',        label: 'O que esta Política cobre' },
  { id: 'dados',            label: 'Dados Pessoais' },
  { id: 'categorias',       label: 'Categorias de Dados que Coletamos' },
  { id: 'fontes',           label: 'Fontes dos Dados Pessoais' },
  { id: 'finalidades',      label: 'Finalidades do Tratamento' },
  { id: 'compartilhamento', label: 'Como Compartilhamos seus Dados' },
  { id: 'cookies',          label: 'Cookies e Rastreamento' },
  { id: 'seguranca',        label: 'Segurança e Retenção' },
  { id: 'menores',          label: 'Dados de Menores de Idade' },
  { id: 'direitos',         label: 'Direitos do Titular (LGPD)' },
  { id: 'transferencia',    label: 'Transferência Internacional' },
  { id: 'alteracoes',       label: 'Alterações nesta Política' },
  { id: 'contato',          label: 'Informações de Contato' },
];

export default function Privacidade() {
  return (
    <div className="pp-root">
      <header className="pp-header">
        <a href="/" aria-label="Voltar para o início">
          <CafoLogo className="pp-logo" />
        </a>
      </header>

      <div className="pp-layout">
        {/* Sidebar TOC */}
        <aside className="pp-sidebar">
          <div className="pp-sidebar-inner">
            <div className="pp-sidebar-label">Nesta página</div>
            <nav aria-label="Sumário">
              <ol className="pp-toc">
                {toc.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="pp-toc-link">
                      <span className="pp-toc-num">{String(i + 1).padStart(2, '0')}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="pp-main">
          <div className="pp-intro">
            <p className="pp-eyebrow">Privacidade</p>
            <h1 className="pp-title">Política de Privacidade</h1>
            <p className="pp-effective">Vigência: 22 de março de 2026</p>
            <p className="pp-lead">
              Na Cafo Tecnologia Ltda. ("Cafo"), levamos a sua privacidade a sério. Leia esta Política
              para entender como tratamos seus dados pessoais. Ao usar nossos Serviços, você reconhece
              que aceita as práticas descritas abaixo e consente com a coleta, uso e compartilhamento
              de suas informações conforme aqui descrito.
            </p>
            <p className="pp-lead">
              O uso dos Serviços da Cafo está sempre sujeito aos nossos Termos de Serviço. Os termos
              utilizados nesta Política sem definição têm o significado atribuído nos Termos de Serviço.
            </p>
          </div>

          {/* TOC mobile */}
          <div className="pp-toc-mobile">
            <div className="pp-sidebar-label">Sumário</div>
            <ol className="pp-toc">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="pp-toc-link">
                    <span className="pp-toc-num">{String(i + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="pp-divider" />

          {/* Section 1 */}
          <section id="cobertura" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">01</span>
              O que esta Política cobre
            </h2>
            <p>
              Esta Política descreve como tratamos os Dados Pessoais coletados quando você acessa ou usa
              nossos Serviços. "Dados Pessoais" significa qualquer informação que identifique ou se
              relacione a um indivíduo específico, nos termos da Lei Geral de Proteção de Dados Pessoais
              (Lei nº 13.709/2018 — "LGPD"). Esta Política não cobre as práticas de empresas que não
              controlamos.
            </p>
            <p>
              A Cafo atua como <strong>controladora</strong> dos dados pessoais de seus usuários diretos
              (donos e operadores de cafeterias). Pode atuar também como <strong>operadora</strong> dos
              dados de clientes finais das cafeterias que utilizam nossa plataforma — neste caso, a
              cafeteria é a controladora responsável e a Cafo trata os dados conforme suas instruções.
            </p>
          </section>

          {/* Section 2 */}
          <section id="dados" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">02</span>
              Dados Pessoais
            </h2>
            <p>
              Coletamos diferentes categorias de Dados Pessoais dependendo de como você usa a plataforma.
              As seções a seguir detalham as categorias coletadas, suas fontes e as finalidades do
              tratamento.
            </p>
          </section>

          {/* Section 3 */}
          <section id="categorias" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">03</span>
              Categorias de Dados Pessoais que Coletamos
            </h2>

            <div className="pp-data-block">
              <h3>Dados de Perfil e Contato</h3>
              <div className="pp-data-row">
                <div>
                  <div className="pp-data-label">Exemplos de dados coletados</div>
                  <ul>
                    <li>Nome completo</li>
                    <li>E-mail</li>
                    <li>Telefone</li>
                    <li>CNPJ do estabelecimento</li>
                  </ul>
                </div>
                <div>
                  <div className="pp-data-label">Compartilhamos com</div>
                  <ul>
                    <li>Prestadores de serviço</li>
                    <li>Parceiros autorizados pelo usuário</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pp-data-block">
              <h3>Dados de Pagamento</h3>
              <div className="pp-data-row">
                <div>
                  <div className="pp-data-label">Exemplos de dados coletados</div>
                  <ul>
                    <li>Tipo de cartão</li>
                    <li>Últimos 4 dígitos</li>
                    <li>Endereço de cobrança e e-mail de faturamento</li>
                  </ul>
                </div>
                <div>
                  <div className="pp-data-label">Compartilhamos com</div>
                  <ul>
                    <li>Processadores de pagamento (ex.: Stripe)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pp-data-block">
              <h3>Dados de Dispositivo e IP</h3>
              <div className="pp-data-row">
                <div>
                  <div className="pp-data-label">Exemplos de dados coletados</div>
                  <ul>
                    <li>Endereço IP</li>
                    <li>ID do dispositivo</li>
                    <li>Tipo de dispositivo, sistema operacional e navegador</li>
                  </ul>
                </div>
                <div>
                  <div className="pp-data-label">Compartilhamos com</div>
                  <ul>
                    <li>Prestadores de serviço</li>
                    <li>Parceiros autorizados</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pp-data-block">
              <h3>Dados de Uso da Plataforma</h3>
              <div className="pp-data-row">
                <div>
                  <div className="pp-data-label">Exemplos de dados coletados</div>
                  <ul>
                    <li>Histórico de pedidos e transações</li>
                    <li>Interações com funcionalidades do PDV e CRM</li>
                    <li>Métricas de sessão e navegação</li>
                  </ul>
                </div>
                <div>
                  <div className="pp-data-label">Compartilhamos com</div>
                  <ul>
                    <li>Prestadores de serviço</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pp-data-block">
              <h3>Dados de Clientes das Cafeterias (CRM)</h3>
              <div className="pp-data-row">
                <div>
                  <div className="pp-data-label">Exemplos de dados coletados</div>
                  <ul>
                    <li>Nome e telefone do cliente final</li>
                    <li>Histórico de pedidos e preferências</li>
                    <li>Notas e observações cadastradas pelo barista</li>
                  </ul>
                </div>
                <div>
                  <div className="pp-data-label">Compartilhamos com</div>
                  <ul>
                    <li>A cafeteria controladora</li>
                    <li>Integrações autorizadas (ex.: WhatsApp Business API)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pp-data-block">
              <h3>Dados Voluntários</h3>
              <div className="pp-data-row">
                <div>
                  <div className="pp-data-label">Exemplos de dados coletados</div>
                  <ul>
                    <li>Conteúdo de mensagens enviadas ao suporte</li>
                    <li>Informações fornecidas em formulários ou pesquisas</li>
                  </ul>
                </div>
                <div>
                  <div className="pp-data-label">Compartilhamos com</div>
                  <ul>
                    <li>Prestadores de serviço</li>
                    <li>Parceiros comerciais</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="fontes" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">04</span>
              Fontes dos Dados Pessoais
            </h2>
            <p>Coletamos Dados Pessoais das seguintes fontes:</p>
            <h3>Diretamente de você</h3>
            <ul>
              <li>Ao criar uma conta ou usar ferramentas interativas da plataforma</li>
              <li>Ao preencher campos livres, formulários, enquetes ou questionários</li>
              <li>Ao nos enviar e-mails ou entrar em contato de outra forma</li>
              <li>Automaticamente durante o uso dos Serviços, via Cookies e tecnologias similares</li>
              <li>Ao baixar nosso aplicativo móvel ou usar um navegador com localização ativa</li>
            </ul>
            <h3>De terceiros</h3>
            <ul>
              <li>Provedores de analytics que nos ajudam a entender como você interage com a plataforma</li>
              <li>Integrações autorizadas por você (ex.: WhatsApp Business, sistemas de pagamento)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="finalidades" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">05</span>
              Finalidades do Tratamento
            </h2>
            <h3>Prestação, personalização e melhoria dos Serviços</h3>
            <ul>
              <li>Criação e gestão de conta e perfis de usuário</li>
              <li>Processamento de pedidos e transações; faturamento</li>
              <li>Fornecimento dos produtos, serviços ou informações solicitados</li>
              <li>Suporte e assistência técnica</li>
              <li>Melhoria dos Serviços: testes, pesquisa e desenvolvimento de produto</li>
              <li>Personalização de conteúdo com base nas suas preferências</li>
              <li>Proteção contra fraudes, segurança e depuração de erros</li>
            </ul>
            <h3>Marketing dos Serviços</h3>
            <ul>
              <li>Comunicações sobre novidades, funcionalidades e promoções da plataforma</li>
            </ul>
            <h3>Comunicação com você</h3>
            <ul>
              <li>Resposta a correspondências e solicitações recebidas</li>
              <li>Envio de e-mails e notificações de acordo com suas preferências</li>
            </ul>
            <h3>Cumprimento de obrigações legais</h3>
            <ul>
              <li>Conformidade com lei, regulamento ou ordem judicial</li>
              <li>Proteção de direitos, propriedade ou segurança dos usuários ou da Cafo</li>
              <li>Aplicação de contratos e resolução de disputas</li>
            </ul>
            <p>
              Não coletaremos categorias adicionais de Dados Pessoais nem usaremos os dados coletados
              para finalidades materialmente diferentes sem informá-lo previamente.
            </p>
          </section>

          {/* Section 6 */}
          <section id="compartilhamento" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">06</span>
              Como Compartilhamos seus Dados Pessoais
            </h2>
            <p>
              Divulgamos seus Dados Pessoais às categorias de prestadores de serviço e outros
              terceiros listados nesta seção:
            </p>
            <h3>Prestadores de Serviço</h3>
            <p>Terceiros que nos auxiliam na operação da plataforma:</p>
            <ul>
              <li>Provedores de hospedagem, tecnologia e comunicação</li>
              <li>Consultores de segurança e prevenção a fraudes</li>
              <li>Provedores de analytics</li>
              <li>Fornecedores de suporte ao cliente</li>
              <li>Processadores de pagamento</li>
            </ul>
            <p>
              Nosso parceiro de processamento de pagamentos coleta os dados do cartão necessários
              para processar sua transação. Consulte os termos e política de privacidade do provedor
              para mais informações sobre o uso e armazenamento dos seus dados.
            </p>
            <h3>Parceiros Comerciais</h3>
            <p>
              Empresas com as quais oferecemos serviços ou integrações conjuntas, mediante sua
              autorização prévia.
            </p>
            <h3>Terceiros Autorizados por Você</h3>
            <p>
              Sistemas integrados mediante sua autorização, como WhatsApp Business API para o
              CRM da cafeteria ou outros serviços de terceiros que você conectar à plataforma.
            </p>
            <h3>Obrigações Legais</h3>
            <p>
              Podemos compartilhar dados com autoridades públicas quando exigido por lei, regulamento
              ou ordem judicial, ou para proteger direitos e segurança de usuários ou da Cafo.
            </p>
            <h3>Transferência Corporativa</h3>
            <p>
              Em caso de fusão, aquisição, falência ou transação similar, seus dados poderão ser
              transferidos ao terceiro que assumir o controle do negócio. Faremos esforços razoáveis
              para notificá-lo antes que suas informações fiquem sujeitas a diferentes práticas de
              privacidade.
            </p>
            <h3>Dados Não Pessoais</h3>
            <p>
              Podemos criar dados agregados, anonimizados ou pseudonimizados removendo informações
              que identifiquem individualmente o usuário. Esses dados poderão ser compartilhados com
              terceiros para fins comerciais legítimos, sem possibilidade de reidentificação.
            </p>
          </section>

          {/* Section 7 */}
          <section id="cookies" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">07</span>
              Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Os Serviços utilizam cookies e tecnologias similares (pixels, web beacons, JavaScript)
              para reconhecer seu navegador, entender como e quando você usa a plataforma, analisar
              tendências e melhorar a experiência. Cookies são pequenos arquivos de texto armazenados
              no seu dispositivo ao acessar os Serviços.
            </p>
            <p>
              Observe que, em razão do uso de Cookies, os Serviços não suportam requisições
              "Do Not Track" enviadas pelo navegador no momento.
            </p>
            <h3>Cookies Essenciais</h3>
            <p>
              Necessários para o funcionamento dos Serviços — por exemplo, manutenção de sessão
              autenticada. Desativá-los pode tornar certas funcionalidades indisponíveis.
            </p>
            <h3>Cookies Funcionais</h3>
            <p>
              Registram suas escolhas e preferências, permitindo personalização e reconhecimento em
              visitas futuras (ex.: idioma, região).
            </p>
            <h3>Cookies de Desempenho / Analíticos</h3>
            <p>
              Nos permitem entender como os usuários utilizam a plataforma: páginas acessadas, tempo
              de navegação, origem do acesso e desempenho de campanhas.
            </p>
            <p>
              Você pode gerenciar ou desativar cookies nas configurações do seu navegador. Note que
              desativar cookies essenciais pode impactar o funcionamento dos Serviços. Para mais
              informações, visite{' '}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                allaboutcookies.org
              </a>.
            </p>
          </section>

          {/* Section 8 */}
          <section id="seguranca" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">08</span>
              Segurança e Retenção de Dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus Dados Pessoais
              contra acesso não autorizado, perda, alteração ou divulgação indevida, incluindo:
            </p>
            <ul>
              <li>Criptografia em trânsito (TLS) e em repouso</li>
              <li>Controle de acesso com autenticação</li>
              <li>Logs de auditoria e monitoramento contínuo</li>
              <li>Backups regulares e procedimentos de recuperação</li>
            </ul>
            <p>
              Embora nos esforcemos para proteger seus dados, nenhum método de transmissão pela
              internet ou armazenamento é completamente seguro. Você também deve proteger seus dados
              mantendo uma senha segura e encerrando sessões ao finalizar o uso.
            </p>
            <p>
              <strong>Retenção:</strong> Mantemos os Dados Pessoais pelo tempo necessário para cumprir
              as finalidades descritas nesta Política. Em alguns casos, retemos dados por períodos
              maiores para cumprir obrigações legais, resolver disputas ou fazer cumprir acordos.
              Após o encerramento da conta, os dados serão retidos pelo prazo mínimo legalmente
              exigido e então excluídos com segurança. Podemos reter informações em formato anônimo
              ou agregado que não identifiquem você pessoalmente.
            </p>
          </section>

          {/* Section 9 */}
          <section id="menores" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">09</span>
              Dados de Menores de Idade
            </h2>
            <p>
              Os Serviços da Cafo não são destinados a pessoas com menos de 18 anos. Não coletamos
              intencionalmente Dados Pessoais de menores de idade. Se tomarmos conhecimento de coleta
              de dados de um menor, excluiremos essas informações o mais rapidamente possível.
            </p>
            <p>
              Se você acredita que um menor forneceu dados pessoais à Cafo, entre em contato
              pelo e-mail{' '}
              <a href="mailto:privacidade@cafo.app">privacidade@cafo.app</a>.
            </p>
          </section>

          {/* Section 10 */}
          <section id="direitos" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">10</span>
              Direitos do Titular (LGPD)
            </h2>
            <p>
              Nos termos da LGPD (Lei nº 13.709/2018, Cap. III), você possui os seguintes direitos
              em relação aos seus Dados Pessoais. Para exercê-los, entre em contato pelo e-mail{' '}
              <a href="mailto:privacidade@cafo.app">privacidade@cafo.app</a>.
            </p>
            <p>
              Observe que, em alguns casos, poderemos não conseguir atender integralmente sua
              solicitação — por exemplo, quando isso for impraticável, quando colocar em risco
              direitos de terceiros ou quando não for exigido por lei. Em todo caso, responderemos
              informando a decisão. Poderemos solicitar informações adicionais para verificar sua
              identidade.
            </p>
            <div className="pp-rights">
              <div className="pp-right-item">
                <div className="pp-right-title">Confirmação e Acesso</div>
                <p>Confirmar se tratamos seus dados e acessar os dados que possuímos sobre você. Algumas informações também podem ser acessadas diretamente na sua conta.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Correção</div>
                <p>Solicitar a correção de dados incompletos, inexatos ou desatualizados. Você também pode corrigir alguns dados diretamente na sua conta.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Eliminação</div>
                <p>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Revogação do Consentimento</div>
                <p>Revogar o consentimento a qualquer momento. A revogação não afeta tratamentos realizados antes dela. Note que pode ser necessário fornecer novo consentimento para uso de certas funcionalidades.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Portabilidade</div>
                <p>Solicitar uma cópia dos seus dados em formato legível por máquina, ou pedir que os transmitamos a outro fornecedor, onde tecnicamente viável.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Informação sobre Compartilhamento</div>
                <p>Obter informações sobre entidades públicas e privadas com as quais a Cafo compartilhou seus dados.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Oposição</div>
                <p>Opor-se a tratamentos realizados com base em outras hipóteses legais que não o consentimento, em caso de descumprimento da LGPD.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Revisão de Decisões Automatizadas</div>
                <p>Solicitar revisão de decisões tomadas exclusivamente com base em tratamento automatizado de dados que afetem seus interesses.</p>
              </div>
              <div className="pp-right-item">
                <div className="pp-right-title">Petição à ANPD</div>
                <p>Peticionar à Autoridade Nacional de Proteção de Dados (ANPD) em relação ao tratamento dos seus dados pessoais pela Cafo.</p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="transferencia" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">11</span>
              Transferência Internacional de Dados
            </h2>
            <p>
              Os Serviços da Cafo são hospedados e operados prioritariamente no Brasil. Caso
              utilizemos prestadores de serviço internacionais (ex.: serviços de nuvem globais),
              a transferência internacional de dados ocorrerá conforme as hipóteses autorizadas
              pela LGPD, incluindo:
            </p>
            <ul>
              <li>Países ou organismos internacionais com nível de proteção adequado reconhecido pela ANPD</li>
              <li>Cláusulas contratuais padrão aprovadas pela ANPD</li>
              <li>Normas corporativas globais aprovadas pela ANPD</li>
              <li>Consentimento específico e destacado do titular</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section id="alteracoes" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">12</span>
              Alterações nesta Política
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças
              nas nossas práticas, nos Serviços ou na legislação aplicável. Notificaremos sobre
              alterações relevantes por meio de aviso no site, por e-mail ou por notificação dentro
              da plataforma.
            </p>
            <p>
              Observe que, caso você tenha optado por não receber notificações legais por e-mail
              (ou não tenha fornecido seu endereço), os avisos legais ainda regerão seu uso dos
              Serviços e você permanece responsável por lê-los e compreendê-los. O uso dos Serviços
              após alterações na Política constitui aceitação da nova versão.
            </p>
          </section>

          {/* Section 13 */}
          <section id="contato" className="pp-section">
            <h2 className="pp-section-title">
              <span className="pp-section-num">13</span>
              Informações de Contato
            </h2>
            <p>
              Para dúvidas, solicitações ou reclamações relacionadas ao tratamento dos seus dados
              pessoais, entre em contato:
            </p>
            <div className="pp-contact-block">
              <div className="pp-contact-row">
                <span className="pp-contact-label">Empresa</span>
                <span>Cafo Tecnologia Ltda.</span>
              </div>
              <div className="pp-contact-row">
                <span className="pp-contact-label">Endereço</span>
                <span>Rio de Janeiro, RJ, Brasil</span>
              </div>
              <div className="pp-contact-row">
                <span className="pp-contact-label">CNPJ</span>
                <span>[A preencher]</span>
              </div>
              <div className="pp-contact-row">
                <span className="pp-contact-label">E-mail de privacidade</span>
                <a href="mailto:privacidade@cafo.app">privacidade@cafo.app</a>
              </div>
              <div className="pp-contact-row">
                <span className="pp-contact-label">Encarregado (DPO)</span>
                <a href="mailto:privacidade@cafo.app">privacidade@cafo.app</a>
              </div>
            </div>
            <p>
              Responderemos sua solicitação dentro do prazo estabelecido pela LGPD. Em alguns casos,
              poderemos solicitar informações adicionais para verificar sua identidade antes de
              processar o pedido.
            </p>
          </section>

          <div className="pp-footer-note">
            Vigência: 22 de março de 2026 · Cafo Tecnologia Ltda. · Rio de Janeiro, Brasil ·{' '}
            <a href="mailto:privacidade@cafo.app">privacidade@cafo.app</a>
          </div>
        </main>
      </div>
    </div>
  );
}
