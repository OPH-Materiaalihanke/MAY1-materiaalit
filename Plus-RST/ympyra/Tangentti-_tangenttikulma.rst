.. _tangentti:

Tangentti, tangenttikulma
-------------------------

Sanalla tangentti voidaan matematiikassa tarkoittaa kahta asiaa, ja ne molemmat
liittyvät geometriaan. Yleensä asiayhteydestä selviää, puhutaanko
trigonometrisesta funktiosta nimeltä tangentti vai käyrää tasan yhdessä
pisteessä sivuava suora. Tässä luvussa puhutaan tangentista sen jälkimmäisessä
merkityksessä.

.. admonition:: **Tangentti**
  
  
  Tangentti on suora, joka kohtaa ympyrän vain yhdessä pisteessä. Ympyrän
  tangentti on kohtisuorassa sivuamispisteeseen piirrettyä sädettä vastaan.
  
  .. figure:: ../images/187493_tangentti.png
     :alt:  
     :width: 60.0%
  
      
  
  .. raw:: html
  
     <iframe src="https://www.youtube.com/embed/UluflgOnlHs" height="300" width="400">
  
  Tangenttikulma Opetus.tv:ssä.
  
  .. raw:: html
  
     </iframe>
  


.. admonition:: **Tangenttikulma**
  
  
  Tangenttikulma on kahden ympyrän tangentin leikkauspisteeseen muodostuva kulma,
  jonka aukeamassa ympyrä on. Tangenttikulman ja sitä vastaavan keskuskulman summa
  on aina :math:`180^{\circ}`.
  


.. toggle-header::
  :header: Todistus **Näytä/Piilota**
  
  Todistetaan tangenttikulmalause, jonka mukaan tangenttikulman ja sitä vastaavan
  keskuskulman summa on aina :math:`180^{\circ}`. Käytetään alla olevan kuvan merkintöjä.
  
  .. figure:: ../images/188580_tangenttikulma_tod2.png
     :alt:  
     :width: 70.0%
  
      
  
  Ympyrän keskipiste :math:`A`, sen kehän pisteet :math:`B` ja :math:`D` sekä näiden kehän pisteiden
  kautta piirrettyjen tangenttien leikkauspiste :math:`C` muodostavat nelikulmion
  :math:`ABCD`. Nelikulmion kulmien summa on aina :math:`360^{\circ}`. Ympyrän säteen :math:`AB` sekä
  tangentin :math:`BC` välinen kulma on aina suora. Samoin säteen :math:`AD` ja tangentin :math:`CD`
  välinen kulma on aina suora. Tästä saadaan, että on oltava
  
  .. math:: \alpha + \beta = 360^{\circ} - 2 \cdot 90^{\circ} = 180^{\circ}.
  
  Toisin sanoen, tangenttikulman ja sitä vastaavan keskuskulman summan on oltava
  :math:`180^{\circ}`.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: tangenttikulma GeoGebralla **Näytä/Piilota**
  
  .. raw:: html
  
     <div id="ggbFrame_tangenttikulma-geo" style="height: 550">
  
  Tuo hiiri tähän ladataksesi Geagebra Appin
  
  .. raw:: html
  
     <hr>
  
  .. raw:: html
  
     </div>
  
  .. raw:: html
  
     <script>
         var para = document.getElementById("ggbFrame_tangenttikulma-geo");
         para.addEventListener("mouseover", swap );
         function swap(){
           para.innerHTML = "";
           para.removeEventListener("mouseover", swap );
           var ggbApp = new GGBApplet({"material_id" : "yjp74zwa", "showResetIcon" : true}, true);
           ggbApp.evalCommand("");
           ggbApp.inject('ggbFrame_tangenttikulma-geo');
         }
       </script>
  
  Yllä olevalla GeoGebra-appletilla voit tutkia tangenttikulman ja sitä vastaavan
  keskuskulman suuruuksia. Huomaa, että tangenttien ja ympyrän säteiden väliset
  kulmat ovat koko ajan suoria kulmia, vaikka sinisiä pisteitä siirtäisikin.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/ympyra-tehtavia#tangentti-teht>`__.
