import Navigation from '@/components/navigation';
import Headline from '@/components/main-heading';

export default function HomePage() {
  return (
    <section>
      <Headline />
      <Navigation />
      <h2>Impressum</h2>
      <p>Verantwortlicher: Thomas Hofmann</p>
    </section>
  );
}