'use client';

import { useState } from 'react';
import CafoLogo from './CafoLogo';
import WaitlistModal from './WaitlistModal';

const weekData = [
  { day: 'Seg', label: 'Segunda', revenue: 890,  clients: 27, avg: '32,96', inactive: 8,  novos: 1, delta: '−28% vs média', deltaColor: '#e07050' },
  { day: 'Ter', label: 'Terça',   revenue: 1160, clients: 34, avg: '34,12', inactive: 11, novos: 2, delta: '+30% vs seg',   deltaColor: '#2d8a5a' },
  { day: 'Qua', label: 'Quarta',  revenue: 1330, clients: 39, avg: '34,10', inactive: 12, novos: 3, delta: '+15% vs ter',   deltaColor: '#2d8a5a' },
  { day: 'Qui', label: 'Quinta',  revenue: 1250, clients: 36, avg: '34,72', inactive: 14, novos: 2, delta: '−6% vs qua',    deltaColor: '#e07050' },
  { day: 'Sex', label: 'Sexta',   revenue: 2080, clients: 57, avg: '36,49', inactive: 18, novos: 7, delta: '+66% vs qui',   deltaColor: '#2d8a5a' },
  { day: 'Sáb', label: 'Sábado',  revenue: 1240, clients: 38, avg: '32,63', inactive: 14, novos: 3, delta: '+8% vs ontem',  deltaColor: '#2d8a5a' },
  { day: 'Dom', label: 'Domingo', revenue: 750,  clients: 23, avg: '32,61', inactive: 6,  novos: 1, delta: '−40% vs sáb',   deltaColor: '#e07050' },
];

const dayInsights = [
  'Segunda está 28% abaixo da média. Uma promoção às 7h–9h pode gerar +R$ 1.200/mês.',
  'Terça na média histórica. Um combo de tarde pode aumentar o ticket médio.',
  'Quarta é seu 3º melhor dia — prepare o estoque com antecedência.',
  'Quinta sólido. Lance uma campanha para trazer mais clientes na sexta.',
  'Sexta é seu melhor dia (+66% vs seg). Garanta insumos para o final de semana.',
  'Sábado acima da média. 38 clientes, 3 novos registrados hoje.',
  'Domingo o mais tranquilo da semana — ideal para manutenção e treinamento.',
];

const MAX_REVENUE = Math.max(...weekData.map(d => d.revenue));
const TODAY = 5;

export default function Home() {
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [modalOpen, setModalOpen] = useState(false);
  const sel = weekData[selectedDay];
  const openModal = (e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true); };

  return (
    <>
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HERO WRAPPER — nav flutuante sobre a imagem */}
      <div className="hero-wrap">
        <nav className="nav-container">
          <a href="#" className="nav-logo"><CafoLogo /></a>
          <div className="nav-ctas">
            <a href="#" onClick={openModal} className="btn btn-solid">Começar grátis</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-eyebrow">Plataforma para cafeterias</div>

          <h1>
            A plataforma para gestão de cafeterias,<br />
            do <em>barista</em> ao <em>dono.</em>
          </h1>

          <p className="hero-sub">
            Finalmente — a tecnologia que faltava no mundo do café.
            Uma plataforma integrada do barista à gestão, com IA, CRM
            e crescimento para o negócio em café.
          </p>

          <div className="hero-ctas">
            <a href="#" onClick={openModal} className="btn btn-solid btn-lg">Começar grátis →</a>
            <a href="#produto" className="btn btn-outline-white btn-lg">Ver o produto</a>
          </div>

          <p className="hero-footnote"><strong>Sem cartão de crédito</strong> · <strong>Setup em 10 minutos</strong></p>
        </section>
      </div>

      {/* FEATURES */}
      <section id="produto" className="feat-section">
        <div className="wrap">
          <div className="feat-header reveal">
            <span className="eyebrow">Do pedido ao relacionamento</span>
            <h2 className="s-h2">
              Cafo traz para o mundo do café<br />
              inteligência artificial, <em>CRM</em><br />
              e crescimento para o negócio.
            </h2>
          </div>

          <div className="feat-rows">
            {/* Row 1: PDV + Perfil do cliente */}
            <div className="feat-row reveal">
              <div className="feat-row-items">
                <div className="feat-item">
                  <div className="feat-num">01</div>
                  <div className="feat-item-title">Barista registra o pedido</div>
                  <div className="feat-item-body">
                    PDV rápido com botões grandes, modificadores na primeira tela.
                    Do pedido ao pagamento em menos de 60 segundos — mesmo no pico das 9h.
                    Funciona offline.
                  </div>
                </div>
                <div className="feat-item">
                  <div className="feat-num">02</div>
                  <div className="feat-item-title">Conheça seu cliente</div>
                  <div className="feat-item-body">
                    Nome, bebida preferida, frequência, histórico e notas pessoais — salvos
                    automaticamente. O barista novo chega e já sabe quem é o João.
                    O cliente se sente em casa.
                  </div>
                </div>
              </div>
              <div className="feat-row-img">
                <img src="/cafo-product-1.png" alt="Interface do PDV e perfil de cliente no Cafo" />
              </div>
            </div>

            {/* Row 2: CRM */}
            <div className="feat-row reveal" style={{ transitionDelay: '.1s' }}>
              <div className="feat-row-img">
                <img src="/cafo-product-2.png" alt="CRM do Cafo" />
              </div>
              <div className="feat-row-items">
                <div className="feat-item">
                  <div className="feat-num">03</div>
                  <div className="feat-item-title">CRM em 1 clique</div>
                  <div className="feat-item-body">
                    Cliente sumiu há 3 semanas? Um toque envia mensagem via WhatsApp,
                    personalizada. Segmentação automática: VIPs, inativos, aniversariantes,
                    novos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARISTA / STORYTELLING */}
      <section className="barista-section">
        <div className="wrap">
          <div className="barista-header reveal">
            <span className="eyebrow">Comunidade</span>
            <h2 className="s-h2">Do balcão, conheça<br />quem faz o <em>café.</em></h2>
            <p className="s-lead">
              Baristas agora têm um sistema que fala a língua do café.
              Feito por quem entende o que acontece atrás do balcão.
            </p>
          </div>

          <div className="barista-video reveal" style={{ transitionDelay: '.08s' }}>
            <div className="video-frame">
              <div className="video-bg-text">Onde o café<br />te conhece.</div>
              <div className="play-btn" role="button" aria-label="Assistir vídeo">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div className="video-label">
                <div className="video-label-title">Um dia atrás do balcão</div>
                <div className="video-label-sub">Balcão por Cafo · EP 01 · 4 min</div>
              </div>
            </div>
          </div>

          <div className="social-cards reveal" style={{ transitionDelay: '.16s' }}>
            <div className="social-card">
              <div className="social-top">
                <div className="social-ava" style={{ background: '#FFF0EB', color: '#FB4D00' }}>LM</div>
                <div>
                  <div className="social-name">Lucas Mendes</div>
                  <div className="social-role">Head Barista · Café Origem, SP</div>
                </div>
                <div className="social-stars">★★★★★</div>
              </div>
              <p className="social-q">
                "Primeiro dia usando, minha cliente chegou e o sistema já mostrou o pedido dela.
                Ela perguntou como eu sabia. Disse que o café lembrava dela."
              </p>
            </div>

            <div className="social-card">
              <div className="social-top">
                <div className="social-ava" style={{ background: '#EDFAF3', color: '#2d8a5a' }}>AR</div>
                <div>
                  <div className="social-name">Amanda Ramos</div>
                  <div className="social-role">Dona · A Bela Cafeteria, RJ</div>
                </div>
                <div className="social-stars">★★★★★</div>
              </div>
              <p className="social-q">
                "Mandei mensagem pra 22 inativos. Em uma semana, 7 voltaram.
                Pagou a assinatura inteira e ainda me deu dado sobre o que estava errado."
              </p>
            </div>

            <div className="social-card">
              <div className="social-top">
                <div className="social-ava" style={{ background: '#EEF3FF', color: '#4060c8' }}>CP</div>
                <div>
                  <div className="social-name">Carlos Pinto</div>
                  <div className="social-role">Dono · Café Veredas, BH</div>
                </div>
                <div className="social-stars">★★★★★</div>
              </div>
              <p className="social-q">
                "Nunca soube que segunda era 30% mais fraca. O Cafo mostrou.
                Criei uma promoção. Segunda virou meu segundo melhor dia da semana."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ia" className="ai-section">
        <div className="wrap">
          <div className="ai-layout">
            <div className="ai-copy reveal">
              <span className="eyebrow">Para quem vive o café</span>
              <h2 className="s-h2">
                Você acorda cedo, trabalha até fechar.
                A segunda-feira fraca <em>só aparece na conta do mês.</em>
              </h2>
              <p className="s-lead">
                A maioria dos donos toma decisão por instinto — e descobre
                o problema tarde demais. O Cafo monitora o negócio em
                tempo real e avisa antes que o problema apareça.
              </p>

              <div className="agents-grid">
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">📊</div>
                  <div>
                    <div className="agent-name">Agente financeiro</div>
                    <div className="agent-desc">"Hoje você faturou R$ 1.240. Sexta tende a ser 40% maior — você está preparado?"</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">📦</div>
                  <div>
                    <div className="agent-name">Agente de estoque</div>
                    <div className="agent-desc">"Seu café especial acaba em 3 dias. Quer que eu sugira o pedido agora?"</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">👥</div>
                  <div>
                    <div className="agent-name">Agente de CRM</div>
                    <div className="agent-desc">"14 clientes não voltam há 3 semanas. Quer enviar uma mensagem pra eles?"</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">⚡</div>
                  <div>
                    <div className="agent-name">Agente operacional</div>
                    <div className="agent-desc">"Segunda às 8h tem 30% menos movimento. Uma promoção pontual pode mudar isso."</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
              </div>
            </div>

            <div className="dash-preview reveal" style={{ transitionDelay: '.12s' }}>
              <div className="dp-bar">
                <div className="dp-dot dd1"></div>
                <div className="dp-dot dd2"></div>
                <div className="dp-dot dd3"></div>
                <span className="dp-title">Cafo — Painel IA</span>
              </div>
              <div className="dp-stats">
                <div className="dp-stat">
                  <div className="dp-stat-lbl">{selectedDay === TODAY ? 'Hoje' : sel.label}</div>
                  <div className="dp-stat-val">R$ {sel.revenue.toLocaleString('pt-BR')}</div>
                  <div className="dp-stat-delta" style={{ color: sel.deltaColor }}>{sel.delta}</div>
                </div>
                <div className="dp-stat">
                  <div className="dp-stat-lbl">Clientes</div>
                  <div className="dp-stat-val">{sel.clients}</div>
                  <div className="dp-stat-delta" style={{ color: '#2d8a5a' }}>↑ {sel.novos} novos</div>
                </div>
                <div className="dp-stat">
                  <div className="dp-stat-lbl">Ticket médio</div>
                  <div className="dp-stat-val">R$ {sel.avg}</div>
                  <div className="dp-stat-delta" style={{ color: '#2d8a5a' }}>↑ +12% semana</div>
                </div>
                <div className="dp-stat">
                  <div className="dp-stat-lbl">Inativos</div>
                  <div className="dp-stat-val">{sel.inactive}</div>
                  <div className="dp-stat-delta" style={{ color: '#e07050' }}>↓ reativar</div>
                </div>
              </div>
              <div className="dp-chart">
                <div className="dp-chart-lbl">Receita por dia</div>
                <div className="dp-bars" aria-label="Gráfico de receita por dia da semana">
                  {weekData.map((d, i) => {
                    const h = Math.max(6, Math.round((d.revenue / MAX_REVENUE) * 92));
                    const isActive = selectedDay === i;
                    const isMax = i === 4; // Sexta
                    return (
                      <div
                        key={d.day}
                        className={`dpb-w${isActive ? ' active' : ''}`}
                        onClick={() => setSelectedDay(i)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${d.label}: R$ ${d.revenue.toLocaleString('pt-BR')}`}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedDay(i)}
                      >
                        <div
                          className={`dpb${isMax && !isActive ? ' hi' : ''}`}
                          style={{ height: `${h}px` }}
                        >
                          <span className="dpb-val">
                            {d.revenue >= 1000
                              ? `${(d.revenue / 1000).toFixed(1).replace('.0', '')}k`
                              : d.revenue}
                          </span>
                        </div>
                        <div className="dpbd">{d.day}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="dp-insight">
                <strong>Insight IA:</strong> {dayInsights[selectedDay]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="preco" className="pricing-section">
        <div className="wrap">
          <div className="pricing-header reveal">
            <span className="eyebrow">Preços</span>
            <h2 className="s-h2">Simples como o café<br /><em>que você faz.</em></h2>
            <p className="s-lead">Começa grátis. Escala quando crescer. Sem contrato, sem surpresa.</p>
          </div>

          <div className="pricing-grid reveal">
            <div className="price-card">
              <div className="price-plan">Para começar</div>
              <div className="price-name">Beta</div>
              <p className="price-tagline">
                PDV completo + dashboards financeiros. Tudo que você precisa para
                sair do papel e do caderno.
              </p>
              <ul className="price-features">
                <li>PDV completo (até 2 terminais)</li>
                <li>Perfil de cliente ilimitado</li>
                <li>Dashboard financeiro</li>
                <li>WhatsApp CRM básico</li>
                <li>Modo offline automático</li>
                <li>Suporte via chat</li>
              </ul>
              <a href="#" onClick={openModal} className="price-cta cta-outline">Comece grátis</a>
            </div>

            <div className="price-card featured">
              <div className="price-card-badge">Recomendado</div>
              <div className="price-plan">Para crescer</div>
              <div className="price-name">Business</div>
              <p className="price-tagline">
                IA integrada + consultoria de 1h com especialista em cafeterias.
                Para o dono que quer mais do que um PDV.
              </p>
              <ul className="price-features">
                <li>Tudo do plano Beta</li>
                <li>Agentes de IA (financeiro, estoque, CRM)</li>
                <li>CRM ilimitado + segmentação avançada</li>
                <li>Relatórios semanais automáticos</li>
                <li>Consultoria de 1h com especialista</li>
                <li>Suporte prioritário + onboarding dedicado</li>
              </ul>
              <a href="#" onClick={openModal} className="price-cta cta-fill">Quero uma demonstração →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-section">
        <span className="eyebrow reveal">Comece hoje</span>
        <h2 className="s-h2 reveal">Onde o café<br /><em>te conhece.</em></h2>
        <p className="final-sub reveal" style={{ transitionDelay: '.08s' }}>Grátis pra começar. Feito pra ficar.</p>
        <div className="final-ctas reveal" style={{ transitionDelay: '.14s' }}>
          <a href="#" onClick={openModal} className="btn btn-white btn-lg">Criar conta grátis</a>
          <a href="#" onClick={openModal} className="btn btn-outline-white btn-lg">Quero uma demonstração</a>
        </div>
        <div className="final-note reveal" style={{ transitionDelay: '.2s' }}>
          <span>Sem cartão de crédito</span>
          <span className="final-note-sep">·</span>
          <span>14 dias de trial completo</span>
          <span className="final-note-sep">·</span>
          <span>Cancela quando quiser</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-row">
          <a href="#" className="footer-logo"><CafoLogo /></a>
          <span className="footer-copy">© 2026 Cafo · Rio de Janeiro, Brasil</span>
          <a href="/privacidade" className="footer-privacy">Política de Privacidade</a>
        </div>
      </footer>
    </>
  );
}
