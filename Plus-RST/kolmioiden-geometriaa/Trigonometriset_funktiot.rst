.. _trig:

Trigonometriset funktiot
------------------------

Suorakulmaisen kolmion terävien kulmien suuruudet voidaan ratkaista, jos
tiedetään kolmion kateettien tai kateetin ja hypotenuusan pituudet. Tämä on
mahdollista, sillä kolmion sivujen suhteet ovat tietyillä kulmilla aina vakioita.
Näitä suhteita kutsutaan `trigonometrisiksi funktioiksi <https://matta.hut.fi/matta2/isom/html/trigfkt1.html>`__.

.. raw:: html

   <iframe src="https://www.youtube.com/embed/ebfM5cR_LTg" height="300" width="400">

Trigonometriset funktiot Matikkamatskuissa

.. raw:: html

   </iframe>

.. admonition:: **Suorakulmaisen kolmion sini, kosini ja tangentti**
  
  
  Suorakulmaisessa kolmiossa kulman :math:`\alpha` sini, kosini ja tangentti
  tarkoittavat seuraavia suhteita:
  
  .. math:: \sin(\alpha)=\frac{\text{kulman vastainen kateetti}}{\text{hypotenuusa}}=\frac{a}{c}
  
  .. math:: \cos(\alpha)=\frac{\text{kulman viereinen kateetti}}{\text{hypotenuusa}}=\frac{b}{c}
  
  .. math:: \tan(\alpha)=\frac{\text{kulman vastainen kateetti}}{\text{kulman viereinen kateetti}}=\frac{a}{b}
  
  .. figure:: ../images/187171_suorakulmainen_kolmio2.png
     :alt:  
     :width: 50.0%
  
      
  


.. toggle-header::
  :header: Esimerkki: trigonometrisia funktioita GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_trig-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_trig-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "aa7eb6kz", "showResetIcon" : true, "language" : "fi"}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_trig-geo');
         }
       </script>
  
  Kokeile laskea eri kulmien sini, kosini ja tangentti sekä sivujen suhteet
  vasemmalla olevassa cas-ikkunassa. Voit syöttää uuden komennon napauttamalla
  hiirellä rivinumeron 3 vieressä. Voit käyttää kuvassa näkyviä muuttujien nimiä.
  Kokeile myös raahata kolmion kärkipisteitä ja tutki, miten lukuarvot muuttuvat.
  
  **Muutama ohje cas-laskimen käyttöön:**
  
  -  Jos haluat laskea kuvan :math:`\gamma`-kulman sinin, kirjoita riville suoraan :math:`\sin(\gamma)`.
  -  Kreikkalaiset kirjaimet saat näppäimistöltä:
  
     -  Alt + a = :math:`\alpha`
     -  Alt + b = :math:`\beta`
     -  Alt + g = :math:`\gamma`
  
  -  Jos laskin antaa vastauksen, kirjoita komento Lukuarvona($n), missä korvaat n-kirjaimen sen rivin numerolla, jonka likiarvon haluat näkyviin. Voit myös kirjoittaa suoraan Lukuarvona(\ :math:`\sin(\gamma)`).
  -  Kokeile ensin laskea jonkin kulman sini ja sen jälkeen muuttaa pisteiden paikkaa kuvaajassa. Mitä sinin arvolle tapahtuu?
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/kolmioiden-geometriaa-tehtavia#trig-teht>`__.
