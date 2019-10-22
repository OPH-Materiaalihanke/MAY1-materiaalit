``` {id="FqeO4CHZHFcs" settings=""}
auto_number_headings: true
auto_number_start: 0
math_type: svg
math_preamble: '\usepackage{gensymb}'
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
   mcq:
      lazy: false
   mmcq:
      lazy: false
   csPlugin:
       button: Tarkista
       type: mathcheck
       beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
       -pointsRule: {}
       showCodeOn:
       mode: text
       isHtml: true
       buttons: |!!
           /
           *
           ^
           abs
           ()
           
!!
texmacros: 
  texfontsize: 12pt
  texauthorname: 'Juulia Auvinen ja Robin Hamdi'
  texlanguage: 'finnish'
  texpaper: 'a4paper'
  texdocumentclass: 'extbook'
  texside: 'oneside'
  textitle: 'Luvut ja laskutoimitukset: tehtäviä'
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

#- {id="mbjKnyAySAjP" area="sisalto"}

# Luvut ja laskutoimitukset: tehtäviä {id="wYbYV89NMDNS"}

Tällä sivulla on tehtäviä, jotka liittyvät kappaleeseen 
[Luvut ja laskutoimitukset](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-luvut-ja-laskutoimitukset-teoria-2-6).
Tehtävät on ryhmitelty samojen otsikoiden alle kuin aiemmin mainitussa kappaleessakin.

## Lukualueet: tehtäviä {id="bLWJIdCCc4dX"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-luvut-ja-laskutoimitukset-teoria-2-6#lukualueet).

### Tehtävä {id="ZrO8qplrGXYg"}

``` {id="qems08fxAOsL" #p211a plugin="mmcq"}
headerText: ''
buttonText: 'Tallenna'
trueText: Kuuluu
falseText: Ei kuulu
stem: 'a) Mitkä seuraavista luvuista kuuluvat luonnollisiin lukuihin?'
choices:
  -
    correct: true
    text: 'md:$0$'
    reason: ''
  -
    correct: false
    text: 'md:$\displaystyle\frac{1}{3}$'
    reason: ''
  -
    correct: false
    text: 'md:$-3$'
    reason: ''
  -
    correct: true
    text: 'md:$\displaystyle\frac{8}{4}$'
    reason: 'md:$\displaystyle\frac{8}{4}=2$'
```

``` {id="FN9PxmvAIto7" #p211b plugin="mmcq"}
headerText: ''
buttonText: 'Tallenna'
trueText: Kuuluu
falseText: Ei kuulu
stem: 'b) Mitkä seuraavista luvuista kuuluvat kokonaislukuihin?'
choices:
  -
    correct: true
    text: 'md:$-5$'
    reason: ''
  -
    correct: true
    text: 'md:$\sqrt{4}$'
    reason: 'md:$\sqrt{4}=2$'
  -
    correct: false
    text: 'md:$-\displaystyle\frac{5}{6}$'
    reason: ''
  -
    correct: true
    text: 'md:$12$'
    reason: ''
```

``` {id="2vckKvRNCWJD" #p211c plugin="mmcq"}
headerText: ''
buttonText: 'Tallenna'
trueText: Kuuluu
falseText: Ei kuulu
stem: 'c) Mitkä seuraavista luvuista kuuluvat rationaalilukuihin?'
choices:
  -
    correct: true
    text: 'md:$\sqrt{16}$'
    reason: 'md:$\sqrt{16}$=4'
  -
    correct: true
    text: 'md:$8$'
    reason: ''
  -
    correct: false
    text: 'md:$\pi$'
    reason: 'md:$\pi$ on jaksoton luku $3,14159\dots$, jota ei voi esittää kahden kokonaisluvun osamääränä'
  -
    correct: false
    text: 'md:$\sqrt{2}$'
    reason: 'md:lukua $\sqrt{2}$ ei myöskään voida esittää kahden kokonaisluvun osamääränä'
```

``` {id="XrpMMcm0uixj" #p212d2 plugin="mcq"}
answerLimit: 1
buttonText: 'Tallenna'
headerText: ''
stem: 'd) Kuuluvatko kaikki edellisten kohtien luvut reaalilukuihin?'
choices:
  -
    correct: true
    text: 'Kyllä'
    reason: ''
  -
    correct: false
    text: 'Ei'
    reason: ''

```

### Tehtävä {id="bOOynato7eUc"}

Mistä lukujoukoista luvut on otettu? Valitse suppein (pienin mahdollinen) joukko.

``` {id="bBJoQoKvozl9" #p212a plugin="mcq"}
answerLimit: 1
buttonText: 'Tallenna'
headerText: ''
stem: 'md:a) $-3,\;-2,\;0,\;2,\;6,\;10,\;15$'
choices:
  -
    correct: false
    text: 'md:$\mathbb{N}$'
    reason: ''
  -
    correct: true
    text: 'md:$\mathbb{Z}$'
    reason: 'Luvut kuuluvat kokonaislukuihin.'
  -
    correct: false
    text: 'md:$\mathbb{Q}$'
    reason: ''
  -
    correct: false
    text: 'md:$\mathbb{R}$'
    reason: ''
```

``` {id="fKqPdLlJNfJg" #p212b plugin="mcq"}
answerLimit: 1
headerText: ''
buttonText: 'Tallenna'
stem: 'md:b) $2,\;4,\;6,\;8,\;10,\;12$'
choices:
  -
    correct: true
    text: 'md:$\mathbb{N}$'
    reason: 'Luvut kuuluvat luonnollisiin lukuihin.'
  -
    correct: false
    text: 'md:$\mathbb{Z}$'
    reason: ''
  -
    correct: false
    text: 'md:$\mathbb{Q}$'
    reason: ''
  -
    correct: false
    text: 'md:$\mathbb{R}$'
    reason: ''
```

``` {id="d2ddOX8dncFD" #p212c plugin="mcq"}
answerLimit: 1
buttonText: 'Tallenna'
headerText: ''
stem: 'md:c) $-4,-\displaystyle\frac{1}{2},\;2,\;17$'
choices:
  -
    correct: false
    text: 'md:$\mathbb{N}$'
    reason: ''
  -
    correct: false
    text: 'md:$\mathbb{Z}$'
    reason: ''
  -
    correct: true
    text: 'md:$\mathbb{Q}$'
    reason: '$-\frac{1}{2}$ on rationaaliluku, joten luvut kuuluvat rationaalilukuihin.'
  -
    correct: false
    text: 'md:$\mathbb{R}$'
    reason: ''
```

``` {id="jSVvABDC6STI" #p212d plugin="mcq"}
answerLimit: 1
headerText: ''
buttonText: 'Tallenna'
stem: 'md:d) $-6,\;0,\;\pi,\;\displaystyle\frac{3}{7}$'
choices:
  -
    correct: false
    text: 'md:$\mathbb{N}$'
    reason: ''
  -
    correct: false
    text: 'md:$\mathbb{Z}$'
    reason: ''
  -
    correct: false
    text: 'md:$\mathbb{Q}$'
    reason: ''
  -
    correct: true
    text: 'md:$\mathbb{R}$'
    reason: '$\pi$ on irrationaaliluku, joten luvut kuuluvat reaalilukuihin.'
```

### Tehtävä {id="KeI4ChyoJ9jC"}

Valitse kuvailuun sopiva yhtälö.

``` {id="220aDEYmxwMq" #p213a plugin="mcq"}
answerLimit: 1
headerText: ''
buttonText: 'Tallenna'
stem: 'a) Yhtälöllä ei ole ratkaisua luonnollisten lukujen joukossa ja se saadaan ratkeavaksi lisäämällä
negatiiviset luvut lukujoukkoomme eli ts. teemme lukulaajennuksen $\mathbb{N} \rightarrow \mathbb{Z}$.'
choices:
  -
    correct: false
    text: 'md:$x+4=7$'
    reason: 'Yhtälön ratkaisu $x=3$ kuuluu luonnollisiin lukuihin.'
  -
    correct: false
    text: 'md:$x+\dfrac{1}{2}=\dfrac{3}{2}$'
    reason: 'Yhtälön ratkaisu $x=1$ kuuluu luonnollisiin lukuihin.'
  -
    correct: true
    text: 'md:$x+3=0$'
    reason: 'Yhtälön ratkaisu $x=-3$ ei kuulu luonnollisiin lukuihin.'
```

``` {id="UeP77C5BO8Pe" #p213b plugin="mcq"}
answerLimit: 1
headerText: ''
buttonText: 'Tallenna'
stem: 'b) Yhtälöllä ei ole ratkaisua kokonaislukujen joukossa ja se saadaan ratkeavaksi lisäämällä
murtoluvut lukujoukkoomme ($\mathbb{Z} \rightarrow \mathbb{Q}$).'
choices:
  -
    correct: false
    text: 'md:$\dfrac{1}{3}+x=-\dfrac{5}{3}$'
    reason: 'Yhtälön ratkaisu $x=-2$ kuuluu kokonaislukuihin.'
  -
    correct: true
    text: 'md:$3x=1$'
    reason: 'Yhtälön ratkaisu $x=\dfrac{1}{3}$ ei kuulu kokonaislukuihin.'
  -
    correct: false
    text: 'md:$\dfrac{x}{3}=3$'
    reason: 'Yhtälön ratkaisu $x=9$ kuuluu kokonaislukuihin.'
```

``` {id="miYaW31t1sHC" #p213c plugin="mcq"}
answerLimit: 1
headerText: ''
buttonText: 'Tallenna'
stem: 'c) Yhtälöllä ei ole ratkaisua reaalilukujen joukossa. '
choices:
  -
    correct: false
    text: 'md:$x^2=9$'
    reason: 'Yhtälön ratkaisut $x=-3$ ja $x=3$ kuuluvat reaalilukuihin.'
  -
    correct: false
    text: 'md:$\dfrac{x-1}{2}=4$'
    reason: 'Yhtälön ratkaisu $x=9$ kuuluu reaalilukuihin.'
  -
    correct: true
    text: 'md:$x^2=-1$'
    reason: 'Mikään reaaliluku toiseen korotettuna ei saa neagtiivisia arvoja..'
```

## Laskulait: tehtäviä {id="akuqVbjkqbu2"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-luvut-ja-laskutoimitukset-teoria-2-6#laskulait).

### Tehtävä {id="Z9rDpKEC1plP"}

Laske ilman laskinta.

``` {id="31FhymUHFy7f" #seq221a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:a\) $8+10\cdot2$
fullprogram: |!!
arithmetic
ok_text Hyvä! 

f_nodes 1
hide_expr
only_no_yes_on
28
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="cWM5ctZDXfEa" #seq221b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:b\) $-15:(-3)$
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 1
hide_expr
only_no_yes_on
5
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="0U3fwfb7wQUl" #seq221c plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:c\) $-4 \cdot 2 \cdot (-1) \cdot (-3)$
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 2
hide_expr
only_no_yes_on
-24
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="7Tbg9LOX7vLq"}

Laske ilman laskinta.

``` {id="OlCR47E0jsE5" #seq222a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: 'md:a\) $7\cdot(4-2\cdot3)+10:(-2)$'
fullprogram: |!!
arithmetic
ok_text Loistavaa!

f_nodes 2
hide_expr
only_no_yes_on
-19
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="Q6UOfZUNIDe3" #seq222b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: 'md:b\) $-18:3 \cdot (-2) : 4 \cdot 100 : (-2)$'
fullprogram: |!!
arithmetic
ok_text Loistavaa!

f_nodes 2
hide_expr
only_no_yes_on
-150
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="deXwZ4GyJh1f" #seq222c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) $20+(-40:(-4))\cdot (-2\cdot 30 : 5+10)$'
fullprogram: |!!
arithmetic
ok_text Loistavaa!

f_nodes 1
hide_expr
only_no_yes_on
0
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="oi37O96omKQg"}

Laske ilman laskinta. Käytä hyväksesi reaalilukujen laskulakeja.

``` {id="ontkq4OxE88S" #seq223a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: 'md:a\) $3,5\cdot178+6,5\cdot178$'
fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 1
hide_expr
only_no_yes_on
1780
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="enPtfsMK182C" area="v223a" collapse="true"}

**Vihje**

#- {id="P67sevNfircp"}
Osittelulaki: 

$3,5\cdot178+6,5\cdot178=178\cdot(3,5+6,5)$

\

#- {id="74W7uK7Bb0Pc" area_end="v223a"}

``` {id="wbxzJeHG75zZ" #seq223b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) $38\cdot1,8-1,8\cdot28$'
fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 1
hide_expr
only_no_yes_on
18
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="1mCuzRoO2bpi" area="v223b" collapse="true"}

**Vihje**

#- {id="YkdXpKYlW4nS"}
Osittelulaki:

$38\cdot1,8-1,8\cdot28=1,8\cdot(38-28)$

\

#- {id="AP71SyOPbmjJ" area_end="v223b"}

``` {id="UWa0Ca3QYLtZ" #seq223c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) $1,234+(5,766-8)$'
fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 2
hide_expr
only_no_yes_on
-1
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="Ar8kKA1HYgbu" area="v223c" collapse="true"}

**Vihje**

#- {id="MXid5Gfu78RQ"}
Liitäntälaki:

$1,234+(5,766-8)=(1,234+5,766)-8=7-8$

\

#- {id="PY9rjDtfHKix" area_end="v223c"}

``` {id="vwaCzCTFbdrW" #seq223d plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn:
stem: 'md:d\) $\left(\displaystyle\frac{1}{9}\cdot2,222\right)\cdot180$'
fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 2
hide_expr
only_no_yes_on
44.44
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="5ZsbuIFMZUAY" area="v223d" collapse="true"}

**Vihje**

#- {id="bXkCaJcSsNvr"}
Vaihdanta- ja liitäntälaki:

$\left(\displaystyle\frac{1}{9}\cdot2,222\right)\cdot180=
\left(\displaystyle\frac{1}{9}\cdot180\right)\cdot2,222=20\cdot2,222$

#- {id="peLsIfLEwZVk" area_end="v223d"}

### Tehtävä {id="ZHCkDMrgMHNO"}

#- {id="ptnqQbq5J6JN" rd="183285" rp="nhbhmXlxZBvV"}

### Tehtävä {id="O7O1yNn1hiri"}

#- {id="v2fHKZ7VhalN" rd="183285" rp="lQO0cwumfSWq"}

### Tehtävä {id="48Oz6Rq8Ivbh"}

#- {id="m0J6GBMGqjhS" rd="183285" rp="dXm2gu2xCQgI"}

### Tehtävä {id="CGJ5OgQuZSoV"}

Laske lukujen $22$ ja $-13$

``` {id="VDwbPeC1ROO5" #seq227a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn:
stem: 'md:a\) summa'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 1
hide_expr
only_no_yes_on
9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="CpgJEah5VgLr" #seq227b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn:
stem: 'md:b\) erotus'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 1
hide_expr
only_no_yes_on
35
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="WuzyuyeOITmb" #seq227c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) vastalukujen erotus'
fullprogram: |!!
arithmetic
ok_text Hyvä! `-22-13=-35`

f_nodes 2
hide_expr
only_no_yes_on
-35
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="6oyKGemrLh5U" #seq227d plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:d\) vastalukujen summa'
fullprogram: |!!
arithmetic
ok_text Hyvä! `-22+13=-9`

f_nodes 2
hide_expr
only_no_yes_on
-9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="VW7qv9eByDal"}
Minkä yhteyden huomaat?

#- {id="uaMaUwcqPWNS" area="v227" collapse="true"}

**Vastaus**

#- {id="Pi7pbm1t5FpB"}
Lukujen summa on vastalukujen summan vastaluku. Vastaavasti lukujen 
erotus on vastalukujen erotuksen vastaluku. 

Tulos pätee
yleisestikin ottaen kaikilla $a,b\in\mathbb{R}$, sillä $a+b=-(-a+(-b))$ ja $a-b=-(-a-(-b))$.

#- {id="V7wVKiIuwUBi" area_end="v227"}

### Tehtävä {id="HIA5RhKnMwCx"}

Merkitse lauseke ja laske, kun

``` {id="A6ow1TeuwAmh" #seq228a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: 'md:a\) lukujen $12$ ja $-3$ erotus kerrotaan luvulla $-5$'
fullprogram: |!!
arithmetic
ok_text Jep! Oikea lauseke: `(12-(-3))*(-5)`

f_nodes 2
hide_expr
only_no_yes_on
-75
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="5drPpn2QTqpR" #seq228b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) lukujen $-19$ ja $3$ summan vastaluku jaetaan luvulla $4$'
fullprogram: |!!
arithmetic
ok_text Jep! Oikea lauseke: `(-(-19+3))/4`

f_nodes 1
hide_expr
only_no_yes_on
4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="efllFFjNxlf1" area="v228b" collapse="true"}

**Vihje**

#- {id="X2gluntNiJ2M"}
Lukujen $-19$ ja $3$ summa on $-19+3=-16$ ja sen vastaluku $16$

\

#- {id="okGDpIc1NL5v" area_end="v228b"}

``` {id="f9cNI4oz7QPF" #seq228c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) lukujen $-77$ ja $-11$ osamäärä kerrotaan luvun $10$ vastaluvulla'
fullprogram: |!!
arithmetic
ok_text Jep! Oikea lauseke: `(-77)/(-11)*(-10)`

f_nodes 2
hide_expr
only_no_yes_on
-70
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="3KvQYLkwjgN1" area="v228" collapse="true"}

**Vihje**

#- {id="VgSR7oQRJ1l1"}
$\displaystyle\frac{-77}{-11}\cdot(-10)=7\cdot(-10)$

\

#- {id="1VPYaQpiibH2" area_end="v228"}

``` {id="0EAqeHrwKXDy" #seq228d plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:d\) lukujen $-36$ ja $-9$ osamäärä kerrotaan lukujen $1$ ja $-5$ summalla'
fullprogram: |!!
arithmetic
ok_text Jep! Oikea lauseke: `(-36)/(-9)*(1+(-5))`

f_nodes 2
hide_expr
only_no_yes_on
-16
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="LBj500Ihwvq8" area="v228d" collapse="true"}

**Vihje**

#- {id="j6Y8GPyagjPk"}
$\displaystyle\frac{-36}{-9}\cdot(1+(-5))=4\cdot(-4)$

#- {id="iv4FZrUELz1a" area_end="v228d"}

## Itseisarvo: tehtäviä {id="wcmVLnImaTA7"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-luvut-ja-laskutoimitukset-teoria-2-6#itseisarvo).

### Tehtävä {id="LpbjEz5HtoTC"}

Sievennä.

``` {id="F5sGUCMVHpNL" #seq23a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: 'md:a\) $|(-6)^2|$'
fullprogram: |!!
arithmetic
ok_text Hyvä! `abs((-6)^2)=(-6)^2=36`

f_nodes 1
hide_expr
only_no_yes_on
36
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="lUQ9HSmgLfDm" #seq23b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) $-|-3^2|$'
fullprogram: |!!
arithmetic
ok_text Hyvä! `-abs(-3^2)=-abs(-9)=-9`

f_nodes 2
hide_expr
only_no_yes_on
-9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="b2wqbqfTKqgB" #seq23c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) $|3^2-4^2|$'
fullprogram: |!!
arithmetic
ok_text Hyvä! `abs(3^2-4^2)=abs(9-16)=abs(-7)=7`

f_nodes 1
hide_expr
only_no_yes_on
7
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="19Z4Q8vb9cdU"}

Laske lukujen $-7$ ja $-10$

``` {id="8UBKit1fevf9" #seq229a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:a\) summan itseisarvo'
fullprogram: |!!
arithmetic
ok_text Oikein meni! `abs(-7+(-10))`

f_nodes 1
hide_expr
only_no_yes_on
17
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="xWWDOkzzqza9" #seq229b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) erotuksen itseisarvo'
fullprogram: |!!
arithmetic
ok_text Oikein meni! `abs(-7-(-10))`

f_nodes 1
hide_expr
only_no_yes_on
3
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="10r8e2AIfeU6" #seq229c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) itseisarvojen erotus'
fullprogram: |!!
arithmetic
ok_text Oikein meni! `abs(-7)-abs(-10)`

f_nodes 2
hide_expr
only_no_yes_on
-3
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="difml10uBEQL"}

Lukujen $a$ ja $b$ erotuksen itseisarvo $|a-b|$ ilmoittaa lukujen $a$ ja $b$ 
etäisyyden lukusuoralla.

![](/images/189265/Screenshot_62.png){width=250}

Määritä kaupunkien lämpötilaerot.

``` {id="BWNjGk0BoIYi" #seq231a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:a\) San Franciscossa mitattiin $+13\;^\circ \text{C}$ ja Los Angelesissa $+22\;^\circ \text{C}$'
fullprogram: |!!
arithmetic
ok_text Hyvä! Lämpötilaero saadaan laskettua: `abs(13-22)=abs(-9)=9`

f_nodes 1
hide_expr
only_no_yes_on
9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="JMPNR0hKh2Il"}
![](/images/189270/losi.jpg){width=300}

``` {id="VFBjpsA2nZWX" #seq231b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) Tampereella mitattiin lämpötila $+3\;^\circ \text{C}$ ja Verkhojanskissa $-25\;^\circ\text{C}$'
fullprogram: |!!
arithmetic
ok_text Hyvä! Lämpötilaero saadaan laskettua: `abs(3-(-25))=abs(28)=28`

f_nodes 1
hide_expr
only_no_yes_on
28
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="AU1rKvWzUIFd"}
![](/images/189271/venaja.jpg){width=300}

### Tehtävä {id="EeVTwJajK1ke"}

``` {id="kDceQYmjjmuw" #p234 plugin="mcq"}
answerLimit: 4
headerText: ''
buttonText: 'Tallenna'
stem: 'Mikä seuraavista on luvun $\sqrt{3}-6$ itseisarvo?'
choices:
  -
    correct: false
    text: 'md:$\sqrt{3}-6$'
    reason: ''
  -
    correct: false
    text: 'md:$-\sqrt{3}-6$'
    reason: ''
  -
    correct: false
    text: 'md:$\sqrt{3}+6$'
    reason: ''
  -
    correct: true
    text: 'md:$-\sqrt{3}+6$'
    reason: ', koska $\sqrt{3}-6\approx -4,3<0$ '
```

### Tehtävä {id="XW7ceRYDLGdg"}

``` {id="G0VjFJOHywFd" #p232 plugin="mmcq"}
headerText: ''
buttonText: 'Tallenna'
stem: 'Onko yhtälö/epäyhtälö tosi kaikilla nollasta poikkeavilla arvoilla?'
choices:
  -
    correct: true
    text: 'a) $|a|>0$'
    reason: ''
  -
    correct: false
    text: 'b) $a>-a$'
    reason: 'ei tosi, esim. kun $a=-3\;\Rightarrow\;-3<-(-3)=3$'
  -
    correct: true
    text: 'c) $|a|=|-a|$'
    reason: ''
  -
    correct: false
    text: 'd) $-(-a)=|a|$'
    reason: 'md:ei tosi, esim. kun $a=-1\;\Rightarrow\;-(-(-1))=-1\neq|-1|=1$'
```

### Tehtävä {id="nc0UEzEDW6F6"}

Sievennä. Käytä hyväksesi itseisarvon ominaisuuksia.

``` {id="7DaDS4mjFYZ7" #p235 plugin="csPlugin"}
{% set equation = '8a^2' %}
type: mathcheck
showCodeOn: 
isHtml: true
stem: 'md:a\) $(2a)^2+|2a|^2$'
fullprogram: |!!
ok_text Tosi hyvä!

f_nodes 5
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="vBHv0gFoZaSG" #p235b plugin="csPlugin"}
{% set equation = '-|a|' %}
type: mathcheck
showCodeOn: 
isHtml: true
stem: 'md:b\) $|-2a|+|-3a|-|6a|$'
fullprogram: |!!
ok_text Tosi hyvä!

f_nodes 3
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="c7kya3BJel38" area="v136b" collapse="true"}
**Vihje**

#- {id="htsQHZB60mqo"}
$|-2a|=|-2||a|=2|a|$

Itseisarvomerkit saat komennolla abs().

#- {id="vn0jkXCL9zq3" area_end="v136b"}

## Murtoluvut: tehtäviä {id="XWWt6ovbguyY"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-luvut-ja-laskutoimitukset-teoria-2-6#murtoluvut).

### Tehtävä {id="Kk3Nh5FdgRKi"}

Ilmaise sekalukumuodossa.

``` {id="xK1oSzyRlAGU" #241a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '5 1/2'
placeholder: "A b/c"
stem: 'md:a\) $\displaystyle\frac{11}{2}$'
```

``` {id="XJzXrEArAxQO" #241b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '3 1/3'
placeholder: "A b/c"
stem: 'md:b\) $\displaystyle\frac{10}{3}$'
```

``` {id="fAvMxk6QV6ZQ" #241c plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '2 3/5'
placeholder: "A b/c"
stem: 'md:c\) $\displaystyle\frac{13}{5}$'
```

``` {id="McXYwF1y2wDh" #241d plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '7 1/7'
placeholder: "A b/c"
stem: 'md:d\) $\displaystyle\frac{50}{7}$'
```

### Tehtävä {id="A86oEVdbSVRX"}

Ilmaise murtolukuna.

``` {id="K6L7VEoG2Or7" #242a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '14/1'
placeholder: "a/b"
stem: 'md:a\) $14$'
```

``` {id="9bfke8m9mIT6" #242b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '17/7'
placeholder: "a/b"
stem: 'md:b\) $2\;\displaystyle\frac{3}{7}$'
```

``` {id="5Am0XNTRlALs" #242c plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '17/10'
placeholder: "a/b"
stem: 'md:c\) $1,7$'
```

``` {id="dF3Ut8FTAero" #p242d plugin="mcq"}
answerLimit: 1
buttonText: 'Tallenna' 
headerText: ''
stem: 'd\) Voiko luvun $\pi$ esittää murtolukumuodossa?'
choices:
  -
    correct: false
    text: 'Kyllä'
    reason: ''
  -
    correct: true
    text: 'Ei'
    reason: '$\pi$ on irrationaaliluku, joten sitä ei voida esittää murtolukuna.'
```

### Tehtävä {id="8TLJQlyNFD0L"}

Supista murtoluvut siten, että osoittaja ja nimittäjä ovat mahdollisimman pieniä kokonaislukuja.

``` {id="qraGE95ceGT2" #243a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '1/2'
stem: 'md:a\) $\displaystyle\frac{5}{10}$'
```

``` {id="DLupKf2CPS1F" #243b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '3/100'
stem: 'md:b\) $\displaystyle\frac{30}{1000}$'
```

``` {id="6ZDyiKUduEFK" #243c plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '2/25'
stem: 'md:c\) $\displaystyle\frac{8}{100}$'
```

``` {id="dE4OXhireA6A" #243d plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '7/8'
stem: 'md:d\) $\displaystyle\frac{35}{40}$'
```

``` {id="jXUS7XcqxDv5" #243e plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '-5/8'
stem: 'md:e\) $-\displaystyle\frac{60}{96}$'
```

### Tehtävä {id="DMTcsQe30wbT"}

Lavenna murtoluvut samannimisiksi ja aseta luvut suuruusjärjestykseen pienimmästä suurimpaan.

``` {id="0dXoUqOAf3VI" plugin="csPlugin" #p244a}
type: text
-pointsRule:
    code: 1.0
    expectCode: byCode
wrap: -1
lazy: false
editorModes: 2
header: ""
stem: 'a.'
style-words: "font-size: 1em;font-weight: bold;"
#words: true
byCode: |!!
1/5
4/15
1/3
!!
```

``` {id="WROgsP74OuhK" plugin="csPlugin" #p244b}
type: text
-pointsRule:
    code: 1.0
    expectCode: byCode
wrap: -1
lazy: false
editorModes: 2
header: ""
stem: 'b.'
style-words: "font-size: 1em;font-weight: bold;"
#words: true
byCode: |!!
2/9
1/3
5/6
!!
```

### Tehtävä {id="qNBMtTeR8HNK"}

Laske lukujen $\displaystyle\frac{8}{9}$ ja $-\displaystyle\frac{4}{7}$

``` {id="ZSbzPJlKv4IY" #245a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '20/63'
stem: 'md:a\) summa'
```

``` {id="uwZqSYoBCuvl" #245b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '92/63'
stem: 'md:b\) erotus'
```

``` {id="roURjKQ1RMQS" #245c plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '-32/63'
stem: 'md:c\) tulo'
```

``` {id="gEjV80uzrEQk" #245d plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '-14/9'
stem: 'md:d\) osamäärä'
```

### Tehtävä {id="mzQtfQeKMZsD"}

#- {id="MS6bl34qHERc" rd="183285" rp="VVFyxjJMdQAm"}

### Tehtävä {id="W5gIm5XgTDEb"}

#- {id="IRbYmZKUHdMb" rd="183285" rp="Q8ItNVAcO3ZP"}

### Tehtävä {id="GRFRdmxAsyP6"}

Laske ja sievennä. Ilmoita vastaus kokonaisluku- tai murtolukumuodossa.

``` {id="yjZ2VTIpa5Ka" #248a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '1'
stem: 'md:a\) $\displaystyle\frac{2}{3}\cdot9\cdot\frac{1}{6}$'
```

``` {id="6NQjimTKqjE9" #248b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '8/5'
stem: 'md:b\) $\displaystyle\frac{3}{5}\cdot\frac{4}{6}+\frac{6}{5}$'
```

``` {id="s9OY5edwC4bp" #248c plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '13/30'
stem: 'md:c\) $1\displaystyle\frac{2}{3}\cdot\frac{1}{2}-\frac{2}{5}$'
```

### Tehtävä {id="7SKWbJ9uTRwY"}

#- {id="Xgx7fXBjpLeI"}
Sievennä.

``` {id="ulHp2U0VhzSa" #p2410a plugin="csPlugin"}
{% set equation = '3/x' %}
type: mathcheck
showCodeOn: 
isHtml: true
stem: 'md:a\) $\displaystyle\frac{1}{x}+\frac{2}{x}$'
fullprogram: |!!
ok_text Tosi hyvä!

f_nodes 3
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="aZ4CPzxuyG7c" #p2410b plugin="csPlugin"}
{% set equation = '-1/(2y)' %}
type: mathcheck
showCodeOn: 
isHtml: true
stem: 'md:b\) $-\displaystyle\frac{12}{4y}+\frac{10}{4y}$'
fullprogram: |!!
ok_text Tosi hyvä!

f_nodes 6
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="uleQObTula7i" #p2410c plugin="csPlugin"}
{% set equation = '3/(10x)' %}
type: mathcheck
showCodeOn: 
isHtml: true
stem: 'md:c\) $\displaystyle\frac{1}{5x}+\frac{1}{10x}$'
fullprogram: |!!
ok_text Tosi hyvä!

f_nodes 5
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="Rydt8xzDnFBI" #p2410d plugin="csPlugin"}
{% set equation = '-2/(3y)' %}
type: mathcheck
showCodeOn: 
isHtml: true
stem: 'md:d\) $\displaystyle\frac{4}{3y}-\frac{4}{2y}$'
fullprogram: |!!
ok_text Tosi hyvä!

f_nodes 6
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="bJof9Kk1kLuQ"}

``` {id="D0s5SxXu4HeP" #seq2413 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:Sievennä $\displaystyle\frac{a}{b}$, kun $a=\displaystyle\frac{1}{2}+\frac{2}{3}$ ja 
$b=\displaystyle\frac{5}{6}-\frac{3}{5}.$'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 1
hide_expr
only_no_yes_on
5
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="7EwYtftCFahn"}
![](/images/189867/kaakku.jpg){width=400}

### Tehtävä {id="UdgalhgsjMwY"}

``` {id="VeY23NvwvodL" #seq2411 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:Jos $\displaystyle\frac{3}{4}$ kakusta jaetaan tasan neljälle hengelle, niin kuinka suuren osan kakkua kukin saa?'
fullprogram: |!!
arithmetic
ok_text Hyvä! `3/4:4=3/4*1/4=3/16`

f_nodes 3
hide_expr
only_no_yes_on
3/16
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="EM85b3UOubhT"}

Pekka on tullut siihen lopputulokseen, että hänen kahvinsa on täydellistä, kun hän suodattaa kahvin
kolmella eri suodatinpussilla. Ensimmäinen suodatinpussi suodattaa kahvipuruista neljäsosan, toinen kaksi viidesosaa ja
kolmas neljä yhdeksäsosaa.

![](/images/189326/kahvi.jpg){width=300}

``` {id="do4Ma1q8O3PG" #seq2412 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:Kuinka vahvaa Pekan kahvi on purujen vahvuudesta?'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 3
hide_expr
only_no_yes_on
1/4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="1tzAihtHROIn" area="vi" collapse="true"}

**Vihje**

#- {id="AVgBP6yI8ZUd"}
Ensimmäinen suodatinpussi suodattaa neljäsosan puruista, joten jäljelle jää $1-\displaystyle\frac{1}{4}=\frac{3}{4}.$ 

\
Toinen suodatinpussi suodattaa kaksi viidesosaa jäljellä olevasta määrästä, joten 
sen jälkeen jäljelle jää  $\left(1-\displaystyle\frac{2}{5}\right)\cdot\displaystyle\frac{3}{4}
=\frac{3}{5}\cdot\frac{3}{4}=\frac{9}{20}.$

$\dots$

\

#- {id="iKn4z0s2umWC" area_end="vi"}

``` {id="W2mT9qVaqfqS" #p4211 plugin="mcq"}
answerLimit: 1
headerText: ''
buttonText: 'Tallenna'
stem: 'Olisiko lopputulos muuttunut, jos Pekka olisi vaihtanut
suodatinpussien järjestystä?'
choices:
  -
    correct: true
    text: 'Kyllä'
    reason: ''
  -
    correct: false
    text: 'Ei'
    reason: 'koska kertolasku on vaihdannainen ja liitännäinen 
    (vaihdanta- ja liitäntälaki), niin lopputuloksen kannalta ei ole väliä, missä järjestyksessä kahvia suodatetaan'
```

### Tehtävä {id="fnyeDWIeFYrP"}

Jarkon osakesalkussa on $2232$ osaketta. Osakkeista yksi kahdeksasosa on Vihreä energia -yhtiön osakkeita,
viisi yhdeksäsosaa Puu ja sellu -yhtiön ja loput Ideatalo Oy:n osakkeita.

``` {id="2i6UX9upg42u" #seq2413a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:a\) Kuinka suuri osa osakkeista on Ideatalo Oy:n osakkeita?'
fullprogram: |!!
arithmetic
ok_text Hyvä! `1-1/8-5/9=23/72`

f_nodes 3
hide_expr
only_no_yes_on
23/72
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="ORPbT7xEczgE" #seq2413b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) Kuinka monta Ideatalo Oy:n osakkeita on?'
fullprogram: |!!
arithmetic
ok_text Hyvä! `23/72*2232=713`

f_nodes 1
hide_expr
only_no_yes_on
713
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="coPNP7ThSl5K"}

Vilma, Virpi ja Visa istuttivat männyntaimia. Vilma istutti taimista kaksi viidesosaa, Virpi jäljelle
jääneistä taimista kolmasosan ja Visa loput 960 tainta.

![](/images/189342/metsa.jpg){width=300}

``` {id="FYPorUWZCrVy" #seq2414a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:a\) Kuinka suuren osan taimista Visa istutti?'
fullprogram: |!!
arithmetic
ok_text Oikein! Vilma istutti `frac{2}{5}` ja Virpi `frac{1}{3}*(1-frac{2}{5})=frac{1}{3}*frac{3}{5}=frac{1}{5}`, joten Visalle 
jäi `1-frac{2}{5}-frac{1}{5}=frac{2}{5}`.

f_nodes 3
hide_expr
only_no_yes_on
2/5
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="WkuMR04tCnA0" area="v2412" collapse="true"}

**Vihje**

#- {id="A3NVyKe5jlIy"}
\
Vilman jälkeen taimia jäi jäljelle: $1-\dfrac{2}{5}=\dfrac{3}{5}.$

Virpin jälkeen taimia jäi jäljelle: $\left(1-\dfrac{1}{3}\right)\cdot\dfrac{3}{5}=\dots$

\

#- {id="oP9tl4OirfxP" area_end="v2412"}

``` {id="KAUCwkUEKGCk" #seq2414b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:b\) Kuinka paljon taimia oli yhteensä?'
fullprogram: |!!
arithmetic
ok_text Hyvä! `x=960:frac{2}{5}=2400`.

f_nodes 1
hide_expr
only_no_yes_on
2400
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="3ujTumaitktN" area="v2412b" collapse="true"}

**Vihje**

#- {id="adgeprCobgEY"}
\
Kun merkitään muuttujalla $x$ taimien määrää, saadaan yhtälö

$$\dfrac{2}{5}x=960,$$

josta saadaan ratkaistua muuttujan $x$ arvo.

\

#- {id="yYJ5lpVE6ba9" area_end="v2412b"}

### *Tehtävä {id="EuzOImgJRarx"}

Saata murtolukumuotoon jaksollinen desimaaliluku

#- {id="tmjyOeDhPPnY" area="v2415" collapse="true"}

**Vihje**

#- {id="MqutqnuAABHH"}
1. Muodosta yhtälö $q=0,121212...$, eli $q$ on se luku, jonka haluat muuttaa murtoluvuksi.

2. Kerro yhtälö puolittain luvulla $10, 100, 1000,...$ sen mukaan
kuinka monta numeroa jaksossa on. Esim. jos jaksossa on $2$ numeroa, kerrotaan luvulla $100$: $100q=12,1212...$

3. Vähennä molemmilta puolilta $q$: $99q=12$

4. Ratkaise $q$.

#- {id="HMqeFOUZLBWS" area_end="v2415"}

``` {id="aXeKDs3C0PLM" #seq2415a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn:
stem: 'md:a\) $0,121212...$'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 3
hide_expr
only_no_yes_on
4/33
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="dMWAaaHGAdeZ" #seq2415b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn:
stem: 'md:b\) $1,456456...$'
fullprogram: |!!
arithmetic
ok_text Hyvä! Merkitään `q=1,456456456`... Nyt sarjan pituus oon `3` numeroa, joten muodostetaan yhtälö
`1000q=1456,456456456`... Vähennetään puolittain `q`, jolloin jää `999q=1455` ja tästä ratkaistuna `q=frac{1455}{999}=frac{485}{333}`.

f_nodes 3
hide_expr
only_no_yes_on
485/333
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="p9MaHi9hPLLb" #seq2415c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: 'md:c\) $4,3262626...$'
fullprogram: |!!
arithmetic
ok_text Hyvä! Merkitään `q=4,3262626`... Nyt sarjan pituus on `2` numeroa, joten muodostetaan yhtälö
`100q=432,62626`... Kun vähennetään puolittain `q`, saadaan `99q=428,3` eli `q=frac{428,3}{99}`. Lavennetaan tämä vielä sadalla, jotta päästään
eroon desimaalipilkusta eli vastaus on `frac{4283}{990}`.

f_nodes 3
hide_expr
only_no_yes_on
4283/990
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="baZEHDYqbjbu" area_end="sisalto"}
