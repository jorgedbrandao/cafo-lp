'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="nav-container">
        <a href="#" className="nav-logo">ca<b>fo</b></a>

        <ul className="nav-links">
          <li><a href="#produto">Produto</a></li>
          <li><a href="#ia">IA & Agentes</a></li>
          <li><a href="#preco">Preços</a></li>
          <li><a href="#podcast">Podcast</a></li>
        </ul>

        <div className="nav-ctas">
          <a href="#" className="btn btn-ghost">Entrar</a>
          <a href="#preco" className="btn btn-solid">Começar grátis</a>
          <button
            className="nav-hamburger"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-menu open">
          <ul>
            <li><a href="#produto" onClick={() => setMobileMenuOpen(false)}>Produto</a></li>
            <li><a href="#ia" onClick={() => setMobileMenuOpen(false)}>IA & Agentes</a></li>
            <li><a href="#preco" onClick={() => setMobileMenuOpen(false)}>Preços</a></li>
            <li><a href="#podcast" onClick={() => setMobileMenuOpen(false)}>Podcast</a></li>
          </ul>
          <div className="mobile-menu-ctas">
            <a href="#" className="btn btn-ghost btn-lg">Entrar</a>
            <a href="#preco" className="btn btn-solid btn-lg">Começar grátis</a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-circle"></div>

        <div className="hero-eyebrow">Plataforma para cafeterias</div>

        <h1>
          A plataforma para gestão<br />
          de cafeterias, do <em>barista</em><br />
          ao <em>dono.</em>
        </h1>

        <p className="hero-sub">
          Finalmente — a tecnologia que faltava no mundo do café.
          Uma plataforma integrada do barista à gestão, com IA, CRM
          e crescimento para o negócio em café.
        </p>

        <div className="hero-ctas">
          <a href="#preco" className="btn btn-solid btn-lg">Começar grátis →</a>
          <a href="#produto" className="btn btn-ghost btn-lg">Ver o produto</a>
        </div>

        <p className="hero-footnote">Sem cartão de crédito · Setup em 10 minutos · Suporte em português</p>

        <div className="stats-bar reveal">
          <div className="stat-item">
            <div className="stat-val">20+</div>
            <div className="stat-lbl">Cafeterias ativas</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">8.500+</div>
            <div className="stat-lbl">Pedidos processados</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">{'<'} 60s</div>
            <div className="stat-lbl">Por pedido</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">13×</div>
            <div className="stat-lbl">ROI médio</div>
          </div>
        </div>
      </section>

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

          <div className="feat-cards reveal">
            <div className="feat-card">
              <div className="feat-num">01</div>
              <div className="feat-card-title">Barista registra o pedido</div>
              <div className="feat-card-body">
                PDV rápido com botões grandes, modificadores na primeira tela.
                Do pedido ao pagamento em menos de 60 segundos — mesmo no pico das 9h.
                Funciona offline.
              </div>
            </div>
            <div className="feat-card">
              <div className="feat-num">02</div>
              <div className="feat-card-title">Conheça seu cliente</div>
              <div className="feat-card-body">
                Nome, bebida preferida, frequência, histórico e notas pessoais — salvos
                automaticamente. O barista novo chega e já sabe quem é o João.
                O cliente se sente em casa.
              </div>
            </div>
            <div className="feat-card">
              <div className="feat-num">03</div>
              <div className="feat-card-title">CRM em 1 clique</div>
              <div className="feat-card-body">
                Cliente sumiu há 3 semanas? Um toque envia mensagem via WhatsApp,
                personalizada. Segmentação automática: VIPs, inativos, aniversariantes,
                novos.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BARISTA / STORYTELLING */}
      <section className="barista-section">
        <div className="wrap">
          <div className="barista-layout">
            <div className="barista-copy reveal">
              <span className="eyebrow">Comunidade</span>
              <h2 className="s-h2">Do balcão, conheça<br />quem faz o <em>café.</em></h2>
              <p className="s-lead">
                Baristas agora têm um sistema que fala a língua do café.
                Feito por quem entende o que acontece atrás do balcão.
              </p>

              <div className="social-cards">
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

            <div className="reveal" style={{ transitionDelay: '.1s' }}>
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
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ia" className="ai-section">
        <div className="wrap">
          <div className="ai-layout">
            <div className="ai-copy reveal">
              <span className="eyebrow">Inteligência artificial</span>
              <h2 className="s-h2">
                Enquanto o café está sendo feito, os agentes de IA
                analisam <em>finanças, operação e estoque.</em>
              </h2>
              <p className="s-lead">
                Baristas agora têm um sistema que fala a língua do café.
                O dono recebe insights enquanto o caixa fecha.
              </p>

              <div className="agents-grid">
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">📊</div>
                  <div>
                    <div className="agent-name">Agente financeiro</div>
                    <div className="agent-desc">Analisa faturamento, tendências e projeções em tempo real</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">📦</div>
                  <div>
                    <div className="agent-name">Agente de estoque</div>
                    <div className="agent-desc">Detecta ruptura iminente e sugere pedidos automáticos</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">👥</div>
                  <div>
                    <div className="agent-name">Agente de CRM</div>
                    <div className="agent-desc">Identifica clientes em risco de churn antes de sumirem</div>
                  </div>
                  <div className="agent-status"><span className="status-dot"></span>Ativo</div>
                </div>
                <div className="agent-row">
                  <div className="agent-icon" aria-hidden="true">⚡</div>
                  <div>
                    <div className="agent-name">Agente operacional</div>
                    <div className="agent-desc">Otimiza horários, escala de baristas e picos de movimento</div>
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
                  <div className="dp-stat-lbl">Hoje</div>
                  <div className="dp-stat-val">R$ 1.240</div>
                  <div className="dp-stat-delta">↑ +8% vs ontem</div>
                </div>
                <div className="dp-stat">
                  <div className="dp-stat-lbl">Clientes</div>
                  <div className="dp-stat-val">38</div>
                  <div className="dp-stat-delta">↑ 3 novos</div>
                </div>
                <div className="dp-stat">
                  <div className="dp-stat-lbl">Ticket médio</div>
                  <div className="dp-stat-val">R$ 23,85</div>
                  <div className="dp-stat-delta">↑ +12% semana</div>
                </div>
                <div className="dp-stat">
                  <div className="dp-stat-lbl">Inativos</div>
                  <div className="dp-stat-val">14</div>
                  <div className="dp-stat-delta" style={{ color: '#e07050' }}>↓ reativar</div>
                </div>
              </div>
              <div className="dp-chart">
                <div className="dp-chart-lbl">Receita por dia</div>
                <div className="dp-bars" role="img" aria-label="Gráfico de receita por dia da semana">
                  <div className="dpb-w"><div className="dpb" style={{ height: '52%' }}></div><div className="dpbd">Seg</div></div>
                  <div className="dpb-w"><div className="dpb" style={{ height: '68%' }}></div><div className="dpbd">Ter</div></div>
                  <div className="dpb-w"><div className="dpb" style={{ height: '77%' }}></div><div className="dpbd">Qua</div></div>
                  <div className="dpb-w"><div className="dpb" style={{ height: '72%' }}></div><div className="dpbd">Qui</div></div>
                  <div className="dpb-w"><div className="dpb hi" style={{ height: '96%' }}></div><div className="dpbd">Sex</div></div>
                  <div className="dpb-w"><div className="dpb" style={{ height: '60%' }}></div><div className="dpbd">Sáb</div></div>
                  <div className="dpb-w"><div className="dpb" style={{ height: '36%' }}></div><div className="dpbd">Dom</div></div>
                </div>
              </div>
              <div className="dp-insight">
                <strong>Insight IA:</strong> Segunda-feira está 28% abaixo da média.
                Uma promoção às 7h–9h pode gerar +R$ 1.200/mês.
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
              <a href="#" className="price-cta cta-outline">Comece grátis</a>
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
              <a href="#" className="price-cta cta-fill">Quero uma demonstração →</a>
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
          <a href="#" className="btn btn-white btn-lg">Criar conta grátis</a>
          <a href="#" className="btn btn-outline-white btn-lg">Quero uma demonstração</a>
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
          <a href="#" className="footer-logo">ca<b>fo</b></a>
          <ul className="footer-links">
            <li><a href="#">Produto</a></li>
            <li><a href="#">Preços</a></li>
            <li><a href="#">Balcão Podcast</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
          </ul>
          <span className="footer-copy">© 2026 Cafo · São Paulo, Brasil</span>
        </div>
      </footer>
    </>
  );
}
