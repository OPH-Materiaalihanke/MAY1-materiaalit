``` {id="OcNmKfiHLrwh" settings=""}
auto_number_headings: true
auto_number_start: 1
math_type: svg
math_preamble: '\usepackage{gensymb}'
math_preamble: '\usepackage{cancel}'
css: |!!
.huomautus {
  background-color: lightblue;
}
.palstatKaksi img {
    max-width: 100%;
    display: inline;
    margin: 0 auto;
}
!!
global_plugin_attrs:
   showVideo:
      texprint: ''
texmacros: 
  texfontsize: 12pt
  texauthorname: 'Juulia Auvinen ja Robin Hamdi'
  texlanguage: 'finnish'
  texpaper: 'a4paper'
  texdocumentclass: 'extbook'
  texside: 'oneside'
  textitle: 'Yhtälö'
  texversion: ''
  texdate: '2019'
  texorganization: 'Tampereen yliopisto'
  texsectionstart: 1
  texautonumber: 0
  texcoverpage: 1
  textableofcontents: 1
  texfancyfooter: 0
  texforcetoplevel: ''
  texforcesonlysectionnumber: 0
  texcaption: 1
  texmargins: 'left=20mm, right=20mm, top=20mm, bottom=20mm'
  texfootrulewidth: 0.0pt
  texfancyfooterstyle: ''
```

#- {id="dEmtAtm7mcfV" area="sisalto"}

# Yhtälö {id="JjLtI0vbXGoj"}

#- {id="J3zYlzhgTlWn"}
\
Tässä kappaleessa käsitellään yhtälöitä. Keskitymme ensimmäisen asteen yhtälöiden
sekä yhtälöparien ratkaisemiseen. Kappaleeseen liittyvät tehtävät omat
[omalla sivullaan](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-tehtavat-3-6).

Aluksi palautetaan mieleen yhtälön käsite alla olevan yhtälövaa'an avulla. 
Vie muuttujia kuvaavia laatikoita ja ilmapalloja vaa'alle ja pyri saamaan
vaaka tasapainoon ohessa olevan yhtälön mukaan.

Kun vaa'an molempien puolien sisältö painaa yhtä paljon, vaaka on tasapainossa. 
Vaaka säilyttää tasapainonsa, jos sen molemmilta puolilta poistetaan tai 
molemmille puolille lisätään samanpainoiset kappaleet. Myös yhtälölle voidaan 
tehdä vastaavat toimenpiteet.

``` {id="BOWwPMD5pR60" plugin="showVideo"}
iframe: true
open: true
videoicon: false
texprint: '![&nbsp;](/images/190240/Screenshot_124.png)'
hidetext: Piilota GeoGebra
type: small
videoname: ""
width: 700
height: 500
file: "https://www.geogebra.org/classic/z8tkytfe"
```

## Peruskäsitteitä {id="MQTwJ3SNe6Go"}

#- {id="mns0snXAy620"}
\

Merkittyä laskutoimitusta tai pelkkää lukua kutsutaan *lausekkeeksi*. Lausekkeita ovat esimerkiksi

$$x+3, a+b \; \text{ja} \; 8.$$
\

Kun kaksi lauseketta merkitään yhtä suuriksi, muodostuu *yhtälö*. Yhtälöitä ovat esimerkiksi

$$x+3=8 \; \text{ja} \; a+b=0.$$
\

Yhtälöissä esiintyy yleensä yksi tai useampia *muuttujia*, joita merkitään kirjaimilla. Yllä olevissa yhtälöissä
muuttujia ovat $x$, $a$ ja $b$. Niitä muuttujan arvoja, jotka toteuttavat yhtälön, sanotaan
yhtälön *ratkaisuiksi* tai yhtälön *juuriksi*.

### Esimerkki: onko kysytty luku yhtälön ratkaisu {id="nmhpwZsnFFYK" area="e1" collapse="true"}

#- {id="xnRJGYWlmktD"}
\

Olkoon yhtälö $3x+2=-2x-8$. Onko luku

a) $2$

b) $-2$  

yhtälön ratkaisu?

\

**Ratkaisu:**

Tutkitaan, onko yhtälö tosi, kun sijoitetaan luku yhtälöön muuttujan $x$ paikalle.

a) Sijoitetaan $x=2$, jolloin

\begin{align*} 
3\cdot 2 + 2  & = -2 \cdot 2 - 8  \\
 8 & = -12 \\
 &\text{\bf{epätosi}}
\end{align*}

joten $2$ ei ole yhtälön $3x+2=-2x+-6$ ratkaisu.

\

b) Sijoitetaan $x=-2$, jolloin

\begin{align*} 
3\cdot (-2) + 2  & = -2 \cdot (-2) - 8  \\
 -4 & = -4 \\
 \text{}&\text{\bf{tosi}}
\end{align*}

joten $-2$ on yhtälön $3x+2=-2x+-6$ ratkaisu.

---

#- {id="IbuxB2wFWsxB" area_end="e1"}

#- {id="f7RryPvU5pXY"}
\

#- {id="SrOiK7LTgrKu"}
[[Peruskäsitteitä: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-tehtavat-3-6#perusk%C3%A4sitteit%C3%A4-teht%C3%A4vi%C3%A4)]{.hidden-print}

## Ensimmäisen asteen yhtälö {id="Vvw3RNjyOqaz"}

#- {id="PjAd2b71PNR3" .huomautus}
**Ensimmäisen asteen yhtälö**

\

*Ensimmäisen asteen yhtälöksi* sanotaan yhtälöä, joka voidaan saattaa muotoon

$$ax+b=0,$$

jossa $a\neq0$.

#- {id="OlqcpX6ikImI"}
Ensimmäisen asteen yhtälöllä on täsmälleen yksi ratkaisu.

### Todistus: ensimmäisen asteen yhtälön ratkaisu {id="AIz0Z5lr83d7" area="t321" collapse="true"}

#- {id="e2BrERmYvuXG"}
\begin{align*} 
ax+b  & = 0 && |-b  \\
 ax & = -b && |:a, a\neq0 \\
 x  & = -\frac{b}{a} 
\end{align*}

Luku $-\displaystyle\frac{b}{a}$ on siis yhtälön ainoa ratkaisu. $\square$

#- {id="OFJSCaUNpQk8" area_end="t321"}

### Esimerkki: ensimmäisen asteen yhtälön ratkaiseminen {id="OcDJPajNUUny" area="joo" collapse="true"}

#- {id="dIdyvVLhzaJs"}
\

Ratkaise yhtälö $21x-3=0$.

\
**Ratkaisu:**

\begin{align*} 
21x-3 & = 0 && |+3  \\
 21x & = 3 && |:21 \\
 x  & = \frac{3}{21} \\
 x  & = \frac{1}{7}
\end{align*}

**Vastaus:** $x=\dfrac{1}{7}$

---

#- {id="DEKFiaJX8weA" area_end="joo"}

#- {id="DX9MYDgGgn9N"}
\
Jos ensimmäisen asteen yhtälö halutaan ratkaista $graafisesti$, piirretään suora $y=ax+b$ ja katsotaan
kuvaajasta kohta, jossa suora leikkaa $x-$akselin. Siinä kohdassa $y=0.$

### Esimerkki: ensimmäisen asteen yhtälön ratkaiseminen graafisesti {id="QzdHdP8N4mbw" area="e322" collapse="true"}

#- {id="cXOJuPIE7zpS"}
\
Ratkaise graafisesti yhtälö $-2x+2=5x-2.$

\
**Ratkaisu:**

Sievennetään yhtälö ensin muotoon $ax+b=0$ yhdistämällä termit samalle puolelle.

\begin{align*}
-2x+2&=5x-2 \\
-2x+2-5x+2&=0 \\
-7x+4&=0
\end{align*}
\

Piirretään nyt suora $y=-7x+4$ sopivalla ohjelmalla ja selvitetään suoran ja
$x-$akselin leikkauskohta.

![&nbsp;](/images/189554/Screenshot_72.png){width=500}

\
Suora leikkaa $x-$akselin, kun $x=\dfrac{4}{7}$, joten tämä on yhtälön ratkaisu.

**Vastaus:** $x=\dfrac{4}{7}$

---

#- {id="auxA0YuN5hPK" area_end="e322"}

#- {id="hyeNMQKfHwqO"}
\

Yhtälön ratkaiseminen perustuu siihen, että yhtälölle tehtävät toimenpiteet pitävät yhtälön *yhtäpitävänä*
eli yhtälön ratkaisut pysyvät samoina. Yllä olevissa esimerkeissä jo jaoimme ja vähensimme yhtälöä
puolittain. Yleiset yhtälön ratkaisun toimenpiteet ovat esitelty kertauksen vuoksi alapuolella.

#- {id="PBOF3SiJzTvc" .huomautus}
**Yhtälön ratkaiseminen**

\

**1)** Puolittain lisääminen tai vähentäminen

\begin{align*} 
1  & = 1 && |+3  \\
 4 & = 4 && | -2 \\
 2  & = 2 
\end{align*}

\

\begin{align*} 
-4x+3  & = -4x+3 &&  |-3  \\
 -4x & = -4x && | +4x \\
 0  & = 0 
\end{align*}

\

**2)** Puolittain kertominen ja jakaminen nollasta eroavalla luvulla

\begin{align*} 
4  & = 4 && | :2  \\
 2 & = 2 && | \cdot (-10) \\
 -20  & = -20 
\end{align*}

\

\begin{align*} 
3x+9  & = 3x+9 && |:3   \\
 x+3 & = x+3  && |\cdot (-1)  \\
 -x-3  & = -x-3
\end{align*}

\

**3)** Yhtälön puolien vaihtaminen keskenään

\begin{align*} 
2x+1  & = 4x && \;\\
 4x & = 2x+1 &&
\end{align*}

#- {id="dX2GRt5ABwcS"}
Näiden ominaisuuksien avulla voimme johtaa yhtälön ratkaistuun muotoon, missä yhtälön toisella puolella on
ratkaistavissa oleva muuttuja ja toisella lukuarvo. Näin saadaan määritettyä yhtälön kaikki juuret.

#- {id="0g0PQflZsdMG"}
\

*Huom!* Yhtäpitävyyttä merkitään ekvivalenssinuolella $\Leftrightarrow$. Ekvivalenssinuolta
tulee käyttää, jos keskenään yhtäpitävät yhtälöt kirjoitetaan rinnakkain. Tässä kirjassa
yhtälöitä ratkaistaan pääsääntöisesti allekkain ja ekvivalenssinuolet jätetään 
merkitsemättä.

### Esimerkki: yhtälön ratkaiseminen ja ratkaisun tarkistus {id="X944udfSZnGx" area="e2" collapse="true"}

#- {id="ZgLMhwsKD2ty"}
\

Ratkaise yhtälö $2x+1=-x+2$.

\
**Ratkaisu:**

\begin{align*} 
2x+1  & = -x+2 \;\;\;\;\;\;\;\;\,\;| +x  \\
 3x+1 & = 2 \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\; | -1 \\
 3x  & = 1 \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;|:3 \\
 x &= \frac{1}{3}
\end{align*}

**Vastaus:** $x = \displaystyle\frac{1}{3}$

**Tarkistus:**

Ratkaisun voi tarkistaa sijoittamalla vastaus $x=\dfrac{1}{3}$ yhtälöön:

\begin{align*} 
2\cdot\frac{1}{3}+1 &=-\frac{1}{3}+2 \\
\frac{2}{3}+\frac{3}{3} &=-\frac{1}{3}+\frac{6}{3} \\
\frac{5}{3}&=\frac{5}{3}\\
\text{}&{\bf{tosi}}
\end{align*}
\

Ratkaisun voi tarkistaa myös hyödyntämällä laskinohjelmistoja. Alla 
näytetään, miten se onnistuu Geogebran CAS-laskimella.

![&nbsp;](/images/189958/Screenshot_83.png){width=500}

---

#- {id="89LJQQPkYZPj" area_end="e2"}

### Esimerkki: ratkaisuja ei yhtään tai ääretön määrä {id="tdGT8XDpulRJ" area="e3" collapse="true"}

#- {id="3SkTLm8p3NyZ"}
\
Ratkaise yhtälö.

a) $-5(2x-1)=-4x-2(3x-\dfrac{5}{2})$

b) $4x-\dfrac{2-3x}{3}=5x$

\
**Ratkaisu:**

a)

\begin{align*} 
-5(2x-1)  & = -4x-2(3x-\dfrac{5}{2})   \\
 -10x+5 & = -4x-6x+5 \\
 -10x+5  & = -10x+5 && |-5 \\
 -10x  & = -10x &&|+10x \\
 0 & = 0 \\
 \text{}&\text{\bf{tosi}}
\end{align*}
\

Yhtälö on tosi riippumatta muuttujan $x$ arvosta. Siispä yhtälöllä on äärettömän monta ratkaisua
ja se toteutuu kaikilla $x \in\mathbb{R}$ (lue: "$x$ kuuluu reaalilukuihin").
\

b)

\begin{align*} 
4x-\dfrac{2-3x}{3}  & = 5x && |\cdot 3  \\
 12x-2+3x & = 15x \\
 15x-2  & = 15x && | -15x \\
 -2  & = 0 \\
 &\text{\bf{epätosi}}
\end{align*}
\

Yhtälö on epätosi riippumatta muuttujan $x$ arvosta, joten yhtälöllä ei ole ratkaisua.

\
**Vastaus:** 

a) $x \in\mathbb{R}$
b) Yhtälöllä ei ole ratkaisua.

---

#- {id="yFZCv6adOJ2D" area_end="e3"}

#- {id="azIjzz7KLRyg"}
\

*Huom!* Esimerkin 3.2.3 yhtälöt eivät voi olla ensimmäisen asteen yhtälöitä, sillä
ensimmäisen asteen yhtälöllä on aina täsmälleen yksi ratkaisu.

#- {id="MQkDN8UimS2T" .huomautus}
**Ristiin kertominen**

\

Olkoon $a,b,c,d\in\mathbb{R}$ ja $b,d\neq0$. Tällöin voidaan sieventää

\begin{align*} 
\frac{a}{b}  & = \frac{c}{d} && | \cdot b  \\
 a & = b\cdot \frac{c}{d}  && | \cdot d \\
 ad & = bc 
\end{align*}

Eli voidaan **kertoa ristiin** tällaista muotoa olevat yhtälöt.

### Esimerkki: murtoyhtälöiden ratkaisemista {id="97BqIC6iF8wZ" area="juu" collapse="true"}

#- {id="oPkfB4f1qbrS"}
\
Ratkaise yhtälöt.

a) $\displaystyle\frac{2}{x}=\dfrac{3}{x}$

b) $\displaystyle\frac{2}{x+1}=\dfrac{3}{x-1}$

\

**Ratkaisu:**

Murtolauseke ei ole määritelty silloin, kun nimittäjässä on luku $0$. Tämä tulee ottaa 
huomioon yhtälön ratkaisujen tarkastelussa. Saatu vastaus ei välttämättä kelpaa
yhtälön ratkaisuksi. 

\

a) 

\begin{align*} 
\frac{2}{x}  & = \frac{3}{x} && |\text{kerrotaan ristiin} \\
 2x & = 3x && | -2x\\
 x & = 0
\end{align*}

Murtolauseke on määritelty silloin, kun nimittäjät saavat nollasta poikkeavat arvot.
Nyt tulee olla $x\neq0$, jotta alkuperäisen yhtälön lausekkeet $\displaystyle\frac{2}{x}$ 
ja $\displaystyle\frac{3}{x}$ on määritelty. Siispä, yhtälöllä ei ole ratkaisua.

\

b)

\begin{align*} 
\frac{2}{x+1} &=\frac{3}{x-1} && |\text{kerrotaan ristiin} \\
 2(x-1) & = 3(x+1) \\
 2x-2 & = 3x+3 && |+2 \\
 2x & = 3x+5 && |-3x \\
 -x & = 5 && |:(-1) \\
 x & = -5
\end{align*}

Nyt tulee olla $x\neq-1$ ja $x\neq1$, jotta alkuperäisen yhtälön lausekkeet on määritelty. 
Siispä $x=-5$ on käypä ratkaisu.

\

**Vastaus:**

a) Yhtälöllä ei ole ratkaisua.
b) $x=-5$

---

#- {id="N0D8bsTgz0u6" area_end="juu"}

#- {id="PeJVAr5ZGaf1"}
\

[[Ensimmäisen asteen yhtälö: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-tehtavat-3-6#ensimmäisen-asteen-yhtälö-tehtäviä)]{.hidden-print}

## Yhtälö sovelluksissa {id="Y33NHhVWPQCZ"}

\
Usein matemaattisten ongelmien ratkaisemissa käytetään hyväksi yhtälöä. 
Nyt erona edellisiin esimerkkeihin yhtälö on laadittava itse. Ennen
yhtälön laatimista täytyy vielä valita muuttuja. Muuttujaksi kannattaa yleensä valita
tehtävänannossa kysytty seikka.

### Esimerkki: ongelmanratkaisu yhtälön avulla {id="FqyIYNVXC6PY" area="qwe" collapse="true"}

#- {id="Tv5EXl3f7w4t"}
\
Kun kolme peräkkäistä kokonaislukua lasketaan yhteen saadaan $111$. Mitkä kolme
lukua ovat kyseessä?

\
**Ratkaisu:**

Merkitään ensimmäistä lukua muuttujalla $x$. Tällöin kaksi seuraavaa kokonaislukua
ovat $x+1$ ja $x+2$. Tästä saadaan muodostettua yhtälö.

\begin{align*}
x+(x+1)+(x+2)&=111 \\
3x+3&=111 &&|-3\\
3x&=108 &&|:3\\
x&=\frac{108}{3} \\
x&=36 
\end{align*}
\

Peräkkäiset luvut ovat siis $36$, $36+1=37$ ja $36+2=38$.

\

**Vastaus:** $36$, $37$ ja $38$

---

#- {id="1K9oWhohVQRY" area_end="qwe"}

### Esimerkki: kesätyöpalkan ratkaiseminen {id="7yIXzAfmfpc2" area="polo" collapse="true"}

#- {id="zyGRKfo7CtWW"}
\
Villen kesätöiden palkoista meni uuteen puhelimeen $\displaystyle\frac{1}{5}$, 
festareihin $\displaystyle\frac{1}{7}$ ja vuokraan $\displaystyle\frac{2}{5}$. 
Kuinka paljon Ville tienasi kesällä, kun 
edelläluettujen vähennysten jälkeen palkasta oli jäljellä $801\;\text{€}$.

\

![&nbsp;](/images/189959/rahhaaa.jpg){width=400}

\
**Ratkaisu:**

Valitaan muuttujaksi $x$ Villen kesältä tienaama palkka. Palkka $x$ koostuu siis
uudesta puhelimesta  $\displaystyle\frac{x}{5}$, festareista  $\displaystyle\frac{x}{7}$,
vuokrasta  $\displaystyle\frac{2x}{5}$ sekä jäljellä jäävästä osuudesta. Saadaan kirjoitettua yhtälö. 

\
\begin{align*}
\displaystyle\frac{x}{5}+\frac{x}{7}+\frac{2x}{5}+801 &= x\;\;\;\;\;\;|\cdot35 \\
\displaystyle\frac{35x}{5}+\frac{35x}{7}+\frac{35\cdot2x}{5}+35\cdot800&=35x \\
7x+5x+14x+28035&=35x \\
35x-7x-5x-14x &=28035 \\
9x &= 28035 \\
x &=\frac{28035}{9} \\
x &=3115
\end{align*}

**Vastaus:** Ville tienasi kesällä $3115\;\text{€}$.

---

#- {id="qBKVqVBYah0E" area_end="polo"}

#- {id="VcYH4MGdEpWj"}
\

[[Yhtälö sovelluksissa: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-tehtavat-3-6#yhtälö-sovelluksissa-tehtäviä)]{.hidden-print}

## Yhtälöpari {id="mJZeJa3Gkd16"}

#- {id="YkN12xzwMzm5"}
\

#- {id="XzWyLJhg6IQu" .huomautus}
**Yhtälöpari**

\

*Yhtälöpari* muodostuu kahdesta yhtälöstä, esimerkiksi

\begin{cases}
2x-y+3=0 \\
-4x+2y+1=0
\end{cases}

#- {id="S0bVW6rG3JxA"}
\
Yhtälöparin **ratkaisu** on lukupari $(x,y)$, joka toteuttaa molemmat yhtälöt.
Muuttujia voidaan merkitä myös muilla kirjaimilla.

Yhtälöparin ratkaisemisessa käsin voidaan käyttää joko **sijoitus**- tai **yhteenlaskukeinoa**. 
Nämä menetelmät esitellään seuraavissa esimerkeissä.

### Esimerkki: yhtälöparin ratkaiseminen sijoituskeinolla {id="lFa7zmkb6FOs" area="rtyu" collapse="true"}

#- {id="siyb1e992ZMf"}
\
Ratkaise yhtälöpari 
\begin{cases}
2x+y=6 \\
3x+2y=2
\end{cases}

\
**Ratkaisu:**

\begin{cases}
2x+y=6 && (1)\\
3x+2y=2 && (2)
\end{cases}

Ratkaistaan esimerkiksi yhtälöstä $(1)$ muuttuja $y$ muuttujan $x$ suhteen. 
Saadaan yhtälö

$$y=-2x+6 \;\;\;\;\;\;(3)$$
\

Sijoitetaan yhtälö $(3)$ yhtälöön $(2)$, jolloin saadaan
\

\begin{align*}
3x+2(-2x+6)&=2 \\
3x-4x+12&=2 \\
-x&=-10 \\
x&=10
\end{align*}
\

Muuttujan $y$ arvo saadaan sijoittamalla $x=10$ yhtälöön $(3)$.

$$y=-2\cdot10+6=-20+6=-14$$

**Vastaus:**

\begin{cases}
x=10\\
y=-14
\end{cases}

---

#- {id="5GcgDXEnScgc" area_end="rtyu"}

### Esimerkki: yhtälöparin ratkaiseminen yhteenlaskukeinolla {id="0gvKWyLli1AY" area="yhteenlasku" collapse="true"}

#- {id="V9HhtcJp8WUn"}
\
Ratkaise yhtälöpari 
\begin{cases}
2x+y=6 \\
3x+2y=2
\end{cases}

\
**Ratkaisu:**

Kerrotaan ensin yhtälöt luvuilla, jotka tekevät muuttujan $x$ kertoimet toistensa vastaluvuiksi,
ja lasketaan saadut yhtälöt yhteen.

\begin{align*}
&\begin{cases}
2x+y=6 \;\;\;\;\;\;\;\;\;\;\;\;\;|\cdot(-3) \\
3x+2y=2 \;\;\;\;\;\;\;\;\;\,\,\;|\cdot2\\
\end{cases}\\
+
&\begin{cases}
-6x-3y=-18\\
6x+4y=4\\
\end{cases}\\
&\noindent\rule{3cm}{0.4pt}\\
&-3y+4y=-18+4\\
&\;\;\;\;\;\;\;\;\;\;\;\;\;\;y=-14
\end{align*}
\

Tämän jälkeen kerrotaan yhtälöt luvuilla, jotka tekevät muuttujan $y$ kertoimet toistensa vastaluvuiksi,
ja lasketaan saadut yhtälöt yhteen.

\begin{align*}
&\begin{cases}
2x+y=6 \;\;\;\;\;\;\;\;\;\;\;\;\;|\cdot(-2) \\
3x+2y=2 \;\;\;\;\;\;\;\;\;\,\,\;|\cdot1\\
\end{cases}\\
+
&\begin{cases}
-4x-2y=-12\\
3x+2y=2\\
\end{cases}\\
&\noindent\rule{3cm}{0.4pt}\\
&-4x+3x=-12+2\\
&\;\;\;\;\;\;\;\;\;\;\;\;\;\;x=10
\end{align*}

**Vastaus:**

\begin{cases}
x=10\\
y=-14
\end{cases}

---

#- {id="CsqomAa6CE8g" area_end="yhteenlasku"}

### Esimerkki: yhtälöparin ratkaiseminen Geogebralla {id="BNNfgztYfxIM" area="es343" collapse="true"}

#- {id="dX36lNKswiuK"}
\

Yhtälöparin ratkaiseminen Geogebran CAS-laskimella onnistuu syöttämällä
aluksi yhtälöparin molemmat yhtälöt laskimeen. Yhtälöitä ei tarvitse välttämättä 
muokata muotoon $y=ax+b$. 

\

![&nbsp;](/images/189971/Screenshot_87.png){width=500}

\
Kun yhtälöt on syötetty laskimeen, valitaan ne molemmat pitämällä $ctrl-$
näppäintä pohjassa ja klikkaamalla vasemmasta palkista yhtälöiden vierestä. 
Kun yhtälöt on valittu, palkki muuttuu siniseksi. Lopuksi klikkaa yläpalkista
![](/images/190362/image.png){.smallimage width=30} -symbolia ja laskin kertoo yhtälöparin ratkaisun. 

\

![&nbsp;](/images/189972/Screenshot_84.png){width=500}

---

#- {id="Mcl5mqgKMuyZ" area_end="es343"}

#- {id="9JRcGhcAvSAs"}
\

Yhtälöparin graafinen tarkastelu saattaa auttaa hahmottamaan paremmin tilanteen 
ja ratkaisujen lukumäärän. Yhtälöparin ratkaisuja ovat ne pisteet, 
jotka ovat kummankin yhtälön kuvaajalla.

\

``` {id="nXqtMl40MMRX" #V7 plugin="showVideo"}
footer: "Opetus tv: Graafista tarkastelua yhtälöpareista"
iframe: true
width: 400
height: 300
start: 0:00
end: 6:09
file: https://www.youtube.com/watch?v=OrtdMgx5eKI
```

#- {id="gfNwgqD7tjDl"}
\

Piirretään edellisten esimerkkien 
yhtälöpari koordinaatistoon. Yhtälöiden kuvaajat ovat suoria ja niiden piirtämisen 
helpottamiseksi ratkaistaan yhtälöt muuttujan $y$ suhteen. 

\begin{align*}
2x+y&=6 \\
y&=-2x+6
\end{align*}
\

\begin{align*}
3x+2y&=2 \\
2y&=-3x+2 \\
y&=-\frac{3}{2}x+1
\end{align*}

![&nbsp;](/images/188764/Screenshot_54.png){width=500}

\

Suorien leikkauspiste $(10,-14)$ on ainoa piste, joka toteuttaa molemmat yhtälöt, joten se on 
yhtälöparin ainoa ratkaisu.
\

### Esimerkki: yhtälöparilla ei ratkaisua {id="yxFUWoopUSv2" area="ui" collapse="true"}

#- {id="IugocOvbfKqL"}
\
Ratkaise yhtälöpari 
\begin{cases}
20x-15y=50 \\
30y-40x=-30
\end{cases}

**Ratkaisu:**

Käytetään yhteenlaskukeinoa. 

\begin{align*}
&\begin{cases}
20x-15y=50 \;\;\;\;\;\;\;\;\;\;\;\;\;|\cdot2 \\
-40x+30y=-30 \;\;\;\;\;\;\;\,|\cdot1\\
\end{cases}\\
+
&\begin{cases}
40x-30y=100\\
-40x+30y=-30 \\
\end{cases}\\
&\noindent\rule{3.2cm}{0.4pt}\\
&\;\;\;\;\,\,\,\;\;\;\;\;\;\;\;\;\;\;\;0=70\;\;\;\;\text{\bf{epätosi}}\\
\end{align*}
\

**Vastaus:** Yhtälöparilla ei ole ratkaisua.

**Tarkistus**: 

Ratkaistaan yhtälöt muuttujan $y$ suhteen.

\begin{align*}
20x-15y&=50 \\
15y&=20x+50 \\
y&=\frac{4}{3}x+\frac{10}{3}
\end{align*}
\

\begin{align*}
30y-40x&=-30 \\
30y&=40x-50\\
y&=\frac{4}{3}x-\frac{5}{3}
\end{align*}

![&nbsp;](/images/188766/Screenshot_55.png){width=450}

\
Suorat ovat yhdensuuntaiset (sama kulmakerroin), joten niillä ei ole yhteisiä pisteitä. Siksi
yhtälöparilla ei ole ratkaisua.

---

#- {id="TvarI2mnPYOd" area_end="ui"}

### Esimerkki: yhtälöparin ratkaisuna kaikki suoran pisteet {id="oXviSr1DqJIa" area="tui" collapse="true"}

#- {id="eqw7zRu1xqXD"}
\
Ratkaise yhtälöpari 
\begin{cases}
4x-3y=-9 \\
-12x+9y=27
\end{cases}

**Ratkaisu:**

Käytetään yhteenlaskukeinoa. 

\begin{align*}
&\begin{cases}
4x-3y=-9 \;\;\;\;\;\;\;\;\;\;\;|\cdot3 \\
-12x+9y=27 \;\;\;\;\;\;\;\,|\cdot1\\
\end{cases}\\
+
&\begin{cases}
12x-9y=-27\\
-12x+9y=27 \\
\end{cases}\\
&\noindent\rule{3cm}{0.4pt}\\
&\;\;\;\;\,\,\,\;\;\;\;\;\;\;\;\;\;\;\;0=0\;\;\;\;\text{\bf{tosi}}\\
\end{align*}
\

Koska päädyttiin yhtälöön, joka on aina tosi, yhtälöparin ratkaisuja ovat
kaikki lukuparit $(x,y)$, joilla pätee

\begin{align*}
4x-3y&=-9 \\
3y&=4x+9 \\
y&=\frac{4}{3}x+3
\end{align*}

**Vastaus:**

\begin{cases}
x \in\mathbb{R} \\
y =\frac{4}{3}x+3
\end{cases}

**Tarkistus:**

Kun yhtälöt ratkaistaan muuttujan $y$ suhteen, saadaan molemmista ratkaisuksi

$$y=\frac{4}{3}x+3$$

![&nbsp;](/images/188767/Screenshot_57.png){width=450}

\
Yhtälöiden kuvaajana on siis sama suora, joten yhtälöparin ratkaisuna on kaikki
suoran $y =\displaystyle\frac{4}{3}x+3$ pisteet.

---

#- {id="K94u7KNfG2cc" area_end="tui"}

### Esimerkki: yhtälöpari sovelluksessa {id="E7b2ReJP83j5" area="poio" collapse="true"}

#- {id="5vdOtoxkPr76"}
\
Sonja haluaa suorakulmion muotoisen pöytäliinan, jonka pituus on $40\;\text{cm}$ suurempi kuin sen leveys. 
Sonja löysi kaupasta mieleistään kukallista kangasta ja siihen sopivaa reunanauhaa. 
Määritä pöytäliinaan tarvittavat mitat, kun reunanauhaa käytetään $6,0\;\text{m}$.

![&nbsp;](/images/189974/liina.jpg){width=350}

**Ratkaisu:**

Valitaan muuttujaksi $x$ pöytäliinan leveys ja muuttujaksi $y$ pituus. Koska pituus on
$40\;\text{cm}$ suurempi kuin leveys, saadaan ensimmäiseksi yhtälöksi $y=x+40$. 
Reunanauhaa on $6,0\;\text{m}=600\;\text{cm}$, joten toiseksi yhtälöksi saadaan $2x+2y=600$
(suorakulmion piiri on $2\cdot\text{leveys}+2\cdot\text{pituus}$).
Saadaan siis yhtälöpari 

\begin{cases}
y=x+40\\
2x+2y=600
\end{cases}

Koska ensimmäinen yhtälö on ilmoitettu valmiiksi muuttujan $y$ suhteen, voidaan sijoittaa
se suoraan toiseen yhtälöön.

\begin{align*}
2x+2(x+40)=600 \\
2x+2x+80=600 \\
4x=520 \\
x=130
\end{align*}
\
Muuttujan y arvo saadaan sijoittamalla $x=130$ ensimmäiseen yhtälöön.

$$y=130+40=170$$
\

Eli pöytäliinan kangaspalan leveys on $130\;\text{cm}$ ja pituus $170\;\text{cm}$.

\

**Vastaus:** leveys $130\;\text{cm}$ ja pituus $170\;\text{cm}$

---

#- {id="VFxwuHbd2aa9" area_end="poio"}
\

#- {id="jNHlbXf412Ol"}
\

[[Yhtälöpari: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-tehtavat-3-6#yhtälöpari-tehtäviä)]{.hidden-print}

#- {id="O6M6ybLWZnTO" area_end="sisalto"}
