import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Cookie = () => {
    const{ t} = useTranslation()
    return (
        <div className="container term">
            <div className="row">
                <h1 className="left">{t('The cookies we use')}<br /> Introduction</h1>
            </div>
            <p>Cette politique a pour objectif d’expliquer comment ce site utilise des cookies afin de fournir des informations claires et pertinentes afin de permettre aux utilisateurs de faire leurs propres choix afin de vérifier ce qui se passe lors de l’accès au site. La politique utilise le terme « cookie » pour faire référence à des fichiers d’informations stockant sur l’ordinateur de l’utilisateur la navigation sur Internet pour accélérer et optimiser la recherche et les techniques similaires couvertes par la loi (comme, par exemple, les objets partagés locaux). communément appelés « cookies flash », balises Web ou bugs, y compris des images gifs claires). Les informations collectées concernent des données permettant d’identifier les utilisateurs / visiteurs via l’association et le traitement de données détenues par des tiers (telles que les numéros d’adresses IP, les noms de domaines de l’ordinateur utilisés par les personnes se connectant au site. web). Ces données sont utilisées uniquement à des fins statistiques.
                Ce document fait partie intégrante de la politique de confidentialité et les informations qu’il contient sont également divulguées conformément au règlement n °. 2016/679 (GDPR). Nous vous invitons donc à lire ce document.</p>
            <h2 className="div1">Loi applicable</h2>
            <p>Le sujet est régi par la directive européenne 2002/58 / CES – modifiées ultérieurement par la directive 2009/136 / CE et mise en œuvre par les lois nationales des États membres de l’Union européenne – qui exige l’obtention d’une autorisation pour les cookies et technologies similaires.</p>
            <h2 className="div1">{t('What is a cookie?')}</h2>
            <p>Un cookie est un petit fichier texte, généralement composé de lettres et de chiffres, téléchargé sur un appareil lorsque l’utilisateur accède au site Web. Les cookies sont ensuite envoyés sur le site d’origine à chaque visite ultérieure. Les cookies sont utiles car ils permettent à un site Web de reconnaître le périphérique d’un utilisateur.

                L’utilisation de cookies et de technologies similaires est depuis longtemps un facteur ordinaire, car les cookies jouent un rôle important dans la fourniture de nombreux services en ligne. L’utilisation de ces techniques n’est donc pas interdite par la loi, mais nécessite que l’utilisateur soit informé de l’utilisation des cookies et lui offre la possibilité de les accepter ou non.</p>
            <h2 className="div1">Cookies de différentes sortes</h2>
            <h2 className="div1">Cookies de sessions et persistantes</h2>
            <p>Les cookies peuvent expirer à la fin d’une session du navigateur (c’est-à-dire lorsqu’un utilisateur ouvre la fenêtre du navigateur jusqu’à ce que vous quittiez le navigateur) où ils peuvent être stockés plus longtemps

                Cookies de session – autoriser les sites Web à lier les actions d’un utilisateur pendant une session de navigateur. Ils peuvent être utilisés à diverses fins, telles que la mémorisation de ce qu’un utilisateur a mis dans son panier lorsqu’il navigue sur un site. Ils pourraient également être utilisés pour la sécurité lorsqu’un utilisateur accède à la banque en ligne ou pour faciliter l’utilisation du courrier Web. Ces cookies de session expirent après une session du navigateur.

                L’utilisation de cookies de session (qui, dans tous les cas, ne sont pas stockés de manière permanente sur l’ordinateur de l’utilisateur et sont automatiquement supprimée dès la fermeture du navigateur) est strictement limitée aux fins de la transmission de données (composée de chiffres). aléatoires générés par le serveur) qui identifie la session spécifique et sont nécessaires pour permettre une navigation sûre et efficace. Les cookies de sessions utilisées sur ce site évitent l’utilisation d’autres technologies qui pourraient compromettre la confidentialité de la navigation des utilisateurs.

                Les cookies persistants – sont stockés sur le périphérique de l’utilisateur entre les différentes sessions du navigateur et vous permettent de mémoriser les actions de l’utilisateur sur un site. Les cookies persistants peuvent être utilisés à diverses fins, y compris la mémorisation des préférences et des choix des utilisateurs lors de l’utilisation d’un site (ou dans certains cas par le biais de sites Web différents).

                Cookies « premiers » et « tiers » – Le fait qu’un cookie soit « premier » soit « tiers » est strictement lié au site Web ou au domaine qui utilise ce cookie en particulier. Les cookies de « première partie » sont essentiellement des cookies installés par le même site Web visité par l’utilisateur, à savoir le site affiché dans la fenêtre de l’URL: dans notre cas, des cookies définis par intervention-urgence24-7.com Les cookies de « tiers » sont des cookies qui sont définis par un domaine autre que celui visité par l’utilisateur: il s’agit des cookies installés par des sites Web autres que intervention-urgence24-7.com lorsque vous avez visité intervention-urgence24-7.com Google Analytics a défini le cookie appelé « _Ga » via le domaine  gstaic.com ce cookie spécifique est un cookie « tiers ».</p>
            <h2 className="div1">Propriété du traitement</h2>
            <p>Intevention Urgence 24h , comme indiqué dans la politique de confidentialité, est le propriétaire du traitement de – et ne répond que par ses propres cookies, c’est-à-dire « la première partie »; sinon, les cookies « tiers » sont la propriété de leurs sociétés respectives, identifiées selon le tableau contenu dans ce document.</p>
            <h2 className="div1">Consentement pour les cookies</h2>
            <p>Certains cookies sont strictement nécessaires au bon fonctionnement d’Internet et ne nécessitent pas le consentement de l’utilisateur, tels que ceux permettant de garantir le chargement rapide et efficace du contenu d’une page, la répartition de la charge de travail entre différents ordinateurs ou ceux visant à assurer la sécurité.

                D’autres cookies sont encore raisonnablement nécessaires ou importants, mais ils ne sont pas strictement nécessaires et nécessitent donc le consentement de l’utilisateur.

                Ce site met en place différentes techniques pour la collecte du consentement de l’utilisateur: un mode est la sélection de la case spécifique du cookie de bannière publié sur la page d’accès au site et qui met en évidence l’utilisation de cookies.

                Les paramètres du navigateur sont un autre moyen d’obtenir un consentement ou, au contraire, de refuser des cookies; l’utilisateur peut configurer le navigateur pour qu’il prévienne de la présence de cookies, ce qui lui permet de décider s’il accepte ou non les cookies. Il est également possible de rejeter automatiquement tous les cookies en activant l’option appropriée dans le navigateur.

                Chaque navigateur met en évidence les instructions à cet effet.</p>
            <h2 className="div1">Retrait du consentement</h2>
            <p>Votre consentement à l’utilisation de cookies peut être révoqué à tout moment, même si cette révocation est susceptible d’avoir une incidence sur les fonctionnalités du site.</p>
            <h2 className="div1">Désactiver les cookies</h2>
            <p>Les cookies sont connectés au navigateur utilisé et peuvent être désactivés directement à partir du navigateur, refusant / révoquant ainsi le consentement à l’utilisation de cookies. N’oubliez pas que la désactivation des cookies peut empêcher l’utilisation correcte de certaines fonctionnalités du site lui-même. les instructions pour désactiver les cookies sont disponibles sur les pages Web suivantes:

                Microsoft Internet Explorer
                Google Chrome
                Apple Safari
                Mozilla Firefox
                Opera</p>
            <h2 className="div1">Quels cookies utilisons-nous?</h2>
            <p>Lors de la gestion de son site Web, intervention urgence 24 utilise des cookies pour proposer des services, améliorer l’expérience de l’utilisateur et développer des statistiques agrégées sur les données collectées, et ce pour différentes raisons.

                Ces cookies nous permettant de distinguer l’utilisateur du site des autres, nous aidons à fournir une bonne expérience lorsque vous naviguez sur notre site et à améliorer notre site.

                Les cookies que nous utilisons sont « techniques » et « analytiques ». Ils nous permettent de reconnaître et de compter le nombre de visiteurs et d’examiner comment les visiteurs naviguent sur le site Web lorsqu’ils l’utilisent. Cela nous aide à améliorer le fonctionnement de notre site, en veillant par exemple à ce que les utilisateurs puissent facilement trouver ce dont ils ont besoin. Pour en savoir plus sur les cookies d’analyses individuelles que nous utilisons et sur la façon de les reconnaître, reportez-vous au tableau ci-dessous.

                Plus précisément, ce site Web utilise les types de cookies énumérés dans le tableau suivant:

                cookies techniques: nécessaires à la navigation sur le site et à l’utilisation de certaines fonctions (par exemple, se déplacer d’une page à une autre, etc.).
                cookies analytiques: pour l’analyse statistique de l’accès au site. Les informations sont collectées sur une base globale.


                Le tableau ci-dessous indique les types de cookies utilisés par ce site et les objectifs associés;

                DÉTAILS DES COOKIES PRÉSENTS SUR LE SITE
                Type	Nome	Objectifs / objectifs	Durata	Url
                Cookies techniques (première partie)	Ce cookie indique au site s’il faut ou non afficher la fenêtre contextuelle demandant le consentement pour les cookies. Lorsque l’utilisateur accepte, un cookie enregistre l’action et n’affiche plus la fenêtre contextuelle.	Ce cookie indique au site s’il faut ou non afficher la fenêtre contextuelle demandant le consentement pour les cookies. Lorsque l’utilisateur accepte, un cookie enregistre l’action et n’affiche plus la fenêtre contextuelle.	La durée du cookie est de 12 mois.
                Cookies de tiers	Cookie Analitici: Google Analytics (__utma, __utmb, __utmc, __utmv, __utmz)	Google Analytics utilise ces cookies pour collecter des informations sur l’utilisation de notre site par les visiteurs, informations qui nous aident à améliorer leur navigation. Les cookies tracent des informations de manière anonyme includono dati relatives au nombre de visiteurs sur le site, à leur origine, au temps passé sur le site et aux pages visitées. Pour approfondir le contenu du traitement des cookies, veuillez visiter le site de Google.https://www.google.com/intl/it/policies/technologies/types/	Google Analytics utilise ces cookies pour collecter des informations sur l’utilisation de notre site par les visiteurs, informations qui nous aident à améliorer leur navigation. Les cookies tracent des informations de manière anonyme
                30 minutes et le moment où vous fermez le navigateur.	Link
                Cookies de tiers	Cookies de performance et de fonctionnalité: Google Maps (APISID, GAPS, HSID, NID, OGP, OGPC, PREF, SAPISID, SID, SNID, SSID)	Google Maps utilise ces cookies pour stocker les préférences et les informations relatives à l’utilisateur lorsqu’il souhaite localiser des points de vente ou des points de vente sur des cartes automatiquement générées par Google et intégrées au site Web. Ils ne sont utilisés que sur les pages contenant des cartes Google.	La plupart des cookies expirent 10 ans après votre dernière visite sur une page contenant une carte Google..	Link
                Cookies de tiers	Cookies de performance et fonctionnalités: Youtube (SID, LOGIN_INFO, use hotbox, PREF, SSID, HSID, version surveillée, __usma, __utm, données démographiques, VISITOR_INFO1_LIVE)	Google a créé un certain nombre de cookies sur toute page contenant une vidéo Youtube. Bien que nous n’ayons aucun contrôle sur les cookies définis par Google, ceux-ci semblent contenir un ensemble d’informations permettant de mesurer le nombre et le comportement des utilisateurs de Youtube, y compris des informations reliant les visites de notre site Web à votre compte Google, si vous êtes connecté à un. Les informations relatives à votre utilisation de notre site, y compris l’adresse IP, peuvent être transmises à Google et stockées sur le serveur de Google. Ce cookie ne permet pas de vous identifier personnellement sauf si vous êtes connecté à Google. Dans ce cas, il est collegato al tuo account Google.	La plupart des cookies expirent 10 ans après votre dernière visite sur une page contenant une vidéo Youtube, certains expirent plus tôt.	Link
                Cookies de tiers	Cookies de profilage ou de publicité: Google (APISID, CONSENT, HSID, NID, SAPISID, SID, SSID)	Cet ensemble de cookies couvre les campagnes publicitaires de Google et est généré pour identifier le comportement des utilisateurs après la consultation d’un contenu	La plupart des cookies expirent 10 ans après votre dernière visite sur une page contenant une vidéo Youtube, certains expirent plus tôt.
                Cookies de tiers	Cookies de profilage ou de publicité: doubleclick .net (DSID, IDE, id)	Ces cookies sont associés à Doubleclick, le service Éditeur de Google, et ont pour objectif principal d’enregistrer les performances des campagnes publicitaires activées par l’utilisateur. Les cookies ne peuvent être activés que sur certaines ou toutes les pages du site.	La durée du cookie est de 2 mois, 3 jours et 4 jours.	Link
                Ce site n’utilise pas de cookies pour cibler la publicité.

                Certains cookies utilisés proviennent de tiers. Le processus d’obtention du consentement pour ces cookies est plus complexe, mais nous mettons tout en œuvre pour fournir les informations appropriées aux utilisateurs et pour leur permettre de choisir en connaissance de cause ce qui est stocké sur leur appareil.

                Pour cette raison, la société fournit les adresses des tiers à contacter ou, à défaut, indique ici comment supprimer les cookies que vous ne souhaitez pas accepter.</p>
            <h2 className="div1">Portée de la circulation et conservation des données</h2>
            <p>Les données sur les contacts Web ne sont pas stockées pendant plus de sept jours, à l’exception des enquêtes sur des infractions informatiques dirigées contre le site. Aucune donnée provenant du service Web ne sera communiquée à des destinataires non specifies</p>
            <h2 className="div1">Mise à jour de la politique de cookie</h2>
            <p>La politique en matière de cookies de notre site peut être mise à jour périodiquement. Nous vous recommandons donc de consulter ce document à chaque fois que vous accédez au site, afin d’être informé de manière appropriée sur l’utilisation et le contrôle des cookies.</p>
            <h2 className="div1">Plus d’informations sur les cookies</h2>
            <p>Pour plus d’informations sur les cookies installés via ce site, vous pouvez contacter l’adresse de messagerie suivante:   interventionurgence47@gmail.com</p>
            <h2 className="div1">Date de dernière révision</h2>
            <p>Date de révision: 25.05.2018</p>
        </div>
    )
}

export default Cookie;
