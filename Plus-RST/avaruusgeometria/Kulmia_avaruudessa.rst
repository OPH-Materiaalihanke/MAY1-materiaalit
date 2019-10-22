Kulmia avaruudessa
------------------

Kolmiulotteisessa avaruudessa voidaan laskea muun muassa kahden suoran välinen
kulma, kahden tason välinen kulma tai tason ja suoran välinen kulma. Seuraavissa
esimerkeissä lasketaan suorakulmaisen särmiön avauuslävistäjän pituus sekä sen
ja pohjan välisen kulman suuruus.

.. toggle-header::
  :header: Esimerkki: avaruuslävistäjän pituuden laskeminen **Näytä/Piilota**
  
  Laske suorakulmaisen särmiön avaruuslävistäjän pituus, kun sen sivujen pituudet
  ovat :math:`2`, :math:`5` ja :math:`4`.
  
  .. figure:: ../images/187509_avaruuslavistaja_esim1.png
     :alt:  
     :width: 55.0%
  
      
  
  Tehtävässä kysytään siis yllä olevan kuvan avaruuslävistäjän :math:`a` pituutta. Jotta
  se voitaisi ratkaista, selvitetään ensin, kuinka pitkä lävistäjä :math:`b` on.
  
  .. figure:: ../images/187510_avaruuslavistaja_esim2.png
     :alt:  
     :width: 55.0%
  
      
  
  Yllä olevaan kuvaan on korostettu suorakulmaisen särmiön pohjassa oleva
  suorakulmainen kolmio, jonka hypotenuusa :math:`b` pitäisi ratkaista. Se onnistuu
  esimerkiksi Pythagoraan lauseella:
  
  .. math::
  
  
     \begin{aligned}
     b^2 &= x^2+y^2 \\
     b &= \pm \sqrt{x^2+y^2} \\
     b &= \pm \sqrt{5^2+2^2} \\
     b &= \pm \sqrt{29}
     \end{aligned}
  
  Koska lävistäjän :math:`b` pituus ei voi olla negatiivinen, valitaan vastaukseksi
  :math:`b=\sqrt{29}`.
  
  .. figure:: ../images/187513_avaruuslavistaja_esim3.png
     :alt:  
     :width: 55.0%
  
      
  
  Nyt yllä olevaan kuvaan on korostettu lävistäjän :math:`b`, monitahokkaan särmän :math:`z`
  ja avaruuslävistäjän :math:`a` muodostama suorakulmainen kolmio. Tästä saadaan
  ratkaistua hypotenuusa :math:`a` jälleen Pythagoraan lauseella.
  
  .. math::
  
  
     \begin{aligned}
     a^2 &= b^2+z^2 \\
     a &= \pm \sqrt{b^2+z^2} \\
     a &= \pm \sqrt{(\sqrt{29})^2+4^2} \\
     a &= \pm \sqrt{45} \\
     a &= \pm 3 \sqrt{5}
     \end{aligned}
  
  Koska avaruuslävistäjän pituus on positiivinen, vastaus on siis :math:`3 \sqrt{5}`.
  
  --------------
  


.. toggle-header::
  :header: Esimerkki: avaruuslävistäjän ja pohjan välinen kulma **Näytä/Piilota**
  
  Lasketaan seuraavaksi avaruuslävistäjän ja suorakulmaisen särmiön pohjan välinen
  kulma :math:`\alpha`.
  
  .. figure:: ../images/189946_avaruuslavistaja_kulma.png
     :alt:  
  
      
  
  Kulma saadaan ratkaistua tigonometristen funktioiden avulla, esimerkiksi
  käyttämällä siniä:
  
  .. math::
  
  
     \begin{aligned}
     \sin ( \alpha) &= \frac{z}{a} \\
     \alpha &= \sin ^{-1} \left(\frac{z}{a}\right) \\
     \alpha &= \sin ^{-1} \left( \frac{4}{3 \sqrt{5}} \right) \\
     \alpha &= 36,6 ^{\circ}
     \end{aligned}
  
  Särmiön avaruuslävistäjän ja pohjan välinen kulma on noin :math:`37^{\circ}`.
  
  --------------
  


Tähän kappaleeseen liittyvät `tehtävät <https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/geometria/avaruusgeometriaa-tehtavia#kulmia-avaruudessa-teht>`__.
