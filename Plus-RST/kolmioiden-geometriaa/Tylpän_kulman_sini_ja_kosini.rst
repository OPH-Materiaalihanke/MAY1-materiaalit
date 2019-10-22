.. _tylpat-kulmat:

Tylpän kulman sini ja kosini
----------------------------

Aiemmin tigonometriset suhteet määriteltiin vain suorakulmaisessa kolmiossa
eli käytännössä vain teräville kulmille. Myöhemmin kurssilla *MAA5
Transkendenttiset funktiot ja yhtälöt* (vanhassa opsissa *MAA7 Trigonometriset
funktiot*) opit lisää trigonometrisista funktioista, jotka määritellään ilman
suorakulmaista kolmiota.

Määritellään nyt kuitenkin tylpän kulman eli suoran kulman ja oikokulman välillä
olevalle kulmalle sini ja kosini laskukaavojen avulla. Alla olevissa esimerkeissä
havainnollistetaan sitä, mistä laskukaavat tulevat.

.. admonition:: **Tylpän kulman sini ja kosini**
  
  
  Tylpän kulman (:math:`90^{\circ} \leq \alpha \leq 180^{\circ}`) sini ja kosini voidaan
  laskea seuraavilla kaavoilla:
  
  .. math:: \sin (180^{\circ} -\alpha) = \sin (\alpha)
  
  .. math:: \cos(180^{\circ}-\alpha)=-\cos (\alpha).
  


.. toggle-header::
  :header: Esimerkki: tylpän kulman sini GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_tylppa-sini-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_tylppa-sini-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "cvxdbnxa", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_tylppa-sini-geo');
         }
       </script>
  
  Otetaan esimerkiksi GeoGebra-appletissa näkyvä alkutilanne, jossa halutaan
  selvittää kulman :math:`\alpha=140^{\circ}` sini. Äsken esitellyn kaavan mukaisesti
  
  .. math::
  
  
     \begin{aligned}
     \sin(140^{\circ}) &= \sin(180^{\circ}-140^{\circ}) \\
     &= \sin(40^{\circ}) \\
     &= 0,64.
     \end{aligned}
  
  GeoGebra-appletissa sekä kulman :math:`140^{\circ}` että :math:`40^{\circ}` oikea kylki on
  x-akselilla, ja vasen kylki on yhden mittainen jana. Huomataan, että kummankin
  kulman tapauksessa tämän janan päätepisteen y-koordinaatti on :math:`0,64`.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: tylpän kulman kosini GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_tylppa-kosini-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_tylppa-kosini-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "zhws49rb", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_tylppa-kosini-geo');
         }
       </script>
  
  Otetaan esimerkiksi GeoGebra-appletissa näkyvä alkutilanne, jossa halutaan
  selvittää kulman :math:`\alpha=140^{\circ}` kosini. Äsken esitellyn kaavan mukaisesti
  
  .. math::
  
  
     \begin{aligned}
     \cos(140^{\circ}) &= -\cos(180^{\circ}-140^{\circ}) \\
     &= -\cos(40^{\circ}) \\
     &= -0,77.
     \end{aligned}
  
  GeoGebra-appletissa sekä kulman :math:`140^{\circ}` että :math:`40^{\circ}` oikea kylki on
  x-akselilla, ja vasen kylki on yhden mittainen jana. Huomataan, että kummankin
  kulman tapauksessa tämän janan päätepisteen x-koordinaatti on :math:`0,77`. Tylpän
  kulman kosinin arvo on negatiivinen, kun taas vastaavan terävän kulman kosini
  on positiivinen.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/kolmioiden-geometriaa-tehtavia#tylpat-kulmat-teht>`__.
