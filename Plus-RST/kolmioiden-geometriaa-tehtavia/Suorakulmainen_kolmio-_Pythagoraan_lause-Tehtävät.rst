.. _pythagoras-teht:

Suorakulmainen kolmio, Pythagoraan lause
----------------------------------------

Tämän kappaleen teoria on kappaleessa `Suorakulmainen kolmio, Pythagoraan lause <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/kolmioiden-geometriaa#pythagoras>`__.

.. _teht_suorakulmaisen_hypotenuusa:

Tehtävä
~~~~~~~

.. submit:: mathcheck_pythagoras1 1
  :config: exercises/pythagoras1/config.yaml
  

.. _teht_S11T1b:

Tehtävä (S2011/1b)
~~~~~~~~~~~~~~~~~~

Suorakulmaisen kolmion hypotenuusan pituus on :math:`5` ja toisen kateetin pituus :math:`2`.
Laske toisen kateetin pituus.

.. submit:: mathcheck_pythagoras2 1
  :config: exercises/pythagoras2/config.yaml
  

.. _teht_S15T10:

Tehtävä (S2015/10)
~~~~~~~~~~~~~~~~~~

a) Suorakulmaisen kolmion kateettien ja hypotenuusan pituudet :math:`a<b<c` muodostavat
   geometrisen jonon. Määritä suhdeluku :math:`q`.

.. submit:: mathcheck_s15t10a 1
  :config: exercises/s15t10a/config.yaml
  

b) Suorakulmaisen kolmion kateettien ja hypotenuusan pituudet :math:`a<b<c` muodostavat
   aritmeettisen jonon. Määritä suhde :math:`a:b:c`.

.. submit:: mathcheck_s15t10b_a 1
  :config: exercises/s15t10b_a/config.yaml
  

.. submit:: mathcheck_s15t10b_b 1
  :config: exercises/s15t10b_b/config.yaml
  

.. submit:: mathcheck_s15t10b_c 1
  :config: exercises/s15t10b_c/config.yaml
  

.. _teht_geogebra_puu:

Tehtävä
~~~~~~~

Seitsemän metriä korkea puu kasvaa kohtisuoraan maan pintaa vastaan. Puu
taittuu kahden metrin korkeudelta niin, että puun latvaosa osuu maahan. Latva
ja tyviosa eivät irtoa toisistaan. Piirrä tilanteesta mallikuva
oikeanpuoleiselle piirtoalueelle (ei vaikuta tehtävän pisteytykseen) ja laske
vasemmanpuoleiselle CAS-alueelle, kuinka
suuri kulma on maanpinnan ja taittuneen latvan välillä.

Anna vastaus vasemmanpuoleisella CAS-alueella tallentamalla se muuttujaan
nimeltä **v**. Pyöristä vastaus kokonaislukujen tarkkuudelle käyttämällä
komentoa ``round``.

.. submit:: geogebra_puu-kaatuu 1
  :config: exercises/puu-kaatuu/config.yaml
  

.. toggle-header::
  :header: Vinkkejä GeoGebran käyttöön **Näytä/Piilota**
  
  -  **Tekstin lisääminen**
  
  Monesti on hyödyllistä lisätä tehtävän ratkaisuun tekstiä, jossa selität, miten
  teit tehtävän. Valitse CAS-alueen oikeassa yläkulmassa oleva valikko
  |image0| ja valitse sieltä
  teksti |image1|. Nyt voit
  kirjoittaa tavallista tekstiä niin pitkään, kunnes painat enteriä ja teksti
  tallentuu.
  
  -  **Muuttujan tallentaminen**
  
  Joskus on hyödyllistä tallentaa lukuarvo tai vastaus muuttujaan. Tällöin
  lukuarvon käyttäminen myöhemmin on kätevää. Jos haluat sijoittaa muuttujaan
  *a* arvon 4, kirjoita komento ``a := 4``. Jos myöhemmin haluat laskea laskun :math:`5a`,
  kirjoita komento ``5*a``, jolloin saat vastaukseksi ``20``.
  
  -  **Yhtälön ratkaiseminen**
  
  Jos haluat ratkaista muuttujan :math:`a` yhtälöstä :math:`a^2+3a-4=0`, syötä CAS-laskimeen
  komento ``Ratkaisut(a^2+3a-4,a)``. Vastaukseksi saat listan ``{-4,1}``. Helpoiten
  ratkaisuihin pääsee käsiksi, kun tallentaa ne muuttujaan:
  ``vastaukset := Ratkaisut(a^2+3a-4,a)``. Tällöin komento ``vastaukset(1)`` tuottaa
  luvun ``-4``, ja komento ``vastaukset(2)`` tuottaa luvun ``1``.
  
  -  **Lukuarvon näyttäminen**
  
  Joskus GeoGebra näyttää vastauksen hyvinkin monimutkaisessa muodossa. Käytä
  tällöin komentoa ``Lukuarvona()``. Jos kirjoitat esimerkiksi komennon
  ``a:=sin^(-1)(1/2)``, GeoGebra tulostaa vastaukseksi saman eli ``a:=sin^(-1)(1/2)``.
  Jos haluat vastauksen lukuarvona, kirjoita komento ``Lukuarvona(a)``, jolloin
  GeoGebra tulostaa ``60°``.
  


.. |image0| image:: ../images/190038_20px-Menu_view_cas.svg.png
   :class: smallimage
.. |image1| image:: ../images/190039_20px-Stylingbar_text.svg.png
   :class: smallimage

