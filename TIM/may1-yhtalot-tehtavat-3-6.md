``` {id="cr6CtrnGJpUV" settings=""}
example:
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
   mcq:
      lazy: false
   mmcq:
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
           /
           *
           ^
           ()
           <=>
           
!!
texmacros: 
  texfontsize: 12pt
  texauthorname: 'Juulia Auvinen ja Robin Hamdi'
  texlanguage: 'finnish'
  texpaper: 'a4paper'
  texdocumentclass: 'extbook'
  texside: 'oneside'
  textitle: 'Yhtälö: tehtäviä'
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

#- {id="RVptC5hwTDqu" area="sisalto"}

# Yhtälö: tehtäviä {id="0jDw36fnitS5"}

Tällä sivulla on tehtäviä, jotka liittyvät kappaleeseen 
[Yhtälö](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-3-6).
Tehtävät on ryhmitelty samojen otsikoiden alle kuin aiemmin mainitussa 
kappaleessakin.

## Peruskäsitteitä: tehtäviä {id="CIpOrjajVMqc"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-3-6#perusk%C3%A4sitteit%C3%A4).

### Tehtävä {id="55tlN6aIpXCN"}

``` {id="cfAfchuDh18T" #Plugin1 plugin="mmcq"}
headerText: ''
answerLimit: 4
trueText: 'On'
falseText: 'Ei'
buttonText: 'Tallenna'
stem: 'Onko kyseessä yhtälö?'
choices:
  -
    correct: true
    text: $x+4=0$
    reason: ''
  -
    correct: false
    text: $6$
    reason: 'yhtäsuuruus puuttuu'
  -
    correct: false
    text: $3x+2$
    reason: 'yhtäsuuruus puuttuu'
  -
    correct: true
    text: $x=y$
    reason: ''
```

### Tehtävä {id="ipzHabew8tlk"}

``` {id="8uhu47xBXKl0" #Plugin2 plugin="mmcq"}
headerText: ''
answerLimit: 3
buttonText: 'Tallenna'
trueText: 'On'
falseText: 'Ei'
stem: md:Onko $x=3$ yhtälön juuri?
choices:
  -
    correct: true
    text: md:$5x-10=-2x+11$
    reason: 'vasen puoli: $5\cdot3-10=5$ \ 
    
    oikea puoli: $-2\cdot3+11=5$'
  -
    correct: true
    text: md:$(x-1)^2=(x-2)^2+3$
    reason: 'vasen puoli: $4$ \ 
    
    oikea puoli: $4$'
    
  -
    correct: false
    text: md:$x^2=4+2x$
    reason: 'vasen puoli: $9$ \ 
    
    oikea puoli: $10$'

```

### Tehtävä {id="CMiZ67tyJ5aN"}

Osoita, että $x=1$ on yhtälön $2(2x+1)=3(-4x+4)+6$ ratkaisu. Tee osoitus valitsemallasi 
ohjelmistolla ja palauta alle.

``` {id="BBqQ4rzCd18x" plugin="csPlugin" #Plugin5}
type: upload
```

#- {id="Yj7eo0dnBC8G"}
\
![](/images/189978/kivi.jpg){width=450}

## Ensimmäisen asteen yhtälö: tehtäviä {id="IThJwnN0YIuP"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-3-6#ensimmäisen-asteen-yhtälö).

### Tehtävä {id="tUtOI0JbRDLw"}

``` {id="Lf1NKTHVAhul" #p321 plugin="mmcq"}
headerText: ''
answerLimit: 4
trueText: 'On'
falseText: 'Ei'
buttonText: 'Tallenna'
stem: 'Onko kyseessä ensimmäisen asteen yhtälö?'
choices:
  -
    correct: true
    text: 'md:$4x-1=0$'
    reason: 'md:Yhtälö on muotoa $ax+b=0.$'
  -
    correct: true
    text: 'md:$x=9$'
    reason: 'md:Yhtälö saadaan muotoon $x-9=0$, joten se on muotoa $ax+b=0.$'
  -
    correct: false
    text: 'md:$4+2x=2x-3$'
    reason: 'Yhtälö saadaan muotoon $7=0$, joten se on muotoa $ax+b=0$ vain kun $a=0.$ Se ei siis toteuta ensimmäisen asteen yhtälön määritelmää.'
  -
    correct: true
    text: 'md:$2(1-x)=x-2$'
    reason: 'Yhtälö saadaan muotoon $4x-4=0,$ joten se on muotoa $ax+b=0.$'
```

#- {id="CoTQ2OqCoUXS" area="iuyu" collapse="true"}

**Vihje**

#- {id="Hbo3emOBqVhi"}
Voiko yhtälön esittää muodossa $ax+b=0$, jossa $a\neq0$?

#- {id="e7ozP81jdhVs" area_end="iuyu"}

#- {id="19fyIgaHS6B4"}
\

#- {id="yGCS5pYS8AOj" .huomautus}
Ratkaise tehtävät $3.2.2-3.2.3$ ja $3.2.6-3.2.9$  ilman laskinta.
Kirjoita ratkaisun välivaiheet näkyviin syöttökenttään.

### Tehtävä {id="w5oiSSQuiUe7"}

Ratkaise yhtälöt.

``` {id="DPmb7KHT1I7P" #p325 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:a\) $2x+1=3$'
fullprogram: |!!
equation x=1;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=1
// BYCODEBEGIN
<=> 2x+1=3
// BYCODEEND
!!
```

``` {id="mrrNFvRWMoR5" #p325b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:b\) $5x+2=12$'
fullprogram: |!!
equation x=2;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=2
// BYCODEBEGIN
<=> 5x+2=12
// BYCODEEND
!!
```

``` {id="hLajoI6us4U8" #p325c plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:c\) $4x-3=2x+1$'
fullprogram: |!!
equation x=2;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=2
// BYCODEBEGIN
<=> 4x-3=2x+1
// BYCODEEND
!!
```

### Tehtävä {id="1ryfiXxDsrL7"}

Ratkaise yhtälöt.

``` {id="0a8Gvr91iLCB" #p325d plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:a\) $5x-1=-x+17$'
fullprogram: |!!
equation x=3;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=3
// BYCODEBEGIN
<=> 5x-1=-x+17
// BYCODEEND
!!
```

``` {id="kh0hAV1Xt24E" #p325e plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:b\) $4(x-4)-2x=x+9$'
fullprogram: |!!
equation x=25;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=25
// BYCODEBEGIN
<=> 4(x-4)-2x=x+9
// BYCODEEND
!!
```

``` {id="SX1Z9htHXFc9" #p325f plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:c\) $-2(6+3x)=-4x-5$'
fullprogram: |!!
equation x=-7/2;
ok_text Hienosti meni!

f_nodes 6
hide_expr
only_no_yes_on
x=-7/2
// BYCODEBEGIN
<=> -2(6+3x)=-4x-5
// BYCODEEND
!!
```

#- {id="7sSvsztTLcgz"}
![](/images/189979/kivet.jpg){width=400}

### Tehtävä (s2017/2a) {id="ERiA9sBTurEb"}
Hannele on ratkaissut yhtälön $2(x^2+x+3)=8(x+1)+2x^2$, mutta välivaiheet ovat menneet sekaisin. 
Järjestä välivaiheet niin, että ne muodostavat yhtälön loogisesti etenevän ratkaisun.

A) $-3x=1$
B) $x+3=4(x+1)$
C) $x+3-4-x=4x+4-4-x$
D) $x+3=4x+4$
E) $x^2+x+3=4(x+1)+x^2$
F) $x=-\frac{1}{3}$

``` {id="eJ2tZYMpdXmk" plugin="csPlugin" #plugin6}
type: text
-pointsRule:
    code: 1.0
    expectCode: byCode
wrap: -1
lazy: false
editorModes: 2
header: ""
stem: ''
style-words: "font-size: 0.9em;font-weight: bold;"
#words: true
byCode: |!!
E.
B.
D.
C.
A.
F.
!!
```

### Tehtävä {id="ulNDVOiGTChE"}

``` {id="aJAdIaY05if8" #Plugin4 plugin="mmcq"}
headerText: ''
answerLimit: 4
trueText: 'Tosi'
falseText: 'Epätosi'
buttonText: 'Tallenna'
stem: 'Onko yhtälö identtisesti tosi eli onko sillä äärettömän monta ratkaisua 
vai identtisesti epätosi eli eikö sillä ole yhtään ratkaisua?'
choices:
  -
    correct: false
    text: md:a. $x+5=x$
    reason: 'sievenee muotoon $5=0$'
  -
    correct: true
    text: md:b. $x+5=5+x$
    reason: 'sievenee muotoon $0=0$'
  -
    correct: true
    text: md:c. $6(1-x)+8x=2(x+3)$
    reason: 'sievenee muotoon $0=0$'
  -
    correct: false
    text: md:d. $4(2x+1)+2x-8=5(2x-3)-5$
    reason: 'sievenee muotoon $0=-16$'
```

### Tehtävä {id="1h5NcmnrgPaa"}

``` {id="pHYEU7cbXREo" #p328 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 'md:Millä vakion $a$ arvoilla $x=6$ on yhtälön $3ax^2-6x+18=0$ ratkaisu?'
fullprogram: |!!
equation a=1/6;
ok_text Loistavaa!

f_nodes 5
hide_expr
only_no_yes_on
a=1/6
// BYCODEBEGIN
<=> a=
// BYCODEEND
!!
```

#- {id="EUPmTp34LpOW" area="jui" collapse="true"}
**Vihje**

#- {id="2AVN5Ht9Y0DB"}
Sijoitetaan $x=6$ yhtälöön ja ratkaistaan muuttuja $a$.

\begin{align*} 
3a \cdot 6^2-6\cdot6+18 & = 0  \\
 108a-18 & = 0 \\
 \dots
\end{align*}

#- {id="hFfmwKs2iJ0W" area_end="jui"}

#- {id="rL6EpQ7Eg2gX"}
\
![](/images/189980/pikkukivii.jpg){width=450}

### Tehtävä {id="y3oawcdZIrRJ"}

Ratkaise yhtälöt.

``` {id="n8qLzghCLw6L" #p329a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:a\) $\displaystyle\frac{x-4}{3}=\frac{x+3}{5}$

fullprogram: |!!
equation x=29/2;
ok_text Hienosti meni!

f_nodes 6
hide_expr
only_no_yes_on
x=29/2
// BYCODEBEGIN
<=> (x-4)/3=(x+3)/5
// BYCODEEND
!!
```

``` {id="Y6auWWZHpgqN" #p329b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) $\displaystyle\frac{2x+7}{-x+5}=4$
fullprogram: |!!
equation x=13/6;
ok_text Hienosti meni!

f_nodes 6
hide_expr
only_no_yes_on
x=13/6
// BYCODEBEGIN
<=> (2x+7)/(-x+5)=4
// BYCODEEND
!!
```

### Tehtävä {id="gw2bvVkXfkmH"}

Ratkaise yhtälöt.

#- {id="mgIJDBudn3kq" area="hyi" collapse="true"}

**Vihje**

#- {id="4eF0NAjjyprS"}
a) Lavennetaan termien nimittäjät samannimisiksi 
tai kerrotaan yhtälö puolittain luvulla $8$. Saadaan yhtälö muotoon 

$$8x+4x-2x+x=55$$

b) Lavennetaan termien nimittäjät samannimisiksi 
tai kerrotaan yhtälö puolittain luvulla $6$. Saadaan yhtälö muotoon 

$$4x-9x=30$$

c) Lavennetaan termien nimittäjät samannimisiksi 
tai kerrotaan yhtälö puolittain luvulla $18$. Saadaan yhtälö muotoon 

$$3x-9(x-3)-14=0$$

#- {id="qQru2hFOt2uz" area_end="hyi"}

``` {id="RWXYQ3GTuux0" #p3210a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:a\) $x+\displaystyle\frac{x}{2}-\frac{x}{4}+\frac{x}{8}=55$
fullprogram: |!!
equation x=40;
ok_text Hienosti meni!

f_nodes 3
hide_expr
only_no_yes_on
x=40
// BYCODEBEGIN
<=> x+(x/2)-(x/4)+(x/8)=55
// BYCODEEND
!!
```

``` {id="I0bIi90LdlWp" #p3210b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) $\displaystyle\frac{2x}{3}-\frac{3x}{2}=5$
fullprogram: |!!
equation x=-6;
ok_text Hienosti meni!

f_nodes 4
hide_expr
only_no_yes_on
x=-6
// BYCODEBEGIN
<=> (2x/3)-(3x/2)=5
// BYCODEEND
!!
```

``` {id="EefxmzUc3ZBV" #p3210c plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:c\) $\displaystyle\frac{x}{6}-\frac{x-3}{2}-\frac{7}{9}=0$ (k2012/1b)
fullprogram: |!!
equation x=13/6;
ok_text Hienosti meni!

f_nodes 5
hide_expr
only_no_yes_on
x=13/6
// BYCODEBEGIN
<=>(x/6)-((x-3)/2)-(7/9)=0
// BYCODEEND
!!
```

### Tehtävä {id="S8WabeEfmoMl"}

Millä vakion $a$ arvolla

``` {id="JUvyVOD1a8Kf" #p3211a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:a\) kaikki luvut toteuttavat yhtälön $3(a-3x)=-5a-9x+7$
fullprogram: |!!
equation a=7/8;
ok_text Hienosti meni!

f_nodes 5
hide_expr
only_no_yes_on
a=7/8
// BYCODEBEGIN
<=> a=
// BYCODEEND
!!
```

#- {id="AjfktOaH2o5m" area="poiuy" collapse="true"}

**Vihje**

#- {id="W9LlfdXfqlv7"}
\
Kaikki luvut toteuttavat yhtälön, jos se sievenee muotoon $'0=0'$. Sievennetään
yhtälöä

\begin{align*}
3(a-3x) &=-5x-9x+7\\
3a-9x &=-5a-9x+7\\
3a+5a&=7\\
&\dots
\end{align*}

#- {id="uCS6jzMQAgf7" area_end="poiuy"}

``` {id="HX8gqi9IWLpA" #p3211b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: md:b\) yhtälöllä $2ax-3a=6x-11$ ei ole ratkaisua
fullprogram: |!!
equation a=3;
ok_text Hienosti meni!

f_nodes 5
hide_expr
only_no_yes_on
a=3
// BYCODEBEGIN
<=> a=
// BYCODEEND
!!
```

#- {id="8y9LxeYAcknT" area="plaa" collapse="true"}

**Vihje**

#- {id="xvf3OSzve5GU"}
Yhtälöllä ei ole ratkaisua, jos muuttujan $x$ sisältävä termi sievenee pois.
Siis tulee olla $2ax=6x\dots$

#- {id="Ef6gfgD9kyqQ" area_end="plaa"}

### Tehtävä {id="ECQnLG0vrIUY"}

``` {id="BU0aHtOmJez7" plugin="imagex" #yritystaaaa}
canvasheight:300
buttonText: 'Tallenna'
canvasweight:100
max_tries: 6
stem: 'Seuraavassa yhtälöketjussa on yritetty muodostaa yhtäpitäviä eli ekvivalentteja yhtälöitä.
Vertaamalla yhtälöketjun alkua ja loppua huomataan, että jossain on tehty virhe. Missä?'
background: 
    src: "/images/189726/Screenshot_75.png"
objects: 
  - 
    type: "textbox"
    position: [500, 140]
    id: "virhe"
    pi:
     position: 
        align: "center"
    imgproperties: 
        src: "/static/images/tim-logo_42height.png"
-targets: 
  - 
    id: "target1"
    color: "white"
    snapColor: "green"
    position: [233, 235]
    size: [400, 40]
    points: {virhe: 1.0}
```

#- {id="M6RfOum1ZRtP" area="ftyu" collapse="true"}

**Ratkaisu**

#- {id="N2WGsEL6zB6L"}
\
Rivillä $5$ ($x(x-1)=0$) jaetaan termillä $x-1$. Koska $x=1$, 
viidennellä rivillä siis jaetaan nollalla. Tässä tehdään virhe.

#- {id="snXwM1UewE6Q" area_end="ftyu"}

## Yhtälö sovelluksissa: tehtäviä {id="4sjM9R9tDO9M"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-3-6#yhtälö-sovelluksissa).

### Tehtävä {id="HroEOP02rGge"}

Ratkaise fysiikan kaavat kiihtyvyyttä kuvaavan muuttujan $a$ suhteen.

\
![](/images/189982/speeed.jpg){width=300}

\

a) voima: $F=ma$

``` {id="uTZhpkmMXxax" #p331a plugin="csPlugin"}
{% set equation = 'F/m' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:$a=$'
fullprogram: |!!
ok_text Hienoa! `a=F/m`

f_nodes 5
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
           /
           *
           ^
           ()
           
!!
```

#- {id="OZ76hOPvQWLs"}
b) matka: $s=\displaystyle\frac{1}{2}at^2$

``` {id="zNUJswtDso3b" #p331b plugin="csPlugin"}
{% set equation = '(2s)/t^2' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:$a=$'
fullprogram: |!!
ok_text Hienoa! `a=(2s)/t^2`

f_nodes 7
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
           /
           *
           ^
           ()
           
!!
```

#- {id="Zectic6scFxq"}
c) matka: $s=vt+\displaystyle\frac{1}{2}at^2$

``` {id="n65z9HdYJOQ8" #p331c plugin="csPlugin"}
{% set equation = '(2s-2v*t)/t^2' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:Merkitse tässä myös kertomerkit (*).
$a=$'
fullprogram: |!!
ok_text Hienoa! `a=(2s-2vt)/t^2`

f_nodes 13
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
           /
           *
           ^
           ()
           
!!
```

#- {id="64Bn1iQIMW5P" area="åp" collapse="true"}

**Vihje**

#- {id="3nl0lnFCZVjn"}
b) \begin{align*}
s&=\frac{1}{2}at^2 \;\;\;\;\;|\cdot2\\
2s&=at^2s\\
&\dots
\end{align*}

\

c) \begin{align*}
s&=v_0t+\frac{1}{2}at^2 \;\;\;\;\; |-v_0t\\
s-v_0t&=\frac{1}{2}at^2 \\
&\dots
\end{align*}

#- {id="pmiLRpJjbWbZ" area_end="åp"}

### Tehtävä {id="FwCBsj3TkZBk"}

Grillibileisiin kaikille vieraille varataan $1$ maissi, $2$ kanapihviä ja $3$ makkaraa.
Yhteensä ruokatarvikkeita on $180$. 

\
![](/images/189983/grill.jpg){width=400}

``` {id="Wri7D73iynqW" #p332 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:Montako vierasta grillibileisiin on tulossa?

fullprogram: |!!
arithmetic
ok_text Oikein! Kun merkitään vieraita muuttujalla `x`, saadaan yhtälö `x+2x+3x=180`. 

f_nodes 1
hide_expr
only_no_yes_on
30
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="wuYbHS6WhbdQ"}

Perheenjäsenten ikien summa on $148$ vuotta. Isosisko on $6$ vuotta vanhempi kuin pikkuveljensä. Perheen äiti on iältään kaksi kertaa
niin paljon kuin isosisko. Perheen isä on $4$ vuotta vanhempi kuin äiti. Kuinka vanha kukin on?

``` {id="FYTfviViEzPM" #p333a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:a\) Isosisko

fullprogram: |!!
arithmetic
ok_text Oikein! Vihjeen yhtälöstä saadaan `x=25`.

f_nodes 1
hide_expr
only_no_yes_on
25
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="AaOBb9NP0C4P" #333c plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:b\) Pikkuveli

fullprogram: |!!
arithmetic
ok_text Oikein! Vihjeen perusteella saadaan `25-6=19`. 

f_nodes 1
hide_expr
only_no_yes_on
19
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="AcrHWb5POGhd" #p333c plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:c\) Äiti

fullprogram: |!!
arithmetic
ok_text Oikein! Vihjeen perusteella saadaan `2*25=50`. 

f_nodes 1
hide_expr
only_no_yes_on
50
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="yqUEBaEQ3Ik6" #333d plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:d\) Isä

fullprogram: |!!
arithmetic
ok_text Oikein! Vihjeen perusteella saadaan `2*25+4=54`. 

f_nodes 1
hide_expr
only_no_yes_on
54
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="xKcmk7Gl3aTY" area="koi" collapse="true"}

**Vihje**

#- {id="ATrZ6FbdOJzd"}
Olkoon $x=\text{'isosiskon ikä (vuotta)'}$. Tällöin saadaan lausekkeet kunkin iälle:

Veljen ikä: $x-6$ 
\
Äidin ikä: $2x$
\
Isän ikä: $2x+4$
\

Näiden summan tulaa olla $148$, joten saadaan yhtälö:

$$
x + x-6 + 2x + 2x+4  = 148 
$$

#- {id="YHoBsPLI2Bwm" area_end="koi"}

### Tehtävä {id="UamSdjjsWEx5"}

League of Legends videopelissä erittäin keskeinen osa pelin voittamista on vastustajan mestarin vahingoittaminen,
jota kuvaa yhtälö

$$V=kt,$$

missä $V$ on mestariin tehty vahingon määrä, $k$ vahinkokerroin ja $t$ on taitokerroin. 

Pelissä on myös mahdollista suojautua vahingolta ostamalla suojuksia, joita kuvaa yhtälö

$$100k+kS=100,$$

missä $k$ on vahinkokerroin ja $S$ on vastustajan mestarin suojauksen arvo.

``` {id="movi9xCK174y" #vahinkokerroin1 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: 'md:Mestaria vahingoitetaan taidolla, joka tekee vahinkoa $V=90$ ja 
jonka taitokerroin $t=270$. Mikä on mestarin suojauksen arvo $S$?'
fullprogram: |!!
arithmetic
ok_text Hyvä! Vihjeen yhtälöstä saadaan ratkaistua vahinkokerroin `k=V/t=90/270=1/3`. 
Ratkaistaan toinen yhtälö muuttujan `S` suhteen ja sijoitetaan `k` ratkaistuun yhtälöön,
niin saadaan `S=\frac{100-100k}{k}=\frac{100-100\cdot 1/3}{1\3}=200`.

f_nodes 1
hide_expr
only_no_yes_on
200
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="vvizsFGqp7zY" area="ekavihjeR" collapse="true"}
**Vihje**

#- {id="VaDU3PnBerbl"}
Ratkaise ensin vahinkokerroin $k$ yhtälöstä $V=kt$. Tämän jälkeen ratkaise suojauksen arvo $S$ yhtälöstä $100k+kS=100$.

#- {id="Xu0hVcMwkXvE" area_end="ekavihjeR"}

### Tehtävä {id="nSbgy3fv7iua"}

Elmeri tankkaa aina viikonloppuisin mopoautonsa tankkiin sen verran polttoainetta 
mitä viikkorahoilla sen hetkisellä hintatasolla saa.
Tällä viikolla polttoaineen litrahinta oli laskenut $22$ senttiä, minkä vuoksi 
Elmeri sai tankattua viime viikon $13$ litran sijaan $15$ litraa. 
Elmeri sai saman verran viikkorahaa kuin viime viikollakin.

\
![](/images/189984/bensa4.jpg){width=400}

``` {id="rHQlJMfnU7PM" #seq334 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:Mikä on polttoaineen tämän viikon litrahinta (€)?

fullprogram: |!!
arithmetic
ok_text Hyvä! Vihjeen yhtälöstä saadaan ratkaistua `x=1.43`.

f_nodes 1
hide_expr
only_no_yes_on
1.43
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="zKj0Z2pNQBak" area="poi" collapse="true"}

**Vihje**

#- {id="GzN7WpuiU5yS"}
Olkoon $x=\text{'Polttoineen tämän viikon litrahinta (€/l)'}$. Tällöin voidaan muodostaa lausekkeet Elmerin viikkorahoista:

Tällä viikolla: $15x$
\
Viime viikolla: $13(x+0,22)$
\

Muodostetaan yhtälö, kun tiedetään, että Elmerin viikkorahan suuruus säilyy:

$$ 15x = 13(x+0,22) $$

#- {id="SAw2QXPI3D1S" area_end="poi"}

### Tehtävä {id="Z0CjbtjXjucD"}



Klassisessa voimanostossa on tapana verrata eri painoluokkien tuloksia niin sanotun Wilks-tuloksen avulla. Wilks tulos
voidaan laskea kaavalla 

$$W=ky,$$

missä $k$ on Wilks-kerroin ja $y$ on nostajan yhteistulos (penkkipunnerrus+kyykky+maastaveto) kilogrammoina. Kerroin $k$ saadaan kaavasta

$$k=\dfrac{500}{a+bx+cx^2+dx^3+ex^4+fx^5}.$$

\
Parametrit (miesten) $a-f$ saadaan seuraavasta taulukosta:


 parametri   arvo 
-----------  --------  
a            $-216,0475$
b            $16,2606339$
c            $-0,002388645$
d            $-0,00113732$
e            $7,01863\cdot 10^{-6}$
f            $-1,291\cdot 10^{-8}$ 

Voimanostajan Wilks-tulos opiskelijoiden voimanoston avoimessa sarjassa oli $W=414$ ja massa $x=100\;\text{(kg)}$.

\

![Lähde: J. Asikainen](/images/190057/turpeinenvoimailu.png){width=400}

``` {id="EB2z4ogjjHMi" #voimanostajatoka plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: md:Mikä on voimanostajan yhteistulos kymmenen kilon tarkkuudella?

fullprogram: |!!
arithmetic
ok_text Hyvä! Sijoittamalla taulukon arvot vihjeen Wilks-kertoimen kaavaan saadaan `k=0,608220530`. Ratkaistaan yhteistulos `y` ensimmäisestä yhtälöstä ja sijoitetaan `k` ja `W`, niin saadaan `y=\frac{W}{k}=\frac{414}{0,608220530}\approx 680` (kg)

f_nodes 1
hide_expr
only_no_yes_on
680
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="fKAn8LjBLDwQ" area="VoimanostovihjeR" collapse="true"}
**Vihje**

#- {id="vWsiAwwgSN6b"}
Ratkaise ensin $k$ sijoittamalla yhtälöön $$k=\dfrac{500}{a+bx+cx^2+dx^3+ex^4+fx^5}$$ taulukon arvot $a-f$ sekä voimanostajan massa $x$.

Tämän jälkeen ratkaistaan $y$ yhtälöstä $W=ky$ ja voidaan sijoittaa $k$ ja $W$ ratkaistuun yhtälöön $y=...$

#- {id="fkBztvNCOWz8" area_end="VoimanostovihjeR"}

### Tehtävä {id="r8t4hnlRWI9G"}

Lil Pumpin kappaleessa *Gucci gang* toistetaan sanoja *gucci gang* ja *ooh* monia kertoja. Yhteensä kappaleen aikana toistetuissa
*gucci*, *gang* ja *ooh* sanoissa on $513$ kirjainta. Sanaparia *gucci gang* 
sanotaan $6$-kertainen määrä verrattuna sanaan *ooh*. Kuinka monta kertaa kappaleessa
sanotaan nämä sanat?

![[Lähde: Genius](https://genius.com/Lil-pump-gucci-gang-lyrics)](/images/189985/lilpump.jpg){width=400}

``` {id="g9K8n3n0TThZ" #seq335a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: Gucci gang

fullprogram: |!!
arithmetic
ok_text Jep! Aika monta!

f_nodes 1
hide_expr
only_no_yes_on
54
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="5z17Iojnzn9y" #seq335b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: Ooh
fullprogram: |!!
arithmetic
ok_text Jep! Ei ihan niin monta!

f_nodes 1
hide_expr
only_no_yes_on
9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="LLMPh1vwHmEf" area="lil" collapse="true"}
**Vihje**

#- {id="GNhzuup9Xv4O"}
Merkitään muuttujalla $x$ kappaleesta löytyvien *ooh*-sanojen määrää. Tällöin
*gucci gang*-sanaparia toistuu kappaleessa $6x$ kertaa. Tiedetään, että sanoissa
*gucci gang* on $9$ kirjainta, sanassa $ooh$ $3$ kirjainta ja kaikissa sanoissa
on yhteensä $513$ kirjainta, joten voidaan muodostaa yhtälö.

$$ 3x+9\cdot6x=513 $$

#- {id="BM7dr4XYzS0N" area_end="lil"}

## Yhtälöpari: tehtäviä {id="pQtEH8OGu6FA"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-yhtalot-3-6#yhtälöpari).

#- {id="DZwag6VfwGFQ" .huomautus}
Ratkaise tehtävät $3.4.1-3.4.4$ ilman laskinta. Jos yhtälöparilla ei ole ratkaisua, 
vastaa syöttökenttiin $x=$ ja $y=$ tilalle $\text{FF}$. 
Hahmottele halutessasi vastaukset
Abitti-editorilla, joka löytyy tehtävien alta.

### Tehtävä {id="005ctXt4L8HJ"}

Ratkaise yhtälöparit

a) \begin{cases}
4x-3y=9\\
x+3y=6
\end{cases}

``` {id="MAYpvEKulbw2" #p341a1 plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: 
fullprogram: |!!
equation x=3;
ok_text Oikein!

f_nodes 3
hide_expr
only_no_yes_on
x=3
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="wDr7BJZaid1u" #p341a2 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation y=1;
ok_text Oikein!

f_nodes 3
hide_expr
only_no_yes_on
y=1
// BYCODEBEGIN
<=> y=
// BYCODEEND
!!
```

#- {id="HSSIPDXC3ceL"}
b) \begin{cases}
x-2y=-1\\
x+3y=2
\end{cases}

``` {id="XZqaXDe4KQR2" #p341b1 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation x=1/5;
ok_text Oikein!

f_nodes 5
hide_expr
only_no_yes_on
x=1/5
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="CqOCAVExD9XV" #p341b2 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation y=3/5;
ok_text Oikein!

f_nodes 5
hide_expr
only_no_yes_on
y=3/5
// BYCODEBEGIN
<=> y=
// BYCODEEND
!!
```

#- {id="5wKin6UPgP0K" area="abitti1" collapse="true"}

**Abitti-editori**

#- {id="4zKRkFUpNNUh" rd="186926" rp="92iSNuzlQPWk"}

#- {id="G1J4tkszP6yy" area_end="abitti1"}

### Tehtävä {id="i2tussApcKo9"}

a) \begin{cases}
7x-2y=25\\
2x-y=8
\end{cases}

``` {id="bLXnhsirz7jK" #p342a1 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation x=3;
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
x=3
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="NEjZmLGOt1PX" #p341b3 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation y=-2;
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
y=-2
// BYCODEBEGIN
<=> y=
// BYCODEEND
!!
```

#- {id="RZLn5toyayf7"}
b) \begin{cases}
2a+3b=8\\
6a+2b=-4
\end{cases}

``` {id="40zzZzX76jAY" #p342b1 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation a=-2;
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
a=-2
// BYCODEBEGIN
<=> a=
// BYCODEEND
!!
```

``` {id="9GWUOji1QkYO" #p342b2 plugin="csPlugin"}
type: mathcheck
showCodeOn:
isHtml: true
stem: 
fullprogram: |!!
equation b=4;
ok_text Oikein!

f_nodes 4
hide_expr
only_no_yes_on
b=4
// BYCODEBEGIN
<=> b=
// BYCODEEND
!!
```

#- {id="wxpknMWlhpqN" area="abtti2" collapse="true"}

**Abitti-editori**

``` {id="92iSNuzlQPWk" plugin="csPlugin" #Plugin3}
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

#- {id="HqmQT0oO7iCy" area_end="abtti2"}

#- {id="N7sWUiwq6lH0"}
![](/images/189986/kivei.jpg){width=500}

### Tehtävä {id="eFNEJ6KcIuMZ"}

Määritä kuvan perusteella yhtälöparin ratkaisu.

a)

![](/images/188859/Screenshot_58.png){width=400}

``` {id="sATlgKq3GAa0" #434a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '1'
placeholder: "x"
stem: 'md:$x=$'
```

``` {id="gReTgkEdxeIf" #434b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '5'
placeholder: "y"
stem: 'md:$y=$'
```

#- {id="qaDgNJfNsFYp"}
b)

![](/images/188861/Screenshot_60.png){width=400}

``` {id="s7wPSIjXyD88" #434b2 plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '3'
placeholder: "x"
stem: 'md:$x=$'
```

``` {id="1Xo9B3gz2pML" #434c plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '2'
placeholder: "y"
stem: 'md:$y=$'
```

#- {id="jdSdx42Q70Ls"}
c) 

![](/images/188860/Screenshot_59.png){width=400}

\

``` {id="CpxLOpWaUbH8" #p343c plugin="csPlugin"}
type: text
highlight:
placeholder: ""
stem: "Perustele sanallisesti, miksi yhtälöparilla ei ole ratkaisua."
button: Tallenna
rows: 2
```

### Tehtävä {id="qGjv4KD5xKfS"}

Ratkaise yhtälöparit.

a) \begin{cases}
32x+8y-64=0 \\
5y=-20x+40
\end{cases}

``` {id="A2SB7FzjJVHo" #seq244a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
showCodeOn: 
isHtml: true
stem: ' '
fullprogram: |!!
equation x=0 ends
ok_text Hyvä!

hide_expr
x=0
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="f4VPeSIA4SMV" #seq244b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
isHtml: true
stem: ' '
fullprogram: |!!
equation y=8 ends
ok_text Hyvä!

hide_expr
y=8
// BYCODEBEGIN
<=> y=
// BYCODEEND
!!
```

#- {id="zj9ZuYxVSQ2J"}
b) \begin{cases}
4x=3y+1 \\
\frac{1}{3}x=\frac{1}{4}y+1
\end{cases}

``` {id="j9BJSl2zsk96" #seq244c plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
showCodeOn: 
isHtml: true
stem: ' '
fullprogram: |!!
equation x FF ends
ok_text Näin on! Yhtälöparilla ei ole ratkaisua.

hide_expr
FF
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="DwC5vfcQcMSy" #seq244d plugin="csPlugin"}
type: mathcheck
-pointsRule:        # tämän alle säännöt miten pisteitä saa
    expectOutput: ".*" # 
showCodeOn: 
isHtml: true
stem: ' '
fullprogram: |!!
equation x FF ends
ok_text Näin on! Yhtälöparilla ei ole ratkaisua.

hide_expr
FF
// BYCODEBEGIN
<=> y=
// BYCODEEND
!!
```

### Tehtävä {id="TX86kMC1Kfc9"}

Ratkaise yhtälöpari 

\begin{cases}
2x+y=11 \\
3y-4x=3
\end{cases}

graafisesti Geogebralla ja syötä vastaukset alapuolella oleviin vastauskenttiin.

``` {id="bEJzVOjO2L9O" plugin="showVideo"}
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

``` {id="YxuufQIzx7Dl" plugin="showVideo"}
iframe: true
open: true
videoicon: false
hidetext: Piilota GeoGebra
type: small
videoname: ""
width: 600
height: 500
file: "https://www.geogebra.org/classic"
```

``` {id="M5Zc1gdULxxu" #435a plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '3'
placeholder: "x"
stem: 'md:$x=$'
```

``` {id="oZJVTosFru1L" #435b plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '5'
placeholder: "y"
stem: 'md:$y=$'
```

### Tehtävä {id="q8HPSxzPzW2t"}

``` {id="giX9CLDw1pY1" #PLUGINN plugin="mcq"}
answerLimit: 2
buttonText: 'Tallenna'
headerText: ''
stem: 'md:Jussi kävi eläintarhassa ja näki strutseja ja seeproja. 
Jussi näki yhteensä $17$ päätä ja $60$ jalkaa. Onko mahdollista, että Jussi näki yli 5 strutsia?'
choices:
  -
    correct: false
    text: 'Kyllä'
    reason: ''
  -
    correct: true
    text: 'Ei'
    reason: 'Vihjeen yhtälöparin ratkaisuksi saadaan $x=4$ ja $y=13,$ joten Jussi näki $4$ strutsia.'
    
```

#- {id="1SLFpF895xwk"}
\
![](/images/189987/strutsit.jpg){width=450}

#- {id="3L7JUcduiFWb" area="stru" collapse="true"}

**Vihje**

#- {id="igVHL4cqJlgW"}
Merkitään muuttujalla $x$ strutseja ja muuttujalla $y$ seeproja.
Yhtälöpariksi saadaan

\begin{cases}
x+y=17 \\
2x+4y=60
\end{cases}

#- {id="eu1rfTD1UaTd" area_end="stru"}

### Tehtävä {id="RfopsfZ8pG7V"}

Jalkapallopelin lipputulot olivat $19700\;\text{€}$, kun aikuisten lippu maksoi $9\;\text{€}$
ja lasten lippu $5\;\text{€}$. Kävijöitä oli yhteensä $2500$. Muodosta yhtälöpari ja laske,
kuinka monta aikuista ja lasta tapahtumassa kävi?

``` {id="jh5BkWCPmYs9" #seq347a plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: Aikuiset
fullprogram: |!!
arithmetic
ok_text Juuri näin!

f_nodes 1
hide_expr
only_no_yes_on
1800
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="XwjccVDCbsGr" #seq347b plugin="csPlugin"}
type: mathcheck
showCodeOn:
-pointsRule: {}
isHtml: true
stem: Lapset
fullprogram: |!!
arithmetic
ok_text Juuri näin!

f_nodes 1
hide_expr
only_no_yes_on
700
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="AKErIk8U0CXX" area="olo" collapse="true"}

**Vihje**

#- {id="gQQhiMmyPU9f"}
Merkitään muuttujalla $x$ aikusia ja muuttujalla $y$ lapsia. Tiedetään, että kävijöitä 
oli $2500$, joten tästä saadaan ensimmäinen yhtälö $x+y=2500$. Lisäksi tiedetään, että 
lipputulot olivat $19700\;\text{€}$, joten tästä saadaan toinen yhtälö $9x+5y=19700$.
Ratkaistava yhtälöpari on siis

\begin{cases}
x+y=2500\\
9x+5y=19700
\end{cases}

#- {id="RDjuwfl1JJ8a" area_end="olo"}

### Tehtävä {id="UIhbTFWoM50r"}

#- {id="iZAXWAARN1xc"}
SM-liigan runkosarjassa kaudella $2018-2019$ pelattiin $60$ ottelua. 
Voitetusta ottelusta joukkue saa kolme pistettä 
ja tasapelistä yhden pisteen. Tapparalla oli runkosarjan jälkeen pisteitä $105$. Tappara 
hävisi runkosarjan aikana $19$ ottelua. 

![[Lähde: Tappara.fi](https://www.tappara.fi/liiga/)](/images/189043/Tappara.png){width=150}

``` {id="tmIG6I9fiOpZ" #seq348 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
showCodeOn:
isHtml: true
stem: md:Montako tasapeliä Tappara pelasi?

fullprogram: |!!
arithmetic
ok_text Oikein!

f_nodes 2
hide_expr
only_no_yes_on
9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="SUyIA1qy1nbe" area="tap" collapse="true"}

**Vihje**

#- {id="g2ERq0JjzBt3"}
\
Merkitään voitettuja pelejä muuttujalla $x$ ja tasapelejä muuttujalla $y$.

Voitettuja pelejä ja tasapelejä oli yhteensä $60-19=41$, joten 
ensimmäinen yhtälö on $x+y=41.$ Pisteitä joukkue sai $105$, joten toinen yhtälö on 
$3x+y=105.$

#- {id="wcgM4SyNh4DJ" area_end="tap"}

### *Tehtävä {id="pJ6rBp0K1BU4"}

Yhtälöryhmäksi kutsutaan ryhmää, jossa tarkasteltavia yhtälöitä on enemmän kuin kaksi. 
Vastaavasti kuin yhtälöparinkin tapauksessa, tulee yhtälöryhmän kohdalla varmistaa, 
että yksittäisen yhtälön toteuttava ratkaisu toteuttaa kaikki ryhmän yhtälöt.
Ratkaise yhtälöryhmä

\begin{cases}
y+x=5 \\
y=\dfrac{1}{3}x+1 \\
y+4=2x
\end{cases}

a) algebrallisesti

#- {id="7pd63V1vU5E8" area="Vihjeyhtaloryhmaeka" collapse="true"}
**Vihje**

#- {id="POXbVV5B6Oev"}
Ratkaise yhtälöpari

\begin{cases}
y+x=5 \\
y=\dfrac{1}{3}x+1
\end{cases}

ja tutki toteuttaako ratkaisu yhtälöryhmän alimman yhtälön $y+4=2x$. Jos toteuttaa, niin kyseessä on yhtälöryhmän ratkaisu.

#- {id="mStqlQl8M218" area_end="Vihjeyhtaloryhmaeka"}

#- {id="wstG2hFN9DWF" area="Yhtaloryhmaekajokeriratkaisu" collapse="true"}
**Ratkaisu**

#- {id="YDctALuPFEle"}
Yhtälöparin \begin{cases}
y+x=5 \\
y=\dfrac{1}{3}x+1
\end{cases}

ratkaisuksi saadaan $x=3$ ja $y=2$. Sijoitetaan piste $(x,y)=(3,2)$ alimpaan yhtälöön, jolloin

\begin{align*}
y+4&=2x && |x=3, y=2 \\
2+4&=2\cdot3 \\
6&=6 \\
&\text{tosi}
\end{align*}

Näin ollen yhtälöryhmän
\begin{cases}
y+x=5 \\
y=\dfrac{1}{3}x+1\\
y+4=2x
\end{cases}

ratkaisu on $x=3$ ja $y=2$.

#- {id="fabyvvMVkp2n" area_end="Yhtaloryhmaekajokeriratkaisu"}

#- {id="aEOuOvjnzBSn"}
b) graafisesti

#- {id="UjENzODe6bir" area="Yhtaloryhmaekajokeribratkaisu" collapse="true"}
**Ratkaisu**

#- {id="pbvLPC89ZfgS"}
![](/images/190065/Yhtaloryhmaekajokerigraafinen.png)

Punainen suora on $y+x=5$, musta suora $\dfrac{1}{3}x+1$ ja vihreä suora $y+4=2x$. Suorat leikkaavat kuvan perusteella 
pisteessä $(x,y)=(3,2)$.

#- {id="ADtxb1wSDOwn" area_end="Yhtaloryhmaekajokeribratkaisu"}

#- {id="AAO60nnTasEu"}

``` {id="EsPj4lhOgpnP" #yhtaloryhma1jokerix plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '3'
placeholder: "x"
stem: 'md:$x=$'
```

``` {id="AloV6Zbe05cA" #yhtaloryhma1jokeriy plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '2'
placeholder: "y"
stem: 'md:$y=$'
```

### *Tehtävä {id="2SKRxRJQOVV9"}

Ratkaise kolmen muuttujan yhtälöryhmä

\begin{cases}
-x+y+2z=-5 \\
2x-y-z=3 \\
3x+2y+z=4
\end{cases}

``` {id="Z4jvtXoHAfu8" #yhtaloryhma2jokerix plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '1'
placeholder: "x"
stem: 'md:$x=$'
```

``` {id="bjzXoNTPaJ8N" #yhtaloryhma2jokeriy plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '2'
placeholder: "y"
stem: 'md:$y=$'
```

``` {id="tXbpesFwewlY" #yhtaloryhma2jokeriz plugin="csPlugin"}
type: text/tiny
-pointsRule:
    expectCode: '-3'
placeholder: "z"
stem: 'md:$z=$'
```

#- {id="SV0jt5A0mVZg" area="Yhtaloryhmatokajokeri" collapse="true"}
**Vihje**

#- {id="hxmR2DZvWYF2"}
\begin{cases}
\textcolor{red}{-x+y+2z=-5} && \textcolor{red}{1. \text{yhtälö}} \\
\textcolor{green}{2x-y-z=3} && \textcolor{green}{2. \text{yhtälö}} \\
\textcolor{blue}{3x+2y+z=4} && \textcolor{blue}{3. \text{yhtälö}}
\end{cases}

- Ratkaistaan  3.yhtälöstä $z$, eli sievennetään $z$ vasemmalle ja muut termit yhtälön oikealle puolelle.

- Tämän jälkeen sijoitetaan ratkaistu $z$ $1$. ja $2.$ yhtälöön, jolloin saamme kahden muuttujan yhtälöparin, josta voimme ratkaista $x$:n ja $y$:n.

- Kyseisten $x$:n ja $y$:n arvojen tulee nyt toteuttaa myös  $3$. yhtälö, joten sijoittamalla nämä arvot  $3$. yhtälöön saamme lopulta myös $z$:n ratkaistua. 

- Tuloksen voi vielä tarkistaa sijoittamalla ratkaistut $x$, $y$ ja $z$ jokaiseen yhtälöryhmän yhtälöön ja toteamalla, että yhtälöistä tulee identtisesti todet!

#- {id="zDxr46Q2rdff" area_end="Yhtaloryhmatokajokeri"}

#- {id="RY97lHhdQCb9" area="Yhtaloryhmatokajokeriratkaisu" collapse="true"}
**Ratkaisu**

#- {id="EnYsgblTFL8m"}
Ratkaistaan ensin yhtälöryhmän $3.$ yhtälö muuttujan $z$ suhteen.

\begin{align*}
3x+2y+z=4 \\
z=-3x-2y+4
\end{align*}

Tämän jälkeen voidaan sijoittaa ratkaistussa muodossa oleva $z$ kahteen yhtälöpariin, jonka muodostavat yhtälöt $1.$ ja $2.$

\begin{cases}
-x+y+2z=-5 && |z=-3x-2y+4\\ 
2x-y-z=3   && |z=-3x-2y+4
\end{cases}

\begin{cases}
-x+y+2(-3x-2y+4)=-5 \\
2x-y-(-3x-2y+4)=3   
\end{cases}

\begin{cases}
-7x-3y=-13 \\
5x+y=7 && |\cdot 3   
\end{cases}

\begin{cases}
-7x-3y=-13 \\
15x+3y=21 &&  |\text{lasketaan yhteen}
\end{cases}

\begin{align*}
8x=8\\
x=1
\end{align*}

Sijoitetaan ratkaistu $x$ yhtälöparin ylempään yhtälöön.

\begin{align*}
-7x-3y=-13 && |x=1 \\
-7-3y=-13 \\
y=2
\end{align*}

Sijoitetaan $x=1$ ja $y=2$ muuttujan $z$ suhteen ratkaistussa muodossa olevaan yhtälöön.

\begin{align*}
z=-3x-2y+4 && |x=1, y=2 \\
z=-3-4+4=-3
\end{align*}

Näin ollen $(x,y,z)=(1,2,-3)$ on yhtälöryhmän ratkaisu. Ratkaisun voi vielä tarkistaa sijoittamalla pisteen $(1,2,-3)$ 
alkuperäiseen yhtälöryhmään.

\begin{cases}
-x+y+2z=-5 &&|x=1,y=2,z=-3 \\
2x-y-z=3  &&|x=1,y=2,z=-3 \\
3x+2y+z=4 &&|x=1,y=2,z=-3 
\end{cases}

\begin{cases}
-1+2-6=-5\\
2-2+3=3  \\
3+4-3=4 
\end{cases}

\begin{cases}
-5=-5\\
3=3  \\
4=4 \\
\text{tosi}
\end{cases}



Vastaus: $x=1$, $y=2$ ja $z=-3$

Geometrisesti tämä tarkoittaa yhtälöryhmän yhtälöiden leikkauspistettä. 
Kyseiset yhtälöt voidaan tulkita kolmiulotteisen avaruuden tasoina. 
Eli ratkaisu voidaan tulkita näiden tasojen leikkauspisteenä. 
Aiheeseen palataan lukion pitkän matematiikan vektorit -kurssilla, 
joten ei kannata todellakaan murehtia jos oheisen kuvan merkitys ei nyt aukea!

![](/images/190070/tasojenleikkaus.png)

#- {id="7fUauXCWrOJm" area_end="Yhtaloryhmatokajokeriratkaisu"}

#- {id="rtUiSN0aEFil" area_end="sisalto"}
