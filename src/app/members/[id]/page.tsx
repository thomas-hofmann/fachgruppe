'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

// Definiere den Member-Typ
interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
}

export default function MemberDetailPage() {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Verwende useParams, um die ID aus der URL zu erhalten
  const params = useParams();
  const id = params?.id as string | undefined;

  useEffect(() => {
    if (!id) {
      setError('Keine ID angegeben');
      setLoading(false);
      return;
    }

    async function fetchMember() {
      try {
        const response = await fetch(`/api/members/${id}`);
        if (!response.ok) {
          throw new Error('Member nicht gefunden');
        }
        const data: Member = await response.json();
        setMember(data);
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

    fetchMember();
  }, [id]);

  if (loading) return <p className="text-white">Laden...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section>
      {member ? (
        <div className="bg-gray-700 p-6 rounded text-white">
          <h2 className="text-xl font-bold">{member.name}</h2>
          <p><strong>Rolle:</strong> {member.role}</p>
          <p><strong>Bio:</strong> {member.bio}</p>
        </div>
      ) : (
        <p>Mitglied nicht gefunden.</p>
      )}
    </section>
  );
}