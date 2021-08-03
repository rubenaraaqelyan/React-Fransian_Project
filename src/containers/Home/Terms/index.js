import React from 'react';
import "./style.css"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Terms = () => {
    const {t} = useTranslation()
    return (
        <div className="container term">
            <div className="row">
                <h1 className="left">CONDITIONS GENERALES<br /> D’UTILISATION</h1>
            </div>
            <div className="div">{t('Introduc')}</div>
            <p>La société de droit UK VIKTOIRE A.S LTD dont le siège social est situé 71-75, Shelton Street, Covent Garden, London.  (ci-après « VIKTOIRE » ou « nous ») édite le site internet https://intervention-urgence24-7.com (le « Site ») et le service de mise en relation « Intervention Uragnce 24-7 ».

                    Le Site est disponible à l’adresse www.intervention-urgence24-7.com ou à toute autre adresse qui pourrait lui être substituée.

                    Le Site est hébergé par www.intervention-urgence24-7.com , société VIKTOIRE A.S LTD, dont le siège social est situé 71-75, Shelton Street, Covent Garden, London., immatriculée au Registre du Commerce et des Sociétés de Ireland sous le numéro d’identification unique RCS 13343525.</p>
            <p>“VICTOIRE” propose à des clients particuliers à la recherche d’une réparation ou d’un dépannage d’urgence (ci-après les « Clients » ou « vous ») un service de mise en relation avec des techniciens indépendants et professionnels dans le domaine de la serrurerie, de l’électricité, du gaz et de la plomberie (ci-après les « Professionnels »).</p>
            <p>Les présentes conditions générales d’utilisation (ci-après les « CGU ») ont pour objet de définir les conditions d’utilisation du Site et de fourniture du service de mise en relation par Intervention Urgence 24. Ces CGU ne régissent donc pas les conditions d’intervention ou les prestations de services offertes par les Professionnels présentés sur Intervention Urgence 24.</p>

            <p>En accédant au Site ou en utilisant le service, le Client déclare accepter les présentes CGU et s’engage à les respecter. En cas de désaccord avec les dispositions des présentes conditions générales, il est recommandé de ne pas naviguer sur le Site ni d’utiliser le service. De la même manière, si les conditions du service ne sont pas claires ou en cas de doute, il est recommandé de ne pas les utiliser.</p>
            <div className="div">Présentation de notre service Intervention Urgence 24</div>
            <p>Intervention Urgence 24 a pour seule mission de faciliter la mise en relation entre les Clients et les Professionnels, assurant la gestion des demandes d’intervention urgence, les communications nécessaires et la confirmation de l’intervention du Professionnel.

                    Dans le cadre de la fourniture de nos services, “VIKTOIRE”:

                    édite le Site et gère un centre d’appels aux fins de la commercialisation, par les Professionnels, de leurs services auprès des Clients ;
                    répond aux demandes de renseignements des Clients et, pour le compte du Professionnel, prend les dispositions nécessaires pour que le Professionnel puisse se rendre au lieu indiqué afin d’évaluer les travaux de réparation requis et, le cas échéant, fournir une estimation de la durée et du montant des travaux de réparation à effectuer ;
                    surveille les performances des Professionnels, reçoit les commentaires des Clients et résout les plaintes et les différends découlant des travaux de réparation.</p>
                <p>Il est rappelé qu’en aucun cas “VIKTOIRE” ne réalise les prestations de réparation et de dépannage (les « Prestations »), qui sont assurées par le seul Professionnel, en son nom et pour son compte, sous sa propre responsabilité et aux conditions juridiques et financières qu’il aura définies et qu’il appartient aux Client de valider préalablement à la réalisation des Prestations.</p>
            <div className="div">
                    Description du processus</div>
            <p>Dans un premier temps, le Client fait une demande d’intervention auprès du centre d’appels d’Intervention Urgence 24 en indiquant avec précision le type d’intervention requis, ainsi que le lieu où elle est demandée, et les coordonnées nécessaires.

                    Pendant que vous êtes au téléphone, “VIKTOIRE” recherche un Professionnel susceptible d’intervenir rapidement, en fonction du type d’intervention requise.

                    Une fois la recherche effectuée par “VIKTOIRE”, nous vous informons par écrit (un SMS / un e-mail de confirmation) de la disponibilité du Professionnel. Si vous consentez à ce que le Professionnel intervienne vous concluez un contrat avec le Professionnel auquel “VIKTOIRE” n’est pas partie. Le Professionnel vous fournira une estimation du coût pour la réalisation des Prestations de réparation, comprenant notamment le nombre d’heures que les travaux de réparation devraient prendre. Vous paierez le Professionnel directement par virement sur son compte professionnel, par chèque, par carte de crédit ou en espèces, selon les conditions du Professionnel. Le Professionnel ne devrait pas vous demander un paiement comptant à moins que vous n’y consentiez tous les deux.</p>
            <div className="div">
                    Disponibilité d’Intervention Urgence 24</div>
            <p>Le Client est informé et accepte que le Site et le centre d’appels lui sont fournis en l’état et en fonction de leur disponibilité.

                    “VIKTOIRE” fait ses meilleurs efforts pour s’assurer du bon fonctionnement du Site et du centre d’appels, selon les limites de responsabilité des présentes CGU. “VIKTOIRE” ne garantit pas que le Site et le centre d’appels soient exemptes d’anomalies et que leurs fonctionnements soient ininterrompus.

                    En conséquence, il est rappelé au Client qu’il lui appartient de prendre toute mesure appropriée pour minimiser les conséquences dommageables liées notamment à une possible interruption du fonctionnement du Site ou à une perte des contenus mis à disposition sur le Site.

                    “VIKTOIRE” se réserve le droit de suspendre l’accès au Site ou au centre d’appels en tout ou partie, pour procéder à toute opération de correction, de mise à jour, de maintenance ou pour faire évoluer le Site.</p>
            <div className="div">
                {t('Code of conduct')}</div>
            <p>{t('Each Professional who signs up for our service must accept our "Code of Conduct". The Code of Conduct is available on our Site.The Code of Conduct provides that, by law, any Professional must provide an invoice to the Client before payment is received. If you have not received an invoice from the Professional before making the payment, please refer to our complaints section for instructions on how to contact us and we will investigate the situation.Payment will be made directly to the Professional. We will be informed by the Professional when this payment has been made. We earn a commission for our services from this payment. In the event of a payment problem, we are at your disposal to answer all your questions or complaints.')}</p>
            <div className="div">
                    Le Professionnel</div>
                <p>Lorsqu’un Professionnel souhaite être référencé sur notre Site, nous vérifions que ce dernier dispose :

                        –  des qualifications nécessaires pour fournir les Prestations ;

                        –  des déclarations et enregistrements nécessaires auprès du centre des impôts compétent ;

                        –  d’une assurance adaptée.

                        “VIKTOIRE” communique ces informations sur demande du Client.

                        Toutefois, veuillez noter que “VIKTOIRE” ne vérifie pas sur les informations suivantes :

                        –  la solvabilité du Professionnel ;

                        –  l’historique des faillites du Professionnel ;

                        –  le casier judiciaire du Professionnel.

                        Bien que nous mettions en œuvre nos meilleurs efforts pour nous assurer que le Professionnel qui réalise les Prestations est pleinement qualifié et apte à effectuer le travail, “VIKTOIRE” n’assume aucune responsabilité pour la qualité des Prestations effectuées par le Professionnel.

                        Si vous avez des doutes sur les compétences du Professionnel mis en relation par Intervention Urgence 24, veuillez annuler le service et nous appeler immédiatement et nous étudierons la situation.</p>
                <div className="div">Code de conduite</div>
            <p>Chaque Professionnel qui s’inscrit à notre service doit accepter notre ” Code de conduite “. Le Code de conduite est accessible sur notre Site.

                    Le Code de conduite prévoit que, conformément à la loi, tout Professionnel doit fournir une facture au Client avant que le paiement ne soit perçu. Si vous n’avez pas reçu de facture du Professionnel avant d’effectuer le paiement, veuillez-vous référer à notre section réclamation pour savoir comment nous contacter et nous diligenterons une enquête sur la situation.

                    Le paiement se fera directement auprès du Professionnel. Nous serons informés par le Professionnel lorsque ce paiement aura été effectué. Nous percevons une commission pour nos services à compter de ce paiement. En cas de problème de paiement, nous sommes à votre disposition pour répondre à toutes vos questions ou réclamations.</p>
            <div className="div">Réclamations</div>
            <p>Votre avis compte et nous permet de nous assurer que le Professionnel offre une Prestation de qualité. Nous ne travaillons pas avec des Professionnels qui ne respectent pas notre Code de conduite ou qui ne se conforment pas à leurs conditions de services applicables.

                    Par conséquent, si vous avez une plainte au sujet d’une Prestation qui a été effectué ou du comportement d’un Professionnel que nous vous avons présenté, veuillez nous le faire savoir en utilisant les détails de contact de la page ” Contactez-nous ” de notre Site.

                    Veuillez noter, cependant, que les Professionnels ne sont pas employés par “VIKTOIRE”. Nous transmettrons toutes les plaintes aux Professionnels. Cela permet de s’assurer que le Professionnel connaît la nature de la plainte et qu’il peut évaluer sa responsabilité. Bien que nous examinions toutes les plaintes et cherchions à servir de médiateur entre le Professionnel et le Client, nous ne sommes pas partie à un différend ou à un conflit en ce qui concerne la qualité du travail ou la façon dont il est effectué.

                    Par ailleurs, toutes les demandes de remboursement devront être formulées directement auprès du Professionnel concerné.

                    Nous ferons de notre mieux pour enquêter sur le travail effectué et déciderons avec le Client et le Professionnel d’une solution appropriée.</p>
            <div  className="div">Responsabilité</div>
            <p>Le Client accepte que“VIKTOIRE” est une centrale de réservation technologique et que “VIKTOIRE” ne fournit ni ne participe à la réalisation des Prestations du Professionnel.

                    Dès lors que l’activité d’Intervention Urgence 24 se limite à faciliter la mise en relation entre le Professionnel et les Clients, “VIKTOIRE” ne peut répondre des erreurs, omissions, défauts du Professionnel envers le Client, et inversement.

                    Intervention Urgence 24 circonscrit son activité à la promotion du Professionnel qui déclare posséder les compétences et le professionnalisme requis pour réaliser les prestations de réparation demandées. Intervention Urgence 24 ne garantit donc ni explicitement ni implicitement leur compétence et/ou expertise sur la qualité de l’assistance, l’opportunité de l’intervention, le contenu, la disponibilité ou la ponctualité de l’intervention, l’absence d’erreurs ou la possibilité d’un recours.

                    “VIKTOIRE” ne répond donc pas aux Clients, ni aux tiers, en cas de dommages directs, indirects, spéciaux ou consécutifs, résultant de la qualité travail exécuté par le Professionnel à l’égard de le Client. Il est en outre rappelé qu’à aucun moment “VIKTOIRE” ne se port fort du respect des obligations du Professionnel décrites aux présentes.

                    Nous vous recommandons de vérifier l’ensemble des conditions des services que le Professionnel vous fournit, afin de comprendre s’il cherche à s’exonérer contractuellement de toute responsabilité. Nous vous rappelons que ces clauses exonératoires de responsabilité sont contraires avec le droit de la consommation.</p>
            <div className="div">Droits de propriété intellectuelle</div>
            <p>Les droits d’auteur, les marques et tous les autres droits de propriété intellectuelle sur les éléments contenus sur ce Site nous appartiennent ou appartienne aux concédant de “VIKTOIRE”.

                    Cela comprend les droits relatifs aux bases de données, aux dessins et modèles, au savoir-faire, aux inventions (enregistrées ou non), aux brevets et à tous les droits de demande d’enregistrement.

                    Vous n’êtes autorisé à utiliser ces éléments que dans la mesure où nous ou nos concédants l’ont expressément autorisé par écrit. Vous n’aiderez ni ne faciliterez aucune tierce partie à copier, reproduire, transmettre, distribuer, encadrer, exploiter commercialement ou créer des œuvres dérivées de ces éléments. Si vous prenez connaissance d’une telle distribution ou exploitation commerciale, vous acceptez de nous en informer immédiatement.

                    Les images, logos et noms figurant sur ce Site servent à nous identifier ou à identifier toute autre organisation et ses produits et services. Rien sur ce Site ne donne à quiconque une licence ou un droit d’utilisation d’une image, d’un logo ou d’un nom.</p>
                <div className="div">Droit applicable et tribunal compétent.</div>
                <p>Les présentes CGU sont régies par le droit français.

                        En cas de litige et dans le cas où un accord amiable ne pourrait intervenir, le tribunal compétent sera celui déterminé selon les règles de procédure applicables.</p>
                <div className="div">Liens de tiers</div>
                <p>Les liens (liens) pouvant être présents sur le Site et pointant vers d’autres sites et les ressources mises à disposition par des tiers sont fournis exclusivement à des fins d’information. “VIKTOIRE” n’exerce aucun contrôle sur ces sites ou ressources et n’assume donc aucune responsabilité à leur égard, ainsi que de toute perte ou tout dommage pouvant en résulter pour les Clients du fait de leur utilisation.</p>
                <div className="div">Enregistrement des appels téléphoniques et des courriels</div>
                <p>Nous pouvons enregistrer nos appels et nos courriels afin d’évaluer tous les aspects que nous devons améliorer.

                        Si les appels sont enregistrés, nous nous conformerons à toutes les lois pertinentes relatives à la protection des données. Veuillez consulter notre Politique de confidentialité pour plus d’informations.</p>
                <div className="div">tion</div>
        </div>
    )
}

export default Terms;
