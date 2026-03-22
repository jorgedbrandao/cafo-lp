'use client';

import { useState, useEffect, useRef } from 'react';
import CafoLogo from './CafoLogo';

const ROLES = ['Dono/a', 'Sócio/a', 'Gerente', 'Barista', 'Investidor/a', 'Outro'];
const CHALLENGES = [
  'Controle financeiro',
  'Fidelizar clientes',
  'Gestão de estoque',
  'Aumentar faturamento',
  'Gestão da equipe',
  'Marketing & redes sociais',
  'Precificação de produtos',
  'Outro',
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ open, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [role, setRole] = useState('');
  const [challenges, setChallenges] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInput.current?.focus(), 80);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(1); setNome(''); setEmail(''); setWhatsapp('');
        setRole(''); setChallenges([]); setDone(false);
      }, 300);
    }
  }, [open]);

  function fmtWhatsapp(v: string) {
    const d = v.replace(/\D/g, '').slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }

  function toggleChallenge(c: string) {
    setChallenges(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);
  }

  function step1Valid() {
    return nome.trim().length > 1 && /\S+@\S+\.\S+/.test(email) && whatsapp.replace(/\D/g, '').length >= 10;
  }

  function step2Valid() {
    return role !== '' && challenges.length > 0;
  }

  function handleSubmit() {
    if (!step2Valid()) return;
    setDone(true);
  }

  if (!open) return null;

  return (
    <div className={`wl-overlay${open ? ' wl-in' : ''}`} role="dialog" aria-modal="true" aria-label="Formulário de interesse">
      <button className="wl-close" onClick={onClose} aria-label="Fechar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="wl-panel">
        {!done ? (
          <>
            <div className="wl-logo"><CafoLogo /></div>

            {/* Progress */}
            <div className="wl-progress" aria-hidden="true">
              <div className={`wl-prog-step${step >= 1 ? ' active' : ''}`} />
              <div className="wl-prog-line" />
              <div className={`wl-prog-step${step >= 2 ? ' active' : ''}`} />
            </div>

            {step === 1 && (
              <div className="wl-step">
                <h2 className="wl-title">Quero começar grátis</h2>
                <p className="wl-sub">Nos diga como te chamar para reservarmos sua vaga.</p>

                <div className="wl-fields">
                  <div className="wl-field">
                    <label htmlFor="wl-nome">Nome completo</label>
                    <input
                      ref={firstInput}
                      id="wl-nome"
                      type="text"
                      placeholder="Seu nome"
                      value={nome}
                      autoComplete="name"
                      onChange={e => setNome(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && step1Valid() && setStep(2)}
                    />
                  </div>
                  <div className="wl-field">
                    <label htmlFor="wl-email">E-mail</label>
                    <input
                      id="wl-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      autoComplete="email"
                      onChange={e => setEmail(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && step1Valid() && setStep(2)}
                    />
                  </div>
                  <div className="wl-field">
                    <label htmlFor="wl-wpp">WhatsApp</label>
                    <input
                      id="wl-wpp"
                      type="tel"
                      placeholder="(11) 91234-5678"
                      value={whatsapp}
                      autoComplete="tel"
                      inputMode="numeric"
                      onChange={e => setWhatsapp(fmtWhatsapp(e.target.value))}
                      onKeyDown={e => e.key === 'Enter' && step1Valid() && setStep(2)}
                    />
                  </div>
                </div>

                <button
                  className="wl-btn"
                  disabled={!step1Valid()}
                  onClick={() => setStep(2)}
                >
                  Continuar →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="wl-step">
                <h2 className="wl-title">Sobre a sua cafeteria</h2>
                <p className="wl-sub">2 perguntas rápidas para personalizarmos sua experiência.</p>

                <div className="wl-group">
                  <div className="wl-group-label">Qual é o seu papel?</div>
                  <div className="wl-chips">
                    {ROLES.map(r => (
                      <button
                        key={r}
                        className={`wl-chip${role === r ? ' sel' : ''}`}
                        onClick={() => setRole(r)}
                        type="button"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="wl-group">
                  <div className="wl-group-label">Maior desafio na cafeteria? <span className="wl-hint">(pode escolher mais de um)</span></div>
                  <div className="wl-chips">
                    {CHALLENGES.map(c => (
                      <button
                        key={c}
                        className={`wl-chip${challenges.includes(c) ? ' sel' : ''}`}
                        onClick={() => toggleChallenge(c)}
                        type="button"
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="wl-actions">
                  <button className="wl-back" onClick={() => setStep(1)}>← Voltar</button>
                  <button
                    className="wl-btn"
                    disabled={!step2Valid()}
                    onClick={handleSubmit}
                  >
                    Garantir minha vaga
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="wl-done">
            <div className="wl-done-icon">☕</div>
            <h2 className="wl-title">Vaga garantida,<br /><em>{nome.split(' ')[0]}!</em></h2>
            <p className="wl-sub">
              Entraremos em contato pelo WhatsApp assim que o Cafo estiver
              pronto pra você. Fique de olho.
            </p>
            <button className="wl-btn" onClick={onClose}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
}
