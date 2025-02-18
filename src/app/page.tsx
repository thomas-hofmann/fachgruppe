import Separator from "@/components/separator";

export default function HomePage() {
  return (
    <div>
      <section>
        <h1>Vorstellung</h1>
        <article className='text-white'>
          <p>
            Die Fachgruppe Multimedia und Grafik des Fachbereichs Informatik entwickelt und koordiniert das Lehrangebot und die Forschungsaktivitäten in den Bereichen Multimedia, aktuelle Webtechnologien und -entwicklungsansätze, mobile Applikationsentwicklung, User-Centered Design und User Experience, Human Computer Interaction, Graphische Datenverarbeitung und Computer Vision.
          </p> 
          <p>
            Aktuelle Forschungsschwerpunkte der Fachgruppe sind u.a. semantische Webtechnologien im Kontext Internet of Things (IoT) und Industrie 4.0, Linked Open Data für ein Web of Data (aka Semantic Web), Didaktik der Informatik, Virtual- und Augmented Reality.
          </p>
        </article>
      </section>
      <Separator />
      <section>
        <h2>Wichtige Links</h2>
        <div className="flex flex-wrap gap-1.5">
          <a href="https://fbi.h-da.de/fachbereich/fachgruppen/fg-multimedia-grafik" target="_blank" className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fachgruppenseite</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Seite auf der Hauptseite vom Fachbereich: Informatik</p>
          </a>
          <a href="https://fbi.h-da.de/studium/labore/multimedia-grafik" target="_blank" className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laborseite</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Seite für das Labor</p>
          </a>
          <a href="https://graphics-lab.h-da.io/" target="_blank" className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BigBlueButton Rooms</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Alle Links zu unseren Rooms</p>
          </a>
          <a href="https://quiz.hofmann-thomas.de/" target="_blank" className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quiz App</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Eine App mit der man Quizze erstellen kann</p>
          </a>
          <a href="https://timer.hofmann-thomas.de/" target="_blank" className="inline-block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Klausurtimer</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Perfekt für Klausuren</p>
          </a>
        </div>
      </section>
    </div>
  );
}