.. _kolmion-ala:

Kolmion pinta-ala
-----------------

Kolmion pinta-ala voidaan laskea tutulla tavalla, eli kerrotaan kolmion kanta
ja korkeus keskenään ja jaetaan tulos kahdella. Joskus kolmion korkeus on
kuitenkin vaikea määrittää. Yleisemmässä tapauksessa kolmion pinta-ala voidaan
määrittää vain, kun tiedetään kahden kolmion sivun pituudet ja niiden sivujen
välisen kulman suuruus.

.. raw:: html

   <iframe src="https://www.youtube.com/embed/xKnpHecVy0M" height="300" width="400">

Kolmion alan trigonometrinen laskukaava Matikkamatskuissa

.. raw:: html

   </iframe>

.. admonition:: **Kolmion pinta-ala**
  
  
  Jos kolmion kannan pituus on :math:`a` ja korkeus :math:`h`, kolmion pinta-ala on
  
  .. math:: A=\frac{1}{2} ah.
  
  Jos kolmion kahden sivun pituudet ovat :math:`a` ja :math:`b` ja näiden välisen kulman
  suuruus :math:`\alpha`, voidaan kolmion pinta-ala ilmaista lausekkeella
  
  .. math:: A=\frac{1}{2} ab \sin \alpha.
  
  .. figure:: ../images/187191_pinta-ala.png
     :alt:  
     :width: 60.0%
  
      
  


.. toggle-header::
  :header: Todistus **Näytä/Piilota**
  
  Todistetaan kolmion pinta-alan trigonometrinen kaava kolmessa tapauksessa:
  
  1. kulma :math:`\alpha` on suora,
  2. kulma :math:`\alpha` on terävä ja
  3. kulma :math:`\alpha` on tylppä.
  
  --------------
  
  Jos kulma :math:`\alpha` on suora, muodostuu alla olevan kuvion mukainen kolmio.
  
  .. figure:: ../images/188458_ala-todistus-suoa.png
     :alt:  
     :width: 60.0%
  
      
  
  Tämän kolmion pinta-ala saadaan laskettua suoraan perinteisellä pinta-alan
  kaavalla, sillä kolmion pinta-ala on puolet sellaisen suorakulmion, jonka sivujen
  pituudet ovat :math:`a` ja :math:`b`, pinta-alasta. Koska :math:`\sin 90^{\circ}=1`, voidaan
  kyseinen termi lisätä pinta-alan arvoa muuttamatta. Kolmion pinta-ala on siis
  
  .. math:: A=\frac{1}{2} ab = \frac{1}{2}ab \sin \alpha.
  
  --------------
  
  Jos kulma :math:`\alpha` on terävä, muodostuu alla olevan kuvan mukainen kuvio. Siihen
  on merkitty kolmion korkeusjana :math:`h`, joka on kohtisuorassa kolmion kantaa :math:`a`
  vasten.
  
  .. figure:: ../images/188459_ala-todistus-terava.png
     :alt:  
     :width: 60.0%
  
      
  
  Kolmion pinta-ala saadaan perinteisen kaavan mukaisesti kertomalla kanta ja
  korkeus keskenään sekä jakamalla saatu tulo kahdella. Nyt kolmion korkeus on :math:`h`,
  joka voidaan ilmaista sivun :math:`b` sekä kulman :math:`\alpha` avulla
  
  .. math:: \sin \alpha = \frac{h}{b} \quad \Leftrightarrow \quad h = b \sin \alpha.
  
  Sijoitetaan tämä kolmion pinta-alan lausekkeeseen, jolloin saadaan
  
  .. math:: A=\frac{1}{2} ah = \frac{1}{2} a b \sin \alpha
  
  mikä on haluttu tulos.
  
  --------------
  
  Jos kulma :math:`\alpha` on tylppä, saadaan alla olevan kuvan kaltainen kolmio.
  
  .. figure:: ../images/188460_ala-todistus-tylppa.png
     :alt:  
     :width: 60.0%
  
      
  
  Nyt kolmion korkeusjana :math:`h` on kolmion ulkopuolella. Se voidaan ilmaista sivun
  :math:`b` ja kulman :math:`\beta` avulla seuraavasti:
  
  .. math:: \sin \beta = \frac{h}{b} \quad \Leftrightarrow \quad h = b \sin \beta.
  
  Haluaisimme ilmaista pinta-alan lausekkeen sivujen :math:`a` ja :math:`b` sekä kulman
  :math:`\alpha` avulla. Siksi meidän pitäisi löytää keino kuvata :math:`\sin \beta` kulman
  :math:`\alpha` avulla.
  
  Huomataan, että
  
  .. math:: \alpha + \beta = 180^{\circ} \quad \Leftrightarrow \quad \beta = 180 ^{\circ} - \alpha
  
  jolloin
  
  .. math:: \sin \beta = \sin (180^{\circ}-\alpha)=\sin \alpha.
  
  Viimeinen yhtäsuuruus saadaan tylpän kulman sinin lausekkeesta. Nyt siis
  :math:`h = b \sin \alpha`. Sijoitetaan korkeuden lauseke kolmion pinta-alan
  lausekkeeseen:
  
  .. math:: A= \frac{1}{2} ah = \frac{1}{2} a b \sin \alpha
  
  joka on siinä muodossa kuin sen halusimme.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: kolmion pinta-alan lauseke GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_kolmio-ala-geo" style="height: 500">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_kolmio-ala-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "njexmgtn", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_kolmio-ala-geo');
         }
       </script>
  
  Yllä olevassa GeoGebra-appletissa käydään läpi kolmion pinta-alan trigonometrisen
  laskukaavan johtaminen. Alussa johdetaan suorakulmaisen kolmion pinta-alan
  laskukaava lähtien suorakulmion pinta-alan laskukaavasta. Suorakulmion, jonka
  sivujen pituudet ovat :math:`a` ja :math:`h`, pinta-ala on :math:`A_s=ah`. Kun suorakulmio
  puolitetaan lävistäjän kohdalta, saadaan kaksi yhtä suurta kolmiota, jolloin yhden
  kolmion pinta-ala on puolet suorakulmion pinta-alasta, eli :math:`A_k=\frac{1}{2}A_s=\frac{1}{2}ah`.
  
  Tarkastellaan yleisesti kolmiota, jonka kanta on sama kuin suorakulmiossa eli
  :math:`a`, toinen sivu on :math:`b` ja korkeus on :math:`h`. Kolmio ei nyt kuitenkaan ole
  suorakulmainen. Lisäksi tiedetään, että sivujen :math:`a` ja :math:`b` välinen kulma on :math:`\alpha`.
  Kuvioon muodostuu suorakulmainen kolmio, koska korkeusjana :math:`h` on aina
  kohtisuorassa kolmion kantaan :math:`a`. Näillä merkinnöillä voidaan siis laskea
  :math:`\sin(\alpha)=\frac{h}{b}`. Ratkaistaan tästä yhtälöstä :math:`h=b \sin(\alpha)`.
  Sijoitetaan tämä :math:`h`:n lauseke nyt tunnettuun kolmion pinta-alan laskukaavaan
  
  .. math:: A=\frac{1}{2}ah=\frac{1}{2}ab \sin(\alpha).
  
  Näin saatiin johdettua kolmion pinta-alan trigonometrinen laskukaava.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/kolmioiden-geometriaa-tehtavia#kolmion-ala-teht>`__.
