.. _keskuskulma_kaaren_pituus:

Keskuskulma, kaaren pituus, sektorin pinta-ala
----------------------------------------------

.. admonition:: **Keskuskulma**
  
  
  Kulma, jonka kärki on ympyrän keskipisteessä, on keskuskulma.
  
  .. raw:: html
  
     <iframe src="https://www.youtube.com/embed/7nM1oH8HtXA" height="300" width="400">
  
  Ympyrän kaaren pituuden kaavan johtaminen Opetus.tv:ssä.
  
  .. raw:: html
  
     </iframe>
  


.. admonition:: **Ympyrän kaaren pituus**
  
  
  Keskuskulman :math:`\alpha` kyljet rajaavat ympyrän kehältä kaaren, jonka pituus :math:`b`
  voidaan laskea seuraavasti
  
  .. math:: b = \frac{\alpha}{360 ^{\circ}} 2\pi r.
  


.. toggle-header::
  :header: Todistus **Näytä/Piilota**
  
  Perustellaan ympyrän kaaren pituuden laskukaava
  
  .. math:: b=\frac{\alpha}{360^{\circ}} 2 \pi r.
  
  Laskukaavan jälkimmäinen termi :math:`2 \pi r` on sama kuin koko ympyrän piiri.
  Laskukaavan ensimmäinen termi :math:`\frac{\alpha}{360^{\circ}}` kuvaa sitä, kuinka
  suuri osa kokonaisen ympyrän piiristä otetaan.
  
  Jos kaarta vastaavan keskuskulman suuruus on esimerkiksi :math:`180^{\circ}`, on
  kyseisen kaaren pituus luonnollisesti puolet kokonaisen ympyrän kehän pituudesta,
  sillä :math:`\frac{180^{\circ}}{360^{\circ}}=\frac{1}{2}`.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: kaaren pituuden laskeminen **Näytä/Piilota**
  
  Tarkastellaan alla olevan kuvan kaltaista sektoria.
  
  .. figure:: ../images/187785_sinin-appoksimointi.png
     :alt:  
  
      
  
  Ratkaistaan kaaren :math:`\ell` pituus. Jos kulma :math:`\alpha` on ilmaistu radiaaneissa,
  edellinen kaava muuttuu muotoon
  
  .. math:: b=\frac{\alpha}{2 \pi} 2 \pi r = \alpha r.
  
  Nyt siis kaarelle :math:`\ell=\alpha r`. Pystysuoran pituuden :math:`h` suuruus voidaan
  määrittää sinin avulla:
  
  .. math:: \sin \alpha= \frac{h}{r} \quad \Leftrightarrow \quad h = r \sin \alpha.
  
  Kun kulmaa :math:`\alpha` pienennetään, janan :math:`h` ja kaaren :math:`\ell` pituudet lähestyvät
  toisiaan. Voidaan siis merkitä, että kun :math:`\alpha` on pieni,
  
  .. math::
  
  
     \begin{aligned}
     h & \approx \ell \\
     r \sin \alpha & \approx \alpha r \quad |:r \\
     \sin \alpha & \approx \alpha
     \end{aligned}
  
  Eli kun kulma :math:`\alpha` on pieni, sen siniä voidaan approksimoida kulman arvolla
  (radiaaneina).
  
  --------------
  


.. raw:: html

   <iframe src="https://www.youtube.com/embed/wx6YvU_ezs4" height="300" width="400">

Ympyräsektorin pinta-alan kaavan johtaminen Opetus.tv:ssä.

.. raw:: html

   </iframe>

.. admonition:: **Ympyrän sektorin pinta-ala**
  
  
  Keskuskulman :math:`\alpha` kyljet rajaavat ympyrän sisältä sektorin, jonka pinta-ala
  :math:`A_{SEK}` voidaan laskea seuraavasti:
  
  .. math:: A_{SEK}= \frac{\alpha}{360 ^{\circ}} \pi r^2.
  
  Jos tiedetään keskuskulmaa vastaavan kaaren pituus :math:`b`, voidaan sektorin
  pinta-ala laskea myös kaavalla
  
  .. math:: A_{SEK}=\frac{br}{2}.
  


.. toggle-header::
  :header: Todistus **Näytä/Piilota**
  
  Sektorin pinta-alan ylempi kaava voidaan perustella samalla tavalla kuin ympyrän
  kaaren pituuden kaava perusteltiin aiemmin. Toinen kaava voidaan perustella
  sijoittamalla siihen :math:`b=\frac{\alpha}{360^{\circ}} 2 \pi r`, jolloin saadaan
  
  .. math:: A_{SEK}=\frac{\alpha}{360^{\circ}} 2 \pi r \cdot \frac{r}{2}=\frac{\alpha}{360^{\circ}} \pi r^2
  
  joka on sama kuin sektorin pinta-alan ylempi kaava.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: ympyräsektorin pinta-alan ja keskuskulman laskeminen **Näytä/Piilota**
  
  Laske alla olevan ympyräsektorin pinta-ala. Kuinka suuri keskuskulma :math:`\alpha` on?
  
  .. figure:: ../images/187477_sektori-ala_esim.png
     :alt:  
     :width: 50.0%
  
      
  
  Nyt kaaren pituus on :math:`b=8` ja säde :math:`r=4`. Sektorin pinta-ala saadaan laskettua
  näiden tietojen avulla:
  
  .. math:: A=\frac{br}{2}=\frac{8 \cdot 4}{2}=16.
  
  Nyt kysytyn keskuskulman suuruus voidaan ratkaista sektorin pinta-alan toisesta
  kaavasta tai kaaren pituuden kaavan avulla. Ratkaistaan tässä keskuskulma
  ensimmäisellä tavalla. Ratkaistaan :math:`\alpha` sektorin pinta-alan kaavasta ja
  sijoitetaan arvot kaavaan
  
  .. math::
  
  
     \begin{aligned}
     A&=\frac{\alpha}{360^{\circ}} \pi r^2 &\quad &|\cdot 360^{\circ} \\
     360 ^{\circ} A&= \alpha \pi r^2 &\quad &|:\pi r^2 \\
     \alpha &= \frac{360^{\circ} A}{\pi r^2} \\
     \alpha &= \frac{360^{\circ} \cdot 16}{\pi \cdot 4^2} \\
     \alpha &\approx 114,591559 ^{\circ} \\
     \alpha &\approx 114,6 ^{\circ}
     \end{aligned}
  
  Sektorin pinta-ala on siis :math:`16` ja sen keskuskulman suuruus on noin :math:`114,6^{\circ}`.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/ympyra-tehtavia#keskuskulma-teht>`__.
