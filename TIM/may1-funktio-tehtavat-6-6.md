``` {id="oshv0UTffbFP" settings=""}
auto_number_headings: true
auto_number_start: 4
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
   showVideo:
      lazy: false
   csPlugin:
       type: mathcheck
       button: 'Tallenna'
       beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
       -pointsRule: {}
       showCodeOn:
       mode: text
       isHtml: true
       buttons: |!!
<=>
or
*
/
^
sqrt()
!!
texmacros: 
  texfontsize: 12pt
  texauthorname: 'Juulia Auvinen ja Robin Hamdi'
  texlanguage: 'finnish'
  texpaper: 'a4paper'
  texdocumentclass: 'extbook'
  texside: 'oneside'
  textitle: 'Funktiot: tehtäviä'
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

#- {id="RWfBarmoPvC3" area="sisalto"}

# Funktio: tehtäviä {id="w5svAG6yg492"}

Tällä sivulla on tehtäviä, jotka liittyvät kappaleeseen 
[Funktio](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-6-6).
Tehtävät on ryhmitelty samojen otsikoiden alle kuin aiemmin mainitussa 
kappaleessakin.

## Funktion määritelmä: tehtäviä {id="EvLV4yurT3CE"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-6-6#funktion-määritelmä).

### Tehtävä {id="8u5OQqeHUdX8"}

Funktion $f$ arvo lasketaan seuraavalla säännöllä: 
*Funktioon syötetyn luvun neliöjuuresta vähennetään luku 4*.

``` {id="fwa7JYBBXoXa" #p511 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) Muodosta funktion lauseke. $f(x)=$

fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
sqrt(x)-4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="egOAjcj4aOAk" #p511b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:b\) Laske funktion arvo $f(4)$.
fullprogram: |!!
arithmetic
ok_text Oikein! `f(4)=sqrt(4)-4=-2`

f_nodes 2
hide_expr
only_no_yes_on
-2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="fVfVsKtsiABO" #p511c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:c\) Laske funktion arvo $f(16)$.
fullprogram: |!!
arithmetic
ok_text Oikein! `f(16)=sqrt(16)-4=4-4=0`

f_nodes 1
hide_expr
only_no_yes_on
0
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="TLbCWucKrvrM"}
![](/images/190082/vetta.jpg){width=450}

### Tehtävä {id="2wpCURYmG7YE"}

Olkoon $f(x)=x+5$. Laske

``` {id="wleHiFXrUZcJ" #p512a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) $f(1)$
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 1
hide_expr
only_no_yes_on
6
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="GKlqbuCmTpfJ" #p512b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:b\) $f(8)$
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 1
hide_expr
only_no_yes_on
13
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="xFRbgVYmDAxL" #p512c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:c\) $f(-7)$
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 2
hide_expr
only_no_yes_on
-2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="UudAj2NxGidT"}

``` {id="bmW0v6tabAE0" plugin="imagex" #MAA5_1b}
canvasheight:340
canvasweight:900
max_tries:6
background: 
    src: "/images/190105/Screenshot_104.png"
header: Yhdistä samaa tarkoittavat. 
stem: 

objects: 
  -
    type: "img"
    position: [520, 6]
    size: [120,70]
    id: "eka"
    pi:
     position: 
        align: "center"
    imgproperties: 
        src: "/images/190109/Screenshot_106.png"
  -
    type: "img"
    position: [520, 169]
    size: [130,70]
    id: "toka"
    pi:
     position: 
        align: "center"
    imgproperties: 
        src: "/images/190111/Screenshot_107.png"
  -
    type: "img"
    position: [520, 81]
    size: [130,80]
    id: "kolkki"
    pi:
     position: 
        align: "center"
    imgproperties: 
        src: "/images/190115/Screenshot_108.png"
  -
    type: "img"
    position: [520, 252]
    size: [130,60]
    id: "nelkki"
    pi:
     position: 
        align: "center"
    imgproperties: 
        src: "/images/190116/Screenshot_110.png"

-targets: 
  - 
    id: "eka"
    color: "white"
    snapColor: "green"
    position: [364, 165]
    size: [70, 70]
    points: {eka: 1.0}
  - 
    id: "toka"
    color: "white"
    snapColor: "green"
    position: [456, 94]
    size: [70, 70]
    points: {toka: 1.0}
  - 
    id: "kolkki"
    color: "white"
    snapColor: "green"
    position: [453, 256]
    size: [70, 70]
    points: {kolkki: 1.0}
  - 
    id: "nelkki"
    color: "white"
    snapColor: "green"
    position: [361, 8]
    size: [70, 70]
    points: {nelkki: 1.0}
```

### Tehtävä {id="3YexmEWZ5rtd"}

``` {id="Y5hdIxgmVy01" #plugin6 plugin="mcq"}
answerLimit: 4
buttonText: 'Tallenna'
headerText: ''
stem: 'md:Funktio kertoo luvun kahdella ja lisää tuloon luvun $6$. Funktion lauseke on'
choices:
  -
    correct: false
    text: 'md:$2x-6$'
    reason: ''
  -
    correct: true
    text: 'md:$2x+6$'
    reason: ''
  -
    correct: false
    text: 'md:$2(x+6)$'
    reason: ''
  -
    correct: false
    text: 'md:$6x+2$'
    reason: ''
```

### Tehtävä {id="tVaAJsc4mwSV"}

Olkoon $g(x)=2x^2-3x$. Määritä seuraavat funktion arvot.

``` {id="9njXhnYPw1cF" #p516b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) $g(-2)$
fullprogram: |!!
arithmetic
ok_text Hienoa!

f_nodes 1
hide_expr
only_no_yes_on
14
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="p1HZaMDpkW8d" #p616c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:b\) $g(a)$
fullprogram: |!!
arithmetic
ok_text Hienoa!

f_nodes 9
hide_expr
only_no_yes_on
2a^(2)-3a
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="YHdezhUbWPO2" #p616d plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:c\) $g(1)+g(-3)$
fullprogram: |!!
arithmetic
ok_text Hienoa!

f_nodes 1
hide_expr
only_no_yes_on
26
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="Iphr5P1WQ6NT"}
![](/images/190083/tamaonvetta.jpg){width=500}

### Tehtävä {id="Hadp7e3IVBNm"}

Millä muuttujan $x$ arvolla funktion arvoksi tulee $16$? (Jos useampia arvoja kirjoita väliin `or`.)

``` {id="rlihywgtMusp" #p617a plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:a\) $f(x)=x^2$
fullprogram: |!!
equation x=4 \/ x=-4;
ok_text Hienosti meni! `f(4)=4^2=16` ja `f(-4)=(-4)^2=16`

f_nodes 8
hide_expr
only_no_yes_on
x=4 \/ x=-4
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="r23k9droTefr" #p617b plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) $f(x)=2x-2$
fullprogram: |!!
equation x=9;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=9
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="zxUN4zs0voqV" #p617c plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:c\) $f(x)=\displaystyle\frac{x}{4}$
fullprogram: |!!
equation x=64;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=64
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="FY6acCW6H5DF" #p617d plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:d\) $f(x)=\displaystyle\frac{1}{2x}$
fullprogram: |!!
equation x=1/32;
ok_text Hienosti meni!

f_nodes 5
hide_expr
only_no_yes_on
x=1/32
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

### Tehtävä {id="bmzkrZULkWig"}

``` {id="yoY7wbsgdhfV" #plugin4 plugin="mmcq"}
headerText: ''
answerLimit: 4
trueText: 'On'
falseText: 'Ei'
buttonText: 'Tallenna'
stem: 'md: Onko funktio $f$ määritelty koko reaalilukujoukossa eli 
onko funktion määrittelyjoukko $\mathbb{R}$?'
choices:
  -
    correct: true
    text: 'md:$f(x)=x^2-2x-1$'
    reason: ''
  -
    correct: false
    text: 'md:$f(x)=\displaystyle\frac{2}{x-1}$'
    reason: 'Funktio ei ole määritelty, kun $x=1$.'
  -
    correct: false
    text: 'md:$f(x)=\sqrt{x}$'
    reason: 'Funktio ei ole määritelty, kun $x<0$.'
  -
    correct: true
    text: 'md:$f(x)=\displaystyle\frac{1}{x^2+1}$'
    reason: ''
```

### Tehtävä {id="FjubFwyqlS84"}

Mitkä ovat funktioiden määrittelyjoukot?

``` {id="voEQKLIMI9lO" #p618a plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: 'md:a\) $f(x)=2x+4$'
button: Tallenna
rows: 1
```

``` {id="EfhUpeHLD3MZ" #p618b plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: 'md:b\) $g(x)=\sqrt{x}$'
button: Tallenna
rows: 1
```

``` {id="s6uE6r1oifmO" #p618c plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: 'md:c\) $h(x)=\displaystyle\frac{3}{x}$'
button: Tallenna
rows: 1
```

#- {id="hENVWeXdWEYE"}
![](/images/190126/tamaonvetta2.jpg){width=450}

### Tehtävä {id="C0jgLIWuJrLV"}

Taulukoissa on muuttujan arvoa $x$ vastaavat funktion arvot $f(x)$.
Päättele funktion lauseke.

a)

$x$      $f(x)$   
----- -----------                
$1$      $-3$           
$2$      $-2$    
$3$      $-1$
$4$       $0$
$5$       $1$

``` {id="iNDIs9PGmUJe" #p619a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$f(x)=$

fullprogram: |!!
arithmetic
ok_text Hyvä hyvä!

f_nodes 3
hide_expr
only_no_yes_on
x-4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="BY3B1q2BIAs8"}
b)

$x$    $f(x)$   
----- ---------                
$1$      $1$          
$2$      $4$   
$3$      $9$
$4$      $16$
$5$      $25$

``` {id="G4wk5NINn2Vs" #p619b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$f(x)=$

fullprogram: |!!
arithmetic
ok_text Hyvä hyvä!

f_nodes 3
hide_expr
only_no_yes_on
x^2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="0H1UbCEqvc0v"}

``` {id="vo1dXW8lBzy5" #plugin8 plugin="mcq"}
answerLimit: 4
buttonText: 'Tallenna'
headerText: ''
stem: md:Funktion $f(x)=2x+2$ määrittelyjoukko on $\{ 0,1,2 \}$ Mikä seuraavista on funktion arvojoukko?
choices:
  -
    correct: false
    text: md:$\{ 3,7,9 \}$
    reason: ''
  -
    correct: false
    text: md:$\{ 0,1,2 \}$
    reason: ''
  -
    correct: false
    text: md:$\mathbb{R}$
    reason: ''
  -
    correct: true
    text: md:$\{ 2,4,6 \}$
    reason: 'md:
    Kun sijoitetaan määrittelyjoukon alkiot funktioon muuttujan $x$ paikalle, saadaan: \
    
    $f(0)=2\cdot0+2=2$ \
    
    $f(1)=2\cdot1+2=4$ \
    
    $f(2)=2\cdot2+2=6$
    '
```

### Tehtävä {id="1x2lbZJfXi6C"}

``` {id="J8XI4rVhaBiD" #p343c plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: 'md:Miltä väliltä funktio $f(x)=x-1$ saa arvoja, jos se on määritelty välillä $0\le x\le2$?  Perustele.'
button: Tallenna
rows: 2
```

#- {id="kO8HfSmJFWe6" area="v6111" collapse="true"}

**Vihje**

#- {id="KKxV9ViyVKLm"}
\
Laske funktion arvot välin päätepisteissä $f(0)$ ja $f(2)$. Tiedetään, että funktion $f(x)$
kuvaaja on nouseva suora (voit myös piirtää laskimella), joten funktio saa arvoja väliltä 
$f(0)\le f(x) \le f(2)\dots$

#- {id="8lo2bfjIGRNT" area_end="v6111"}

#- {id="Uo9F5vXHB12k"}
![](/images/190084/kukka.jpg){width=500}

## Funktion nollakohta: tehtäviä {id="7niLlK67muIJ"}


Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-6-6#funktion-nollakohta).

### Tehtävä {id="dL3gpJRhYOqn"}

Määritä funktioiden nollakohdat.

``` {id="1KvHdPRyH0yy" #p621a plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:a\) $f(x)=8x-16$
fullprogram: |!!
equation x=2;
ok_text Oikea nollakohta!

f_nodes 3
hide_expr
only_no_yes_on
x=2
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="t7P232D0TW19" #p621b plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) $f(x)=-8x+2$
fullprogram: |!!
equation x=1/4;
ok_text Oikea nollakohta!

f_nodes 5
hide_expr
only_no_yes_on
x=1/4
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="gdWnkH85cf1H" #p621c plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:c\) $f(x)=16-2(x+4)$
fullprogram: |!!
equation x=4;
ok_text Oikea nollakohta!

f_nodes 3
hide_expr
only_no_yes_on
x=4
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

### Tehtävä {id="KyMF17nN8DKI"}

Olkoon $g(x)=4^{2x+1}-16$.
\

``` {id="iv4F0jKnCtz9" #p622a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) Määritä funktion arvo kohdassa nolla.
fullprogram: |!!
arithmetic
ok_text Jep!

f_nodes 2
hide_expr
only_no_yes_on
-12
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="6hy1Bkjf7wnz" #p622b plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) Määritä funktion nollakohdat.
fullprogram: |!!
equation x=1/2;
ok_text Jep!

f_nodes 5
hide_expr
only_no_yes_on
x=1/2
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

#- {id="TdPf8mgHQrRu" area="vihje622" collapse="true"}

**Vihje**

#- {id="LrRa5JWGBzjn"}
a) 

$g(0)=4^{2\cdot0+1}-16$

b)

$g(x)=0\Leftrightarrow4^{2x+1}-16=0\Leftrightarrow4^{2x+1}=16\Leftrightarrow4^{2x+1}=4^2\Leftrightarrow2x+1=2\dots$

#- {id="8fWZePSd5gLu" area_end="vihje622"}

#- {id="8GdO4qZgRFef"}
![](/images/190085/vesi.jpg){width=500}

### Tehtävä {id="YizCUIEkx9Q1"}

``` {id="Qd6ezKXM3QRv" #p623 plugin="mmcq"}
headerText: ''
answerLimit: 3
trueText: 'On'
falseText: 'Ei'
buttonText: 'Tallenna'
stem: 'Tutki laskemalla, onko'
choices:
  -
    correct: false
    text: 'md:a) $x=-2$ funktion $f(x)=4x+9$ nollakohta.'
    reason: 'md:$f(-2)=1$'
  -
    correct: true
    text: 'md:b) $x=\dfrac{3}{2}$ funktion $f(x)=-2x+3$ nollakohta.'
    reason: 'md:$f\left(\dfrac{3}{2}\right)=0$'
  -
    correct: false
    text: 'md:c) $x=\dfrac{a}{3}$ funktion $f(x)=3x+a$ nollakohta.'
    reason: 'md:$f\left(\dfrac{a}{3}\right)=3\cdot \dfrac{a}{3}+a=a+a=2a$'

```

### Tehtävä {id="QhrAZaDtHAco"}

``` {id="NQY8ygtMa2aM" #p624 plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:Määritä, millä vakion $a$ arvolla funktion $f(x)=4(ax+2)+8$ nollakohta on $x=1$.
fullprogram: |!!
equation a=-4;
ok_text Loistavaa!

f_nodes 4
hide_expr
only_no_yes_on
a=-4
// BYCODEBEGIN
<=>a=
// BYCODEEND
!!
```

#- {id="F72mwfZ4sJuf" area="v3" collapse="true"}
**Vihje**

#- {id="YzmiOZMchrBZ"}
Funktion nollakohta on $x=1$, kun $f(1)=4(a\cdot1 +2)+8=0\dots$

#- {id="RQB6rK478ZSk" area_end="v3"}

#- {id="UiXwhFVymMkL"}
![](/images/190141/pisara.jpg){width=500}

## Funktion kuvaaja: tehtäviä {id="SFiUKA9VcQTQ"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-6-6#funktion-kuvaaja).

### Tehtävä {id="2Mh9vmHglKSj"}

Funktio liittää jokaiseen lähtöarvoon täsmälleen yhden loppuarvon eli jokaisella muuttujan $x$
arvolla funktio voi saada vain yhden arvon $f(x)$.

``` {id="ov3D4jAcBtiY" #moi plugin="mmcq"}
headerText: ''
trueText: 'Kyllä'
falseText: 'Ei'
buttonText: 'Tallenna'
stem: 'Onko käyrä jonkun funktion $f(x)$ kuvaaja?'
choices:
  -
    correct: true
    text: '![](/images/190193/Screenshot_113.png){width=200}'
    reason: 'Käyrä on funktion $f(x)=x^2$ kuvaaja.'
  -
    correct: false
    text: '![](/images/190194/Screenshot_115.png){width=200}'
    reason: 'Esim. $f(4)=2$ ja $f(4)=-2$'
  -
    correct: false
    text: '![](/images/190195/Screenshot_114.png){width=200}'
    reason: 'Esim. $f(0)=3$ ja $f(0)=-3$'
  -
    correct: false
    text: '![](/images/190196/Screenshot_116.png){width=200}'
    reason: 'Käyrä on paloittain määritellyn funktion kuvaaja, joita käsitellään lisää matematiikan syventävillä kursseilla.'
```

### Tehtävä {id="OEEIrDcAYXD8"}

Piirrä funktion $f(x)=2x-6$ kuvaaja Geogebralla.

``` {id="xWQD5V2TmjBs" plugin="showVideo"}
iframe: true
open: true
videoicon: false
hidetext: Piilota GeoGebra
beforeOpen: "Avaa GeoGebra tuomalla osoitin tähän"
type: small
videoname: ""
width: 600
height: 500
file: "https://www.geogebra.org/classic"
```

#- {id="LsUxLacjiMkk"}
\

``` {id="rjMCoZch3mJl" #pl631b plugin="mmcq"}
headerText: ''
answerLimit: 3
trueText: 'Kyllä'
falseText: 'Ei'
buttonText: 'Tallenna'
stem: 'md:a) Selvitä kuvasta, ovatko seuraavat pisteet kuvaajalla. '
choices:
  -
    correct: true
    text: 'md:$(4,2)$'
    reason: ''
  -
    correct: false
    text: 'md:$(5,3)$'
    reason: ''

```

#- {id="LKNl2GWWYEfd" area="v631" collapse="true"}
**Ratkaisu**

#- {id="LFNLCdVOSfQK"}
\
![](/images/190137/Screenshot_112.png){width=600}

#- {id="17rAECaL0uRe" area_end="v631"}

#- {id="HZRkdJ3jkyT5"}
\

b) Tarkista a-kohdan tulokset laskemalla esimerkiksi alta löytyvällä Abitti-editorilla.

\

#- {id="RHlsPsw7KXUZ" area="abitti1" collapse="true"}

**Abitti-editori**

``` {id="WLfOAc3oHHqk" plugin="csPlugin" #Plugin3}
type: geogebra
header: Abitti-editori
button: "Copy"
nosave: true
norun: true
stem: ''
-pointsRule:
   {}
width: 600
height: 400
srchtml: |!!

<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Rich text editor example</title>
  <link rel="stylesheet" type="text/css" href="https://digabi.github.io/rich-text-editor/site/mathquill/build/mathquill.css">
  <link rel="stylesheet" type="text/css" href="https://digabi.github.io/rich-text-editor/site/rich-text-editor.css"/>
  <script src="https://digabi.github.io/rich-text-editor/site/jquery/dist/jquery.min.js"></script>
  <script src="https://digabi.github.io/rich-text-editor/site/baconjs/dist/Bacon.min.js"></script>
  <script src="https://digabi.github.io/rich-text-editor/site/mathquill/build/mathquill.min.js"></script>
  <script src="https://digabi.github.io/rich-text-editor/site/rich-text-editor-bundle.js"></script>
  <script type="text/javascript" src="https://digabi.github.io/rich-text-editor/site/mathjax/MathJax.js">
  </script>
  <style>
    body { margin-top: 50px; font-family: sans-serif;}
    h1 {font-size: 2em;}
    .answer { border: 1px solid #aaa; padding: 5px; box-sizing: content-box; min-height: 100px; font: 17px "Times New Roman"; }
    .rich-text-editor img[src^="data:image/svg+xml"] { vertical-align: middle; margin: 4px; padding: 3px 10px; cursor: pointer; border: 1px solid transparent; }
    .rich-text-editor.rich-text-focused img[src^="data:image/svg+xml"],
    .rich-text-editor:focus img[src^="data:image/svg+xml"] { background: #EDF9FF; border: 1px solid #E6F2F8; }
    .rich-text-editor img[src*="data:image/png"] { margin: 4px; }
    .rich-text-editor:focus img[src*="data:image/png"],
    .rich-text-editor.rich-text-focused img[src*="data:image/png"] { box-shadow: 0 0 3px 1px rgba(0, 0, 0, .2); }
    .result { display: none; }
  </style>
</head>
<body>
<article>
  <section>
    <div style="height: 12em;"></div> 
    <div class="answer" id="answer1"></div>
  </section>
</article>


<div class="result">\({}\)</div>
<script>
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-49446143-7', 'auto');
  ga('send', 'pageview');
</script>
<script>
  MathJax.Hub.Config({
    jax: ["input/TeX", "output/SVG"],
    extensions: ["toMathML.js", "tex2jax.js", "MathMenu.js", "MathZoom.js", "fast-preview.js", "AssistiveMML.js", "a11y/accessibility-menu.js"],
    TeX: {
      extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js", "mhchem.js"]
    },
    SVG: {useFontCache: true, useGlobalCache: false, EqnChunk: 1000000, EqnDelay: 0, font: 'STIX-Web'}
  })

  const answer = document.querySelector('#answer1')
  makeRichText(answer, {
    screenshot: {
      saver: ({data}) =>
        new Promise(resolve => {
          const reader = new FileReader()
          reader.onload = evt => resolve(evt.target.result.replace(/^(data:image)(\/[^;]+)(;.*)/,'$1$3'))
          reader.readAsDataURL(data)
        }),
      limit: 10
    },
    baseUrl: 'https://math-demo.abitti.fi',
    updateMathImg: ($img, latex) => {
      updateMath(latex, svg => {
        $img.prop({
          src: svg,
          alt: latex
        })
        $img.closest('[data-js="answer"]').trigger('input')
      })
    }
  })

  let math = null
  MathJax.Hub.queue.Push(() => {
    math = MathJax.Hub.getAllJax('MathOutput')[0]
  })
  const updateMath = function (latex, cb) {
    MathJax.Hub.queue.Push(['Text', math, '\\displaystyle{' + latex + '}'])
    MathJax.Hub.Queue(() => {
      if ($('.result svg').length) {
        const $svg = $('.result svg').attr('xmlns', "http://www.w3.org/2000/svg")
        $svg.find('use').each(function () {
          const $use = $(this)
          if ($use[0].outerHTML.indexOf('xmlns:xlink') === -1) {
            $use.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink') //add these for safari
          }
        })
        let svgHtml = $svg.prop('outerHTML')
        //firefox fix
        svgHtml = svgHtml.replace(' xlink=', ' xmlns:xlink=')
        // Safari xlink ns issue fix
        svgHtml = svgHtml.replace(/ ns\d+:href/gi, ' xlink:href')
        cb('data:image/svg+xml;base64,' + window.btoa(svgHtml))
      } else {
        cb('data:image/svg+xml;base64,' + window.btoa(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="17px" height="15px" viewBox="0 0 17 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group 2</title>
    <defs></defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-241.000000, -219.000000)">
            <g transform="translate(209.000000, 207.000000)">
                <rect x="-1.58632797e-14" y="0" width="80" height="40"></rect>
                <g transform="translate(32.000000, 12.000000)">
                    <polygon id="Combined-Shape" fill="#9B0000" fill-rule="nonzero" points="0 15 8.04006 0 16.08012 15"></polygon>
                    <polygon id="Combined-Shape-path" fill="#FFFFFF" points="7 11 9 11 9 13 7 13"></polygon>
                    <polygon id="Combined-Shape-path" fill="#FFFFFF" points="7 5 9 5 9 10 7 10"></polygon>
                </g>
            </g>
        </g>
    </g>
</svg>`))
      }
    })
  }

  let studentDisplay = null
  MathJax.Hub.Queue(function () {
    studentDisplay = MathJax.Hub.getAllJax(document.querySelector('.result'))[0];
  })
  const trackError = (e = {}) => {
    const category = 'JavaScript error'
    const action = e.message
    const label = e.filename + ':' + e.lineno
    ga('send', 'event', category, action, label)
  }

  if (window.addEventListener) {
    window.addEventListener('error', trackError, false)
  } else if (window.attachEvent) {
    window.attachEvent('onerror', trackError)
  } else {
    window.onerror = trackError
  }

//    <input  type="file" id="input">

  const reader = new FileReader()
  reader.onload = x => $('.answer').html(x.target.result)

  document.getElementById("input").addEventListener("change", handleFiles, false)

  function handleFiles() {
    ga('send', 'event', 'mathEditor', 'import')
    const file = this.files[0]
    reader.readAsText(file)
  }

  $('#export').click(e => {
    ga('send', 'event', 'mathEditor', 'export')

    const link = 'data:text/html;base64,'+btoa($('.answer').html())
    $(e.target)
      .attr('href', link)
      .attr('download', 'math-demo-answer-' + new Date().toISOString().split('.')[0] + '.html')

  })

</script>
</body>
</html>

!!
```

#- {id="wUUnn5J3JHry" area_end="abitti1"}

#- {id="eLzkBzQ3VOIN" area="vihjejoku" collapse="true"}
**Vihje**

#- {id="2N2B2pvPPNEt"}
\
Syötä funktioon pisteen $x-$koordinaatin arvo ja laske tuleeko funktion arvoksi $y-$koordinaatin arvo. 

a) $f(4)=2\cdot4-6=\dots$

#- {id="UFuem6ZWllpO" area_end="vihjejoku"}

### Tehtävä {id="69CAqloquL4D"}

Appletissa on eräiden funktioiden kuvaajat. Päättele funktioiden lausekkeet muuttamalla
muuttujan $x$ arvoja liikuttelemalla pistettä $A$. Saat halutessasi vinkin ja funktion arvot näkyviin.
Funktiota saat vaihdettua klikkaamalla vasemmasta reunasta.

``` {id="5sq2wAVwBXAf" plugin="showVideo"}
iframe: true
open: true
videoicon: false
hidetext: Piilota GeoGebra
type: small
videoname: ""
width: 800
height: 600
file: "https://www.geogebra.org/classic/qx5h3yxs"
```

``` {id="s7YIECsp3IYo" #p632a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$f_1(x)=$

fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 3
hide_expr
only_no_yes_on
2x
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="bDI9wtGk2yZH" #p632b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$f_2(x)=$

fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
-3x
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="6gLmDFw5rBvb" #p632c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$f_3(x)=$

fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
-x^2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="D0Bh0ZKrjbRS" #p632d plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$f_4(x)=$

fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 5
hide_expr
only_no_yes_on
2x-2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="RFtOCCAXEwx4"}

Täydennä taulukkoon funktion $f(x)=\dfrac{1}{4}x^2-4$ arvot kohdissa $-8,$ $-4,$ 
$0,$ $4$ ja $8$. Voit muokata taulukkoa tuplaklikkaamalla haluamaasi taulukon solua.
`Edit table`-ikkunan, saa raahattua pois tieltä tarttumalla turkoosiin yläreunaan.

``` {id="O9IVusD5KF4S" #taulukko1 plugin="timTable"}
task: true
table:
    countRow: 6
    countCol: 2
    rows:
      - row:
        - cell: '$x$ '
        - cell: '$f(x)$ '
        backgroundColor: lightblue
        fontWeight: bold
      - row:
        - cell: '$-8$'
        - cell: ''
      - row:
        - cell: '$-4$'
        - cell: ''
      - row:
        - cell: '$0$'
        - cell: ''
      - row:
        - cell: '$4$'
        - cell: ''
      - row:
        - cell: '$8$'
        - cell: ''
```

#- {id="DGCIviwY92YA"}
\
Hahmottele taulukoiden pisteiden avulla ilman laskinta funktion $f(x)$ kuvaaja.
Alareunan `Undo`-napista saat peruttua viimeisimmän piirron ja `Reset`-napista 
saat aloitettua kuvaajan piirron alusta.

``` {id="ogayu0O2qLEB" plugin="imagex" #Plugin4}
header: Hahmottele kuvaaja
#lazy: false
buttonText: 'Tallenna'
canvasheight: 420
#background:
#  src: http://users.jyu.fi/~vesal/kurssit/ohj2/moniste/dna.jpg

freeHand: true
freeHandColor: red
freeHandWidth: 3
#freeHandVisible: false
#freeHandLineVisible: false
#freeHandLine: true
background: 
    src: "/images/190104/Screenshot_101.png"

```

## Funktion kuvaajan tulkinta: tehtäviä {id="E0bmhy4qUiD0"}

### Tehtävä {id="YLz3fYZy6u9c"}

Appletissa on kolmen funktion kuvaajat, joita saa vaihdeltua oikeasta alakulmasta. 
Nimetään funktiot: 

- funktio $1:$ $f(x)$
- funktio $2:$ $g(x)$
- funktio $3:$ $h(x)$

Liikuttele punaista pistettä kuvaajalla ja vastaa alla oleviin kysymyksiin.

``` {id="z4ZjD1ri99Fl" plugin="showVideo"}
iframe: true
open: true
beforeOpen: "Avaa GeoGebra tuomalla osoitin tähän"
videoicon: false
hidetext: Piilota GeoGebra
type: small
videoname: ""
width: 500
height: 550
file: "https://www.geogebra.org/classic/r6dad6xe"
```

``` {id="x6AiC0Lt4IZn" #pl641a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) Mikä on funktion $h$ arvo pisteessä $x=-2$?
fullprogram: |!!
arithmetic
ok_text Hienoa!

f_nodes 2
hide_expr
only_no_yes_on
-4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="d5iODvTTSOAZ" #pl641b plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) Mikä on funktion $f$ nollakohta?
fullprogram: |!!
equation x=2;
ok_text Loistavaa!

f_nodes 4
hide_expr
only_no_yes_on
x=2
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="slIE92yoS3Tk" #pl641c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:c\) Paljonko on $g(0)$?
fullprogram: |!!
arithmetic
ok_text Hienoa! Kohdassa `x=0` funktio leikkaa `y`-akselin.

f_nodes 2
hide_expr
only_no_yes_on
-3
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="llaS5DatRzlg"}

Määritä kuvaajista funktioiden nollakohdat. Jos kuvaajalla ei ole nollakohtia, kirjoita `x=` tilalle `FF`.

a) ![](/images/188637/Screenshot_46.png){width=300}

``` {id="fzdeytvZnvGa" #p641a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 
fullprogram: |!!
equation x=1;
ok_text Näin on! Kuvaaja leikkkaa x-akselin, kun `x=1`.

f_nodes 3
hide_expr
only_no_yes_on
x=1
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

#- {id="5gdU3jacR7PS"}
b) ![](/images/188638/Screenshot_47.png){width=300}

``` {id="Sm9PPyNXzsuw" #p641b2 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 
fullprogram: |!!
equation x=0;
ok_text Näin on! Kuvaaja leikkaa x-akselin origossa eli `x=0`.

f_nodes 5
hide_expr
only_no_yes_on
x=0
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

#- {id="GX5GleKGOdV8"}
c) ![](/images/188639/Screenshot_48.png){width=300}

``` {id="UgFooyblkYVL" #seq8_5 plugin="csPlugin"}
type: mathcheck
showCodeOn: 
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 
fullprogram: |!!
equation x FF ends
ok_text Näin on! Kuvaaja ei leikkaa x-akselia, joten sillä ei ole nollakohtaa.

hide_expr
FF
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

### Tehtävä {id="hB8vN3vMs6i7"}

Lue kuvassa olevan funktion $f$ kuvaajalta

![](/images/188648/Screenshot_49.png){width=600}

``` {id="8J1xS6fdTVC0" #p642a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) funktion arvo kohdassa $x=-5$
fullprogram: |!!
arithmetic
ok_text Näinhän se on!

f_nodes 1
hide_expr
only_no_yes_on
0
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="gJrFK53dEyc8" #p642b plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) ne muuttujan $x$ arvot, joilla $f$ saa arvon $-2$ (jos useampia arvoja kirjoita väliin $\text{or}$)
fullprogram: |!!
equation x=-3 or x=-1;
ok_text Näinhän se on!

f_nodes 9
hide_expr
only_no_yes_on
x=-3 or x=-1
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="7or3ljIa2FQv" #p642c plugin="mcq"}
answerLimit: 2
buttonText: 'Tallenna'
headerText: ''
stem: 'md:c) onko $f(-6)$ positiivinen vai negatiivinen.'
choices:
  -
    correct: true
    text: 'positiivinen'
    reason: 'kuvaaja on $x$-akselin yläpuolella'
  -
    correct: false
    text: 'negatiivinen'
    reason: ''
```

### Tehtävä {id="LfseEOilq0Xm"}

\
![](/images/190198/Screenshot_118.png){width=500}

``` {id="zPVVwz5ZTLfx" #pl644 plugin="mmcq"}
headerText: ''
answerLimit: 4
buttonText: 'Tallenna'
stem: 'Vastaa kuvan perusteella väittämiin.'
choices:
  -
    correct: true
    text: 'md: $g(x)=p(x),$ kun $x=-2$.'
    reason: ''
  -
    correct: false
    text: 'md:Funktiot $h(x)$ ja $p(x)$ saavat saman arvon, kun $x=1$.'
    reason: 'Funktiot $h(x)$ ja $p(x)$ saavat saman arvon, kun $x\approx 0,7$.'
  -
    correct: true
    text: 'md:Funktion $f(x)$ nollakohta on origossa.'
    reason: ''
  -
    correct: false
    text: 'md:$g(x)=0,$ kun $x=3$.'
    reason: 'md:$g(x)=0,$ kun $x=-1$.'
```

### Tehtävä: s2015/3 {id="VXQwBveYgq5O"}

Oheisessa kuvassa on erään funktion $f(x)$ kuvaaja.

\
![](/images/188537/Screenshot_36.png){width=500}

\

``` {id="FT1TXEHVLHJm" #p644 plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'Millä muuttujan $x$ arvoilla $-2\le x\le 4$ ja $f(x)\le 0$?'
choices:
  -
    correct: false
    text: 'md:$x\le0$ ja $x\ge2$'
    reason: ''
  -
    correct: true
    text: '$0\le x\le 2$'
    reason: 'Funktion $f$ arvot ovat negatiivisia, kun funktion kuvaaja on $x-$akselin alapuolella. '
  -
    correct: false
    text: 'Kaikilla muuttujan $x$ arvoilla'
    reason: ''

```

### Tehtävä {id="3xvTuHwCycp5"}

``` {id="VGPHZWpS7QFb" #plugin9 plugin="mcq"}
answerLimit: 4
buttonText: 'Tallenna'
headerText: ''
stem: 'Mikä kuvaaja sopii parhaiten seuraavaan väittämään: 
*Suomen väkiluku kasvaa edelleen, mutta kasvu hidastuu joka vuosi*?'
choices:
  -
    correct: false
    text: '![](/images/188587/Screenshot_37.png){width=150}'
    reason: ''
  -
    correct: true
    text: '![](/images/188588/Screenshot_38.png){width=150}'
    reason: ''
  -
    correct: false
    text: '![](/images/188589/Screenshot_39.png){width=150}'
    reason: ''
  -
    correct: false
    text: '![](/images/188590/Screenshot_41.png){width=150}'
    reason: ''
```

### Tehtävä {id="hAbDUHdzmIJx"}

Siirrä oheisen appletin pisteitä siten, että funktiolle asetetut seuraavat ehdot toteutuvat:

Funktiolla on nollakohdat $x=0$, $x=1$ ja $x=4$, ja funktion arvo on negatiivinen
välillä $0<x<1$ ja positiivinen välillä $1<x<4$.

Tehtävästä ei tule pisteitä.

``` {id="omV49cdKQivm" plugin="csPlugin" #kolmion_sivu}
type: geogebra
#tool: true
#header: Tähän otsikko, poista risuaita alusta
#stem: Tähän selite, , poista risuaita alusta
beforeOpen: "Avaa GeoGebra tuomalla osoitin tähän"
texprint: '![](/images/190066/kolmion_piirtaminen2_alt.PNG)'
-pointsRule:
   pointsKey: points
width: 640
height: 500
material_id: fp779qbj
commands: |!!
!!
javascript: |!!
P.setDataInit = function (api, geostate) {
    timgeo.setState(api, geostate);
}

P.language = "fi";
P.appName = "geometry";
P.showToolbar = true;
P.showAlgebraInput = true;
P.allowStyleBar = true;
!!
-objxml: |!!
!!
-data: |!!
!!
```

#- {id="eK54vbjVY8ka" area="v646" collapse="true"}

**Ratkaisu**

#- {id="FUOo2FL1sQZO"}
Esimerkiksi:

![](/images/188733/Screenshot_50.png){width=200}

#- {id="MHvrwieYLSEU" area_end="v646"}

#- {id="zo7Dgg5m7Z40"}
![](/images/190199/vesii.jpg){width=500}

## Potenssifunktio: tehtäviä {id="H6cMxIhx8Bak"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-6-6#potenssifunktio).

### Tehtävä {id="FdFqNd0gZFhv"}

Olkoon $x$ kuution sivun pituus ja $A(x)$ kuution vaipan pinta-alaa kuvaava funktio. 
Vaipalla tarkoitetaan kuution pintaa pohjat pois lukien.

![](/images/190203/kuuutio.jpg){width=400}

``` {id="Ggz4LXjWFbSW" #pl651a2 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) Muodosta vaipan funktion lauseke. $A(x)=$

fullprogram: |!!
arithmetic
ok_text Oikein! Yhden sivun pinta-ala `x^2`, joten vaipan pinta-ala (=neljän sivun pinta-ala) `4\cdotx^2=4x^2`.

f_nodes 5
hide_expr
only_no_yes_on
4x^2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="ODoncEok4J1B" #pll651b plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'b) Mikä seuraavista on funktion $A(x)$ määrittelyjoukko?'
choices:
  -
    correct: false
    text: 'Reaaliluvut $\mathbb{R}$'
    reason: ''
  -
    correct: true
    text: 'Positiiviset reaaliluvut $\mathbb{R}_+$'
    reason: 'Kuution sivun pituus voi saada vain positiivisia arvoja.'
  -
    correct: false
    text: 'Kokonaisluvut $\mathbb{Z}$'
    reason: ''

```

``` {id="JYdSGrikwSpT" #pll651c plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'c) Entä arvojoukko?'
choices:
  -
    correct: false
    text: 'Reaaliluvut $\mathbb{R}$'
    reason: ''
  -
    correct: true
    text: 'Positiiviset reaaliluvut $\mathbb{R}_+$'
    reason: 'Kuution vaipan pinta-ala voi saada vain positiivisia arvoja.'
  -
    correct: false
    text: 'Kokonaisluvut $\mathbb{Z}$'
    reason: ''

```

### Tehtävä {id="v6lKwxrWhuw3"}

Kappaleessa $5$ olemme oppineet, että potenssiyhtälön ratkaisujen lukumäärä riippuu 
luvusta $a$ ja siitä, onko $n$ parillinen vai pariton.

#- {id="BtfNXPcnJjyJ"}
a)

![](/images/189759/Screenshot_80.png){width=250}

``` {id="DLHLnClabgs8" #pl651a plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: 'md: Selitä kuvan perusteella, miten yhtälön $x^2=a$ ratkaisut riippuvat luvusta $a$ ja miksi.'
button: Tallenna
rows: 2
```

#- {id="NWnMiaFfkVv6"}
b)

![](/images/189760/Screenshot_79.png){width=250}

``` {id="kUIlsQr6JqEP" #pl651b plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: 'md:Selitä kuvan perusteella, miten yhtälön $x^3=a$ ratkaisut riippuvat luvusta $a$.'
button: Tallenna
rows: 2
```

#- {id="D9O4vRlrzerJ" area="v651" collapse="true"}

**Ratkaisu**

#- {id="24a9EneYZj6R"}
\

a) Yhtälön $x^2=a$ ratkaisut ovat $x=\pm \sqrt{a},$ kun $a>0$. Koska funktion kuvaaja ei käy $x-$akselin 
alapuolella, yhtälöllä ei ole ratkaisuja, kun $a<0.$ Tilanteessa $a=0,$ kuvaaja käy origossa eli $x=0$.

\

b) Yhtälöllä $x^3=a$ on kaikilla muuttujan $a$ arvoilla täsmälleen yksi ratkaisu $x=\sqrt[3]{a}.$

#- {id="FLIEa2uHiEZE" area_end="v651"}

## Funktion sovelluksia: tehtäviä {id="m3Qxz5PmyaHb"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-funktio-6-6#funktion-sovelluksia).

### Tehtävä {id="a6lI8tlnGG3i"}

``` {id="W9gIGI5vfFHv" #plugin14 plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: md:Taksin perusmaksu on $4\;\text{€}$ ja jokainen kilometri maksaa $1,02\;\text{€/km}$ . Mikä seuraavista funktioista kuvaa taksimatkan hintaa, kun matkaa kilometreinä merkataan  muuttujalla $x$?
choices:
  -
    correct: true
    text: md:$f(x)=4+1,02x$
    reason: ''
  -
    correct: false
    text: 'md:$f(x)=1,02+4x$'
    reason: ''
  -
    correct: false
    text: 'md:$f(x)=4\cdot1,02x$'
    reason: ''
```

``` {id="rUfRYpREAVjv" #p651a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) Montako euroa maksaa $5\;\text{km}$ pituinen taksimatka?
fullprogram: |!!
arithmetic
ok_text Loistavaa! Sijotetaan muuttujan `x` paikalle luku `5`, eli `f(5)=4+1,02*5=9,1.`

f_nodes 1
hide_expr
only_no_yes_on
9.1
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="p2P5l50b2UMZ" #p641b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:b\) Kuinka pitkän matkan taksilla voi tehdä $50$ eurolla? (ilmoita kilometrin tarkkuudella)

fullprogram: |!!
arithmetic
ok_text Loistavaa! Hinta, eli muuttujan arvo on `50`, joten merkitään `4+1,02x=50` ja ratkaistaan `x.`

f_nodes 1
hide_expr
only_no_yes_on
45
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="YFjtDBUN9Tcj"}

Funktio $f(c)=\displaystyle\frac{9}{5}c+32$ ilmaisee lämpötilan fahrenheitasteina, kun lämpötila
celsiusasteina on $c$. Floridassa lomaileva Kaisa sairastui. Sairaanhoitaja mittasi hänen
ruumiinlämmökseen $98,6$ fahrenheitastetta.

\
![](/images/189766/kuumemittari.jpg){width=300}

``` {id="ADgm4ECDxLuV" #Plugin1 plugin="mcq"}
answerLimit: 2
buttonText: 'Tallenna'
headerText: ''
stem: 'Oliko Kaisalla kuumetta?'
choices:
  -
    correct: true
    text: 'Oli'
    reason: ''
  -
    correct: false
    text: 'Ei ollut'
    reason: ''

```

#- {id="9xOXnhkQ8W0V" area="v1" collapse="true"}
**Vihje**

#- {id="IpexqSCTZ0dZ"}
Asetetaan $98,6$ funktion arvoksi
$f(c)=\displaystyle\frac{9}{5}c+32=98,6$
ja ratkaistaan tästä muuttuja $c$.

Jos $c\ge37,0$, Kaisalla oli kuumetta.

#- {id="mTRmKZoCQwaY" area_end="v1"}

### Tehtävä {id="zocUBhcc0J5g"}

Kalle löi pesäpalloa $25$ asteen kulmassa alkunopeudella $125\;\text{km/h}$. Tällöin pallon
korkeus metreinä maan pinnasta noudattaa likimain funktiota $h(t)=1,7+14,7t-4,9t^2$, missä 
$t$ on lyönnistä kulunut aika sekuntteina. Vastaa seuraaviin kysymyksiin metreinä.

\

![[Lähde: Turtlebet](https://www.turtlebet.com/fi/ennakot/pesapallo/12-9-superpesis-pelivihjeet-luvassa-kaikkien-aikojen-el-klassikko.html)](/images/189775/pesis2.jpg){width=360}

``` {id="8xPTk2Fwh1e9" #p653 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:a\) Kuinka korkealla (metreinä) pallo oli lyöntihetkellä?
fullprogram: |!!
arithmetic
ok_text Oikein! `h(0)=1,7`


f_nodes 1
hide_expr
only_no_yes_on
1.7
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="x6C4Tv1rbwcy" #p653b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:b\) Kuinka korkealla pallo oli kahden sekunnin kuluttua lyönnistä? 
fullprogram: |!!
arithmetic
ok_text Oikein! `h(2)=11,5`

f_nodes 1
hide_expr
only_no_yes_on
11.5
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="E33xaTO6jI6B"}

Autovuokraamon hinnoittelu on seuraava:
\

Auto        Aloitusmaksu   Ajetut kilometrit
---------- -------------  ------------ 
Kia Rio    $95\;\text{€}$       $0,4\;\text{€/km}$         
Opel Astra $145\;\text{€}$      $0,3\;\text{€/km}$

``` {id="8NsIrKkpoOTk" #Plugin2 plugin="mcq"}
answerLimit: 2
buttonText: 'Tallenna'
headerText: ''
stem: 'md:Muodosta molempien autojen hintaa kuvaavat funktiot ja laske 
kumpi auto tulee halvemmaksi, kun ajetaan $1200\;\text{km}$?'
choices:
  -
    correct: false
    text: '![[Kia Rio](https://www.motortrend.ca/en/cars/kia/rio/2016/)](/images/188602/kia.png){width=200}'
    reason: 'md:Kian hinta: $f(1200)=95+0,4\cdot1200=575\;\text{(euroa)}$'
  -
    correct: true
    text: '![[Opel Astra](https://www.unionrentacar.com)](/images/189773/opel.png){width=220}'
    reason: 'md:Opelin hinta: $f(1200)=145+0,3\cdot1200=505\;\text{(euroa)}$'

```

#- {id="Vvu8MNih3aPt" area="v2" collapse="true"}
**Vihje**

#- {id="qdPFZKEuL0O2"}
Merkitään ajettuja kilometrejä muuttujalla $x$.

Kia: $f(x)=95+0,4x$

Opel: $f(x)=145+0,3x$

Sijoita funktioihin muuttujan $x$ paikalle $1200$, ja laske kumpi tulee halvemmaksi.

#- {id="cwKGqrcY8q9l" area_end="v2"}

### Tehtävä {id="ZDphSMi9VBuG"}

#- {id="Tv5EXl3f7w4t"}
Eijan puhelinlasku koostuu kiinteästä $11\;\text{€}$ kuukausimaksusta sekä neljän sentin
suuruisesta veloituksesta per puhuttu minuutti. Elokuussa Eija puhui puhelimessa $8$ tuntia.

![](/images/190143/puhelin.jpg){width=400}

``` {id="ZGnsaoA0Rjuj" #Plugin5 plugin="mcq"}
answerLimit: 2
headerText: ''
buttonText: 'Tallenna'
stem: 'md:Kannattaisiko Eijan vaihtaa liittymään, jossa on rajattomasti puheaikaa ja kuukausimaksu $25\;\text{€}$?'
choices:
  -
    correct: true
    text: 'Kyllä'
    reason: 'Eijan elokuun puhelinlasku oli $f(480)=11+0,04\cdot480=30,2\;\text{(euroa)}.$'
  -
    correct: false
    text: 'Ei'
    reason: ''

```

#- {id="1rjP55bneOuU" area="vbn" collapse="true"}
**Vihje**

#- {id="tO2bOLSbq4BD"}
Merkitään muuttujalla $x$ Eijan puhelimessa puhumaa aikaa minuutteina. 
Tällöin voidaan muodostaa puhelinlaskua kuvaava funktio:
$$f(x)=11+0.04x$$

Nyt pitää laskea, onko puhelinlasku enemmän kuin $25\;\text{€}$ kun Eija puhuu 
$8\;\text{h}=8\cdot60\;\text{min}=480\;\text{min}$.

#- {id="kWOTlFRFXxqW" area_end="vbn"}

### *Tehtävä: k2019/10 {id="9WjYt0E3n0rj"}

Vauvan painon voidaan arvioida kasvavan $q^3$-kertaiseksi, kun vauvan pituus kasvaa 
$q$-kertaiseksi. Tämä perustuu siihen, ettö vauva on kolmiulotteinen ja kasvua
tapahtuu suurin piirtein yhtä paljon jokaiseen suuntaan. Oletetaan, että vauva on
syntyessään $52$ cm pitkä ja painaa $4,0$ kilogrammaa.

a) Arvioi vauvan painoa ($0,1$ kilogramman tarkkuudella) tällä menetelmällä, kun vauvan pituus on

#- {id="4JziQ3RFH6Nz" area="v656" collapse="true"}

**Vihje**

#- {id="vxgAwQDBZByZ"}
Vauvan painoa kuvaa funktio $m(x)=ax^3$, missä $x$ on vauvan pituus. 

Tiedetään, että kun
$x=0,52\;\text{cm}$, niin $m=4,0\;\text{kg}$ eli $m(0,52)=a\cdot0,52^3=4.$ Tästä yhtälöstä saadaan
ratkaistua vakion $a$ arvo. 

Tämän jälkeen vauvan painoa voidaan arvioida sijoittamalla pituus muuttujan $x$
paikalle.

#- {id="FVOV38xwJAwm" area_end="v656"}

``` {id="4cwu0AdMe4Ko" #p656a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$55\;\text{cm}$
fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 1
hide_expr
only_no_yes_on
4.7
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="bdKGYwVfeNb9" #p656b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$60\;\text{cm}$
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 1
hide_expr
only_no_yes_on
6.1
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="l1cYXCt7LyhM" #p656c plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$65\;\text{cm}$
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 1
hide_expr
only_no_yes_on
7.8
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="siHh21vtgawT" #p656d plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: md:$70\;\text{cm}$
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 1
hide_expr
only_no_yes_on
9.8
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="UVK5QeLmK7zd"}
\

b) Piirrä kuvaaja, josta ilmenevät syntymämitat ja a-kohdassa lasketut tiedot.

``` {id="Nl5RV5vgF0mR" plugin="showVideo"}
iframe: true
open: true
videoicon: false
hidetext: Piilota GeoGebra
type: small
videoname: "Geogebra"
width: 600
height: 500
file: "https://www.geogebra.org/classic"
```

#- {id="EiH86fRHfqNA" area="r656" collapse="true"}

**Ratkaisu**

#- {id="fQrMWrQKxmU5"}
![](/images/188736/Screenshot_51.png){width=350}

#- {id="ztmyVeIkJE8Z" area_end="r656"}

#- {id="j9vs4vNw28ZU" area_end="sisalto"}
