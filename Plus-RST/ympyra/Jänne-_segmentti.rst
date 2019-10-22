.. _janne:

Jänne, segmentti
----------------

.. admonition:: **Jänne**
  
  
  Ympyrän kehällä olevan kaaren päätepisteet yhdistää jänne.
  
  .. raw:: html
  
     <iframe src="https://www.youtube.com/embed/TBRhZ40bKZg" height="300" width="400">
  
  Segmentin pinta-ala Opetus.tv:ssä.
  
  .. raw:: html
  
     </iframe>
  


.. admonition:: **Segmentin pinta-ala**
  
  
  Jänne jakaa ympyrän kahdeksi segmentiksi, joiden pinta-ala :math:`A_{SEG}` saadaan
  laskettua kaavalla
  
  .. math:: A_{SEG}=A_{SEK} \pm A_{keskuskolmio}.
  
  \ Kaavassa käytetään
  yhteenlaskua, jos keskuskulma :math:`\alpha` on suurempi kuin :math:`180^{\circ}`,
  ja vähennyslaskua, jos keskuskulma :math:`\alpha` on pienempi kuin :math:`180^{\circ}`.
  


.. toggle-header::
  :header: Esimerkki: segmentin pinta-alan laskeminen 1 **Näytä/Piilota**
  
  Laske alla olevaan kuvaan sinisellä merkityn segmentin pinta-ala.
  
  .. figure:: ../images/187485_segmentti_esim1.png
     :alt:  
     :width: 40.0%
  
      
  
  Koska keskuskulma :math:`\alpha` on pienempi kuin :math:`180^{\circ}`, käytetään kaavaa
  
  .. math:: A_{SEG}=A_{SEK}-A_{\text{keskuskolmio}}.
  
  Lasketaan ensin kuvaan mustalla vinoviivoituksella merkityn sektorin pinta-ala.
  Sektorin säde :math:`r=3` ja keskuskulma :math:`\alpha=60^{\circ}`, joten sektorin pinta-ala
  on
  
  .. math::
  
  
     \begin{aligned}
     A_{SEK}&=\frac{\alpha}{360^{\circ}} \pi r^2 \\
     &=\frac{60^{\circ}}{360^{\circ}} \cdot \pi \cdot 3^2 \\
     &=\frac{3\pi}{2}
     \end{aligned}
  
  Lasketaan sitten kuvaan pinkillä merkityn keskuskolmion pinta-ala. Kolmion
  kahden sivun pituudet ovat säteen mittaiset eli :math:`3`, ja näiden sivujen välinen
  kulma on :math:`\alpha=60^{\circ}`. Lasketaan kolmion pinta-ala trigonometrisen
  laskukaavan avulla, jossa :math:`a=b=r=3`.
  
  .. math::
  
  
     \begin{aligned}
     A_{\text{keskuskolmio}}&=\frac{ab}{2} \sin(\alpha) \\
     &=\frac{r^2}{2} \sin(\alpha) \\
     &=\frac{3^2}{2} \sin(60^{\circ}) \\
     &=\frac{9\sqrt{3}}{4}
     \end{aligned}
  
  Lopuksi lasketaan segmentin pinta-ala vähennyslaskulla
  
  .. math::
  
  
     \begin{aligned}
     A_{SEG}&=A_{SEK}-A_{\text{keskuskolmio}} \\
     &= \frac{3 \pi}{2} - \frac{9 \sqrt{3}}{4} \\
     &= \frac{6 \pi}{4} - \frac{9 \sqrt{3}}{4} \\
     &= \frac{6 \pi - 9 \sqrt{3}}{4} \\
     &\approx 0,81527 \\
     &\approx 0,82
     \end{aligned}
  
  Kysytyn segmentin pinta-ala on siis noin :math:`0,82`.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: segmentin pinta-alan laskeminen 2 **Näytä/Piilota**
  
  Ratkaise alla olevaan kuvaan sinisellä rajatun segmentin pinta-ala.
  
  .. figure:: ../images/187490_segmentti_esim2.png
     :alt:  
     :width: 50.0%
  
      
  
  Koska keskuskulma :math:`\alpha=210^{\circ}` on suurempi kuin :math:`180^{\circ}`, käytetään
  laskukaavaa
  
  .. math:: A_{SEG}=A_{SEK}+A_{\text{keskuskolmio}}.
  
  Lasketaan ensin kuvaan ruskealla merkityn sektorin pinta-ala. Nyt säde :math:`r=3` ja
  keskuskulma :math:`\alpha=210^{\circ}`, joten sektorin pinta-ala on
  
  .. math::
  
  
     \begin{aligned}
     A_{SEK} &= \frac{\alpha}{360^{\circ}}\pi r^2 \\
     &= \frac{210^{\circ}}{360^{\circ}} \pi \cdot 3^2 \\
     &= \frac{21 \pi}{4}
     \end{aligned}
  
  Seuraavaksi lasketaan keskuskolmion pinta-ala. Kolmion kahden sivun pituus on
  :math:`a=b=r=3` ja näiden sivujen välisen kulman suuruus on
  :math:`\beta=360^{\circ}-210^{\circ}=150^{\circ}`. Lasketaan kolmion pinta-ala
  trigonometrisen laskukaavan avulla.
  
  .. math::
  
  
     \begin{aligned}
     A_{\text{keskuskolmio}}&= \frac{r^2}{2} \sin(\beta) \\
     &= \frac{3^2}{2} \sin(150^{\circ}) \\
     &= \frac{9}{4}
     \end{aligned}
  
  Lopuksi lasketaan segmentin pinta-ala yhteenlaskulla
  
  .. math::
  
  
     \begin{aligned}
     A_{SEG} &= A_{SEK} + A_{\text{keskuskolmio}} \\
     &= \frac{21 \pi}{4} + \frac{9}{4} \\
     &= \frac{21\pi +9}{4} \\
     & \approx 18,7436 \\
     &\approx 18,74
     \end{aligned}
  
  Kuvaan sinisillä ääriviivoilla piirretyn segmentin pinta-ala on noin :math:`18,74`.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/ympyra-tehtavia#janne-teht>`__.
