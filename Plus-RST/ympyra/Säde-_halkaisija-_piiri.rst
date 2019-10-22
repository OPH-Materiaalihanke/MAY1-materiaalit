.. _sade:

Säde, halkaisija, piiri
-----------------------

Ympyrän tärkein ja sen määrittävä ominaisuus on ympyrän säde, jota merkitään usein
kirjaimella :math:`r` (englannin kielen sanasta radius). Joskus puhutaan myös
ympyrän halkaisijasta, jota merkitään kirjaimella :math:`d` (englannin kielen sanasta
diameter).

.. raw:: html

   <iframe src="https://www.youtube.com/embed/VJDwMsLZ0E0" height="300" width="400">

Ympyrän piirin kaavan johtaminen Opetus.tv:ssä.

.. raw:: html

   </iframe>

.. admonition:: **Ympyrän säde, halkaisija ja piiri**
  
  
  Ympyrän säde :math:`r` on ympyrän keskipisteen etäisyys sen kehältä. Ympyrän
  halkaisija :math:`d` on jana, joka kulkee ympyrän kehältä kehälle sen keskipisteen
  kautta. Halkaisijan pituus on :math:`d=2r`. Ympyrän piiri :math:`p` on sen kehän pituus, ja
  se lasketaan :math:`p=2 \pi r = \pi d`.
  
  .. figure:: ../images/187306_ympyra.png
     :alt:  
     :width: 40.0%
  
      
  


.. toggle-header::
  :header: Esimerkki: ympyrän piiri GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_piiri-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_piiri-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "tevqtdaa", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_piiri-geo');
         }
       </script>
  
  Yllä olevalla GeoGebra-appletilla voit tutkia ympyrän halkaisijan ja piirin
  suhdetta. Muuta ympyrän halkaisijaa raahaamalla vihreää pistettä, joka on ympyrän
  päällä. Siirrä ympyrää raahaamalla sen sinistä keskipistettä. Tutki ilmestyvää
  liukusäädintä ja valintaruutua. Huomaa, että ympyrän halkaisija mahtuu piiriin
  kolme kertaa, ja piiristä jää vielä hieman yli.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: monikulmion ja ympyrän piirit GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_monikulmio-piiri-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_monikulmio-piiri-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "ge3q88r5", "showResetIcon" : true, "language" : "fi"}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_monikulmio-piiri-geo');
         }
       </script>
  
  Yllä olevassa GeoGebra-appletissa on ympyrä, jonka sisään piirretyn säännöllisen
  monikulmion kulmien määrää voit muuttaa liukusäätimellä. Vasemmalla olevaan
  CAS-ikkunaan on laskettu monikulmion piirin suhde ympyrän piiriin. Koska ympyrän
  säde on :math:`1`, on sen piiri :math:`2 \pi`. Lisäksi CAS-ikkunassa on laskettu monikulmion
  piirin :math:`p1` ero ympyrän piiristä :math:`p2` (muuttujan nimi on ``virhe``) sekä suhteellinen
  virhe piirien välillä (muuttuja ``suhtvirhe``). Tutki virheiden suuruutta, kun
  muutat monikulmion kulmien määrää.
  
  Monikulmion sivun pituus ja siten sen piiri on helpompi mitata kuin ympyrän piiri.
  Siksi lukua :math:`\pi` voidaankin arvioida tällä menetelmällä.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/ympyra-tehtavia#sade-teht>`__.
