'use client';  // Markiert die Datei als Client-Komponente

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Verwende `useParams` statt `useRouter`
import Navigation from '@/components/navigation';
import Headline from '@/components/main-heading';

export default function MemberDetailPage() {
  const [member, setMember] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  
  // Verwende useParams, um auf die ID aus der URL zuzugreifen
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      async function fetchMember() {
        try {
          const response = await fetch(`/api/members/${id}`);
          if (!response.ok) {
            throw new Error('Member not found');
          }
          const data = await response.json();
          setMember(data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      fetchMember();
    }
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