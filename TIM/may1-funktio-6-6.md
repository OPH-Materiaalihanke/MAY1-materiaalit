``` {id="US7oVwOUtIHO" settings=""}
auto_number_headings: true
auto_number_start: 4
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
  textitle: 'Funktio'
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

#- {id="lwv59DSrBu2T" area="sisalto"}

# Funktio {id="JjjheS5gdYti"}

Viimeisessä kappaleessa aiheena on funktio. Kappaleessa perehdytään siihen, mitä funktio tarkoittaa
sekä käsitellään funktion kuvaajan piirtämistä ja tulkintaa. Lopuksi käydään läpi esimerkkejä funktion
sovelluksista. Kappaleeseen liittyvät tehtävät ovat [omalla sivullaan](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6).

``` {id="ROZbUr7APzQp"  atom="true"}
Funktiota tarvitaan tutkittaessa muuttuvien suureiden välistä riippuvuutta. 
Usein suureen arvo riippuu siitä, mikä toisen suureen arvo on. Esimerkiksi ympyrän
pinta-ala riippuu säteestä ja autolla ajettu matka riippuu nopeudesta.

![&nbsp;](/images/190049/mittari3_2.jpg){width=500}

## Funktion määritelmä
```

``` {id="LWlfZPcNdjCI" #V2 plugin="showVideo"}
footer: "Opetus tv: Johdanto funktion käsitteeseen"
iframe: true
width: 400
height: 300
start: 0:00
end: 4:07
file: //https://www.youtube.com/watch?v=vmByyF5c2QM
```

#- {id="oFBRJBixZLlX"}
Videossa on kone, joka tuottaa siihen syötetystä nimestä luvun. 
Sääntönä on, että koneen tuottama luku kertoo nimen pituuden.
Tällainen yksikäsitteinen sääntö määrittelee **funktion**.

#- {id="PkveKfzDuNlT" .huomautus}
**Funktio**

\

Funktio on sääntö, joka ilmaisee, miten lähtöarvosta saadaan yksikäsitteisesti loppuarvo.
Lähtöarvoa kutsutaan *muuttujan arvoksi* ja loppuarvoa *funktion arvoksi*.

\

Lähtöarvot eli luvut, jotka funktioon voidaan syöttää muodostavat funktion *määrittelyjoukon*. 
Loppuarvot eli luvut, jotka funktio tuottaa, muodostavat funktion *arvojoukon*.

#- {id="U8WeFx9OJ6QN"}
Funktio nimetään tavallisesti kirjaimella $f$, $g$ tai $h$. 
Lähtöarvoa kuvaavana muuttujana käytetään yleensä kirjainta $x$.

Usein funktion sääntö esitetään lausekkeena. Esimerkiksi sääntö *"lukuun lisätään 4"* voidaan esittää
lausekkeena seuraavasti.

$$f(x)=x+4$$

Funktion lausekkeen avulla voidaan laskea funktion arvoja. Esimerkiksi 
*"funktion $f$ arvo kohdassa 5"* lasketaan sijoittamalla luku 5 muuttujan $x$ paikalle.

$$f(5)=5+4=9$$

### Esimerkki: funktion arvon laskeminen {id="i0n6hErn8Sir" area="esim1" collapse="true"}

#- {id="kHkWm3vLD0eR"}
\
Funktion $f$ arvo lasketaan seuraavan säännön avulla:

*Funktioon syötettyyn lukuun lisätään luku 8 ja summa jaetaan luvulla 2.*

a) Muodosta funktion lauseke.
b) Laske funktion arvot $f(5)$ ja $f(-2)$.

\
**Ratkaisu:**

a) Merkitään funktioon syötettävää lukua eli muuttujaa kirjaimella $x$. Kun 
muuttujaan $x$ lisätään luku 8, saadaan $x+8$. Kun lauseke jaetaan luvulla 2, 
saadaan $\displaystyle \frac{x+8}{2}$. 

    Funktion lauseke on $f(x)=\displaystyle \frac{x+8}{2}$.
    
b) Funktion arvo kohdassa 5 merkitään $f(5)$ ja lasketaan sijoittamalla 
lausekkeeseen muuttujan paikalle luku 5.

    $f(5)=\displaystyle \frac{5+8}{2}=\displaystyle\frac{13}{2}$.
    
    Vastaavasti funktion arvo kohdassa -2 on

    $f(-2)=\displaystyle \frac{-2+8}{2}=\displaystyle \frac{6}{2}=3$.
    
---

#- {id="4QzUzmXB9peS" area_end="esim1"}

### Esimerkki: funktion määrittelyjoukko {id="py6nSP0fMZ6y" area="esim2" collapse="true"}

#- {id="iIfYCosBVRhU"}
\
Päättele funktion määrittelyjoukko.

a) $f(x)= \displaystyle \frac{3}{x-2}$

b) $g(x)= \sqrt{4-x}$

\
**Ratkaisu:**

a) Jakolasku $f(x)= \displaystyle \frac{3}{x-2}$ on määritelty vain, 
kun jakaja $x-2$ ei ole nolla.

    Siten funktion $f$ määrittelyjoukon muodostavat luvut $x$, jotka toteuttavat ehdon $x\neq2$.
    
b) Neliöjuuri $\sqrt{4-x}$ on määritelty vain, kun luku $4-x$ on on suurempi tai yhtä suuri kuin nolla.

    Siten funktion $g$ määrittelyjoukon muodostavat luvut $x$, jotka toteuttavat ehdon $x\le4$.
    
---

#- {id="mp3rQRACPMM5" area_end="esim2"}

#- {id="R92eWiSRcf5j"}
\

[[Funktion määritelmä: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6#funktion-määritelmä-tehtäviä)]{.hidden-print}

## Funktion nollakohta {id="3K1mXCX0AWxc"}

#- {id="OFp5ggrO6vyB"}
Millä muuttujan $x$ arvolla funktio saa arvon nolla tai missä pisteessä kuvaaja leikkaa
x-akselin? Kyse on samasta asiasta, funktion nollakohdan määrittämisestä.

#- {id="n6IRLqUN5h3P"}
Huom! *"Funktion arvo kohdassa 0"* ja *"funktion nollakohta"* tarkoittavat eri asiaa.

#- {id="oseXIeEVFkGw" .huomautus}
**Funktion nollakohta**

\
Niitä määrittelyjoukon lukuja, joilla funktion arvo on nolla, kutsutaan *funktion nollakohdiksi*.
Funktion nollakohdat toteuttavat siis yhtälön $f(x)=0$.

### Esimerkki: funktion arvo kohdassa nolla ja funktion nollakohdat {id="DISmQGBXONko" area="esim3" collapse="true"}

#- {id="0xIY5grMaUdn"}
\
Määritä funktion $f(x)=5x+9$ arvo kohdassa $0$ ja funktion nollakohdat.

\
**Ratkaisu:**

Funktion arvo kohdassa $0$ lasketaan sijoittamalla muuttujan $x$ paikalle luku $0$.

$f(0)=5\cdot0+9=9$

Funktion nollakohdat löydetään ratkaisemalla yhtälö $f(x)=0$.

\

\begin{align*}
f(x)=0 \\
5x+9=0 \\
5x=-9 \\
x=-\frac{9}{5}
\end{align*}

Funktion $f$ nollakohta on siis $x=- \displaystyle \frac{9}{5}$.

---

#- {id="dHbDEnGbBMEs" area_end="esim3"}

#- {id="mGnCTJdFHAzA"}
\

[[Funktion nollakohta: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6#funktion-nollakohta-tehtäviä)]{.hidden-print}

## Funktion kuvaaja {id="Ao3IRQIWCvyV"}

\

``` {id="aeT7AGog1T7y" #V1 plugin="showVideo"}
footer: "Opetus tv: Funktion kuvaaja xy-koordinaatistossa"
iframe: true
width: 400
height: 300
start: 0:00
end: 5:35
file: //https://www.youtube.com/watch?v=iXbJJ1SPaPc
```

#- {id="gY5YkxaQ0jJi" .huomautus}
**Funktion kuvaaja xy-koordinaatistossa**

\
Funktion $f$ kuvaaja muodostuu pisteistä $(x, y)$, joissa $x$ on muuttujan arvo ja $y$
funktion arvo kohdassa $x$ eli $y=f(x)$.

\

![&nbsp;](/images/188296/Screenshot_4.png){width=350 height=350}

#- {id="tZzaCpTZizya"}
\

### Esimerkki: funktion kuvaajan hahmottelu ilman ohjelmistoa {id="6vE0eeVoc5h6" area="esim4" collapse="true"}

#- {id="ORUvmCqH04Yn"}
\

Funktion $f(x)=3^x-2$ kuvaaja muodostuu koordinaatiston pisteistä $(x, y)$, joissa $x$ on muuttujan arvo 
ja $y$ on funktion arvo kohdassa $x$ eli $y=3^x-2$. 

\
Taulukoidaan pisteitä, joiden kautta funktion $f$ kuvaaja esimerkiksi kulkee.


$x$      $y=3^x-2$      $(x, y)$
-------- -------------  ------------ 
$0$      $3^0 - 2 = -1$   $(0, -1)$
$1$      $3^1 - 2 = 1$    $(1, 1)$ 
$2$      $3^2 - 2 = 7$    $(2, 7)$ 

\
Alla olevaan koordinaatistoon on piirretty taulukoidut pisteet sekä niiden kautta 
kulkeva funktion kuvaaja. 

\

![&nbsp;](/images/188309/Screenshot_8.png){width=300}

---

#- {id="of8888qMusYf" area_end="esim4"}

#- {id="VsXZwHuW7p3t"}
\

Funktion kuvaaja voidaan hahmotella saatujen pisteiden avulla vain karkeasti.
Sopivan ohjelman avulla funktion kuvaaja saadaan piirrettyä täysin tarkasti.

Videolla näytetään kuvaajan piirtäminen TI-Nspire CAS -laskimella. 

\

``` {id="YKtPssfnbJA7" #V3 plugin="showVideo"}
footer: "TI-Nspire: Piirretään kuvaajia"
iframe: true
width: 400
height: 300
start: 0:00
end: 2:34
file: //https://www.youtube.com/watch?v=gcBENgljduA
```

#- {id="WZSVI2KsJg88"}
\

### Esimerkki: funktion kuvaaja Geogebralla {id="Ch8mtEVlEpxn" area="e632" collapse="true"}

#- {id="13IPtzgQjeDJ"}
\
Geogebran piirto-ohjelmalla funktioiden kuvaajien piirto tapahtuu helposti 
kirjoittamalla haluttu funktio syöttökenttään. Esimerkiksi funktio $f(x)=x-2$
piirrettäisiin seuraavasti. 

\

![&nbsp;](/images/190050/Screenshot_89.png){width=500}

\
Alla olevalla Appletilla voi tutkia, mistä pisteistä funktion $f(x)=x-2$ kuvaaja 
koostuu liikuttelemalla keltaista pistettä kuvaajalla.

``` {id="kuUv2xCmt7Vv" plugin="showVideo"}
iframe: true
open: true
videoicon: false
texprint: '![&nbsp;](/images/190243/Screenshot_126.png)'
hidetext: Piilota GeoGebra
type: small
videoname: ""
width: 800
height: 500
file: "https://www.geogebra.org/classic/tkmphux3"
```

#- {id="dRIUwBQbZRUi"}
\
Huomataan, että funktion $f(x)=x-2$ kuvaaja muodostuu siis pisteistä $(x, x-2)$.
Kuvaaja kulkee esimerkiksi pisteiden $(3,3-2)=(3,1)$ ja $(1,1-2)=(1,-1)$ kautta.

\
Funktion nollakohdassa funktio saa arvon nolla eli kuvaaja leikkaa x-akselin. 
Funktion $f(x)=x-2$ nollakohta on siten $(2,0)$.

#- {id="zHxjY10GSn4W" area_end="e632"}

#- {id="eQlbtJBtohlO"}
\

[[Funktion kuvaaja: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6#funktion-kuvaaja-tehtäviä)]{.hidden-print}

## Funktion kuvaajan tulkinta {id="wCUxnvM6Sj5V"}

\
Kuvaajan etuna on, että se havainnollistaa funktiota graafisesti, jolloin siitä on helpompi tehdä tulkintoja.
Kuvaajasta nähdään monia funktion ominaisuuksia, kuten merkin vaihtuminen ja arvojen muuttuminen.

### Esimerkki: funktion arvojen lukeminen kuvaajasta {id="RBh3p5nbkeqA" area="esim5" collapse="true"}

#- {id="qWezY2C36IPq"}
\
Määritä kuvaajan perusteella

\

![&nbsp;](/images/188342/Screenshot_16.png){width=350}

a) funktion $f$ nollakohdat
b) funktion $f$ arvo kohdassa $x=-2$
c) funktion $f$ arvot, joilla funktio $f$ saa arvon $-4$.

\
**Ratkaisu**

a) Nollakohdassa funktion arvo on nolla eli funktion kuvaaja leikkaa x-akselin.
Kuvaajan perusteella funktion $f$ nollakohdat ovat $x\approx-4$, $x\approx 0$ ja $x\approx2$.

\

b) Kohdassa $x=-2$ funktio näyttää kulkevan pisteen $(-2, -4)$ kautta, eli $f(-2)\approx-4$.

\

c) Funktio $f$ saa arvon $-4$, kun kuvaajan pisteen y-koordinaatti on $-4$. 
Käyrällä on neljä pistettä, joissa $y=-4$. Tällöin $x\approx-5$, $x\approx-2$, $x\approx-1,3$
 ja $x\approx2,3$.
 
\
 
![Image](/images/188343/Screenshot_15.png){width=250}

---

#- {id="O9nbM9PLVsme" area_end="esim5"}

#- {id="ZUqn6IWMDtxA" .huomautus}
**Funktion merkki**

\ 

Funktion arvo on positiivinen, kun sen kuvaaja on x-akselin yläpuolella. 
Kuvan funktion arvot ovat siis positiivia, kun $x<-2$ tai $x>2$.

\

![&nbsp;](/images/188345/Screenshot_17.png){width=300}

\

Funktion arvo on negatiivinen, kun sen kuvaaja on x-akselin alapuolella.
Kuvan funktion arvot ovat siis negatiivisia, kun $-2<x<2$.

\

![&nbsp;](/images/188346/Screenshot_19.png){width=300}

### Esimerkki: funktion merkin tutkimista Geogebralla {id="KlGq9Xw6vxhX" area="es641" collapse="true"}

#- {id="39fnjjHrSd8X"}
\
Syötä Applettiin haluamasi funktion lauseke ja tarkastele funktion kulkua.
Koordinaatisto muuttuu vihreäksi kohdista, joissa funktion arvo on positiivinen
ja punaiseksi kohdissa, joissa funktion arvo on negatiivinen. Funktio vaihtaa merkkinsä
nollakohdissa, jotka on myös piirretty kuvaan.

``` {id="29VglL7xtFby" plugin="showVideo"}
iframe: true
open: true
videoicon: false
texprint: '![&nbsp;](/images/190246/Screenshot_127.png){width=400}'
hidetext: Piilota GeoGebra
type: small
videoname: ""
width: 750
height: 500
file: "https://www.geogebra.org/classic/yafbfhjx"
```

#- {id="K9b2hVYJCZUQ" area_end="es641"}

### Esimerkki: lämpötilakuvaajan tulkintaa {id="bFmSTZYpoBim" area="esim6" collapse="true"}

#- {id="nltEhZhO0l4Z"}
\
Kuvassa on esitetty Jyväskylän lentoaseman lämpötilahavainnot kahden vuorokauden ajalta. 
Tarkastellaan kuvaan merkattua aikaväliä $9.00-9.00$. 

\

![Lähde: Ilmatieteen laitos](/images/188457/lampotila.png)

\

a) Milloin lämpötila on $4\;^{\circ}\text{C}$ ?
b) Onko lämpötila plussan vai miinuksen puolella keskiyöllä?
c) Milloin lämpötila on alle $0\;^{\circ}\text{C}$ ?

\
**Ratkaisu:**

a) Lämpötila saa arvon $4\;^{\circ}\text{C}$ vain kerran kysytyllä aikavälillä: noin kello $21.00$.
\

b) Ajanhetkellä $00.00$ kuvaaja on punaisen viivan yläpuolella eli lämpötila on plussan puolella. 
\

c) Lämpötila on alle $0\;^{\circ}\text{C}$, kun kuvaaja on punaisen viivan alapuolella 
eli noin kellonaikojen $3.00$ ja $7.00$ välillä.

---

#- {id="uWJmbWGFq82X" area_end="esim6"}

### Esimerkki: funktion kuvaajan tulkintaa {id="aXalXSpBh8FT" area="esim7" collapse="true"}

#- {id="DuKKbb6nZizy"}
\
Vastaa kuvan funktion $f$ kuvaajan perusteella.

\

![&nbsp;](/images/188469/Screenshot_21.png){width=450}

\

a) Minkä merkkinen funktion $f$ arvo on välillä $0<x<1$? Entä välillä $2,5<x<3$?

b) Milloin $f(x)\ge0$?

#- {id="tP046j8AhByB"}
\
**Ratkaisu:**

a) Funktion kuvaaja kulkee välillä $0<x<1$ x-akselin yläpuolella.
Funktion arvo on siis positiivinen, kun $0<x<1$.

![&nbsp;](/images/188473/Screenshot_25.png){width=300}

\
Funktion kuvaaja kulkee välillä $2,5<x<3$ x-akselin alapuolella.
Funktion arvo on siis negatiivinen, kun $2,5<x<3$.

![&nbsp;](/images/188474/Screenshot_26.png){width=300}

\

b) Tarkastellaan, milloin $f(x)\ge0$ eli funktion $f$ arvo on suurempi tai yhtä 
suuri kuin nolla. Funktion arvo on nolla x-akselin leikkauspisteissä 
ja positiivinen, kun funktion kuvaaja kulkee x-akselin yläpuolella.

![&nbsp;](/images/188475/Screenshot_27.png){width=300}

\

Koska funktion $f$ arvo on negatiivinen kahdella eri välillä, annetaan vastaus 
kahdessa eri osassa.

$f(x)\ge0$, kun $0\le x \le 2$ tai $x\le 3$.

\

*Huom! Nollakohdat kuuluvat välille, joten muista yhtäsuuruudet.*

---

#- {id="RPkGqKoJvebu" area_end="esim7"}

#- {id="RPWqA4xCONo6"}
\

[[Funktion kuvaajan tulkinta: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6#funktion-kuvaajan-tulkinta-tehtäviä)]{.hidden-print}

## Potenssifunktio {id="a1wq3LELyLvs"}

\
Kappaleessa 5 opimme, että muotoa $x^n=a$ olevaa yhtälöä sanotaan potenssiyhtälöksi
ja kävimme läpi potenssiyhtälön ratkaisut, kun $n=2$ tai $n=3.$
Vastaavasti **potenssifunktioksi** sanotaan funktiota, jonka lauseke on potenssi ja
muuttujana potenssin kantaluku.

#- {id="jSXNLCmqM5Ta" .huomautus}
**Potenssifunktio**

\
Potenssifunktio on funktio, joka on muotoa 

$$f(x)=x^n,$$

missä $n$ on kokonaisluku.

#- {id="R5FRuFpKRp5A"}
Selvitetään seuraavaksi potenssifunktioiden tyypillisiä ominaisuuksia, joihin
potenssiyhtälöiden ratkaisujen määrä ja olemassaolo perustuvat. Keskitytään
taas tapauksiin, joissa $n=2$ tai $n=3.$

#- {id="l9T7iuj9S1Ma"}
![&nbsp;](/images/189758/Screenshot_78.png){width=500}

#- {id="jxiqCA8YyGnj"}
\
 

- Funktion $f(x)=x^2$ kuvaaja sijaitsee ensimmäisessä ja toisessa neljänneksessä ja 
se saa arvoja välillä $[0,\infty[$. \

- Funktion $f(x)=x^3$ kuvaaja sijaitsee ensimmäisessä ja kolmannessa neljänneksessä
se saa arvoja koko reaalilukujoukossa $\mathbb{R}$. \

- Molempien funktioiden määrittelyjoukko on $\mathbb{R}$.

\

### Esimerkki: ympyrän pinta-alan funktio {id="TjTQa6TBiTSj" area="ympyr" collapse="true"}

#- {id="axJ85eha7EIb"}
\
Ympyrän pinta-ala riippuu ympyrän säteestä eli pinta-ala $A$ on säteen $r$ funktio.
Ympyrän pinta-alaa kuvaa funktio 

$$A(r)=\pi r^2$$

\
Koska säteen arvot ovat positiivisia kokonaislukuja, määrittelyjoukkona ei ole 
koko reaalilukujoukko vaan positiiviset reaaliluvut. Määrittelyjoukko on siis $\mathbb{R}_+$.

\
Piirretään funktion kuvaaja ja luetaan kuvaajalta ympyrän pinta-aloja eri säteen arvoilla.

\

![&nbsp;](/images/190096/Screenshot_96.png){width=400}

\
Funktion kuvaaja sijaitsee vain ensimmäisessä neljänneksessä määrittelyehdon vuoksi.

Kuvaajan perusteella voidaan päätellä, että kun ympyrän säde on $2$, sen pinta-ala on $12,5$
eli $A(2)\approx12,5$.

Vastaavasti $A(r)\approx50$ kun $r=4$, eli säteen arvolla $4$ ympyrän pinta-ala on noin $50.$

---

#- {id="kwr2U1ikRn9Q" area_end="ympyr"}

#- {id="u7Ln0kvg5Trx"}
\

[[Potenssifunktio: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6#potenssifunktio-tehtäviä)]{.hidden-print}

## Funktion sovelluksia {id="c1rHKvgwC6ZJ"}

### Esimerkki: bensatankillisen hinta {id="h9rPlYq6wVt9" area="esim8" collapse="true"}

#- {id="ZldbpaWZUUYD"}
\
98E-bensiinin hinta on $1,638\;\text{€/l}$. Muodosta tuotteen hintaa kuvaava funktio ja 
havainnollista hinnan muodostumista koordinaatistossa. Laske tai lue kuvaajasta kuinka
paljon maksaa tankillinen bensaa, kun tankin tilavuus on $8$ litraa.

\

![&nbsp;](/images/188488/bensa.jpg){width=400}

\
**Ratkaisu:**

Bensiinin hinta riippuu sen tilavuudesta. Merkitään tilavuutta litroina kirjaimella $x$.
Bensiinin hintaa kuvaa tällöin funktio $g(x)=1,638x$, jossa $x\ge0$. 
(Hinta voidaan laskea vain silloin, kun bensiinin tilavuus ei ole negatiivinen.)

Piirretään funktion $g$ kuvaaja Geogebran avulla.
\

![&nbsp;](/images/190059/Screenshot_94.png){width=500}

#- {id="73SwCMlr4dFH"}
\

Selvitetään bensatankillisen hinta ensin kuvaajasta lukemalla. Muuttujan $x$ arvo on $8$.
Funktio saa kohdassa $x=8$ likimain arvon $13,5,$ joten bensatankillisen hinta olisi noin $13,5\;\text{€}$.

\

![&nbsp;](/images/188492/Screenshot_33.png){width=450}

\

Lasketaan bensatankillisen hinta myös funktion lausekkeen avulla. Kysytään siis funktion arvoa $g(8)$.
$$g(8)=1,688\cdot8=13,48\;(\text{euroa})$$ 
\

**Vastaus:** Bensatankillisen hinta on $13,48$ euroa.

---

#- {id="yrusXpwBiZ3s" area_end="esim8"}

### Esimerkki: sähkönkulutuksen laskemista {id="CeM5xiUFpbv7" area="esim9" collapse="true"}

#- {id="UaBKNT2MDTak"}
\
Sähkön vuotuista kokonaiskulutusta gigawattitunteina (GWh) Suomessa vuosina $1970-2014$
voidaan kuvata funktiolla 
$$f(x)=-1,3x^3+58,8x^2+1349,4x+21583,$$
missä $x$ on kulunut aika (vuosina) vuodesta $1970$.

\

![&nbsp;](/images/189364/sahko.jpg){width=400}

\

a) Laske sähkönkulutus vuonna $1970$ ja vuonna $2000$.
b) Määritä kuvaajan avulla, minä vuonna sähkönkulutus kääntyi laskusuuntaan.

\

**Ratkaisu:**

a) Sähkönkulutus vuonna $1970$ on funktion $f$ arvo kohdassa $0$ ja vuonna $2000$ kohdassa
$2000-1970=30$. Lasketaan funktion arvot.

\

$$f(0)=-1,3\cdot0+58,8\cdot0+1349,4\cdot0+21583=21583\approx21600$$
$$f(30)=-1,3\cdot30+58,8\cdot30+1349,4\cdot30+21583=79885\approx79900$$
\

Vuonna $1970$ sähköä kulutettiin noin $21\;600\;\text{GWh}$ ja vuonna $2000$ noin $79\;900\;\text{GWh}$. 

\

b) Piirretään funktion $f$ kuvaaja välillä $0\le x \le44$.
Energiankulutus kääntyy laskuun siinä kohdassa, jossa funktion kuvaajan
$y-$koordinaatti saa suurimman arvonsa. Geogebralla funktion suurimman arvon saa 
selville klikkaamalla valikosta Ääriarvot-komentoa ja sen jälkeen halutun funktion kuvaajaa. 

\

![&nbsp;](/images/188512/Screenshot_35.png){width=500}

\

Kuvaajan perusteella funktio saa suurimman arvonsa kohdassa $x\approx39$. Sähkönkulutus kääntyi 
laskuun siis vuonna $1970+39=2009$.

---

#- {id="iqWUJouh4NDY" area_end="esim9"}
\

#- {id="BqszfkboW4I1"}
\
[[Funktion sovelluksia: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-tehtavat-6-6#funktion-sovelluksia-tehtäviä)]{.hidden-print}

#- {id="IdVO7W7aiPpY" area_end="sisalto"}
