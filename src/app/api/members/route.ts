// app/api/members/route.ts
import { NextResponse } from 'next/server';

const members = [
  { id: 1, name: 'Max Mustermann', role: 'Professor', bio: 'Max Mustermann ist Professor für Medieninformatik.' },
  { id: 2, name: 'Anna Beispiel', role: 'Studentin', bio: 'Anna Beispiel studiert Medieninformatik.' },
  { id: 3, name: 'John Doe', role: 'Dozent', bio: 'John Doe ist Dozent für Webentwicklung.' }
];

export async function GET() {
  try {
    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json({ message: 'Error fetching members' }, { status: 500 });
  }
}