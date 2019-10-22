.. _keskuskulma:

Keskuskulma, kehäkulma
----------------------

.. admonition:: **Kehäkulma**
  
  
  Kehäkulma on kulma, jonka kärki on ympyrän kehällä ja jonka kylkinä on kaksi
  jännettä tai jänne ja tangentti. Kehäkulman suuruus on puolet sitä vastaavan
  keskuskulman suuruudesta. Samaa kaarta vastaavat kehäkulmat ovat aina yhtä suuria.
  


.. toggle-header::
  :header: Todistus **Näytä/Piilota**
  
  Todistetaan kehäkulmalause eli lause “Kehäkulman suuruus on puolet sitä vastaavan
  keskuskulman suuruudesta”. Tehdään todistus kolmessa vaiheessa:
  
  1. ympyrän keskipiste :math:`O` on kehäkulman :math:`\beta` kyljellä,
  2. ympyrän keskipiste :math:`O` on kehäkulman :math:`\beta` aukeamassa ja
  3. ympyrän keskipiste :math:`O` ei ole kehäkulman :math:`\beta` aukeamassa.
  
  --------------
  
  Tarkastellaan ensin tapausta, jossa jänne :math:`AC` kulkee ympyrän keskisteen :math:`O`
  kautta. Käytetään alla olevan kuvan merkintöjä.
  
  .. figure:: ../images/188582_kehakulmalause_1.png
     :alt:  
     :width: 60.0%
  
      
  
  Huomataan, että pisteet :math:`O`, :math:`B` ja :math:`C` muodostavat tasakylkisen kolmion, jonka
  kantana on jänne :math:`BC` ja kylkinä janat :math:`BO` sekä :math:`CO`. Kyljet ovat keskenään
  yhtä pitkiä, koska molemmat ovat ympyrän säteitä. Tasakylkisen kolmion
  kantakulmat ovat keskenään yhtä suuria, joten :math:`\beta = \gamma`. Koska kolmion
  kulmien summa on :math:`180^{\circ}`, saadaan yhtälö
  
  .. math:: \beta + \gamma + \delta = 180^{\circ}.
  
  Lisäksi huomataan, että kulmat :math:`\alpha` ja :math:`\delta` ovat vieruskulmia, jolloin
  niiden summa on :math:`180^{\circ}` eli :math:`\alpha + \delta = 180^{\circ}`. Ratkaistaan
  tästä kulma :math:`\delta`, jolloin saadaan :math:`\delta = 180^{\circ} - \alpha`.
  Sijoitetaan tämä sekä :math:`\gamma = \beta` kolmion kulmien summan lausekkeeseen,
  jolloin saadaan
  
  .. math:: \beta + \beta + 180^{\circ} - \alpha = 180^{\circ} \Leftrightarrow \beta = \frac{\alpha}{2}.
  
  Eli kehäkulma on puolet vastaavasta keskuskulmasta.
  
  --------------
  
  Tarkastellaan seuraavaksi tapausta, jossa ympyrän keskipiste :math:`O` on kehäkulman
  :math:`\beta` aukeamassa. Käytetään alla olevan kuvan merkintöjä.
  
  .. figure:: ../images/188586_kehakulmalause_2.png
     :alt:  
     :width: 60.0%
  
      
  
  Jaetaan kulma :math:`\alpha` kahdeksi kulmaksi :math:`\gamma` ja :math:`\delta` janalla :math:`CD`, joka
  kulkee ympyrän keskipisteen :math:`O` kautta. Sama jana jakaa kehäkulman :math:`\beta`
  kulmiksi :math:`\epsilon` ja :math:`\zeta`. Voimme tarkastella ensin pelkästään janan :math:`CD`
  oikealla puolella olevia kulmia ja sitten sen vasemmalla puolella olevia.
  Tällöin todistuksen edellisen kohdan perusteella saadaan
  :math:`\epsilon = \frac{\gamma}{2}` ja :math:`\zeta=\frac{\delta}{2}`.
  
  Tiedetään, että :math:`\alpha = \gamma + \delta`. Lisäksi tiedetään, että
  :math:`\beta = \epsilon + \zeta`. Sijoitetaan tähän aiemmat yhtälöt, jolloin saadaan
  
  .. math:: \beta = \frac{\gamma}{2} + \frac{\delta}{2} = \frac{\gamma + \delta}{2} = \frac{\alpha}{2}.
  
  Eli kehäkulma :math:`\beta` on puolet vastaavasta keskuskulmasta :math:`\alpha`.
  
  --------------
  
  Tarkastellaan lopuksi tapausta, jossa ympyrän keskipiste :math:`O` ei ole kehäkulman
  :math:`\beta` aukeamassa. Käytetään alla olevan kuvan merkintöjä.
  
  .. figure:: ../images/188593_kehakulmalause_3.png
     :alt:  
     :width: 60.0%
  
      
  
  Huomataan, että :math:`\alpha = \epsilon - \gamma` ja että :math:`\beta = \zeta - \delta`.
  Todistuksen ensimmäisen kohdan perusteella voidaan kirjoittaa
  
  .. math:: \beta = \zeta - \delta = \frac{\epsilon}{2} - \frac{\gamma}{2} = \frac{\epsilon - \gamma}{2} = \frac{\alpha}{2}.
  
  Kehäkulma :math:`\beta` on siis puolet keskuskulmasta :math:`\alpha`.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: kehäkulma GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_kehakulma-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_kehakulma-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "addnxzns", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_kehakulma-geo');
         }
       </script>
  
  Yllä olevassa GeoGebra-appletissa on merkitty vihreällä keskuskulma ja pinkillä
  samoja pisteitä vastaava kehäkulma. Kokeile muuttaa kulmien suuruuksia, ja
  huomaa, että kehäkulma on aina puolet vastaavan keskuskulman suuruudesta.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: kaksi kehäkulmaa GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_tupla-kehakulma-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_tupla-kehakulma-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "qfceu3yc", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_tupla-kehakulma-geo');
         }
       </script>
  
  Yllä olevassa GeoGebra-appletissa on piirretty kaksi samaa ympyrän kaarta
  vastaavaa kehäkulmaa. Kokeile siirtää kuvion pisteitä ja huomaa, että
  kehäkulmat pysyvät koko ajan yhtä suurina keskenään.
  
  --------------
  


Kehäkulmalauseen erityistapauksena on Thaleen lause. Sen mukaan puoliympyrän
sisältämä kehäkulma on suora. Kehäkulmalauseen perusteella tämä on selvä asia,
sillä puoliympyrän rajaava keskuskulma on :math:`180^{\circ}`, jolloin kehäkulman
on oltava puolet siitä eli :math:`90^{\circ}`.

.. toggle-header::
  :header: Esimerkki: Thaleen lause GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_thaleen-lause-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_thaleen-lause-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "jqnrquw9", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_thaleen-lause-geo');
         }
       </script>
  
  Yllä olevassa GeoGebra-appletissa voit kokeilla siirtää sinisiä pisteitä, jotka
  kuitenkin pysyvät koko ajan ympyrän vastakkaisilla reunoilla. Kokeile lisäksi
  siirtää oranssia pistettä ja huomaa, että :math:`180^{\circ}` kulmaa vastaava kehäkulma
  on aina suora kulma.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/ympyra-tehtavia#keskuskulma-teht>`__.
