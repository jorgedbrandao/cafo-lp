import { NextRequest, NextResponse } from 'next/server';

const MAILFY_API_KEY = process.env.MAILFY_API_KEY!;
const MAILFY_LIST_ID = process.env.MAILFY_LIST_ID!;

export async function POST(req: NextRequest) {
  const { nome, email, whatsapp, role, challenges } = await req.json();

  if (!email || !nome) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
  }

  const payload = {
    api_key: MAILFY_API_KEY,
    list_id: MAILFY_LIST_ID,
    email,
    name: nome,
    phone: whatsapp,
    job_title: role,
    'custom.cargo': role,
    'custom.desafios': challenges.join(', '),
    'custom.origem': 'cafo-landing-page',
  };

  const res = await fetch(
    'https://zuakjyrjeskkygjozsan.supabase.co/functions/v1/add-contact-external',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data.message ?? 'Erro ao salvar contato.' }, { status: res.status });
  }

  return NextResponse.json({ success: true });
}
