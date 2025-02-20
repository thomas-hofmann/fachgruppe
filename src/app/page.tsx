import Separator from "@/components/separator";
import Links from "@/components/links";

export default function HomePage() {
  return (
    <div>
      <section>
        <h1>Vorstellung</h1>
        <article>
          <p>
            Die Fachgruppe Medieninformatik des Fachbereichs Informatik entwickelt und koordiniert das Lehrangebot und die Forschungsaktivitäten in den Bereichen Multimedia, aktuelle Webtechnologien und -entwicklungsansätze, mobile Applikationsentwicklung, User-Centered Design und User Experience, Human Computer Interaction, Graphische Datenverarbeitung und Computer Vision.
          </p> 
          <p>
            Aktuelle Forschungsschwerpunkte der Fachgruppe sind u.a. semantische Webtechnologien im Kontext Internet of Things (IoT) und Industrie 4.0, Linked Open Data für ein Web of Data (aka Semantic Web), Didaktik der Informatik, Virtual- und Augmented Reality.
          </p>
        </article>
      </section>
      <Separator />
      <Links />
    </div>
  );
}