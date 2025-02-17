import { NextResponse } from 'next/server';

const members = [
  { id: 1, name: 'Max Mustermann', role: 'Professor', bio: 'Max Mustermann ist Professor für Medieninformatik.' },
  { id: 2, name: 'Anna Beispiel', role: 'Studentin', bio: 'Anna Beispiel studiert Medieninformatik.' },
  { id: 3, name: 'John Doe', role: 'Dozent', bio: 'John Doe ist Dozent für Webentwicklung.' }
];

// Correct method export pattern for dynamic routes in Next.js 15
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  // Await the params promise

  if (!id) {
    return NextResponse.json({ message: 'Keine ID angegeben' }, { status: 400 });
  }

  const memberId = parseInt(id, 10);
  const member = members.find((m) => m.id === memberId);

  if (!member) {
    return NextResponse.json({ message: 'Member not found' }, { status: 404 });
  }

  return NextResponse.json(member);
}