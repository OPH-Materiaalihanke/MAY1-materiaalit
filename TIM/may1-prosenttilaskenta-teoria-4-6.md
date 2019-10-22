``` {id="Y1xOjhkXZxhE" settings=""}
auto_number_headings: true
auto_number_start: 2
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
  textitle: 'Verrannollisuus ja prosenttilaskenta'
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

#- {id="ggiWc7TnSrwR" area="sisalto"}

#  Verrannollisuus ja prosenttilaskenta {id="bciX2hujAqm1"}

Tässä kappaleessa käsitellään verrannollisuutta sekä prosenttilaskentaa, jotka ovat
matematiikan yleisiä sovelluskohteita. Verrannollisuudesta kerrataan suoraan sekä kääntäen 
verrannollisuus ja prosenttilaskennasta käydään läpi yleisimmät tehtävätyypit. 
Kappaleeseen liittyvät tehtävät ovat 
[omalla sivullaan](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6).

\

![&nbsp;](/images/189876/rahoi.jpg){width=400}

## Suoraan verrannollisuus {id="z85zRemck7RI"}

#- {id="0LfixTWkDBhV"}
\
Kun työskennellään tuntipalkalla ansaitaan sitä enemmän, mitä useampi tunti työskennellään. 
Palkka ja tehtyjen tuntien määrä kasvavat siis *samassa suhteessa*. Kun esimerkiksi 
työtuntien määrä kasvaa kolminkertaiseksi, myös palkka kolminkertaistuu. Tällaisia 
suureita, joiden suhde on aina vakio, sanotaan *suoraan verrannollisiksi*.

#- {id="Zk6TjIMv8N0d" .huomautus}
**Suoraan verrannollisuus**

\

Suureet $x$ ja $y$ ovat suoraan verrannolliset, jos $y$ saadaan kertomalla $x$
vakiolla $k$ eli jos $y=kx.$

#- {id="3WmqEIxMNnzV"}
\
Vakio $k$ on nimeltään *verrannollisuuskerroin*. 

\
Yhtälö $y=kx$ saadaan muotoon $\dfrac{y}{x}=k,$ josta nähdään että suoraan verrannollisten
suureiden *suhde on vakio*. On siis voimassa verranto $\dfrac{y_1}{x_1}=\dfrac{y_2}{x_2}$
eli $\dfrac{y_1}{y_2}=\dfrac{x_1}{x_2}.$

\
Suoraan verrannollisuutta kuvaa graafisesti origon kautta kulkeva suora. 

\

![&nbsp;](/images/189589/Screenshot_73.png){width=300}

### Esimerkki: hinnan riippuvuus määrästä Geogebralla {id="1cGW1BNBfUNI" area="esad" collapse="true"}

#- {id="QwrFapBhZ7gu"}
\
Tutkitaan esimerkkinä suoraan verrannollisuudesta hinnan riippuvuutta määrästä.
Ostettujen tuotteiden hinta $y$ $(\text{€})$ on suoraan verrannollinen niiden 
määrään $x$ $(\text{kpl})$ eli 

$$y=kx,$$

missä vakio $k$ kertoo yksittäisen tuotteen kappalehinnan.

Alla on Geogebralla taulukoituna toisiaan vastaavia suureiden arvoja sekä oheen 
piirretty arvoja vastaavat pisteet koordinaatistoon. 
Jos pisteiden kautta piirrettäisiin kuvaaja, se olisi
muotoa $y=kx$ oleva suora. Suoran kulmakertoimena on 
tuotteen kappalehinta, jota voi säätää liukusäätimestä.

``` {id="GrnzhHF8Mrug" plugin="showVideo"}
iframe: true
open: true
videoicon: false
hidetext: Piilota GeoGebra
texprint: '![&nbsp;](/images/190241/Screenshot_125.png)'
type: small
videoname: ""
width: 700
height: 500
file: "https://www.geogebra.org/classic/yqhqsztj"
```

#- {id="WYpdV5SakVKh" area_end="esad"}

### Esimerkki: sovellus suoraan verrannollisuudesta {id="9ibHSmqjkny1" area="es411" collapse="true"}

#- {id="0ktw88NncS3x"}
\
Vuotavasta vesihanasta tippuu tasatahtia $6$ pisaraa $10$ sekunnissa. Kuinka monta
vesipisaraa hanasta tippuu $2$ minuutissa?

![&nbsp;](/images/189654/vesihana.jpg){width=400}

\
**Ratkaisu:**

Olkoon pisaramäärä $x$ ja aika $y$. Koska pisaramäärä ja aika ovat suoraan verrannollisia
suureita, niin 

\begin{align*}
\frac{y_1}{x_1}=\frac{y_2}{x_2}
\end{align*}

\
Merkitään $x_1=6,$ $y_1=10\;\text{(s)}$ ja $y_2=2\cdot 60=120\;\text{(s)}.$ Ratkaistaan
$x_2$, joka kuvaa kysyttyä pisaramäärää.

\
\begin{align*}
\frac{y_1}{x_1}&=\frac{y_2}{x_2} &&|\; \text{kerrotaan ristiin} \\
y_1x_2&=y_2x_1 &&|:y_1\\
x_2&=\frac{y_2 x_1}{y_1}&&|\;\text{sijoitetaan arvot}\\
x_2&=\frac{120\cdot6}{10} \\
x_2&=72
\end{align*}

\
**Vastaus:** $72$ pisaraa

---

#- {id="IS9RJmyCDXcs" area_end="es411"}

#- {id="grxeTEXWg3Iw"}
\
[[Suoraan verrannollisuus: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6#suoraan-verrannollisuus-tehtäviä)]{.hidden-print}

## Kääntäen verrannollisuus {id="qCEFVZTDtmTj"}

#- {id="JqNhCSEZjdY9"}
\
Kun ajetaan polkupyörällä, samaan matkaan menee lyhyempi aika, mitä kovempaa 
pyörällä polkee. Kun esimerkiksi nopeus kasvaa kaksinkertaiseksi, matka-aika 
lyhenee puoleen. Tällaisia suureita, joiden tulo on aina vakio, sanotaan 
*kääntäen verrannollisiksi*.

#- {id="H2jDJz4Cc38T" .huomautus}
**Kääntäen verrannollisuus**

\
Suureet $x$ ja $y$ ovat kääntäen verrannolliset, jos $y$ saadaan jakamalla
vakio $k$ suureella $x$ eli jos $y=\dfrac{k}{x}.$

#- {id="1UqgJFCS1ufL"}
\
Yhtälo $y=\dfrac{k}{x}$ saadaan muotoon $xy=k,$ josta nähdään että kääntäen verrannollisten
suureiden *tulo on vakio*. On siis voimassa myös yhtälö $x_1y_1=x_2y_2$ eli 
$\dfrac{y_1}{y_2}=\dfrac{x_2}{x_1}.$

\
Kääntäen verrannollisten suureiden kuvaaja on *hyperbeli.*

![&nbsp;](/images/189653/Screenshot_74.png){width=300}

### Esimerkki: sovellus kääntäen verrannollisuudesta {id="kFkmhctKnQSX" area="es442" collapse="true"}

#- {id="7EF2h1h8BbFQ"}
\
Kylpyhuoneen lattian kaakelointiin tarvitaan $360$ kappaletta vaaleanpunaisia
$10\;\text{cm}\times10\;\text{cm}$-kokoisia laattoja.
Kuinka paljon laattoja tarvittaisiin, jos niiden koko olisi $10\;\text{cm}\times10\;\text{cm}$?

\

![&nbsp;](/images/189655/laatat.jpg){width=300}

\
**Ratkaisu:** 

Olkoon $x$ laattojen määrä ja $y$ niiden koko. Laattojen määrä ja koko ovat
kääntäen verrannollisia suureita, joten

\begin{align*}
x_1y_1=x_2y_2
\end{align*}

\
Merkitään $x_1=360,$ $y_1=10\cdot10=100\;(\text{cm}^2)$ ja $y_2=12\cdot12=144\;(\text{cm}^2)$.
Ratkaistaan $x_2,$ joka kuvaa kysyttyä laattamäärää.

\
\begin{align*}
x_1y_1&=x_2y_2 && |:y_2\\
x_2&=\frac{x_1y_1}{y_2} &&|\;\text{sijoitetaan arvot}\\
x_2&=\frac{360\cdot100}{144} \\
x_2&=250
\end{align*}

\
**Vastaus:** $250$ laattaa

#- {id="jUshR0OuthXo" area_end="es442"}

#- {id="ZU3C18fMYg9w"}
\
[[Kääntäen verrannollisuus: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6#kääntäen-verrannollisuus-tehtäviä)]{.hidden-print}

## Prosentti {id="4nwAOzcn7SLl"}

``` {id="9yIGXyvacvvz" plugin="showVideo"}
footer: "Omaan tahtiin: Prosentti"
#iframe: true
width: 400
height: 300
file: https://youtu.be/8f4Y8AZmafs
```

#- {id="YEc8bwbJtmXL"}
Prosentin nimitys tulee latinan kielestä *per centum*, joka tarkoittaa yksi sadasta. 
Prosentti siis tarkoittaa sadasosaa, ja sen merkki on $\%$. Prosenttia käytetään suhteellisen
osuuden ilmoittamiseen.

#- {id="viLDY8ApgvHx" .huomautus}
**Prosentti**

\

$$ 1\;\text{prosentti}=1\;\% =\frac{1}{100}=0,01$$

### Esimerkki: prosenttiluvun muuttaminen desimaaliluvuksi {id="7i0o6YyZmEDf" area="pros" collapse="true"}

#- {id="2j8MPtjyiqAa"}
\
Ilmaise sadasosina ja desimaalilukuna.

a) $3\;\%$
b) $15\;\%$
c) $-72\;\%$
d) $125,6\;\%$

\
**Ratkaisu:**

Kerrotaan prosenttiluku murtoluvulla $\dfrac{1}{100}.$ Tällöin saadaan murtoluku, jonka
osoittaja kertoo suoraan desimaaliluvun sadasosat. 

\

a) $3\;\%=3\cdot \displaystyle\frac{1}{100}=\displaystyle\frac{3}{100}=0,03$

b) $15\;\%=15\cdot \displaystyle\frac{1}{100}=\displaystyle\frac{15}{100}=0,15$

c) $-72\;\%=-72\cdot \displaystyle\frac{1}{100}=-\displaystyle\frac{72}{100}=-0,72$

d) $125,6\;\%=125,6\cdot \displaystyle\frac{1}{100}=\displaystyle\frac{125,6}{100}=1,256$

\

Prosenttiluvun muunnos desimaaliluvuksi vastaa siis käytännössä pilkun siirtämistä kahden numeron verran vasemmalle.

---

#- {id="yBuJ13eSReZj" area_end="pros"}

### Esimerkki: luvun muuttaminen prosenttiluvuksi {id="ERwP6U9BZRVm" area="pro" collapse="true"}

#- {id="irejA7EmDFwm"}
\
Ilmaise prosentteina.

a) $0,05$

b) $7,92$

c) $0,024$

d) $\displaystyle\frac{4}{5}$

\
**Ratkaisu:**

Kerrotaan desimaaliluku sadalla, jolloin vastauksena saadaan suoraan prosenttiluku.
Murtolukua muutettaessa prosenttiluvuksi, lavennetaan luku ensin muotoon, jossa nimittäjänä on luku $100.$

\

a) $0,05=100\;\%\cdot 0,05=5\;\%$

b) $7,92=100\;\%\cdot 7,92=792\;\%$

c) $0,024=100\;\%\cdot 0,024=2,4\;\%$

d) $^{20)}\displaystyle\frac{4}{5}=\frac{80}{100}=80\;\%$

\

Desimaaliluvun muunnos prosenttiluvuksi vastaa siis käytännössä 
pilkun siirtämistä kahden numeron verran oikealle.

---

#- {id="KHZJW7DwHB1m" area_end="pro"}

#- {id="IMExASwBSoA2"}
\
Seuraavaksi käydään läpi videollakin esiteltyjä, tyypillisimpiä prosenttilaskuihin liittyviä tehtävätyyppejä
esimerkkien kanssa.

#- {id="dHwaFBRpw8yp" .huomautus}
 **Kuinka paljon on $p$ prosenttia luvusta $a$?**
 
 \
 
Kun kysytään kuinka paljon $p$ prosenttia on luvusta $a$, niin tällöin lasketaan tulo $$p\cdot a$$ Tulossa luku $p$ ilmaistaan sadasosina tai desimaalilukuna.

### Esimerkki: $p$ prosenttia luvusta $a$ {id="0LcvcyatJio7" area="tyt" collapse="true"}

#- {id="hUxMX833fL1g"}
\
Opiskelijaryhmän 32 opiskelijasta $62,5\;\%$ on tyttöjä. Tällöin tyttöjä on 


$$62,5\cdot\displaystyle\frac{1}{100}\cdot32=0,625\cdot32=20.$$

---

#- {id="CHQx5bn8Lz7m" area_end="tyt"}

### Esimerkki: opintorahan verotus {id="ZKM1sf1lrBVU" area="op" collapse="true"}

#- {id="cBPEEfhH06hj"}
\

Opintorahasta pidätettiin veroa $10\;\%$ ennen vuotta $2019$. Kuinka paljon opiskelija
joutui vuodessa maksamaan veroa opintorahastaan, kun opintorahan suuruus oli $250,96\;\text{€/kk}$?

![&nbsp;](/images/188948/raha.jpg){width=300}

\
**Ratkaisu:**

Opiskelija saa vuodessa opintorahaa yhteensä $12\cdot250,96\;\text{€}$. Tästä verotetaan $10\;\%$, joten verotettava määrä on:

$10\;\%\cdot12\cdot250,96=\displaystyle\frac{10}{100}\cdot12\cdot250,96=301,152\approx30,15\;\text{(euroa)}.$

(Todellisuudessa opintoraha on verotonta, mutta siitä verotettiin tehtävänannon mukainen $10\;\%$, jonka sai vuoden
päätteeksi veronpalautuksina takaisin. Opintorahan pystyi halutessaan myös nostamaan suoraan verottomana.)

\

**Vastaus:** $30,15\;\text{€}$

---

#- {id="DVz2fLHn0Tbq" area_end="op"}

#- {id="GGvBvcKYR12W"}
\

#- {id="4VlotZzVcTSU" .huomautus}
 \newcommand\ddfrac[2]{\frac{\displaystyle #1}{\displaystyle #2}}
 **Kuinka monta prosenttia luku $a$ on luvusta $b$?**
 
\

Kun kysytään kuinka monta prosenttia $a$ on luvusta $b$, niin kyseessä on suhdelasku 
$$\ddfrac{a}{b},$$ joka muunnetaan prosenteiksi.

### Esimerkki: montako prosenttia luku $a$ luvusta $b$ {id="6EeraCmrJmIY" area="pross" collapse="true"}

#- {id="kSVdaBte6r7v"}
\
Kuinka monta prosenttia luku $7$ on luvusta $30$?

$$\displaystyle\frac{7}{30}\cdot100\;\%=\frac{70}{3}\;\%=23,33...\;\%\approx23,3\;\%$$

---

#- {id="8R9AJmfH7ewy" area_end="pross"}

### Esimerkki: veroprosentin laskeminen {id="zwsStGghsHK6" area="connor" collapse="true"}

#- {id="NyZ7LYiCO0e3"}
\

Edmonton Oilersin NHL-jääkiekkoilija Connor McDavidin bruttopalkka on $12\;500\;000$ 
dollaria ja tämän veronpidätys $5\;966\;250$ dollaria.
Mikä on McDavidin veroprosentti?

\

![[Lähde: Sportsnet](https://www.sportsnet.ca/hockey/nhl/4-things-learned-nhl-oilers-connor-mcdavid-races-past-300/)](/images/188949/connor.jpg){width=300}

\

**Ratkaisu:**

Lasketaan veronpidätyksen suhde bruttopalkkaan ja muutetaan tämä prosenteiksi: \

$$\displaystyle\frac{5\;966\;250}{12\;500\;000}=0,4797\approx0.48=48\;\%$$
\

**Vastaus:** Veroprosentti on $48\;\%$.

---

#- {id="3V9z1laLgEH8" area_end="connor"}

#- {id="IgXHMtbOm9vH"}
\

[[Prosenttilaskenta: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6#prosentti-teht%C3%A4vi%C3%A4)]{.hidden-print}

#- {id="glPIrAa8SRXo"}
\

![&nbsp;](/images/188964/percent.jpg){width=500}

## Muutos- ja vertailuprosentti {id="fi3fAXJFCSjX"}

#- {id="bvfhrmX5xjCA"}
\

Prosenttiluvuilla kuvataan myös suureen muutosta alkuperäisestä arvosta.

#- {id="st9gFtHuEEyo" .huomautus}
**Muutosprosentti**

\
Kuinka monta prosenttia muutos on?
$$\displaystyle\frac{\text{muutos}}{\text{alkuperäinen arvo}}\cdot 100\;\%$$

#- {id="B1prpZ2pM8f8"}
\
*HUOM!* **Prosenttiyksikkö** on absoluuttisen pronsenttimäärän yksikkö. Esimerkiksi
koron noustessa 10 prosentista 11 prosenttiin:

- korko kasvaa 10 prosenttia
- korko kasvaa yhden prosenttiyksikön

### Esimerkki: vuokran muutos prosentteina {id="BPzFMbiFrSVE" area="vuo" collapse="true"}

#- {id="1pSQ0K6OaS03"}
\

Vuokra nousi $327$ eurosta $333$ euroon. Kuinka monta prosenttia vuokra nousi?

\

**Ratkaisu:**

<u>Tapa 1: </u>

Lasketaan vuokran muutoksen suuruus: $$333-327=6\;\text{(euroa)}$$

Lasketaan muutoksen suhde alkuperäiseen vuokraan: $$\displaystyle\frac{6}{327}\approx0,018=1,8\;\%$$

<u>Tapa 2:</u>

Lasketaan suoraan uuden vuokran suhde alkuperäiseen vuokraan:

$$\displaystyle\frac{333}{327}\approx1,018=101,8\;\%$$

Lasketaan suhteen ja alkuperäisen vuokran välinen ero, kun alkuperäistä vuokraa vastaava osuus on $100\;\%$:

$$101,8\;\%-100\;\%=1,8\;\%$$
\

**Vastaus:** Vuokra nousi $1,8\;\%$.

---

#- {id="RRBPaSEy0fZb" area_end="vuo"}

### Esimerkki: prosentti vs. prosenttiyksikkö {id="ny26pqQ7K3Kw" area="yli" collapse="true"}

#- {id="g3fsV7g1LL9s"}
\

Vuoden $2007$ uusista ylioppilaista $57\;\%$ ei jatkanut tutkintoon johtavassa koulutuksessa valmistumisvuonnaan.
Vuonna $2017$ uusista ylioppilaista $72\;\%$ ei jatkanut tutkintoon johtavassa koulutuksessa valmistumisvuonnaan.

![&nbsp;](/images/188953/lakki.jpg){width=200}

a) Kuinka monta prosenttiyksikköä tutkintoaan jatkamattomien määrä kasvoi vuodesta $2007$ vuoteen $2017$?

b) Kuinka monta prosenttia tutkintoaan jatkamattomien osuus kasvoi vuodesta $2007$ vuoteen $2017$?

**Ratkaisu:**

a) Lasketaan muutos prosenttiyksiköissä $72-57=15$.

Tutkintoaan jatkamattomien määrä kasvoi $15$ prosenttiyksikköä.

\

b) Tutkintoaan jatkamattomien osuus kasvoi $15$ prosenttiyksikköä, jonka osuus alkuperäisestä osuudesta on:

$$\displaystyle\frac{15}{57}\approx0,263=26,3\%.$$

Tutkintoaan jatkamattomien osuus kasvoi $26,3\%$.

\

**Vastaus:** 

a) $15$ prosenttiyksikköä 
b) $26,3\%$

---

#- {id="xsXaISiIyuFW" area_end="yli"}

#- {id="Gt62zEVqgKj3"}
\

Vertailuprosentti lasketaan samaan tyyliin kuin muutosprosentti.

#- {id="hr2xPjrUScMd" .huomautus}
**Vertailuprosentti**

\

Kuinka monta prosenttia $a$ on suurempi kuin $b$?

$$\displaystyle\frac{a-b}{b}\cdot100\;\%$$

---

Kuinka monta prosenttia $b$ on pienempi kuin $a$?

$$\displaystyle\frac{a-b}{a}\cdot100\;\%$$

### Esimerkki: vertailuprosentit {id="Mm7EPAPOXYIg" area="jaa" collapse="true"}

#- {id="grx1FbagfhXe"}
\

Iltalehden tietojen mukaan Vaasalaisen jääkiekkoseura Sportin pelaajabudjetti kaudella $2018-2019$ 
oli $1,5$ miljoonan euron suuruinen, kun taas Helsinkiläisen HIFK:n budjetti oli $3,25$ miljoonaa euroa.

a) Kuinka monta prosenttia Sportin pelaajabudjetti oli pienempi kuin HIFK:n?
b) Kuinka monta prosenttia HIFK:n pelaajabudjetti oli suurempi kuin Sportin?

\

**Ratkaisu:**

a) Lasketaan, kuinka monta prosenttia budjettien erotus on HIFK:in budjetista. 

$$\displaystyle\frac{3,25\;\text{milj. €}-1,5\;\text{milj. €}}{3,25\;\text{milj. €}} \approx 0,538=53,8\%$$

Sportin pelaajabudjetti oli $53,8\;\%$ pienempi kuin HIFK:n.

\

b) Lasketaan, kuinka monta prosenttia budjettien erotus on Sportin budjetista.

$$\displaystyle\frac{3,25\;\text{milj. €}-1,5\;\text{milj. €}}{1,5\;\text{milj. €}} \approx 1,167=116,7\%$$

HIFK:n pelaajabudjetti oli $116,7\;\%$ suurempi kuin Sportin.

\

(Tehtävän olisi voinut ratkaista myös esimerkin 4.2.1 toisella tavalla)

\
**Vastaus:**

a) $53,8\;\%$
b) $116,7\;\%$

---

#- {id="a4kayEWOfTqb" area_end="jaa"}

#- {id="Td7RRpByzv4k"}
\

[[Muutos- ja vertailuprosentti: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6#muutos--ja-vertailuprosentti-tehtäviä)]{.hidden-print}

## Muuttuneen arvon laskeminen {id="38x1ejUhmclh"}

#- {id="rDRh2PUvlsNC"}
\ 

Kun positiivinen luku $a$ kasvaa $p\;\%$, saadaan

$$a+\frac{p}{100}\;a=(1+\frac{p}{100})a$$

Samoin kun $a$ pienenee $p\;\%$, saadaan

$$a-\frac{p}{100}\;a=(1-\frac{p}{100})a$$

Näin saadaan laskettua muuttunut arvo.

#- {id="r2U36dFUelLj" .huomautus}
**Korotus**

\

Mikä luku on $p\;\%$ suurempi kuin $a$? 

$$(1+\frac{p}{100})a$$

---

**Alennus**

\

Mikä luku on $p\;\%$ pienempi kuin $a$?

$$(1-\frac{p}{100})a$$

### Esimerkki: talletuksen arvo koron jälkeen {id="9fFg6JK0HJXt" area="pank" collapse="true"}

#- {id="RuX9gvCFEaE7"}
\

Pankki tarjoaa $2,5\%$ korkoa vuotuiselle talletuksella. Paljonko pankki antaa vuoden lopuksi takaisin

a) $1225$ euron

b) $555\;555$ euron 

talletuksesta?

\
**Ratkaisu:**

a) Pankki tarjoaa $2,5\;\%$ korkoa, joten vuoden lopuksi talletuksen suuruus on $100\%+2,5\%=102,5\%$ alkuperäisestä.
Kerrotaan tällä alkuperäisen talletuksen suuruus:

$$102,5\;\%\cdot1225=1,025\cdot1225=1255,625\approx1256\;\text{(euroa)}$$

\

b) Pankki tarjoaa $2,5\;\%$ korkoa, joten vuoden lopuksi talletuksen suuruus on 
$100\;\%+2,5\;\%=102,5\;\%$ alkuperäisestä.
Kerrotaan tällä alkuperäisen talletuksen suuruus:

$$102,5\;\%\cdot555\;555=1,025\cdot555\;555=569\;443,8750\approx569\;444\;\text{(euroa)}$$

\
**Vastaus:**

a) $1256\;\text{€}$ 
b) $569\;444\;\text{€}$

---

#- {id="pathgs4q56ml" area_end="pank"}

### Esimerkki: osakkeiden hinta laskun jälkeen {id="5A0lIujSG1NA" area="nokia" collapse="true"}

#- {id="iuoqNCe3GjCa"}
\
Nokian osakkeet laskivat aamupäivällä $10,9\;\%$. Kuinka paljon maksaa aiemmin

a) $1\;000\;\text{euroa}$  
b) $12\;475\;\text{euroa}$

maksaneet osakkeet?

![&nbsp;](/images/188963/porssi.jpg){width=300}

\
**Ratkaisu:**

a) Osakkeet laskivat $10,9\;\%$, joten uusi osakkeiden hinta on $100\;\%-10,9\;\%=89,1\;\%$ alkuperäisestä.
Kerrotaan tällä alkuperäinen hinta:

$$89,1\;\%\cdot1000=0,891\cdot1000=891\;\text{(euroa)}$$

\

b) Osakkeet laskivat $10,9\;\%$, joten uusi osakkeiden hinta on $100\;\%-10,9\;\%=89,1\;\%$ alkuperäisestä.
Kerrotaan tällä (desimaaliluku) alkuperäinen hinta: 

$$0,891\cdot12\;475=11\;115,22500\approx11\;115\;\text{(euroa)}$$

**Vastaus:**

a) $891\;\text{€}$
b) $11\;115\;\text{€}$

---

#- {id="ho9gY07pa4SP" area_end="nokia"}

### Esimerkki: epäonnistunut myyntikikkailu {id="qtK6qetfguo6" area="suklaa" collapse="true"}

#- {id="GasYGUDx7kaH"}
\

Viekas kaupistelija ajatteli, että jos hän nostaa ensin joulusuklaan hintaa $75\;\%$ ja tämän jälkeen ilmoittaa asiakkaillensa,
että joulusuklaa on $60\;\%$ alennuksessa, niin hän saisi alennusmyynnin turvin myytyä suklaata alkuperäistä hintaa kalliimmalla.

![&nbsp;](/images/189028/suklaa.jpg){width=300}

\
Oliko kauppias oikeassa? Jos suklaan lähtöhinta oli $5,60\;\text{€}$, kuinka paljon se maksoi myyntikikkailujen jälkeen?

\

**Ratkaisu:**

Kauppias korottaa hintaa $75\;\%$, jonka jälkeen hinta on $1,75\cdot5,60\;\text{€}.$

Korotettua hintaa alennetaan $60\;\%$, jonka jälkeen uusi hinta 
on $0,4\cdot1,75\cdot5,60\;\text{€}=0,7\cdot5,60\;\text{€}=3,92\;\text{€}.$

Kauppiaan myyntikikkailujen jälkeen uusi hinta on siis $70\%$ alkuperäisestä eli $3,92\;\text{€}.$
Kauppias myy nyt $100\%-70\%=30\%$ halvemalla
joulusuklaataan.

\

**Vastaus:** Kauppias oli väärässä ja uusi hinta oli $3,92\;\text{€}$.

---

#- {id="8A8aSDVF4baf" area_end="suklaa"}

#- {id="aRpZu5CPQGyu"}
\

[[Muuttuneen arvon laskeminen: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6#muuttuneen-arvon-laskeminen-tehtäviä)]{.hidden-print}

## Prosenttilausekkeita ja -yhtälöitä {id="i1pwFKjCTH84"}

\
Katsotaan lopuksi esimerkkejä, joissa yhtälön ratkaisua käytetään hyväksi
prosenttilaskennan tehtävissä.

### Esimerkki: uusi arvo prosenttilausekkeena {id="2ufwvF8anMCD" area="nous" collapse="true"}

#- {id="vImsPgCazTGt"}
\
Olkoon $x$ tietokoneen hinta. Ilmaise lausekkeena tietokoneen uusi arvo, kun

a) hinta nousee $30\;\%$
b) hinta laskee $15\;\%$

![&nbsp;](/images/188965/tietokone.jpg){width=300}

**Ratkaisu:**

a) Korotuskaavalla saadaan: $\displaystyle\frac{100+30}{100}x=\frac{130}{100}x=1,3x$

\

(Lausekkeen voisi muodostaa myös siten, että lisää alkuperäiseen osuuteen
$30\;\%$ korotuksen eli $100\;\%+30\;\%=130\;\%=1,3$ ja kertoo tällä alkuperäisen hinnan.)

\

b) Alennuskaavalla saadaan: $\displaystyle\frac{100-15}{100}x=\frac{85}{100}x=0,85x$

\

(Lausekkeen voisi muodostaa myös siten, että vähentää alkuperäisestä osuudesta
$15\;\%$ alennuksen eli $100\;\%-15\;\%=85\;\%=0,85$ ja kertoo tällä alkuperäisen hinnan.)

---

#- {id="4RZbAiK0gPrJ" area_end="nous"}

### Esimerkki: alkuperäisen arvon laskeminen {id="QoZw5NK2KdfO" area="kone" collapse="true"}

#- {id="A0t8XITFjH7c"}
\

Mikä oli edellisen esimerkin tietokoneen alkuperäinen arvo, kun sen hinta
korotuksen jälkeen oli $907,40\;\text{€}$?

\
**Ratkaisu:**

Edellisen esimerkin lausekkeen avulla saadaan muodostettua yhtälö

\begin{align*}
1,3x&=907,4 \\
x&=\displaystyle\frac{907,4}{1,3} \\
x&=698
\end{align*}

\
**Vastaus:** Tietokoneen alkuperäinen hinta oli $698\;\text{€}$.

---

#- {id="a8exBaabmE4e" area_end="kone"}

### Esimerkki: polttoainekustannusten muutos {id="oC6aoytsI64U" area="e433" collapse="true"}

#- {id="TotG2VOl3Orw"}
\
Bensan hinta nousi viime viikon jälkeen $7,5\;\%$, minkä vuoksi perhe päätti, että 
autolla ajetaan puolet vähemmän. Paljonko perheen tämän viikon polttoainekustannukset 
muuttuvat verrattuna viime viikon kustannuksiin?

\

![&nbsp;](/images/189909/bensa3.jpg){width=300}

\
**Ratkaisu:**

Merkitään muuttujalla $x$ polttoaineen hintaa viime viikolla. 
\

Bensan hinta nousi $7,5\%$, joten uusi bensan hinta on $1,075x$.
\

Perhe ajaa autolla puolet vähemmän, joten polttoaineeseen kuluu rahaa $0,5\cdot1,075x=0,5375x$. 
\

Muutos viime viikon kustannuksiin on $\displaystyle\frac{x-0,5375x}{x}=\displaystyle\frac{0,4625x}{x}=0,4625\approx46,3\%$.

\

**Vastaus:** Polttoainekustannukset vähenivät $46,3\;\%$.

---

#- {id="Nw6A5kyaIlzv" area_end="e433"}

### Esimerkki: hinnan korotus ja alennus alkuperäiseen {id="m8JPd3vCEDmb" area="påö" collapse="true"}

#- {id="TsRUoCzldMFN"}
\
Hintaa $h$ korotetaan ensin $p\;\%$. Kuinka monta prosenttia tulisi korotettua 
hinta alentaa, jotta hinta olisi alkuperäisen suuruinen?

\
**Ratkaisu:**

Merkitään muuttujalla $x$ alennusta prosentteina.

Hintaa $h$ korotetaan $p\;\%$: $\displaystyle\frac{100+p}{100}h$

Korotettua hintaa alennetaan $x\;\%$: $\displaystyle\frac{100-x}{100}\displaystyle\frac{100+p}{100}h$

Muodostetaan ja ratkaistaan yhtälö, kun uuden hinnan tulee olla yhtä suuri kuin alkuperäinen:

\
\begin{align*} 
\frac{100-x}{100}\frac{100+p}{100}h & = h && |:h  \\
 \frac{100-x}{100}\frac{100+p}{100} & = 1 && | \cdot 100 \cdot 100 \\
 (100-x)(100+p) &= 10000 \\
 10 000+100p-100x-xp&=10000 && |-10000 \\
 100p-100x-xp&=0 && |+100x+xp \\
 100x+xp&=100p \\
 x(100+p)&=100p && |:(100+p) \\
 x&=\frac{100p}{100+p}
\end{align*}

\

**Vastaus:** $\displaystyle\frac{100p}{100+p}\;\%$

---

#- {id="fXu5nKIO6pQx" area_end="påö"}

#- {id="AWb9TKkppS0a"}
\

[[Prosenttilausekkeita ja -yhtälöitä: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-2-6#prosenttilausekkeita-ja--yhtälöitä-tehtäviä)]{.hidden-print}

#- {id="Vm34rYjhmEh1" area_end="sisalto"}
