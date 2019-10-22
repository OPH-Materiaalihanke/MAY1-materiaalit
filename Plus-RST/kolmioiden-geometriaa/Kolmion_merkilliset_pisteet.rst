.. _merkilliset-pisteet:

Kolmion merkilliset pisteet
---------------------------

Kolmioihin liittyy paljon mielenkiintoisia kaikkia kolmioita koskevia tuloksia.
Seuraavaksi esitellään tuloksia liittyen kolmion kulmanpuolittajiin,
keskijanoihin ja keskinormaaleihin. Kokeile kaikissa GeoGebra-havainnollistuksissa
raahata kolmion kärkipisteitä ja tutkia, mitä kuvassa tapahtuu.

.. raw:: html

   <iframe src="https://www.youtube.com/embed/2avC7R8nM5g" height="300" width="400">

Kulmanpuolittajalause ja kolmion merkilliset pisteet Matikkamatskuissa

.. raw:: html

   </iframe>

Kulmanpuolittajalause
~~~~~~~~~~~~~~~~~~~~~

Kolmion jokaisen kulman kulmanpuolittajat leikkaavat yhdessä pisteessä, joka on
aina kolmion sisällä. Tämä piste on myös suurimman mahdollisen kolmion sisään
piirretyn ympyrän keskipiste. Ympyrän säde voidaan laskea kaavalla

.. math:: r=\sqrt{\frac{(s-a)(s-b)(s-c)}{s}},

missä :math:`a`, :math:`b` ja :math:`c` ovat kolmion sivujen pituudet ja :math:`s` on kolmion piirin puolikas

.. math:: s=\frac{1}{2}(a+b+c).

.. raw:: html

   <div id="ggbFrame_kulmanpuolittajat-geo" style="height: 550">

Tuo hiiri tähän ladataksesi Geagebra Appin

.. raw:: html

   <hr>

.. raw:: html

   </div>

.. raw:: html

   <script>
       var para = document.getElementById("ggbFrame_kulmanpuolittajat-geo");
       para.addEventListener("mouseover", swap );
       function swap(){
         para.innerHTML = "";
         para.removeEventListener("mouseover", swap );
         var ggbApp = new GGBApplet({"material_id" : "f6mjsuqm", "showResetIcon" : true}, true);
         ggbApp.evalCommand("");
         ggbApp.inject('ggbFrame_kulmanpuolittajat-geo');
       }
     </script>

Keskijanalause
~~~~~~~~~~~~~~

Kun kolmion sivujen keskipisteet yhdistetään vastakkaisiin kulmiin, saadaan
kolme keskijanaa. Nämä keskijanat leikkaavat yhdessä pisteessä, joka jakaa
jokaisen keskijanan suhteessa :math:`2:1`. Leikkauspiste on aina kolmion sisällä ja
sitä kutsutaan myös kolmion painopisteeksi.

.. raw:: html

   <div id="ggbFrame_keskijanat-geo" style="height: 550">

Tuo hiiri tähän ladataksesi Geagebra Appin

.. raw:: html

   <hr>

.. raw:: html

   </div>

.. raw:: html

   <script>
       var para = document.getElementById("ggbFrame_keskijanat-geo");
       para.addEventListener("mouseover", swap );
       function swap(){
         para.innerHTML = "";
         para.removeEventListener("mouseover", swap );
         var ggbApp = new GGBApplet({"material_id" : "eamafmzq", "showResetIcon" : true}, true);
         ggbApp.evalCommand("");
         ggbApp.inject('ggbFrame_keskijanat-geo');
       }
     </script>

Keskinormaalilause
~~~~~~~~~~~~~~~~~~

Kolmion sivujen keskinormaalit leikkaavat yhdessä pisteessä, joka on kolmion
ympäri piirretyn ympyrän keskipiste. Teräväkulmaisen kolmion tapauksessa piste
on kolmion sisäpuolella ja tylppäkulmaisella kolmiolla se on kolmion ulkopuolella.
Suorakulmaisella kolmiolla leikkauspiste on täsmälleen hypotenuusan keskipisteessä.

.. raw:: html

   <div id="ggbFrame_keskinormaali-geo" style="height: 550">

Tuo hiiri tähän ladataksesi Geagebra Appin

.. raw:: html

   <hr>

.. raw:: html

   </div>

.. raw:: html

   <script>
       var para = document.getElementById("ggbFrame_keskinormaali-geo");
       para.addEventListener("mouseover", swap );
       function swap(){
         para.innerHTML = "";
         para.removeEventListener("mouseover", swap );
         var ggbApp = new GGBApplet({"material_id" : "rpznauxy", "showResetIcon" : true}, true);
         ggbApp.evalCommand("");
         ggbApp.inject('ggbFrame_keskinormaali-geo');
       }
     </script>

Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/kolmioiden-geometriaa-tehtavia#merkilliset-pisteet-teht>`__.
