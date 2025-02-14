'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/navigation';
import Headline from '@/components/main-heading';
import Link from 'next/link';

export default function HomePage() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Fetch API for members
    async function fetchMembers() {
      try {
        const response = await fetch('/api/members');
        if (!response.ok) {
          throw new Error('Error loading members');
        }
        const data = await response.json();
        setMembers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  return (
    <section>
      <h2>Mitglieder</h2>
      
      {loading && <p className="text-white">Laden...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4 mt-4">
        {members.map((member) => (
          <li key={member.id} className="bg-gray-700 p-4 rounded text-white">
            <h3 className="font-bold">{member.name}</h3>
            <p>{member.role}</p>
            {/* Link zu Detailseite des Members */}
            <Link href={`/members/${member.id}`} className="text-blue-500">
              Details anzeigen
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}