// app/api/members/[id]/route.ts
import { NextResponse } from 'next/server';

const members = [
  { id: 1, name: 'Max Mustermann', role: 'Professor', bio: 'Max Mustermann ist Professor für Medieninformatik.' },
  { id: 2, name: 'Anna Beispiel', role: 'Studentin', bio: 'Anna Beispiel studiert Medieninformatik.' },
  { id: 3, name: 'John Doe', role: 'Dozent', bio: 'John Doe ist Dozent für Webentwicklung.' }
];

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const member = members.find(member => member.id === parseInt(id));

  if (!member) {
    return NextResponse.json({ message: 'Member not found' }, { status: 404 });
  }

  try {
    return NextResponse.json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    return NextResponse.json({ message: 'Error fetching member' }, { status: 500 });
  }
}