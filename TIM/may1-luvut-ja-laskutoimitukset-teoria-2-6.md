``` {id="ez229px8N0PM" settings=""}
auto_number_headings: true
auto_number_start: 0
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
  textitle: 'Luvut ja laskutoimitukset'
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
  texpackages:
    \usepackage{gensymb}
    \usepackage{cancel}
```

#- {id="SNf4yVVSsnT9" area="sisalto"}

# Luvut ja laskutoimitukset {id="XkB0HIYMnNOD"}

#- {id="QsyaXQfn0q5r"}
Ensimmäisessä kappaleessa käsitellään lukuja sekä niillä tehtäviä laskutoimituksia.
Käymme läpi lukualueet sekä palautamme mieleen yläkoulusta tutut merkkisäännöt ja laskulait.
Lisäksi kerrataan murtoluvuilla tehtävät laskutoimitukset. Kappaleeseen liittyvät tehtävät
ovat [omalla sivullaan](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1).

\

![&nbsp;](/images/188970/luvut.jpg){width=500}

## Lukualueet {id="ckN101L6KHGx"}

#- {id="GLxzCT2XpuyK"}
Matematiikassa luvut muodostavat perustan laskutoimituksille. Nykyinen lukukäsite on pitkällisen,
vuosituhansia kestäneen kehityksen tulosta, eikä pystytä sanomaan, onko tämä kehitys jo päättynyt.

Jo ensimmäisellä peruskoulun vuosiluokalla opimme lukumäärää ilmaisevat luonnolliset luvut. 
Miksi näitä on sitten lähdetty laajentamaan kohti reaalilukuja? Esimerkiksi Rene Descartesin $(1596-1650)$ oli vaikea hyväksyä
lukualueen laajennusta luonnollisista luvuista kokonaisluvuiksi ja hän kutsuikin negatiivisia lukuja "vääriksi luvuiksi".
Yksi lähestymistapa lukulaajennuksille on yhtälöopillinen: Millainen yhtälö on ratkeamaton kyseisellä lukualueella, jota
haluamme laajentaa? Esimerkiksi luonnollisten lukujen tapauksessa yhtälö $x+1=0$ on ratkeamaton, sillä $x=-1$ ei kuulu
luonnollisiin lukuihin. Lisäämällä negatiiviset luvut $\mathbb{Z^-}=\{...,-3,-2,-1\}$ luonnollisten lukujen joukkoon
saamme muun muassa edellä mainitun yhtälön ratkeavaksi.

Lukualueen laajentaminen on näin edennyt luonnollisista luvuista aina reaalilukuihin asti.
Uudet käyttöön otetut luvut on liitetty entisiin, jolloin uusi lukujoukko sisältää aikaisemmat lukujoukot.

``` {id="jbmSrubh1vsd" plugin="showVideo"}
footer: "Opetus tv: Lukujoukot"
#iframe: true
width: 400
height: 300
file: https://youtu.be/xkN1EvSPH04
```

#- {id="d5R66y1LDgJc" .huomautus}
**Lukualueet**

\

- Luonnolliset luvut $\mathbb{N}=\{0,1,2,3,...\}$
- Kokonaisluvut $\mathbb{Z}=\{...,-3,-2,-1,0,1,2,3,...\}$
- Rationaaliluvut $\mathbb{Q}=\{\dfrac{m}{n}|m,n\in\mathbb{Z}, n\neq0\}$
- Reaaliluvut $\mathbb{R}$ on rationaalilukujen lukulaajennus, joka saadaan lisäämällä
   irrationaalilukujen joukko rationaalilukuihin. Irrationaaliluvut ovat lukuja, joita
ei voida esittää kahden kokonaisluvun osamääränä esim. $\sqrt{5}$, $\pi$ ja jaksoton desimaaliluku $0,19781324...$. Käytännössä katsoen reaalilukuja
ovat siis kaikki ne luvut, joita on peruskoulun matematiikassa käytetty.

#- {id="688wL1f86Aex"}
![&nbsp;](/images/185125/Lukujoukotkuvaxs.jpg){width=400}

### Esimerkki: lukualueet {id="aWxoeeUg2GZQ" area="e6" collapse="true"}

#- {id="8FuYNV1hCS0f"}
\
Mihin lukujoukkoihin luku kuuluu?

a) $7$

b) $-2$

c) $\displaystyle\frac{3}{7}$

d) $0,6$

e) $6,35730672059...$

\
**Ratkaisu:**

a) Luonnollisiin lukuihin. Lisäksi, kokonais-, rationaali- sekä reaalilukuihin, koska nämä lukujoukot
pitävät sisällään myös luonnolliset luvut.

b) Kokonaislukuihin. Lisäksi, rationaali- ja reaalilukuihin.

c) Rationaali- ja reaalilukuihin.

d) Rationaali- ja reaalilukuihin, sillä luku $0,6$ voidaan esittää murtolukuna $\displaystyle\frac{3}{5}$.

e) Ainoastaan reaalilukuihin. Kyseessä on päättymätön ja jaksoton desimaaliluku, jonka vuoksi sitä ei voida esittää
kahden kokonaisluvun osamääränä. Tämän vuoksi luku ei kuulu rationaalilukuihin, jolloin se ei myöskään kuulu
kokonaislukuihin tai luonnollisiin lukuihin.

---

#- {id="TKtpEYURFVxV" area_end="e6"}

#- {id="JQR5jcmDm4Kw"}
\

[[Lukualueet: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1#lukualueet-tehtäviä)]{.hidden-print}

## Laskulait {id="Ud16NGKM6Z8U"}

#- {id="DEVNFE6HeSYm"}
Palautetaan mieleen tutut merkkisäännöt ja laskulait. Kerto- ja jakolaskussa kahden samanmerkkisen luvun laskutoimitus on positiivinen ja kahden erimerkkisen negatiivinen.
Tämän seurauksena kerto- ja jakolaskun tulos on positiviinen, kun negatiivisten tekijöiden lukumäärä on parillinen.
Vastaavasti kerto- ja jakolaskun tulos on negatiivinen, kun negatiivisia tekijöitä on pariton määrä.

#- {id="RIMtrdiS0e3I" .huomautus}
**Merkkisäännöt**

\

1. $+(-a)=-a$
2. $-(-a)=+a$
3. $a\cdot(-b)=-ab$ ja $\displaystyle\frac{a}{-b}=-\frac{a}{b}$
4. $(-a)\cdot(-b)=a\cdot b$ ja $\displaystyle\frac{-a}{-b}=\frac{a}{b}$

### Esimerkki: merkkisäännöt {id="JpdQAQTHnbEd" area="e1" collapse="true"}

#- {id="hECM3RMGAMN7"}
\
Laske.

a) $3+(-4)$

b) $6-(-2)$

c) $4\cdot(-2)$

d) $\displaystyle\frac{-3}{-6}$

\
**Ratkaisu:**

a) $3+(-4)=3-4=-1$

b) $6-(-2)=6+2=8$

c) $4\cdot(-2)=-4\cdot2=-8$

d) $\displaystyle\frac{-3}{-6}=\displaystyle\frac{3}{6}=\frac{1}{2}$

---

#- {id="VFXdHj969z9a" area_end="e1"}

#- {id="zDATizXB9CP0"}
\
Laskujärjestys noudattaa tuttua kaavaa.

#- {id="T6F7WYRZ80du" .huomautus}
**Laskujärjestys**

\

1. Lasketaan sulut
2. Lasketaan kerto- ja jakolaskut
3. Lasketaan yhteen- ja vähennyslaskut

### Esimerkki: laskujärjestys {id="ze8CqMrPjlxs" area="e2" collapse="true"}

#- {id="3eTXiU0wXhtQ"}
\
Laske.

a) $-2\cdot(-3)\cdot2$

b) $-4\cdot(-5)\cdot(-2)\cdot(-1)$

c) $5\cdot(-1)\cdot(-6):(-10)$

d) $3\cdot(2-8:2)\cdot(-2)+11$

\

**Ratkaisu:**

a) 

\begin{align*}
&-2\cdot(-3)\cdot2 && |\;\text{poistetaan sulut}\\
&=2\cdot3\cdot2 && |\;\text{lasketaan kertolaskut}\\
&=6\cdot2 \\
&=12
\end{align*}

b) 

\begin{align*}
&-4\cdot(-5)\cdot(-2)\cdot(-1) && |\;\text{poistetaan ensimmäiset sulut}\\
&=4\cdot5\cdot(-2)\cdot(-1) && |\;\text{poistetaan toiset sulut}\\
&=4\cdot5\cdot2\cdot1 && |\;\text{lasketaan kertolaskut}\\ 
&=40
\end{align*}

c) 

\begin{align*}
&5\cdot(-1)\cdot(-6):(-10) && |\;\text{poistetaan sulut}\\
&=-5\cdot1\cdot6:10 && |\;\text{lasketaan kertolaskut}\\
&=-30:10 && |\;\text{lasketaan jakolasku}\\
&=-3
\end{align*}

d) 

\begin{align*}
&3\cdot(2-8:2)\cdot(-2)+11 && |\;\text{lasketaan jakolasku sulkujen sisältä}\\
&=3\cdot(2-4)\cdot(-2)+11 && |\;\text{lasketaan vähennyslasku sulkujen sisältä}\\
&=3\cdot(-2)\cdot(-2)+11 && |\;\text{poistetaan sulut}\\
&=3\cdot4+11 && |\;\text{lasketaan kertolasku}\\
&=12+11 && |\;\text{lasketaan yhteenlasku}\\
&=23
\end{align*}

---

#- {id="Ivg6qM0w1Ck3" area_end="e2"}

#- {id="GW87zxtaYZVP"}
\
Oheiselta videolta löytyy tarvittaessa lisää esimerkkejä 
laskujärjestyksestä sekä negatiivisilla luvuilla laskemisesta.

``` {id="AhNZZ2REbYqu" plugin="showVideo"}
footer: "Omaan tahtiin: Laskujärjestys ja negatiiviset luvut"
#iframe: true
width: 400
height: 300
file: https://youtu.be/jRUFdn-mQho
```

#- {id="613VFqLB0J52"}
\

Peruslaskutoimituksista yhteenlasku ja kertolasku noudattavat seuraavia laskulakeja.

#- {id="G2OY8f8cM4RL" .huomautus}
**Laskulait**

\

\newenvironment{rcases}
  {\left.\begin{aligned}}
  {\end{aligned}\right\rbrace}
  
Olkoon $a,b,c\in\mathbb{R}$. Tällöin ovat voimassa seuraavat laskulait:

1.

\begin{equation*}
  \left.\begin{aligned}
  a + b &= b + a\\
  ab &= ba
\end{aligned}\right\} \text{vaihdantalait}
\end{equation*}

\

2.

\begin{equation*}
  \left.\begin{aligned}
  a + (b + c) &= (a + b) + c\\
  a(bc) &= (ab)c
\end{aligned}\right\} \text{liitäntälait}
\end{equation*} 


3.

\begin{equation*}
  \left.\begin{aligned}
  a(b + c) = a b + ac\\
  (a+b)c = ac + b c
\end{aligned}\right\} \text{osittelulait}
\end{equation*}

#- {id="afeef5luCm5i"}
Vaihdanta- ja liitäntälakien takia luvut voidaan laskea yhteen tai kertoa missä järjestyksessä tahansa. 
Sulkumerkit voidaan siis jättää pois ja merkitä vain $a+b+c$ ja $abc$. Sopivalla ryhmittelyllä
laskutehtävä saadaan usein yksinkertaistettua.

### Esimerkki: laskulait {id="0hjRvWyljTAe" area="es223" collapse="true"}

#- {id="nIwNG5JRo243"}
\
Laske käyttäen hyväksi laskulakeja. 

a) $2\cdot8\cdot50$

b) $7\cdot46$

\
**Ratkaisu:**

a) Kertolasku voidaan laskea missä järjestyksessä tahansa, joten
vaihdetaan lukujen $8$ ja $50$ paikkaa. 

$$2\cdot8\cdot50=2\cdot50\cdot8=100\cdot8=800$$

\

b) Kirjoitetaan luku $46$ muodossa $46=40+6$ ja käytetään hyväksi osittelulakia.

$$7\cdot46=7\cdot(40+6)=7\cdot40+7\cdot6=280+42=322$$

---

#- {id="SM0BcGGKwQV1" area_end="es223"}

#- {id="QsAT9flaRkG4"}
\

#- {id="8xq553P3uyPe" .huomautus}
**Vastaluku ja käänteisluku**

\

Kahta lukua, joiden *summa on nolla*, sanotaan toistensa vastaluvuiksi. 
Luvun $a$ vastaluku on $-a,$ koska $a+(-a)=0$. Jokaisella reaaliluvulla on vastaluku. 

\

Kahta lukua, joiden *tulo on yksi*, sanotaan toistensa käänteisluvuiksi. Luvun
$a$ käänteisluku on $\displaystyle\frac{1}{a},$ koska $a\cdot\displaystyle\frac{1}{a}=1$.
Kaikilla muilla reaaliluvuilla paitsi nollalla on käänteisluku.

### Esimerkki: vasta- ja käänteisluku {id="8B5ScmIgKuwH" area="e4" collapse="true"}

#- {id="hRmVwaVRhbTA"}
\

a) Mikä on luvun $3$ vastaluku?
b) Mikä on luvun $-7$ vastaluku?
c) Mikä on luvun $2$ käänteisluku?
d) Mikä on luvun $-4$ käänteisluku?
e) Mikä on luvun $11$ vastaluvun käänteisluku?

\

**Ratkaisu:**

a) Luvun $3$ vastaluku on $-3,$ sillä $3+(-3)=3-3=0.$

\

b) Luvun $-7$ vastaluku on $7,$ sillä $-7+7=0.$

\

c) Luvun $2$ käänteisluku on $\displaystyle\frac{1}{2},$ sillä $2\cdot \displaystyle\frac{1}{2}=1.$

\

d) Luvun $-4$ käänteisluku on $-\displaystyle\frac{1}{4},$ sillä $-4\cdot (-\displaystyle\frac{1}{4})=4\cdot \displaystyle\frac{1}{4}=\frac{4}{4}=1.$

\

e) Luvun $11$ vastaluku on $-11,$ sillä $11+(-11)=11-11=0.$ \
   Luvun $-11$ käänteisluku on $-\displaystyle\frac{1}{11},$ sillä $-11\cdot 
   (-\displaystyle\frac{1}{11})=11\cdot \frac{1}{11}=\frac{11}{11}=1.$ \
   Siispä, luvun $11$ vastaluvun käänteisluku on $-\displaystyle\frac{1}{11}.$
   
---

#- {id="P1ShavNeiPNI" area_end="e4"}

#- {id="8CJoeOYJCLJW"}
\

[[Laskulait: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1#laskulait-tehtäviä)]{.hidden-print}

## Itseisarvo {id="TUIn55D1C1n2"}

#- {id="xzSEkYgZbab0"}
\
Reaaliluvun itseisarvo määritellään paloittain, erikseen ei-negatiivisille ja
negatiivisille luvuille.

#- {id="6K8W7YtWX9Cx" .huomautus}
**Itseisarvo**

\

Reaaliluvun $a$ itseisarvo on 

$$|a|=
\begin{cases}
a,\;\;\;\;\;\ \text{kun}\;\;a\ge0 \\
-a,\;\;\;\; \text{kun}\;\;a<0
\end{cases}$$

#- {id="Ih14gx0WaVs5"}
Positiivisen luvun ja nollan itseisarvo on siis luku itse. Esimerkiksi
$|2|=2$ ja $|0|=0.$ 

Negatiivisen luvun itseisarvo on sen vastaluku. Esimerkiksi 
$|-2|=-(-2)=2.$

#- {id="NQ0RXPp5scUd"}
\
Geometrisesti tulkittuna itseisarvo kertoo sen etäisyyden lukusuoralla luvusta $0$. Tätä on havainnollistettu 
oheisella appletilla. Liikuttamalla sinistä pistettä näet, kuinka mustalla palkilla kuvattu itseisarvo muuttuu.
Koska kyseessä on etäisyys, niin $|a|\geq 0$ kaikilla $a$:n arvoilla.

``` {id="tdGWoYpLuase" plugin="showVideo"}
iframe: true
open: true
videoicon: false
hidetext: Piilota GeoGebra
texprint: '![&nbsp;](/images/190239/Screenshot_123.png)'
type: small
videoname: "Geogebra: itseisarvo"
width: 700
height: 450
file: "https://www.geogebra.org/classic/trkqtahq"
```

### Esimerkki: luvun itseisarvo {id="fuCbax4duGYR" area="e5" collapse="true"}

#- {id="VOu8lRBh5lcn"}
\


a) Luvun $-111$ itseisarvo $|-111|=111,$ koska $-111<0.$

\

b) Luvun $\pi-2$ itseisarvo $|\pi-2|=\pi-2,$ koska $\pi-2>0.$

\

c) Luvun $1-\sqrt{2}$ itseisarvo $|1-\sqrt{2}|=-(1-\sqrt{2})=\sqrt{2}-1,$ koska $1-\sqrt{2}\approx-0,41<0.$

---

#- {id="6qDBReD4uabN" area_end="e5"}

#- {id="Riybvt5o2WDs"}
\
Itseisarvolle pätee seuraavat ominaisuudet.

#- {id="G27OOx364La2" .huomautus}
**Itseisarvon ominaisuuksia**

\

1. $|a|\ge0$

2. $|-a|=|a|$

3. $|ab|=|a||b|$

4. $\Big|\displaystyle\frac{a}{b}\Big|=\frac{|a|}{|b|}$

5. $|a|^2=a^2$

### Esimerkki: itseisarvolausekkeiden sieventämistä {id="pFiO6YvDIBmD" area="e232" collapse="true"}

#- {id="B6S7VySAs2bR"}
\
Sievennä.

a) $|4+(-5)|+(|4|+|-5|)$

b) $|a-b|-|b-a|$

\

**Ratkaisu:**

a) 

\begin{align*}
&|4+(-5)|+(|4|+|-5|) &&|\;\text{lasketaan itseisarvot sulkujen sisältä} \\
&=\;|4-5|-(4+5) &&|\;\text{lasketaan vähennyslasku itseisarvon sisältä}\\
&=\;|-1|-9 \\
&=\;1-9\\&=\;-8
\end{align*}

\

b) 
\begin{align*}
&|a-b|-|b-a| &&|b-a=-(a-b)\\
&=\;|a-b|-|-(a-b)| &&|\text{käytetään hyväksi itseisarvon 2. ominaisuutta} \\
&=\;|a-b|-|a-b| \\
&=\;0
\end{align*}

---

#- {id="aVMWY172sc3S" area_end="e232"}

#- {id="A1v2I9QERZHP"}
\

[[Itseisarvo: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1#itseisarvo-tehtäviä)]{.hidden-print}

## Murtoluvut {id="G5BwXvjnWiSz"}

#- {id="VWetA1EQlAEs"}
Kerrataan murtolukuihin liittyvät nimitykset ja laskutoimitukset.

\

![[Colorado Phet -simulaatiot](https://phet.colorado.edu/fi/simulations/category/math/mathapplications)](/images/184472/Murtoluku_kuva.png){width=500}

#- {id="4T5UVhaI0NV9"}
\

*Murtoluku* on kahden kokonaisluvun osamäärä $\displaystyle\frac{m}{n}$, missä jaettavaa $(m)$ sanotaan 
osoittajaksi ja jakajaa $(n)$ nimittäjäksi, ja osoittaja ei ole jaollinen jakajalla. 
Murtoluku on siis rationaaliluku, joka ei supistu kokonaisluvuksi.

#- {id="Evc9JA3kDzpB"}
\

*Sekaluvut* ovat murtoluvun vaihtoehtoinen esittämistapa. 
Jotta murtoluku voidaan esittää sekalukuna, nimittäjän tulee olla suurempi kuin osoittaja.
Esimerkiksi murtoluku 
$\displaystyle\frac{7}{4}=\frac{4+3}{4}=\frac{4}{4}+\frac{3}{4}=1+\frac{3}{4}$ 
voidaan esittää sekalukuna $1\displaystyle\frac{3}{4}$.

### Esimerkki: murtolukujen suuruusjärjestys {id="zqkNrP0qEajQ" area="e9" collapse="true"}

#- {id="j2o5NveH9rqI"}
\
Järjestä murtoluvut $\displaystyle\frac{3}{4}$, $\displaystyle\frac{7}{8}$ ja $\displaystyle\frac{1}{2}$ suuruusjärjestykseen.

\
**Ratkaisu:**

Lavennetaan murtoluvut ensin samannimisiksi, jotta suuruusvertailu on helpompi tehdä.

$$^{2)}\displaystyle\frac{3}{4}=\frac{2\cdot 3}{2\cdot 4}=\frac{6}{8}$$ \

$$^{4)}\displaystyle\frac{1}{2}=\frac{4\cdot 1}{4\cdot 2}=\frac{4}{8}$$ \

Nyt $\displaystyle\frac{7}{8}>\frac{6}{8}>\frac{4}{8},\;$ joten
$\;\displaystyle\frac{7}{8}>\frac{3}{4}>\frac{1}{2}.$

---

#- {id="AlsRm8ur0f9Y" area_end="e9"}

### Esimerkki: sekaluvut {id="O4m1ZHOjpzk0" area="e242" collapse="true"}

#- {id="HaV68KQIhwHG"}
\
Muunna

a) $\displaystyle\frac{9}{2}$ sekaluvuksi.

b) $3\,\displaystyle\frac{4}{5}$ murtoluvuksi.

\
**Ratkaisu:**

a) Esitetään osoittaja $9$ nimittäjän $2$ tulona, jolloin jakojäännökseksi jää $1$, ja
sievennetään sekaluvuksi.

$$\displaystyle\frac{9}{2}=\frac{4\cdot2 +1}{2}=\frac{4\cdot \cancel{2}}{\cancel{2}}+\frac{1}{2}=4+\frac{1}{2}=4\,\frac{1}{2}$$

\

b) Lavennetaan kokonaisluku murtoluvuksi ja lasketaan murtoluvut yhteen.

$$3\,\displaystyle\frac{4}{5}=3+\frac{4}{5}=^{5)}\!\frac{3}{1}+\frac{4}{5}=\frac{15}{5}+\frac{4}{5}=\frac{19}{5}$$

---

#- {id="PXlsd0dvbC5O" area_end="e242"}

#- {id="MpQvlK0oKYsI"}
\

#- {id="abVSibSyI6C0" .huomautus}
**Murtolukujen yhteen- ja vähennyslasku**

\

$$^{d)}\displaystyle\frac{a}{b}+\,^{b)\!}\frac{c}{d}=\frac{ad}{bd}+\frac{bc}{bd}=\frac{ad+bc}{bd}$$

\

$$^{d)}\displaystyle\frac{a}{b}-\,^{b)\!}\frac{c}{d}=\frac{ad}{bd}-\frac{bc}{bd}=\frac{ad-bc}{bd}$$

\

### Esimerkki: yhteen- ja vähennyslasku murtoluvuilla {id="tZVPyWID0KmT" area="e10" collapse="true"}

#- {id="fHnNRmmnOLja"}
\

Laske.

a) $\displaystyle\frac{1}{2} + \frac{3}{4}\;\;\;\;$    b. $\displaystyle\frac{9}{10} - \frac{7}{8}$



\

**Ratkaisu:**

a) 

\begin{align*}
&^{4)} \displaystyle\frac{1}{2} +\,^{2)}\frac{3}{4} &&|\;\text{lavennetaan murtoluvut samannimisiksi}\\
&=\frac{4\cdot 1}{4\cdot 2} + \frac{2\cdot 3}{2\cdot 4} \\
&=\frac{4}{8} + \frac{6}{8} &&|\;\text{lasketaan osoittajat yhteen, nimittäjä pysyy samana}\\
&=\frac{4+6}{8} \\
&=\displaystyle\frac{10}{8} ^{(2}=\frac{5}{4} &&|\;\text{sievennetään vastaus}
\end{align*}

\

b) 

\begin{align*}
&^{8)}\displaystyle\frac{9}{10} - \,^{10)} \frac{7}{8} &&|\;\text{lavennetaan murtoluvut samannimisiksi}\\
&=\frac{8\cdot 9}{8\cdot 10} - \frac{10\cdot7}{10\cdot8} \\
&=\frac{72}{80} - \frac{70}{80} &&|\;\text{vähennetään osoittajat toisistaan, nimittäjä pysyy samana}\\
&=\frac{72-70}{80} \\
&=\frac{2}{80}^{(2}=\frac{1}{40} &&|\;\text{sievennetään vastaus}
\end{align*}

---

#- {id="WkI2v1P86CNb" area_end="e10"}

#- {id="ixAtp55LqpA3"}
\

#- {id="1n9fxxOSspXM" .huomautus}
**Murtolukujen kertolasku**

\


$$\displaystyle\frac{a}{b}\cdot\frac{c}{d}=\frac{ac}{bd}$$

### Esimerkki: kertolasku murtoluvuilla {id="x93KsmnTlkWc" area="e12" collapse="true"}

#- {id="VS5OL1UQ4AlL"}
\
Laske.

a) $\displaystyle\frac{2}{3} \cdot \frac{5}{3}$

b) $-\displaystyle\frac{3}{4} \cdot \frac{5}{7}$

c) $5\cdot \displaystyle\frac{1}{3}$

\
**Ratkaisu:**

a) Kerrotaan osoittajat ja nimittäjät keskenään.

$$\displaystyle\frac{2}{3} \cdot \frac{5}{3}=\frac{2\cdot5}{3\cdot3}=\frac{10}{9}$$

\

b) Kerrotaan osoittajat ja nimittäjät keskenään. Kertolaskussa on pariton määrä negatiivisia tulontekijöitä, joten 
tulos on negatiivinen.

$$-\displaystyle\frac{3}{4} \cdot \frac{5}{7}=-\frac{3\cdot5}{4\cdot7}=-\frac{15}{28}$$

\

c) Muutetaan kokonaisluku murtoluvuksi ja kerrotaan osoittajat ja nimittäjät keskenään.

$$5\cdot \displaystyle\frac{1}{3}=\frac{5}{1} \cdot \frac{1}{3}=\frac{5\cdot1}{1\cdot3}=\frac{5}{3}$$

---

#- {id="lAq7p4D0m2YZ" area_end="e12"}

#- {id="jWf8UddBECxQ"}
\

#- {id="ZxYayU4WNsB7" .huomautus}
**Murtolukujen jakolasku**

\

$$\displaystyle\frac{a}{b}:\frac{c}{d}=\displaystyle\frac{a}{b}\cdot\frac{d}{c}=\frac{ad}{bc}$$

### Esimerkki: jakolasku murtoluvuilla {id="PDmiCPWczVuB" area="e13" collapse="true"}

#- {id="sJHPh66dizX4"}
\
Laske.

a) $\displaystyle\frac{2}{5} : \frac{1}{2}$

b) $\displaystyle\frac{3}{7} : \left(-\frac{2}{3}\right)$

c) $\displaystyle\frac{1}{3} : 11$

\

**Ratkaisu:**

a) Kerrotaan jaettava jakajan käänteisluvulla.

$$\displaystyle\frac{2}{5} : \frac{1}{2}=\frac{2}{5} \cdot \frac{2}{1}=\frac{2\cdot2}{5\cdot1}=\frac{4}{5}$$

\

b) Kerrotaan jaettava jakajan käänteisluvulla. Kertolaskussa on pariton määrä negatiivisia tulontekijöitä, joten 
tulos on negatiivinen.

$$\displaystyle\frac{3}{7} : \left(-\frac{2}{3}\right)=\frac{3}{7} \cdot \left(-\frac{3}{2}\right)=-\frac{3\cdot3}{7\cdot2}=-\frac{9}{14}$$

\

c) Muutetaan jakaja murtoluvuksi ja kerrotaan jaettava jakajan käänteisluvulla.

$$\displaystyle\frac{1}{3} : 11=\frac{1}{3} : \frac{11}{1}=\frac{1}{3} \cdot \frac{1}{11}=\frac{1\cdot1}{3\cdot11}=\frac{1}{33}$$

---

#- {id="36F3Gd77BVmI" area_end="e13"}

### Esimerkki: pizzan jakaminen {id="d5UZAqDqTQdq" area="e14" collapse="true"}

#- {id="NuzpXddhWuYj"}
\
Ystävykset Aada, Hilda, Iida ja Ville päättivät mennä syömään pizzeriaan. 
He tilasivat pepperoni- sekä vegepizzan, jotka he jakoivat
seuraavasti: 

Ville sanoi herrasmiehenä, että hän voi syödä jäljelle jäävät 
osuudet pizzoista viimeisenä. Aada leikkasi ensimmäisenä itselleen
$\displaystyle\frac{1}{4}$ pepperonipizzaa ja $\displaystyle\frac{1}{8}$ vegepizzaa. Hilda leikkasi toisena 
jäljellä olevista pepperonipizzasta $\displaystyle\frac{4}{5}$ ja
vegepizzasta $\displaystyle\frac{1}{4}$. Iida leikkasi kolmentena jäljellä olevasta vegepizzasta puolet. 
Paljonko Villelle jäi pizzaa?
\

![&nbsp;](/images/189281/pizzu.jpg){width=400}

\

**Ratkaisu:**

Kun Aada leikkasi pepperonipizzaa, niin jäljelle jäi $^{4)}1-\displaystyle\frac{1}{4}=\frac{4}{4}-\frac{1}{4}=\frac{3}{4}$.

\
Kun Aada leikkasi vegepizzaa, niin jäljelle jäi $^{8)}1-\displaystyle\frac{1}{8}=\frac{8}{8}-\frac{1}{8}=\frac{7}{8}$.
\
\

Kun Hilda leikkasi pepperonipizzaa, niin jäljelle jäi $(1-\displaystyle\frac{4}{5})\cdot\frac{3}{4}=\frac{1}{5}\cdot\frac{3}{4}=\frac{3}{20}$.

\
Kun Hilda leikkasi vegepizzaa, niin jäljelle jäi $(1-\displaystyle\frac{1}{4})\cdot\frac{7}{8}=\frac{3}{4}\cdot\frac{7}{8}=\frac{21}{32}$.
\
\


Kun Iida leikkasi vegepizzaa, niin jäljelle jäi $(1-\displaystyle\frac{1}{2})\cdot\frac{21}{32}=\frac{1}{2}\cdot\frac{21}{32}=\frac{21}{64}$.
\

**Vastaus:** 

Villelle jäi siis $\displaystyle\frac{3}{20}$ pepperonipizzaa ja  $\displaystyle\frac{21}{64}$ vegepizzaa.

---

#- {id="PBLTHF2CERDe" area_end="e14"}

#- {id="rOvnus1pq3Rv"}
\

Murtoluvut on tapana sieventää muotoon, jossa osoittajana ja nimittäjänä on mahdollisimman pienet kokonaisluvut. Tämän voi
allekirjoittaneen mielestä tehdä helpoiten niin, että jakaa ensin osoittajan sekä nimittäjän alkutekijöihin, jonka jälkeen
supistaa yhteiset tekijät pois. 

Luvun jakamisella alkutekijöihinsä tarkoitetaan sen kirjoittamista alkulukujen tulona. 
Alkuluku on lukua $1$ suurempi luonnollinen luku, joka on jaollinen vain ja ainoastaan itsellään ja luvulla $1$.

Esimerkiksi $5$ on alkuluku, koska se ei ole jaollinen muilla kokonaisluvuilla kuin $1$ ja $5$,
mutta $10=5\cdot2$ ei ole alkuluku, sillä se on jaollinen myös luvuilla $5$ ja $2$.

### Esimerkki: murtolukujen sieventäminen alkulukujen avulla {id="eTaGlEL5e4sk" area="e16" collapse="true"}

#- {id="9NB9v0mhK8Qj"}
\
Sievennä murtoluvut muotoon, missä osoittajana ja nimittäjänä ovat mahdollisimman pienet kokonaisluvut.

a) $\displaystyle\frac{11}{77}\;\;\;$ b. $\displaystyle\frac{32}{64}\;\;\;$ c. $-\displaystyle\frac{36}{112}$

\


**Ratkaisu:**

a) 

Luku $11$ on alkuluku, mutta luku $77$ hajoaa alkutekijöihin seuraavasti $77=11\cdot7.$

Nyt voidaan sieventää: $\displaystyle\frac{11}{77}=\frac{\cancel{11}}{\cancel{11}\cdot 7 }=\frac{1}{7}$

\

b) 

Luku $32$ hajoaa alkutekijöihin seuraavasti $32=2^5=2\cdot2\cdot2\cdot2\cdot2$ ja
luku $64$ seuraavasti $64=2^6=2\cdot2\cdot2\cdot2\cdot2\cdot2.$

Nyt voidaan sieventää:$\displaystyle\frac{32}{64}=\frac{\cancel{2}\cdot\cancel{2}\cdot\cancel{2}\cdot\cancel{2}\cdot\cancel{2}}
{2\cdot\cancel{2}\cdot\cancel{2}\cdot\cancel{2}\cdot\cancel{2}\cdot\cancel{2}}=\frac{1}{2}$

\

c) 

Luku $36$ hajoaa alkutekijöihin seuraavasti $33=2\cdot2\cdot3\cdot3$ ja
luku $112$ seuraavasti $112=2\cdot2\cdot2\cdot2\cdot7.$

Nyt voidaan sieventää: $-\displaystyle\frac{36}{112}=-\frac{\cancel{2}\cdot\cancel{2}\cdot3\cdot3}
{\cancel{2}\cdot\cancel{2}\cdot2\cdot2\cdot7}=-\frac{3\cdot3}{2\cdot2\cdot7}=-\frac{9}{28}$

\

*HUOM!* Samaan lopputulokseen olisi päästy supistamalla:

$-\displaystyle\frac{36}{112}^{(2}=-\frac{18}{56}^{(2}=-\frac{9}{28}$

---

#- {id="cIGosWMaAnx1" area_end="e16"}

#- {id="VZ1XeksnWVkI"}
\

[[Murtoluvut: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1#murtoluvut-tehtäviä)]{.hidden-print}

#- {id="PlPM54mRjRUx" area_end="sisalto"}
