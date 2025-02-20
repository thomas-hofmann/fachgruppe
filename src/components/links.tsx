export default function Links() {
    return (
        <section>
            <h2>Nützliche Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
                { href: "https://fbi.h-da.de", title: "Hochschule Darmstadt", desc: "Hauptseite der Hochschule" },
                { href: "https://fbi.h-da.de", title: "Fachbereich: Informatik", desc: "Fachbereich: Informatik Hauptseite" },
                { href: "https://fbi.h-da.de/fachbereich/fachgruppen/fg-multimedia-grafik", title: "Fachgruppenseite", desc: "Seite auf der Hauptseite vom Fachbereich: Informatik" },
                { href: "https://fbi.h-da.de/studium/labore/multimedia-grafik", title: "Laborseite", desc: "Seite für das Labor" },
                { href: "https://graphics-lab.h-da.io/", title: "BigBlueButton Rooms", desc: "Alle Links zu unseren Rooms" },
                { href: "https://lernen.h-da.de/", title: "Moodle", desc: "Lernplattform der Hochschule" },
                { href: "https://quiz.hofmann-thomas.de/", title: "Quiz App", desc: "Eine App mit der man Quizze erstellen kann" },
                { href: "https://timer.hofmann-thomas.de/", title: "Klausurtimer", desc: "Perfekt für Klausuren" },
                { href: "https://repomanager-repo-manager.apps.edu.ocp.users.h-da.cloud/", title: "RepoManager", desc: "Einfache Erzeugung von GitLab Repos" },
                { href: "https://fbi.h-da.io/internes-und-mitteilungen/", title: "Interne Mitteilungen", desc: "Interne Mitteilungen vom Fachbereich" },
                { href: "https://h-da.cloud/dashboard/auth/login/?next=/dashboard/project/", title: "Openstack", desc: "Openstack vom Fachbereich" },
                { href: "https://console-openshift-console.apps.edu.ocp.users.h-da.cloud/add/all-namespaces" , title: "Openshift", desc: "Openshift vom Fachbereich" },
                { href: "https://fbi.h-da.de/typo3/" , title: "Typo3", desc: "Typo3 vom Fachbereich" },
                { href: "https://h-da.de/personensuche/", title: "Personensuche", desc: "Personensuche der Hochschule" },
                { href: "https://obs.fbi.h-da.de/stundenplaene/", title: "Stundenpläne", desc: "Stundenpläne vom Fachbereich" },
                { href: "https://spm.h-da.de/Login?returnUrl=%2f", title: "Druckerei", desc: "Druckerei der Hochschule" },
                { href: "https://sd.h-da.de/cgi-bin/customer/index.cgi", title: "Service Desk", desc: "Service Desk der Hochschule" },
                { href: "https://etherpad.h-da.de/", title: "Etherpad", desc: "Etherpad der Hochschule" },

            ].map((link, index) => (
                <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {link.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {link.desc}
                </p>
                </a>
            ))}
            </div>
        </section>
    );
}
