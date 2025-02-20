'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Member {
  id: number;
  name: string;
  role: string;
}

export default function HomePage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch('/api/members');
        if (!response.ok) {
          throw new Error('Error loading members');
        }
        const data: Member[] = await response.json();
        setMembers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ein unbekannter Fehler ist aufgetreten');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  return (
    <section>
      <h1>Mitglieder</h1>
      
      {loading && <p className="text-white">Laden...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4 mt-4">
        {members.map((member) => (
          <li key={member.id} className="bg-gray-700 p-4 rounded text-white">
            <h3 className="font-bold">{member.name}</h3>
            <p>{member.role}</p>
            <Link href={`/members/${member.id}`} className="text-blue-500">
              Details anzeigen
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}