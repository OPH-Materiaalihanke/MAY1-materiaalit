``` {id="qknfFPAnbXHu" settings=""}
auto_number_headings: true
auto_number_start: 3
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
  textitle: 'Potenssi ja juuri'
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

#- {id="FGrzgx8x9j5Y" area="sisalto"}

``` {id="eGQ5XQ7sE5zc"  atom="true"}
# Potenssi ja juuri

Tässä kappaleessa käsitellään potenssilaskentaa sekä potenssille käänteistä laskutoimitusta
juurta, keskittyen neliö- ja kuutiojuureen. Kappaleessa
käydään läpi potenssien ja juurien laskusääntöjä, kymmenpotenssimuoto sekä lopuksi perehdytään
potenssiyhtälöön. Kappaleeseen liittyvät tehtävät ovat 
[omalla sivullaan](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-3-6-potenssi-ja-juuri).

![&nbsp;](/images/189932/juuri.jpg){width=500}

## Potenssi

\

Potenssi on kertolaskun lyhennetty merkitsemistapa silloin, kun samaa lukua kerrotaan itsellään useamman kerran.
Esimerkiksi merkintä $4^3$ tarkoittaa tuloa $4\cdot4\cdot4$ ja se luetaan *"neljä potenssiin kolme"* tai 
*"luvun 4 kolmas potenssi"*.
```

#- {id="tsY7Adv7NwV9" .huomautus}
**Potenssi**

\

Olkoon $n$ positiivinen kokonaisluku ($n=1, 2, 3, ...$). Tällöin luvun $a$ $n$:s potenssi on

$$a^n=\underbrace{a\cdot a\cdot ... \cdot a}_{\text{$n$ kappaletta}}$$

Erityisesti $a^1=a.$

#- {id="NQY9C0lSqYCH"}
Luku $a$ on potenssin *kantaluku* ja luku $n$ on *eksponentti*. Kantaluku on toisinaan tarpeen merkitä
sulkeisiin. Esimerkiksi $-3^2=-9,$ mutta $(-3)^2=9.$ Samoin $\displaystyle\frac{2}{3}^2=\frac{4}{3},$
mutta $\left(\displaystyle\frac{2}{3}\right)^2=\displaystyle\frac{4}{9}.$

Potenssien sanotaan olevan *samankantaisia*, jos niillä on sama kantaluku.

#- {id="20m34ZsV74cz" .huomautus}
 
**Negatiivisen kantaluvun potenssi**

\
 
Jos potenssin $a^n$ kantaluku $a$ on negatiivinen ja eksponentti $n$ on

- parillinen, niin potenssin arvo on positiivinen
- pariton, niin potenssin arvo on negatiivinen

### Esimerkki: negatiivisen kantaluvun potenssi {id="kJOM7Whjle4c" area="e511" collapse="true"}

#- {id="iKQ42XtYSEGh"}
\

Laske.

a) luvun $-3$ toinen potenssi
b) luvun $-2$ kolmas potenssi
c) luvun $5$ toisen potenssin vastaluku
d) luvun $-1$ $2500$:s potenssi

\

**Ratkaisu:**

a) Negatiivinen kantaluku pitää merkitä sulkeisiin. Luvun $-3$ toinen potenssi on

$$(-3)^2=\underbrace{(-3)\cdot(-3)}_{2\text{ kpl, parillinen}}=9$$

\

b) Luvun $-2$ kolmas potenssi on

$$(-2)^3=\underbrace{(-2)\cdot(-2)\cdot(-2)}_{3\text{ kpl, pariton}}=-8$$

\

c) Luvun $5$ toinen potenssi on $5^2$ ja sen vastaluku

$$-5^2=-5\cdot5=-25$$

\

d) Luvun $-1$ $2500$:s potenssi

$$(-1)^{2500}=\underbrace{(-1)\cdot(-1)\cdot ... \cdot(-1)}_{2500\text{ kpl, parillinen}}=1$$

---

#- {id="OP8fLKduK6zc" area_end="e511"}

### Esimerkki: neliö ja kuutio {id="3jGcZuYgCntS" area="v512" collapse="true"}

#- {id="mgoKVb10SweL"}
\

Laske

a) neliön, jonka sivun pituus on $6,$ pinta-ala.

![&nbsp;](/images/189370/Screenshot_63.png){width=180}

b) kuution, jonka särmän pituus on $2,$ tilavuus.

![&nbsp;](/images/189373/Screenshot_65.png){width=200}

**Ratkaisu:**

a)  Neliön pinta-ala $A$ saadaan kannan ja korkeuden tulona, joka voidaan ilmaista potenssin avulla.

$$A=6^2=6\cdot6=36$$
    
\

b)	Kuution tilavuus $V$ saadaan särmien tulona, joka voidaan ilmaista potenssin avulla.

$$V=2^3=2\cdot2\cdot2=8$$

---

#- {id="dZgtuKj7ZMLV" area_end="v512"}

#- {id="TYQHOkvaw6Bt"}
\

Potenssia $a^2$ sanotaan luvun $a$ *neliöksi* ja potenssia $a^3$ luvun $a$ *kuutioksi*.

\

### Esimerkki: rahaston arvon kasvu {id="KF765ghW4nHK" area="v513" collapse="true"}

#- {id="aFQLlyejNnk0"}
\

Eetu voitti veikkaamalla $6\,000$ euroa, jotka hän päätti sijoittaa indeksirahastoihin. Asiantuntija arvioi, että
Eetu saisi $6,5\;\%$:n vuotuisella korolla voittoa. Kuinka paljon Eetun rahaston arvo on $20$ vuoden kuluttua jos
oletetaan, että vuotuinen korko säilyy?

![&nbsp;](/images/189933/possu.jpg){width=400}

\
**Ratkaisu:**

Indeksirahasto tuottaa vuodesa $6,5\;\%$ pääomasta, joten rahaston arvo kasvaa
siis vuodessa $1,065$-kertaiseksi. **Yhden** vuoden kuluttua Eetun pääoman arvo on

$$1,065\cdot6000\;\text{(euroa)}$$ 

\
Korkoprosentti säilyy vakiona, joten vastaavasti myös seuraavan vuoden aikana 
rahaston arvo kasvaa $1,065$-kertaiseksi. **Kahden** vuoden kuluttua rahaston arvo on

$$\underbrace{1,065\cdot 1,065}_{\text{$2$ kappaletta}}\cdot\;6000=1,065^2\cdot6000$$

\
Vastaavasti **kolmen** vuoden kuluttua rahaston arvo on

$$\underbrace{1,065\cdot 1,065\cdot1,065}_{\text{$3$ kappaletta}}\cdot\;6000=1,065^3\cdot6000$$

\
**20** vuoden kuluttua rahaston arvo on

$$\underbrace{1,065\cdot 1,065\cdot ... \cdot 1,065}_{\text{20 kappaletta}}\cdot\;6000=1,065^{20}\cdot6000=21141,87038\approx21141,87$$

\

**Vastaus:** $20$ vuoden kuluttua Eetun rahaston arvo on $21\;141,87$ euroa.

\

*Rahalaskut pyöristetään aina sentin tarkkuudella ellei toisin mainita.*

---

#- {id="1JhuXvGxfwet" area_end="v513"}

#- {id="c83QnRE8cQwh"}
\

[[Potenssi: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-3-6-potenssi-ja-juuri#potenssi)]{.hidden-print}

## Potenssin laskusääntöjä {id="FNApby4xJaMB"}

#- {id="BXsImOctxp6d"}
\

Videolla esitellään viisi potenssien laskusääntöä, jotka käydään seuraavaksi läpi.

#- {id="pdpqVcN32CTE"}
\

``` {id="yZlxF0Cb03Lq" plugin="showVideo"}
footer: "Omaan tahtiin: Potenssien laskusäännöt"
#iframe: true
width: 400
height: 300
file: https://www.youtube.com/watch?v=Zw9iSOzUFWI
```

#- {id="bbcbrcxgzpmh"}
\

Potenssilauseke voidaan sieventää purkamalla sen potenssit tuloiksi. Tarkastellaan näin
muutamia esimerkkejä ja yleistetään niiden perusteella potenssien laskusäännöt.

**1.**

$$a^2a^4=\underbrace{a\cdot a}_{\text{$2$ kpl}} \cdot \underbrace{a\cdot a\cdot a \cdot a}_{\text{$4$ kpl}}=a^{2+4}=a^6$$

**2.**

$$\dfrac{a^7}{a^3}=\dfrac{a\cdot a\cdot a\cdot a\cdot \cancel{a}\cdot \cancel{a}\cdot \cancel{a}}{\cancel{a}\cdot \cancel{a}\cdot \cancel{a}}=a^{7-3}=a^4$$

#- {id="5v9bDUIo5IHE"}
\

Samankantaisten potenssien tulossa eksponentit lasketaan yhteen ja samankantaisten 
potenssien osamäärässä eksponentit vähennetään toisistaan.

#- {id="E9wJU3ye7PYE" .huomautus}
**Samankantaisten potenssien tulo ja osamäärä**

\

$$a^ma^n=a^{m+n}$$

$$\frac{a^m}{a^n}=a^{m-n}$$

#- {id="1f7BvNdAaAdN"}
**3.**

$$(ab)^3=ab\cdot ab \cdot ab=a\cdot a\cdot a\cdot b\cdot b\cdot b=a^3b^3$$

**4.**

$$(\dfrac{a}{b})^3=\dfrac{a}{b}\cdot\dfrac{a}{b}\cdot\dfrac{a}{b}=\dfrac{a\cdot a\cdot a}{b\cdot b\cdot b}=\dfrac{a^3}{b^3}$$

#- {id="u6oJTlukuwEg"}
\
Tulon potenssissa tulon tekijät korotetaan erikseen potenssiin ja osamäärän potenssissa
jakaja ja jaettava korotetaan erikseen potenssiin.

#- {id="AntmEJARa1U0" .huomautus}
**Tulon potenssi ja osamäärän potenssi**

\
$$(ab)^n=a^nb^n$$

$$\Big(\frac{a}{b}\Big)^n=\frac{a^n}{b^n}$$

#- {id="COm4biAiXtoX"}
**5.**

$$(a^3)^2=\underbrace{a^3\cdot a^3}_{\text{$2$ kpl}}=a^{3\cdot2}=a^6$$

\

Kun potenssi korotetaan potenssiin, niin eksponentiksi tulee eksponenttien tulo.

#- {id="1VqldHUjdrsT" .huomautus}
**Potenssin potenssi**
$$(a^{m})^n=a^{mn}$$

### Esimerkki: potenssin laskusääntöjä {id="IrV6snScS3uf" area="e521" collapse="true"}

#- {id="rM11lO4vR4F6"}
\
Laske

a. $\left(\dfrac{12}{3}\right)^2$ b. $(3^2)^2$ c. $\dfrac{(-5)^7}{(-5)^5}$

\

**Ratkaisu:**

a) Osamäärän potenssissa sekä nimittäjä että osoittaja korotetaan potenssiin. 

$$\left(\dfrac{12}{3}\right)^2=\dfrac{12^2}{3^2}=\dfrac{144}{9}=16$$

\

b) Potenssin potenssissa eksponentit kerrotaan keskenään. 

$$(3^2)^2=3^{2\cdot2}=3^4=81$$

\

c) Samankantaisten potenssien osamäärässä eksponentit vähennetään toisistaan. 

$$\dfrac{(-5)^7}{(-5)^5}=(-5)^{7-5}=(-5)^2=25$$

---

#- {id="VpcF2e2mzJjx" area_end="e521"}

### Esimerkki: potenssien sieventämistä {id="FiDMqpSFDE9w" area="e522" collapse="true"}

#- {id="hHjB8B4CapEW"}
\
Sievennä.

a) $\dfrac{2d^7}{d^3}$ b. $3a^4\cdot(-2a^3)$ c. $(ax^3y)^2$

\
**Ratkaisu:**

a) $d-$kantaisten potenssien eksponentit vähennetään toisistaan ja luku $2$ jää eteen kertoimeksi. 

$$\dfrac{2d^7}{d^3}=2d^{7-3}=2d^4$$
\

b) $a-$kantaisten potenssien eksponentit lisätään yhteen ja luvut $3$ ja $-2$ kerrotaan keskenään.

$$3a^4\cdot(-2a^3)=-6a^{4+3}=-6a^7$$

\

c) Jokainen termi korotetaan erikseen toiseen. 

$$(ax^3y)^2=a^2(x^3)^2y^2=a^2x^{3\cdot2}y^2=a^2x^{6}y^2$$

---

#- {id="ZbiOMnup6c8x" area_end="e522"}

#- {id="CzoPn6kxMFzg"}
\
Tutkitaan seuraavaksi, miten tulkitaan potenssi, missä eksponentti on $0$ tai negatiivinen kokonaisluku. 


- Samankantaisten potenssien osamäärän laskusäännön nojalla:

$$\dfrac{a^n}{a^n}=a^{n-n}=a^0$$

Toisaalta supistamalla saadaan:

$$\dfrac{a^n}{a^n}=\dfrac{\overbrace{\cancel{a}\cdot \cancel{a}\cdot ... \cdot \cancel{a}}^{n\;\text{ kpl}}}{\underbrace{\cancel{a}\cdot \cancel{a}\cdot ... \cdot \cancel{a}}_{n\;\text{ kpl}}}
=1$$

On siis määriteltävä, että $a^0=1,$ kun $a\neq0.$

\

- Merkitään $p=n-m$.

Samankantaisten potenssien osamäärän laskusäännön nojalla:

$$\dfrac{a^m}{a^n}=a^{m-n}=a^{-(n-m)}=a^{-p}$$


Toisaalta supistamalla saadaan ($p=n-m \Leftrightarrow n=p+m$):

$$\dfrac{a^m}{a^n}=\dfrac{\overbrace{a\cdot a\cdot ... \cdot a}^{m\;\text{kpl}}}{\underbrace{a\cdot a\cdot ... \cdot a}_{n\;\text{kpl}}}
=\dfrac{\overbrace{\cancel{a}\cdot \cancel{a}\cdot ... \cdot \cancel{a}}^{m\;\text{kpl}}}{\underbrace{a\cdot a\cdot ... \cdot a}_{p\;\text{kpl}}\cdot \underbrace{\cancel{a}\cdot \cancel{a}\cdot ... \cdot \cancel{a}}_{m \;\text{kpl}}}
=\dfrac{1}{\underbrace{a\cdot a\cdot ... \cdot a}_{p\;\text{kpl}}}=\dfrac{1}{a^{p}}$$

On siis määriteltävä, että $a^{-p}=\dfrac{1}{a^p}.$

#- {id="JdyGb98gkjDl" .huomautus}
**Eksponenttina nolla ja negatiivinen kokonaisluku**

\
Olkoon $a\neq0$ ja $n$ positiivinen kokonaisluku. 

$${a^0}=1$$

$${a^{-n}}=\frac{1}{a^{n}}$$

#- {id="HuVbjEKmwud5"}
\
Erityisesti $a^{-1}=\dfrac{1}{a}$. Eli luvun $a$ käänteislukua voidaan merkitä muodossa $a^{-1}$.


Jos kantalukuna on murtomerkintä ja eksponentti negatiivinen, niin eksponentti voidaan vaihtaa
positiiviseksi samalla, kun vaihdetaan kantaluku käänteisluvukseen.

$$\left(\frac{k}{l}\right)^{-n}=\left(\frac{l}{k}\right)^{n}$$

### Esimerkki: negatiivinen eksponentti {id="lIR6QHJGuCl3" area="e523" collapse="true"}

#- {id="csbV4TrffmGz"}
\
Laske.

a) $4^{-3}$

b) $\dfrac{3^2}{3^4}$

c) $\left(\dfrac{2}{3}\right)^{-2}$

d) $(1,43\cdot10^{999})^0$

\

**Ratkaisu:**

a) Negatiivinen eksponentti hyppää kantaluvun käänteisluvun nimittäjään.  

$$4^{-3}=\dfrac{1}{4^3}=\dfrac{1}{64}$$

\

b) Samankantaisten potenssien eksponentit vähennetään toisistaan ja saadaan negatiivinen eksponentti.  

$$\dfrac{3^2}{3^4}=3^{2-4}=3^{-2}=\dfrac{1}{3^2}=\dfrac{1}{9}$$

\

c) Vaihdetaan eksponentti positiiviseksi ja kantaluku käänteisluvukseen.

$$\left(\dfrac{2}{3}\right)^{-2}=\left(\dfrac{3}{2}\right)^{2}=\dfrac{3^2}{2^2}=\dfrac{9}{4}$$

\

d) Jokaisen luvun nollas potenssi on luku $1$. (Paitsi $0^0$ ei ole määritelty.) 

$$(1,43\cdot10^{999})^0=1$$

---

#- {id="4pnkeRb6IhY1" area_end="e523"}

#- {id="1DoWRDnuKf0l"}
\

[[Potenssin laskusääntöjä: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-3-6-potenssi-ja-juuri#potenssin-laskusääntöjä)]{.hidden-print}

## Kymmenpotenssimuoto {id="C2hgpsAK3dnJ"}

#- {id="Y59I9qpzL40k"}
\

``` {id="sYvi53q16EFC" plugin="showVideo"}
footer: "Opetus tv: Kymmenpotenssimuoto"
#iframe: true
width: 400
height: 300
file: https://www.youtube.com/watch?v=goXhiAbCCGw
```

#- {id="RrxixOSb04Em"}
\

Suuria lukuja on tapana ilmaista *kymmenpotenssimuodossa* eli luvun $10$ potenssien avulla. 
Esimerkiksi, kun syötetään laskimeen
luku $5^{16}$, niin laskin antaa sen mitä todennäköisimmin muodossa $1,5\cdot10^{11},$
koska luku $5^{16}=152\;587\;890\;625\approx1 \underbrace{50\;000\;000\;000}_{11\text{kpl}}$ on liian suuri
laskimen näytölle.

#- {id="jnairsMUQJhG" .huomautus}
**Kymmenpotenssimuoto (suuret luvut)**

\

Suuri luku voidaan merkitä kymmenpotenssimuodossa $$a\cdot10^n,$$ 
missä $1 \leq a<10$ ja $n$ on positiivinen kokonaisluku.

### Esimerkki: suuren luvun muuttaminen kymmenpotenssimuotoon {id="5Rm05l77yaRt" area="e531" collapse="true"}

#- {id="28HwPW8TzP9W"}
\

Ilmaise kolmen numeron tarkkuudella kymmenpotenssimuodossa 

a) Suomen väkiluku $5\;518\;000$
b) maapallon ympärysmitta $40\;000\;\text{km}$
c) valon nopeus tyhjiössä $299\;792\;458\;\text{m/s}$

\
**Ratkaisu:**

a)

\begin{align*} 
&5 \underbrace{518\;000}_{6\text{kpl}} && \text{Siirretään pilkkua 6 numeroa vasemmalle} \\
&= 5,518\;000 \cdot 10^6\ && \text{Pyöristetään kolmen numeron tarkkuuteen}\\
&\approx 5,52 \cdot 10^6 && \\
\end{align*}

b)

\begin{align*} 
&4 \underbrace{0\;000}_{4\text{kpl}} && \text{Siirretään pilkkua 4 numeroa vasemmalle} \\
&= 4,0000 \cdot 10^6\ && \text{Pyöristetään kolmen numeron tarkkuuteen}\\
&\approx 4,00 \cdot 10^4\;\text{(km)}&& \\
\end{align*}

c)

\begin{align*} 
&2 \underbrace{99\;792\;458}_{8\text{kpl}} && \text{Siirretään pilkkua 8 numeroa vasemmalle} \\
&= 2,99792458 \cdot 10^8\ && \text{Pyöristetään kolmen numeron tarkkuuteen}\\
&\approx 3,00 \cdot 10^8\;\text{(m/s)} && \\
\end{align*}

---

#- {id="jgqyth7dXNlJ" area_end="e531"}

#- {id="WOUMnwwkQCV0"}
\

Erityisesti luonnontieteissä myös pieniä lukuja on tapana ilmaista kymmenpotenssimuodossa negatiivisen eksponentin avulla. Esimerkiksi:

$0,0003=3\cdot0,0001=3\cdot \dfrac{1}{10000}=3\cdot \dfrac{1}{10^4}=3\cdot10^{-4}$

#- {id="Uti0b4raaLrK" .huomautus}
**Kymmenpotenssimuoto (pienet luvut)**

\

Pieni luku voidaan merkitä kymmenpotenssimuodossa $$a\cdot10^{-n},$$

missä $1 \leq a<10$ ja $n$ on positiivinen kokonaisluku.

### Esimerkki: pienen luvun muuttaminen standardimuotoon {id="0dU70RwjOtZD" area="e532" collapse="true"}

#- {id="ZU7P3rJZGw0f"}
\
Kirjoita standardimuodossa

a) protonin massa $1,672 621 64 \cdot 10^{-27}\;\text{kg}$ 
b) elektronin massa $9,109 382 15 \cdot 10^{-31}\;\text{kg}$ 

\
**Ratkaisu:**

a) Luvussa $10^{-27}=\dfrac{1}{10^{27}}$ on desimaalipilkun jälkeen $26$ nollaa ennen ykköstä.

\
\begin{align*}
&1,672\;621\;64\cdot 10^{-27}\;\text{kg}\\
=&\;1,672\;621\;64 \cdot 0,\underbrace{000\;000\;000\;000\;000\;000\;000\;000\;00}_{26\;\text{kpl}}1\;\text{kg} \\
=&\;0,\underbrace{000\;000\;000\;000\;000\;000\;000\;000\;00}_{26\;\text{kpl}}1\;672\;621\;64\;\text{kg}
\end{align*}

\

b) Luvussa $10^{-31}=\dfrac{1}{10^{31}}$ on desimaalipilkun jälkeen $30$ nollaa ennen ykköstä.

\
\begin{align*}
&9, 109\;382\;15 \cdot 10^{-31}\;\text{kg} \\
=&\;9, 109\;382\;15 \cdot 0,\underbrace{000\;000\;000\;000\;000\;000\;000\;000\;000\;000}_{30\;\text{kpl}}\;1\;\text{kg} \\
=& \;0,\underbrace{000 \;000\; 000\; 000\; 000\; 000\; 000\; 000\; 000\; 000}_{30\;\text{kpl}}\;910\;9 38\;2 15\;\text{kg}
\end{align*}

---

#- {id="GhnfngsTqqLP" area_end="e532"}

#- {id="PHI8rBoDtpSa"}
\

[[Kymmenpotenssimuoto: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-3-6-potenssi-ja-juuri#kymmenpotenssimuoto)]{.hidden-print}

## Neliö- ja kuutiojuuri {id="lQFpy6lhS1jf"}

#- {id="lv0QnL6IFHOX"}
\

Olkoon neliön pinta-ala $A=9$. Mikä on neliön sivun pituus? 

![&nbsp;](/images/190435/Screenshot_164.png){width=300}



Neliön pinta-ala saadaan sivun neliönä, eli nyt tulee pohtia sitä, että mikä 
luku $x$ toteuttaa yhtälön $x^2=9$.

Tiedämme, että $3^2=9$ ja toisaalta $(-3)^2=9$. Siispä $x=3$ tai $x=-3$. 
Kuitenkin, sivun pituus ei voi olla negatiivinen luku, joten vain $x=3$ 
kelpaa nyt yhtälön ratkaisuksi. Neliön sivun pituus on siis $x=3$.

\

Voidaan osoittaa, että yhtälöllä $x^2=a$ on kaksi ratkaisua aina kun $a>0.$ 
Positiivista ratkaisua sanotaan luvun $a$ neliöjuureksi ja merkitään $\sqrt{a}.$
Lukua $a$ sanotaan neliöjuuren *juurrettavaksi*.

#- {id="lC6YiME1HyxT" .huomautus}
 **Neliöjuuri**

\

Luvun $a\geq 0$ neliöjuuri $\sqrt{a}$ toteuttaa ehdot

\

1. $\sqrt{a}\geq 0$
2. $(\sqrt{a})^2=a$

#- {id="nVRTyzoBygZo"}
**Miksi $a\geq0$? **

Tiedämme, ettei minkään $^{*)}$reaaliluvun $a$ parillinen potenssi voi olla negatiivinen luku.
Neliöjuuren *määrittelyehtona* on siis, että juurrettavan tulee olla positiivinen tai nolla. 

**Miksi $\sqrt{a}\geq 0$?** 

Voisimme siis määritellä, että esimerkiksi $\sqrt{9}=3$ tai $\sqrt{9}=-3$, sillä $3^2=(-3)^2=9$.
Kuitenkin, neliöjuuren määritelmässä on tehty valinta, 
että neliöjuuri on vain ja ainoastaan ei-negatiivinen ratkaisu. 
Tämä valinta on tehty siksi, että neliöjuuri olisi yksikäsitteinen, eli voidaan sanoa yksikäsitteisesti esimerkiksi, että $\sqrt{9}=3$.

\
$^{*)}$Kompleksilukujen joukossa on määritelty $\textit{imaginääriyksikkö}$ $i^2=-1$. Tällöin kompleksilukualueella 
yhtälön $x^2=-4$ ratkaisu olisi $x=2i$ tai $x=-2i$. Kompleksiluvut eivät kuitenkaan kuulu lukion opetussuunnitelman perusteisiin, joten 
oletamme jatkossa lukujen olevan reaalilukuja.
\

### Esimerkki: potenssiyhtälön ratkaisut {id="aJuaIUKu5V9a" area="e541" collapse="true"}

#- {id="9iVsQHh9XHMV"}
\
Ratkaise yhtälö.

a) $x^2=16$

b) $x^2=-4$

c) $x^2=0$

\
**Ratkaisu:**

a) $x=4$ tai $x=-4$, sillä $4^2=16$ tai $(-4)^2=16.$ Ratkaisut voidaan esitää myös 
muodossa $x=\pm 4.$

b) Ei ratkaisua, sillä juurrettava on $<0$.

c) $x=0$, sillä $0^2=0$.

\
*HUOM!* Potenssiyhtälöä käsitellään lisää kappaleessa 5.5

---

#- {id="gAPKFBspuB3D" area_end="e541"}

### Esimerkki: neliön sivun pituus {id="2SibAxnhfA1v" area="e542" collapse="true"}

#- {id="y9Uc0ZqTAUTd"}
\

Neliön pinta-ala on $15\;\text{m}^2$. Laske neliön sivun pituus.

\
**Ratkaisu:**

Mekitään muuttujalla $x$ neliön sivun pituutta metreinä. Tällöin voidaan suoraan neliöjuuren avulla laskea

$$x=\sqrt{15}=3,872983\approx3,9\;\text{(m)}$$

\

**Vastaus:** Neliön sivun pituus on noin $3,9\;\text{m}$.

---

#- {id="zFX9aL1tPqDg" area_end="e542"}

#- {id="nAQJ8BM2olXP"}
\

Neliöjuurilla laskettaessa käytetään seuraavia laskulakeja.

#- {id="pPjISfRg9nYv" .huomautus}
 **Neliöjuuren ominaisuuksia**

\

1. $\sqrt{a}\sqrt{b}=\sqrt{ab}\;\;\;\;\;\;\;\;\text{tulon neliöjuuri}$
 
\

2. $\dfrac{\sqrt{a}}{{\sqrt{b}}}=\sqrt{\dfrac{a}{b}}\;\;\;\;\;\;\;\;\;\;\;\text{osamäärän neliöjuuri}$
 
\

3. $\sqrt{a^2}=|a|\;\;\;\;\;\;\;\;\;\;\;\;\;\text{neliön neliöjuuri}$

### Todistus (1. kohta) {id="KikNJLMVOWwx" area="t1" collapse="true"}

#- {id="1UxPIqS6N8l7"}
\
Olkoot $a\geq0$ ja $b\geq0$. Tällöin tulon potenssin laskusäännön nojalla

$$(\sqrt{a}\sqrt{b})^2=(\sqrt{a})^2(\sqrt{b})^2=ab.$$

\
$\sqrt{a}$ ja $\sqrt{b}$ ovat ei-negatiivisiä, joten $\sqrt{a}\sqrt{b}$ on neliöjuuren määritelmän mukainen luku, joka korotettuna
toiseen on $ab=(\sqrt{ab})^2.$ $_\square$

---

#- {id="RfOzTHBK6WPH" area_end="t1"}

### Todistus (2. kohta) {id="pO2tMBRjNM77" area="t2" collapse="true"}

#- {id="lhEhN4IvwMeF"}
\
Olkoot $a\geq0$ ja $b>0$. Tällöin osamäärän potenssin laskusäännön nojalla

$$\Big(\dfrac{\sqrt{a}}{{\sqrt{b}}}\Big)^2=\dfrac{(\sqrt{a})^2}{(\sqrt{b})^2}=\dfrac{a}{b}.$$

\
$\sqrt{a}$ ja $\sqrt{b}$ ovat ei-negatiivisiä, joten $\dfrac{\sqrt{a}}{\sqrt{b}}$ on neliöjuuren määritelmän mukainen luku, joka korotettuna
toiseen on $\dfrac{a}{b}=\Big(\sqrt{\dfrac{a}{b}}\Big)^2.$ $_\square$

---

#- {id="dmjreby7Xniu" area_end="t2"}

### Todistus (3. kohta) {id="HInhVRWiXVz5" area="t3" collapse="true"}

#- {id="dSXkomACJZBX"}
\
Koska $|a|\ge0,$ neliöjuuren määritelmän ensimmäinen ehto on voimassa. 

Koska $|a|^2=a^2$, myös toinen ehto toteutuu. $_\square$

---

#- {id="ptIzRo62bPMH" area_end="t3"}

### Esimerkki: neliöjuuren laskusääntöjä {id="kxAe56hzVEPW" area="e543" collapse="true"}

#- {id="ytoqJQrzdScQ"}
\
Sievennä.

a) $\sqrt{8}\sqrt{2}$

b) $\sqrt{\dfrac{4}{9}}$

c) $\sqrt{4\cdot2}$

d) $\sqrt{1000}$

\
**Ratkaisu:**

a) Neliöjuurten tulossa juurrettavat kerrotaan keskenään. 

$$\sqrt{8}\sqrt{2}=\sqrt{8\cdot2}=\sqrt{16}=4$$

\

b) Osamäärän neliöjuuressa osoittajasta ja nimittäjästä otetaan molemmista erikseen neliöjuuri. 

$$\sqrt{\dfrac{4}{9}}=\dfrac{\sqrt{4}}{\sqrt{9}}=\dfrac{2}{3}$$

\

c) Jos juuri on irrationaalinen (jaksoton ja päättymätön luku), niin neliöjuuri sievennetään muotoon, missä yksittäisenä juurrettavana on mahdollisimman pieni kokonaisluku.

$$\sqrt{4\cdot2}=\sqrt{4}\sqrt{2}=2\sqrt{2}$$

\

d) $$\sqrt{1000}=\sqrt{100\cdot10}=\sqrt{100}\sqrt{10}=10\sqrt{10}$$

---

#- {id="Mw6FpoOWxHTO" area_end="e543"}

### Esimerkki: neliöjuurten sieventämistä {id="ok2ywMgXpnzI" area="v544" collapse="true"}

#- {id="M3S975QnzOQy"}
\
Sievennä.

a) $\sqrt{9}+\sqrt{16}$

b) $\sqrt{9+16}$

c) $\sqrt{\sqrt{25}+\sqrt{81}-5}$

d) $\sqrt{(x^2+1)^2}$

\
**Ratkaisu:**

a) Lasketaan ensin neliöjuuret. 

$$\sqrt{9}+\sqrt{16}=3+4=7$$

\

b) Lasketaan ensin yhtenlasku. 

$$\sqrt{9+16}=\sqrt{25}=5$$

\

c) Lasketaan ensin sisimmät neliöjuuret. 

\begin{align*}
&\sqrt{\sqrt{25}+\sqrt{81}-5}\\
&=\sqrt{5+9-5}\\
&=\sqrt{9}=3
\end{align*}

\

d) Käytetään neliöjuuren kolmatta ominaisuutta.

\begin{align*}
&\sqrt{(x^2+1)^2} \\
&=|x^2+1| \\
\text{(itseisarvot voidaan }&\text{poistaa, sillä aina}\;x^2+1>0) \\
&=x^2+1
\end{align*}

---

#- {id="72HpZvXWZ4Ek" area_end="v544"}

#- {id="GhdvO35e8Abd"}
\

Olkoon kuution tilavuus $V=64$. Mikä on kuution särmän pituus? 

![&nbsp;](/images/190436/Screenshot_166.png){width=300}


Kuution tilavuus saadaan särmän kuutiona, eli nyt tulee pohtia sitä, että mikä luku $x$ toteuttaa yhtälön $x^3=64$.

Tiedämme, että $4^3=64$. Siispä särmän pituus $x=4$.

\

Voidaan osoittaa, että yhtälön $x^3=a$ ratkaisu on $\sqrt[3]{a}$. Tätä sanotaan luvun $a$
kuutiojuureksi.

#- {id="4jtfpoE8xIhs" .huomautus}
 **Kuutiojuuri**

\
Luvun $a$ kuutiojuuri $\sqrt[3]{a}$ toteuttaa ehdon


$$(\sqrt[3]{a})^3=a$$

#- {id="xPmXKsTf33uo"}
Kuutiojuuren määritelmässä kelpaavat kaikki reaaliluvut eli $a$ voi olla myös 
negatiivinen luku. Tämä siksi, että kuutiojuuri 
on myös näin määriteltynä yksikäsitteinen, koska parittoman negatiivisen luvun 
kuutio on negatiivinen ja vastaavasti parittoman 
positiivisen luvun kuutio on positiivinen. Edellä johdetut neliöjuuren 
laskusäännöt pätevät myös kuutiojuurella ja lisäksi silloin, kun $a<0$ tai $b<0$.

### Esimerkki: kuutiojuurten laskemista {id="3VhpZxoaN0r9" area="e545" collapse="true"}

#- {id="ysvaTWcm5ROd"}
\
Laske

a) $\sqrt[3]{27}$

b) $\sqrt[3]{-16}$

c) $-\sqrt[3]{-216}$

\
**Ratkaisu:**

a) 

$\sqrt[3]{27}=3,$ sillä $3^3=3\cdot3\cdot3=27.$

\

b) 

$\sqrt[3]{-16}=-2,$ sillä $(-2)^2=(-2)\cdot(-2)\cdot(-2)=-16.$

\

c) 

$\sqrt[3]{-216}=-6,$ sillä $(-6)^3=(-6)\cdot(-6)\cdot(-6)=-216.$ 

Joten $-\sqrt[3]{-216}=-(-6)=6.$

---

#- {id="UtNUSDTD9xwC" area_end="e545"}

#- {id="kPMgMu17H95R"}
\

[[Neliö- ja kuutiojuuri: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-3-6-potenssi-ja-juuri#neliö--ja-kuutiojuuri)]{.hidden-print}

## Potenssiyhtälö {id="gSkMFg5m0EhU"}

#- {id="KMVF90EuHU8D"}
\
Olemme käyneet läpi jo esimerkkejä muotoa $x^2=a$ ja $x^3=a$ olevien yhtälöiden 
ratkaisuista. Yleisesti muotoa $x^n=a$ olevaa yhtälöä sanotaan potenssiyhtälöksi. 
Katsotaan vielä yleisesti, miten potenssiyhtälö ratkaistaan, kun $n=2$ tai $n=3.$

#- {id="GswOUHb49JMS" .huomautus}
**Neliöyhtälön ratkaiseminen (n=2)**

\

Neliöyhtälön $$x^2=a$$ juurten lukumäärä riippuu luvusta $a$.

\

**Jos $a>0$**, niin yhtälön ratkaisut ovat

$$x=\sqrt{a} \text{ tai } x=-\sqrt{a}.$$

**Jos $a=0$**, niin yhtälön ratkaisu on

$$x=0.$$

**Jos $a<0$**, niin yhtälöllä ei ole ratkaisua.

#- {id="o2iuDQ1vinPU"}
Jos $a \geq 0$, niin neliöyhtälö voidaan ratkaista ottamalla puolittain neliöjuuri huomioiden ratkaisujen etumerkit.

### Esimerkki: neliöyhtälön ratkaiseminen {id="bRXHwbVTdWHw" area="e551" collapse="true"}

#- {id="F67Fo9yJw01T"}
\
Ratkaise yhtälö $2x^2+3=17$

\
**Ratkaisu:**

Vastaavasti kuin ensimmäisen asteen yhtälöissä, muokataan yhtälö muotoon, jossa
toisella puolella on muuttuja ja toisella vakio.
Tämän jälkeen voidaan ottaa puolittain neliöjuuri, kun huomioidaan myös negatiivinen ratkaisu.

\begin{align*} 
2x^2+3 & = 17 && | -3  \\
 2x^2 & = 14 && | : 2 \\
 x^2  & = 7 && | \sqrt{} \\
 x &= \pm \sqrt{7}
\end{align*}

\
**Vastaus:** $x=\sqrt{7}$ tai $x=-\sqrt{7}$

---

#- {id="79OOb8NL6X1d" area_end="e551"}

### Esimerkki: Coca-Cola -tölkin mitat {id="DtaBmkVAOuNe" area="v551" collapse="true"}

#- {id="CRl9Ku3X5H9W"}
\
Amerikan standardimittaisen Coca-Cola -tölkin pohjaympyrän pinta-ala on noin $92$ cm$^2$. Laske tölkin pohjaympyrän säteen pituus.

![&nbsp;](/images/189414/cola.jpg){width=300}

**Ratkaisu:**

Ympyrän pinta-ala saadaan kaavalla $A=\pi r^2$, missä $r=\text{ympyrän säteen pituus}$. 
Muodostetaan tehtävänannon tiedoista yhtälö.


\begin{align*} 
\pi r^2 & = 92 && | : \pi  \\
 r^2 & = \dfrac{92}{ \pi } && | \sqrt{} \\
 r &=  \pm \sqrt{\dfrac{92}{\pi}}
\end{align*}

Pituus ei voi olla negatiivinen, joten huomioimme vain positiivisen ratkaisun.

$r=\sqrt{\dfrac{92}{\pi}}=5,411516380\approx5,4\;\text{(cm)}.$

\

**Vastaus:** Pohjaympyrän säde on noin $5,4\;\text{cm}.$

---

#- {id="VrCHHMaGJFuz" area_end="v551"}

#- {id="dSGs1lnsAYOB"}
\

#- {id="Z3IgwUcH681W" .huomautus}
**Kuutioyhtälön ratkaiseminen (n=3)**

\

Kuutioyhtälön $$x^3=a$$


ratkaisu on $x=(\sqrt[3]{a})$.

#- {id="x7gzao5ssxEH"}
Neliöjuuresta poiketen, kuutioyhtälön ratkaisu on yksikäsitteinen, sillä positiivisen luvun kuutio on positiivinen luku ja
negatiivisen luvun kuutio on negatiivinen luku.

### Esimerkki: kuutioyhtälön ratkaiseminen {id="8ynbzTMTstuu" area="e553" collapse="true"}

#- {id="7pT6fwlAz6Kx"}
\
Ratkaise yhtälö $3x^3+7=-4$.

\
**Ratkaisu:**

Vastaavasti kuin neliöyhtälössä, muokataan yhtälö muotoon, missä toisella puolella on muuttuja ja toisella vakio.
Tämän jälkeen voidaan ottaa puolittain kuutiojuuri, mutta nyt ratkaisuja on vain yksi.


\begin{align*} 
3x^3+7 & = -4 && | -7  \\
 3x^3 & = -11 && | : 3 \\
 x^3  & = -\dfrac{11}{3} && | \sqrt[3]{} \\
 x &= \sqrt[3]{-\dfrac{11}{3}}=- \sqrt[3]{\dfrac{11}{3}}
\end{align*}

**Vastaus:** $x=- \sqrt[3]{\dfrac{11}{3}}$

---

#- {id="gDyVGHXw0hBU" area_end="e553"}

### Esimerkki: jalkapallon mitat {id="nFmfSdrs8P3c" area="e554" collapse="true"}

#- {id="kizFODdCpaaI"}
\
Vuoden $2018$ jalkapallon mm-kisojen kisapallo oli Adidas Telstar. Telstarin tilavuus on noin $5,6$ litraa. Mikä on Telstarin 
halkaisijan pituus senttimetreinä?

![[Lähde: Kuebler Sport](https://www.kuebler-sport.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/F/1/F1731_00-ecommerce.jpg)](/images/189416/pallo.jpg){width=200}

\
**Ratkaisu:**

Pallon tilavuus saadaan kaavalla $V=\dfrac{4\pi r^3}{3}$, missä $r=\text{pallon säteen pituus}$. 
Muodostetaan tehtävänannon tiedoista yhtälö ja ratkaistaan pallon säde.

\begin{align*} 
\dfrac{4\pi r^3}{3} & = 5,6 && | \cdot 3  \\
 4\pi r^3 & = 3\cdot 5,6 && | : 4\pi \\
 r^3  & = \dfrac{3\cdot 5,6}{4\pi} && | \sqrt[3]{} \\
 r &= \sqrt[3]{\dfrac{3\cdot 5,6}{4\pi}} \text{ (dm)}
\end{align*}

Pallon halkaisija $h$ on kaksi kertaa säteen suuruinen, joten

$h=2\cdot\sqrt[3]{\dfrac{3\cdot 5,6}{4\pi}} \text{ dm } = 2,203246733 \text{ dm }\approx 22\;\text{cm}$.

\
**Vastaus:** Pallon halkaisija on noin $22\;\text{cm}$.

---

#- {id="VdisfRceSvN9" area_end="e554"}

#- {id="GhA6rPiUWFa5"}
\

[[Potenssiyhtälö: tehtäviä](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-3-6-potenssi-ja-juuri#potenssiyhtälö)]{.hidden-print}

#- {id="8K2Z8kA6eitr" area_end="sisalto"}
