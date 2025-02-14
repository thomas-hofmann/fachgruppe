// app/api/members/route.ts (TypeScript Version)
import { NextResponse } from 'next/server';

export async function GET() {
  // Hier würdest du normalerweise mit einer echten Datenbank oder einem externen Service verbinden.
  // Beispiel-Daten:
  const members = [
    { id: 1, name: 'Max Mustermann', role: 'Professor' },
    { id: 2, name: 'Anna Beispiel', role: 'Studentin' },
    { id: 3, name: 'John Doe', role: 'Dozent' }
  ];

  return NextResponse.json(members);
}