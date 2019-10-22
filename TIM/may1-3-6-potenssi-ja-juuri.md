``` {id="pdaplB6I2IaZ" settings=""}
example:
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
texmacros: 
  texfontsize: 12pt
  texauthorname: 'Juulia Auvinen ja Robin Hamdi'
  texlanguage: 'finnish'
  texpaper: 'a4paper'
  texdocumentclass: 'extbook'
  texside: 'oneside'
  textitle: 'Potenssi ja juuri: tehtäviä'
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

#- {id="a1dGpcQR6vlF" area="sisalto"}

# Potenssi ja juuri {id="Tm8U3NHbtCFo"}

Tällä sivulla on tehtäviä, jotka liittyvät kappaleeseen 
[Potenssi ja juuri](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-potenssi-ja-juuri-teoria-5-6).
Tehtävät on ryhmitelty samojen otsikoiden alle kuin aiemmin mainitussa kappaleessakin.

## Potenssi {id="Bm2ou3VAVpC6"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-potenssi-ja-juuri-teoria-5-6#potenssi).

### Tehtävä {id="7gMT7gQqF5pi"}

``` {id="1zMvqWVmmFpd" #Plugin1 plugin="mmcq"}
headerText: ''
answerLimit: 4
buttonText: 'Tallenna'
trueText: 'Tosi'
falseText: 'Epätosi'
stem: 'Tosi vai epätosi?'
choices:
  -
    correct: false
    text: 'md:$2^3=9$'
    reason: '$2^3=2\cdot2\cdot2=8$'
  -
    correct: false
    text: 'md:$-6^2 = 36$ '
    reason: '$−6^2=-(6\cdot6)=-36$'
  -
    correct: false
    text: 'md:$5^1=1$'
    reason: '$a^1=a$'
  -
    correct: true
    text: 'md:$(−3)^2=9$'
    reason: '$(−3)^2=(-3)\cdot(-3)=9$ (parillinen potenssi)'
```

### Tehtävä {id="ZZbgYNdXHW7N"}

#- {id="SJMAD7onWxpG"}
Laske ilman laskinta.

``` {id="HGhI0bX2Jc7H" #seq9_3 plugin="csPlugin"}
{% set equation = '-16' %}
type: mathcheck
-pointsRule: {}
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
showCodeOn: 
isHtml: true
stem: 'md:a\) $-2^4$ '
fullprogram: |!!
ok_text Hienoa!

f_nodes 2
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
``
```

``` {id="CK7oEx6acSdz" #seq9_4 plugin="csPlugin"}
{% set equation = '16' %}
type: mathcheck
-pointsRule: {}
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
showCodeOn: 
isHtml: true
stem: 'md:b\) $(-2)^4$ '
fullprogram: |!!
ok_text Hienoa!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
``
```

``` {id="VeeAyd4awZiI" #seq9_5 plugin="csPlugin"}
{% set equation = '0' %}
type: mathcheck
-pointsRule: {}
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
showCodeOn: 
isHtml: true
stem: 'md:c\) $0^{987}$ '
fullprogram: |!!
ok_text Hienoa!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
``
```

``` {id="bQh5RCkYBk1H" #seq9_6 plugin="csPlugin"}
{% set equation = '-1' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) $(-1)^{501}$ '
fullprogram: |!!
ok_text Hienoa! Negatiivisen kantaluvun eksponentti on pariton, joten potenssin arvo on negatiivinen.

f_nodes 2
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
``
```

### Tehtävä {id="BvXI0WtwEDwm"}

Laske ilman laskinta.

``` {id="HcO2eSpLiROQ" #seq10_1 plugin="csPlugin"}
{% set equation = '16' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) Luvun $4$ neliö '
fullprogram: |!!
ok_text Oikein! `4^2=16`

f_nodes 1
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
``
```

``` {id="I34ae35KUjJh" #seq10_2 plugin="csPlugin"}
{% set equation = '16' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) Luvun $-4$ neliö '
fullprogram: |!!
ok_text Oikein! `(-4)^2=16`

f_nodes 1
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
``
```

``` {id="ramIX8KDrAOl" #seq10_3 plugin="csPlugin"}
{% set equation = '64' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) Luvun $4$ kuutio '
fullprogram: |!!
ok_text Oikein! `4^3=64`

f_nodes 1
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
``
```

``` {id="ouXfX3GXeuiP" #seq10_4 plugin="csPlugin"}
{% set equation = '-64' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) Luvun $-4$ kuutio '
fullprogram: |!!
ok_text Oikein! `(-4)^3=-64`

f_nodes 2
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
``
```

### Tehtävä {id="BrN0jyMnUlbd"}

Eskon synnyttyä hänen vanhempansa tallettivat $5000$ euroa säästötilille, 
jonka vuotuinen korko on $3,5\;\%$.

``` {id="5maGGayfhl7w" #seq2_2 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: md:Kuinka paljon Esko saa pankilta rahaa, jos hän päättää tyhjentää tilinsä $18$ vuotiaana? Anna vastaus sentin tarkkuudella.
fullprogram: |!!
arithmetic
ok_text Hyvä! Kuten esimerkissä 5.1.3 tilin arvo `18` vuoden jälkeen on `1,035^{18}\cdot5000.`

f_nodes 1
hide_expr
only_no_yes_on
9287.45
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="VmTb7rWYBNyh"}
**Vihje:** Esimerkki 5.1.3

#- {id="jx3LnWzy0Rfj"}
![](/images/189937/rahei.jpg){width=450}

### Tehtävä {id="S5XrxcPDxo1P"}

Laske ilman laskinta.

``` {id="hNUOG1pjvh82" #seq10_5 plugin="csPlugin"}
{% set equation = '3' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $2^2-1^2$  '
fullprogram: |!!
ok_text Oikein!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="tKm8lHGSAvbS" #seq10_6 plugin="csPlugin"}
{% set equation = '7' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $4^2-3^2$  '
fullprogram: |!!
ok_text Oikein!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="CDUaTIDNQzPL" #seq10_7 plugin="csPlugin"}
{% set equation = '15' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $8^2-7^2$  '
fullprogram: |!!
ok_text Oikein!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="Nc80uHyIPD46"}
Mitä havaitset? Miten voit laskea ilman laskinta $1000^2-999^2$?

``` {id="XSmmmAetlRhS" #p515d plugin="csPlugin"}
type: text
button: Tallenna
rows: 3
placeholder: ''
stem: 'Vastaa sanallisesti.'
```

#- {id="7I5fFfmNgeLl" area="v515" collapse="true"}

**Ratkaisu**

#- {id="KfreHoxwYJiA"}
\
Perättäisten lukujen neliöiden erotus on yhtä suuri kuin samojen lukujen summa, joten 
$1000^2-999^2 = 1000 + 999 = 1999.$

#- {id="2PJmVRzTETF6" area_end="v515"}

### Tehtävä {id="wMCe3e9AuEbA"}

Päättele, mikä luku sopii $x$:n paikalle.

``` {id="5GuseB8SOqzp" #seq11_1 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem:'md: a\) $7^x=49$'
fullprogram: |!!
equation x=2 ends
ok_text Oikein! `x=2,` koska `7^2=49`

f_nodes 3
hide_expr
7^x = 49
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="R8QWdqxj4prW" #seq11_2 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $10^x=10 000.$'
fullprogram: |!!
equation x=4 ends
ok_text Oikein! `x=4`, koska `10^4=10*10*10*10=10000`

f_nodes 3
hide_expr
10^x = 10000
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="IINK1Sktwnqi" #seq11_3 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:c\)  $2^x=8$
fullprogram: |!!
equation x=3 ends
ok_text Oikein! `x=3`, koska `2^3=8`

f_nodes 9
hide_expr
2^x = 8
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

### Tehtävä {id="npv5cJI788dk"}

Venezuelan inflaation vuoksi kananlihan kilohinta on noussut $27\;\%$ viikossa 
ja on nyt $10.9$ miljoonaa bolivaria.
Oletetaan, että inflaatio on säilynyt vakiona kuukauden aikana.

![[Lähde: The New York Times](https://www.nytimes.com/interactive/2016/12/30/world/americas/venezuela-hyperinflation-100-bolivar-maduro.html)](/images/189430/bolivar.jpg){width=400}

``` {id="cvUxNOQg5066" #seq2_3 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: md:Kuinka monta miljoonaa bolivaria kilo kananlihaa maksoi Venezuelassa kuukausi sitten? Ilmoita vastaus yhden desimaalin tarkkuudella.
fullprogram: |!!
arithmetic
ok_text Hyvä! Kun ratkaistaan vihjeen yhtälö saadaan `x=\frac{10,9}{1,27^4}= 4,18997676...\approx 4,2` (milj.)

f_nodes 1
hide_expr
only_no_yes_on
4.2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="Efp0GnQDYsEX" area="v517" collapse="true"}

**Vihje**

#- {id="S5qWM4xsucMz"}
\
Korkoprosentti on $27\;\%$, joten korkokerroin on $1,27$. Neljän viikon aikana kilohinta on noussut $10,9$ miljoonaan,
mistä saamme yhtälön:

$$1,27^4x= 10,9$$

#- {id="p71D6VfhY1i1" area_end="v517"}

## Potenssin laskusääntöjä {id="t1UP6kccYOsG"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-potenssi-ja-juuri-teoria-5-6#potenssin-laskusääntöjä).

### Tehtävä {id="qCHUx9WhcoOw"}

``` {id="Yt5zzghRBQ5T" #Potenssimonivalintaeka plugin="mmcq"}
headerText: ''
answerLimit: 7
buttonText: 'Tallenna'
trueText: 'Tosi'
falseText: 'Epätosi'
stem: 'Tosi vai epätosi?'
choices:

  -
    correct: false
    text: 'md:$(a-b)^m=a^m-b^m$'
    reason: '$(a+b)^m=a^m-2ab+b^m$'
  -
    correct: true
    text: 'md:$3^0=1$'
    reason: '$a^0=1$'
  -
    correct: false
    text: 'md:$a^ma^n=a^{mn}$'
    reason: '$a^ma^n=a^{m+n}$'
  -
    correct: true
    text: 'md:$\dfrac{a^m}{a^n}=a^{m-n}$'
    reason: '$\frac{a^m}{a^n}=a^{m-n}$, missä $a\neq0$ sillä nollalla ei saa jakaa'
  -
    correct: true
    text: 'md:$a^{-m}=\dfrac{1}{a^m}$'
    reason: '$a^{-m}=\frac{1}{a^m}$, missä $a\neq0$ sillä nollalla ei saa jakaa'
    
  -
    correct: false
    text: 'md:$(a^{m})^n=a^{m+n}$'
    reason: '$(a^{m})^n=a^{mn}$'
    
  -
    correct: false
    text: 'md:$(a+b)^m=a^m+b^m$'
    reason: '$(a+b)^m=a^m+2ab+b^m$'
   
   
```

#- {id="MJMbGdl6IOE9"}
\

#- {id="JAZqRkTSecWo" .huomautus}
Laske tehtävät $5.2.2-5.2.10$ ilman laskinta. Voit hahmotella vastauksesi halutessasi 
ensin Abitti-editorilla, joka löytyy tehtävien alta.

### Tehtävä {id="nE8G9t9QM0dP"}

#- {id="nSF5eELdOthx"}
Sievennä käyttäen samankantaisten potenssien tulon kaavaa.

``` {id="C3pU6e5s4eId" #seq12_9 plugin="csPlugin"}
{% set equation = '6x^5' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $6x^3\cdot x^2$'
fullprogram: |!!
ok_text Hienoa! Samankantaisten potenssien eksponentit lasketaan yhteen `6x^(3+2)=6x^5.`

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

``` {id="h6LTTGTEDk6j" #seq12_10 plugin="csPlugin"}
{% set equation = '-8y^3' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $2yyy\cdot⋅(-4)$'
fullprogram: |!!
ok_text Hienoa! `2*y^(1+1+1)*(-4)=-8y^3`

f_nodes 6
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

``` {id="KjE9MrWt0fZf" #seq12_11 plugin="csPlugin"}
{% set equation = 'x^8y^10' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $x^7y^9xy$'
fullprogram: |!!
ok_text Hienoa! `x^(7+1)y^(9+1)=x^8y^10`

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

#- {id="ZT6WfCgxeu4O" area="abitti1" collapse="true"}

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

#- {id="VPnojztcaqPw" area_end="abitti1"}

#- {id="lMey0TrhzhdH"}
![](/images/189940/lehtii.jpg){width=450}

### Tehtävä {id="Yh4b2DHKUcxB"}

Laske käyttäen samankantaisten potenssien osamäärän kaavaa.

``` {id="OFY2CRwQCIyM" #seq12_13 plugin="csPlugin"}
{% set equation = '4' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $\dfrac{2^9}{2^7}$'
fullprogram: |!!
ok_text Hyvä! Samankantaisten potenssien eksponentit vähennetään toisistaan `2^(9-7)=2^2=4`.

f_nodes 1
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

``` {id="3DfmiQdsQhy6" #seq12_14 plugin="csPlugin"}
{% set equation = '-1/49' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $-\dfrac{7^3}{7^5}$'
fullprogram: |!!
ok_text Hyvä! `-7^(3-5)=-7^(-2)=-1/(7^2)=-1/49`

f_nodes 4
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

``` {id="MZlgEP3Q0vnf" #seq12_15 plugin="csPlugin"}
{% set equation = '1/5' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $\dfrac{(-5)^4}{5^5}$'
fullprogram: |!!
ok_text Hyvä! Koska negatiivisen kantaluvun `-5` potenssi on parillinen saadaan
`\frac{(-5)^4}{5^5}=frac{5^4}{5^5}=5^(4-5)=5^(-1)=1/5`

f_nodes 3
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

#- {id="6CiUuBomnw4D" area="abitti2" collapse="true"}

**Abitti-editori**

``` {id="Y875wAXVKSNg" plugin="csPlugin" #pluginjoku}
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

#- {id="WIBflfauAlhd" area_end="abitti2"}

### Tehtävä {id="TSl8nMVx0JFC"}

Sievennä käyttäen potenssin potenssin kaavaa.

``` {id="L0LBRRl2RHFn" #seq12_17 plugin="csPlugin"}
{% set equation = 'y^8' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $(y^4)^2$'
fullprogram: |!!
ok_text Kova! Potenssin potenssissa eksponentit kerrotaan keskenään `y^(4*2)=y^8`.

f_nodes 3
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

``` {id="jZoAnvbfOneM" #seq12_18 plugin="csPlugin"}
{% set equation = 'k^40' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $(k^4)^{10}$'
fullprogram: |!!
ok_text Kova! 

f_nodes 3
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

``` {id="Xm67bN3YSfot" #seq12_19 plugin="csPlugin"}
{% set equation = 'x^27' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $x^3(x^4)^6$'
fullprogram: |!!
ok_text Kova! `x^3x^(4*6)=x^3x^24=x^(3+24)=x^(27)`

f_nodes 3
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

#- {id="BjtZThG01VeM" area="abitti3" collapse="true"}

**Abitti-editori**

``` {id="mAnzoDxhWKqd" plugin="csPlugin" #plugini}
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

#- {id="FniZuLIHiNvx" area_end="abitti3"}

#- {id="IiFqJJXLbZVx"}
![](/images/189941/lehtiset.jpg){width=500}

### Tehtävä {id="zJIf0Tv6yImZ"}

Sievennä käyttäen tulon potenssin kaavaa.

``` {id="qCWnDSQK5XBs" #seq12_21 plugin="csPlugin"}
{% set equation = '8x^3' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $(2x)^3$'
fullprogram: |!!
ok_text Juuri näin! Tulon potenssissa tulontekijät korotetaan erikseen potenssiin `2^3x^3=8x^3`.

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

``` {id="H3Ne9SDClOxb" #seq12_22 plugin="csPlugin"}
{% set equation = '16a^2' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $(-4a)^2$'
fullprogram: |!!
ok_text Juuri näin!

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

``` {id="mFzEv8Szhz3d" #seq12_23 plugin="csPlugin"}
{% set equation = '100x^6y^8' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $(10x^3 y^4)^2$'
fullprogram: |!!
ok_text Juuri näin! Jokainen termi korotetaan erikseen toiseen. 

f_nodes 9
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

#- {id="gAZHDNIhaUsn" area="abitti4" collapse="true"}

**Abitti-editori**

``` {id="92iSNuzlQPWk" plugin="csPlugin" #pluginvaan}
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

#- {id="SgfuLekXnezB" area_end="abitti4"}

### Tehtävä {id="MW3UOFNcH5t4"}

Sievennä käyttäen osamäärän potenssin kaavaa.

``` {id="JULGn0on0Rk4" #seq12_25 plugin="csPlugin"}
{% set equation = '4x^2/25' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $\Big(\dfrac{2x}{5}\Big)^2$'
fullprogram: |!!
ok_text Hienoa! Osamäärän potenssissa osoittaja ja nimittäjä korotetaan erikseen potenssiin
`\frac{(2x)^2}{5^2}=\frac{4x^2}{25}`.

f_nodes 9
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

``` {id="p4SzNEw4yZCc" #seq12_26 plugin="csPlugin"}
{% set equation = '9x^2/16' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $\Big(\dfrac{-3x}{4}\Big)^2$'
fullprogram: |!!
ok_text Hienoa!

f_nodes 9
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

``` {id="50L7NMud3t9P" #seq12_27 plugin="csPlugin"}
{% set equation = '9/4 * b^2/a^8' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $\Big(\dfrac{2a^4}{3b}\Big)^{-2}$ (ilmoita lopullinen vastaus ilman negatiivista potenssia)'
fullprogram: |!!
ok_text Hienoa! Vaihdetaan eksponentti positiiviseksi ja kantaluku käänteisluvuksi 
`(\frac{3b}{2a^4})^2=\frac{(3b)^2}{(2a^4)^2}=\frac{9b^2}{4a^8}.`

f_nodes 11
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

#- {id="05F67rfVMsut" area="abitti5" collapse="true"}

**Abitti-editori**

``` {id="4E0WB93i4Im1" plugin="csPlugin" #plugin4}
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

#- {id="zJi3mLlWJ1X4" area_end="abitti5"}

#- {id="rK1M8KQaJ1HT"}
![](/images/189942/lehdet.jpg){width=500}

### Tehtävä {id="5apehGGudLXv"}

``` {id="o18QWnL3Qjsq" #p524 plugin="mcq"}
answerLimit: 4
buttonText: 'Tallenna'
headerText: ''
stem: 'md:Olkoon $x,y,z\neq 0.$ Mitä lauseke $x^0+y^0+z^0$ on sievennettynä?'
choices:
  -
    correct: false
    text: 'md:$0$'
    reason: ''
  -
    correct: true
    text: 'md:$3$'
    reason: 'Mikä tahansa luku korotettuna nollaan on yksi, joten $x^0+y^0+z^0=1+1+1=3.$'
  -
    correct: false
    text: 'Lauseketta ei pysty sieventämään.'
    reason: ''
  -
    correct: false
    text: 'md:$x+y+z$'
    reason: ''
```

### Tehtävä {id="Wkzn6qLiNMuz"}

#- {id="rSPdPL9zQ5gS" rd="183285" rp="zPDxLedtXNeu"}

### Tehtävä {id="7eGcDGcC6O6S"}

Muodosta ja sievennä kuutioiden tilavuuksien lausekkeet.

a) 

![](/images/189434/Screenshot_70.png){width=210}

``` {id="1nzZZJSWI3mW" #seq528a plugin="csPlugin"}
{% set equation = '27x^3' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: ''
fullprogram: |!!
ok_text Oikein! Korotetaan särmän pituus kolmanteen `(3x)^3=3^3x^3=27x^3`.

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

#- {id="GFGwNK5wDjnO"}
b) 

![](/images/189435/Screenshot_69.png){width=200}

``` {id="f1ef2Y5jRpmu" #seq528b plugin="csPlugin"}
{% set equation = '125a^3' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: ''
fullprogram: |!!
ok_text Oikein! 

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

### Tehtävä {id="OortK89fhb6B"}

Sievennä.

``` {id="BqEl6dRJepZ6" #seq12_24 plugin="csPlugin"}
{% set equation = 'x^16y^14' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $(x^4 y)^2⋅(x^2 y^3 )^4$'
fullprogram: |!!
ok_text Loistavaa!

f_nodes 9
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

#- {id="GJh0WJb3EsJb" area="v5210a" collapse="true"}
**Vihje**

\

#- {id="0XVjLh3SqoRd"}
\
\begin{align*}
(x^4y)^2(x^2y^3)^4&=(x^4)^2y^2(x^2)^4(y^3)^4 \\
&=x^8y^2x^8y^{12} \\
&=\dots
\end{align*}

#- {id="eOkrRpm2jw0G" area_end="v5210a"}

``` {id="d6criiH73cyU" #seq12_12 plugin="csPlugin"}
{% set equation = '10a^8b^10' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $2a^6b^45a^2b^6$'
fullprogram: |!!
ok_text Loistavaa

f_nodes 9
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

``` {id="vaJbyVtvYjd6" #seq12_28 plugin="csPlugin"}
{% set equation = 'a^4b' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md: c\) $\dfrac{9a^8b^6}{a^6b^9}\cdot \dfrac{a^6b^6}{9a^4b^2}$'
fullprogram: |!!
ok_text Loistavaa!

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

#- {id="VBYfcijzEmzL" area="v5210c" collapse="true"}

**Vihje**

#- {id="fJVptlqwiUgV"}
\
\begin{align*}
\dfrac{9a^8b^6}{a^6b^9}\cdot\dfrac{a^6b^6}{9a^4b^2}&=\dfrac{\cancel{9}a^8b^6a^6b^6}{\cancel{9}a^6b^9a^4b^2} \\
&= \frac{a^{8+6}b^{6+6}}{a^{6+4}b^{9+2}} \\
&=\dots
\end{align*}

#- {id="4FTaUzboJv45" area_end="v5210c"}

#- {id="MkXraMRYPrgq" area="abitti6" collapse="true"}

**Abitti-editori**

``` {id="D7yNdrMDqoSK" plugin="csPlugin" #Plugin5}
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

#- {id="9YesylE1ecgW" area_end="abitti6"}

### Tehtävä {id="SSrgaynxVKnN"}

Suomi voitti vuoden $2019$ jääkiekon maailmanmestaruuden.  Mestaruuteen Suomi tarvitsi pudotuspeleissä
puolivälierävoiton Ruotsista, välierävoiton Venäjästä sekä finaalivoiton Kanadasta. 
Oletetaan, että yksittäinen voitto vastaa kolikon heittoa eli toisin sanoen Suomen todennäköisyys 
voittaa yksittäinen ottelu on $\dfrac{1}{2}$.

![[Lähde: Yle](https://yle.fi/urheilu/3-10803184)](/images/189437/morko.jpg){width=500}

``` {id="DXkF549sapIn" #seq5211 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:a\) Mikä on todennäköisyys sille, että Suomi voittaa 
mestaruuden, kun se oli päässyt jatkopeleihin Ruotsia vastaan?'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 3
hide_expr
only_no_yes_on
0.125
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

``` {id="OU2QOpsTcPK5" #seq5311b plugin="csPlugin"}
{% set equation = '(1/2)^n' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) Muodosta yleinen lauseke todennäköisyydelle voittaa $n$-ottelua ilman häviötä.'
fullprogram: |!!
ok_text Hyvä!

f_nodes 9
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

#- {id="4P2eS7LkhiIO"}
Klassisessa todennäköisyyslaskennassa kahden toisistaan riippumattoman tapahtuman todennäköisyys voidaan laskea
**tuloperiaatteen** avulla: 

Jos tapahtuman $A$ todennäköisyys on $a$ ja tapahtuman $B$ todennäköisyys on $b$, niin tällöin
todennäköisyys sille, että *tapahtuu $a$ ja $b$* voidaan laskea tulona $ab$.

#- {id="G20tNoitouEA" area="r5211" collapse="true"}

**Ratkaisu**

#- {id="W1e3nlpAiF5K"}
\

a)
Suomen tulee voittaa kolme kolikon heittoa putkeen, joten tuloperiaatteen mukaan saadaan todennäköisyys voittaa mestaruus:

$$\dfrac{1}{2}\cdot\dfrac{1}{2}\cdot\dfrac{1}{2}=\Big(\dfrac{1}{2}\Big)^3=\dfrac{1}{8}$$

b) $\Big(\dfrac{1}{2}\Big)^n$

#- {id="dpvHIDuQFkcB" area_end="r5211"}

### Tehtävä {id="6bAobCMpfG8K"}

Katso oheinen video *"suklaatempusta"*.

``` {id="G7DKEBdXu0LN" plugin="showVideo"}
footer: "DailyBroccoli: Chocolate bar trick"
#iframe: true
width: 400
height: 300
file: https://youtu.be/iT6CjaPtzXU
```

#- {id="QjJOmMRMs4hh"}
\
Leikkaamalla suklaata kuten videossa, levystä poistuu aina $1$ pala per kierros, 
jonka jälkeen näyttää kuitenkin siltä,
että levyssä olisi alkuperäinen määrä paloja. Kuvitellaan, että meillä on 
vastaavanlainen $9\times4$ suklaalevy. Toisin kuin videolla, leikkaamme jokaisella kierroksella 
levystä pois prosentuaalisesti saman verran suklaata kuin ensimmäisellä kierroksella. 
Siis vain ensimmäisellä kierroksella levystä poistuu tasan $1$ suklaapala.
Kuinka paljon suklaata on jäljellä alkuperäiseen
määrään verrattuna, kun leikkaamme levyä

``` {id="jmiDf5yOAW56" #seq5212a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
stem: 'md:a\) $9$ kertaa? Vastaa prosenteissa yhden desimaalin tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 2
hide_expr
only_no_yes_on
77.6
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

``` {id="SQegHPRCVXc0" #seq5312b plugin="csPlugin"}
{% set equation = '(35/36)^n' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $n$ kertaa?'
fullprogram: |!!
ok_text Hyvä!

f_nodes 9
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

#- {id="ZsvMQrlrwyOo" area="r5212" collapse="true"}

**Ratkaisu**

#- {id="33VxEBQkPp7k"}
a)

Levyssä on $4\cdot9=36$ palaa, joista leikataan **ensimmäisellä kierroksella** $1$ pala pois ja jäljelle jää $35$ palaa.
Tällöin ensimmäisen kierroksen jälkeen leikatun massa alkuperäisestä on $\dfrac{35}{36}$.

**Toisella kierroksella**, leikkaamme suhteellisesti saman määrän, jolloin suklata jää jäljelle
$$\dfrac{35}{36}\cdot\dfrac{35}{36}=\left(\dfrac{35}{36}\right)^2$$

Vastaavasti **yhdeksännellä kierroksella** suklaan suhde alkuperäiseen on 
$$\left(\dfrac{35}{36}\right)^9\approx0,776=77,6\;\%$$

\

b) $\left(\dfrac{35}{36}\right)^n$

#- {id="mIkO0FqTZaGg" area_end="r5212"}

### Tehtävä {id="rRFwhDGySWVQ"}

Osoita, että lausekkeen $\dfrac{2^n4^{n+3}}{8^{n+1}}$ arvo 
ei riipu positiivisen kokonaisluvun $n$ arvosta. Kirjoita vastauksesi haluamallasi 
ohjelmalla ja palauta tiedostona.

``` {id="FYHQUErBkAun" plugin="csPlugin" #p5213}
type: upload
```

#- {id="bmRKuUJQ0GZ2" area="v5213" collapse="true"}

**Vihje**

#- {id="6fRc28oZpc5y"}
\
Ilmaistaan lausekkeet luvun $2$ potensseina, jolloin voidaan hyödyntää potenssin laskusääntöjä.

$$\dfrac{2^n4^{n+3}}{8^{n+1}}=\dfrac{2^n(2^2)^{n+3}}{(2^3)^{n+1}}=\dfrac{2^n2^{2n+6}}{2^{3n+3}}=\dots$$

#- {id="LAJ5MBepVVXI" area_end="v5213"}

#- {id="mrWsS8JOeLtg" area="r5213" collapse="true"}

**Ratkaisu**

#- {id="bSIjAmKkYTji"}
\

$$\dfrac{2^n4^{n+3}}{8^{n+1}}=\dfrac{2^n(2^2)^{n+3}}{(2^3)^{n+1}}=\dfrac{2^n2^{2n+6}}{2^{3n+3}}=\dfrac{2^{3n+6}}{2^{3n+3}}
=\dfrac{2^{3n}}{2^{3n}}\cdot\dfrac{2^{6}}{2^3}=2^3$$

Nyt lausekkeessa ei ole kokonaislukumuuttujaa $n$, joten se ei siis riipu luvun $n$ arvosta.

#- {id="xSzzzAYAeYTX" area_end="r5213"}

### Tehtävä {id="gNmSjpqsmkWU"}

#- {id="n6vMmGildFSg" rd="183285" rp="xGi5E6A3qhhl"}

## Kymmenpotenssimuoto {id="l4bgf9t1oXUx"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-potenssi-ja-juuri-teoria-5-6#kymmenpotenssimuoto).

### Tehtävä {id="ZJFfBlALuWOM"}

Ilmaise kahden numeron tarkkuudella kymmenpotenssimuodossa.

``` {id="K1liQwwlIJWX" #seq12_5 plugin="csPlugin"}
{% set equation = '7.5*10^9' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) Maapallon väkiluku (vuonna $2017$) $7\;530\;000\;000$'
fullprogram: |!!
ok_text  Oikein!

f_nodes 5
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="nPa1POzKnXVf" #seq12_6 plugin="csPlugin"}
{% set equation = '1.0*10^5' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) Ilmanpaine $101\;325\;\text{(Pa)}$ '
fullprogram: |!!
ok_text Oikein!

f_nodes 5
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="1jWcfOMkjEET" #seq12_7 plugin="csPlugin"}
{% set equation = '4.4*10^6' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) Auringon ympärysmitta $4\;360\;000\;\text{(km)}$ '
fullprogram: |!!
ok_text Oikein!

f_nodes 5
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="ny7nt32QXJ5r"}

Elektronin massa on noin $9,1\cdot10^{-31}\;\text{kg}$ ja protonin 
$1,7\cdot10^{-27}\;\text{kg}$. Kuinka moninkertainen on

``` {id="JRn0moqtjb0L" #seq12_29 plugin="csPlugin"}
{% set equation = '1900' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) on protonin massa elektronin massaan verrattuna? Vastaa kahden merkitsevän numeron tarkkuudella.'
fullprogram: |!!
ok_text Hienoa! 

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="k0blxpFjJtj2" #seq12_30 plugin="csPlugin"}
{% set equation = '5.4*10^(-4)' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) on elektronin massa protonin massaan verrattuna? Vastaa kymmenpotenssimuodossa kahden numeron 
tarkkuudella.'
fullprogram: |!!
ok_text Hienoa!

f_nodes 11
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="073l2ZvJ08Bm"}
![](/images/189482/maa.jpg){width=500}

### Tehtävä {id="V8HQuJjuv0Op"}

Maan etäisyys toukokuussa Auringosta on noin $151,6$ miljoonaa kilometriä ja 
valon nopeus on $2,998\cdot10^8\;\frac{\text{m}}{\text{s}}$.
Nopeudelle pätee yhtälö $v=\dfrac{s}{t}$, missä $s=$matka ja $t$=aika.

``` {id="QT4a7wdufvrE" #seq533 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:Montako minuuttia kestää valon matka Auringosta Maahan? Vastaa yhden desimaalin tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Hyvä!

f_nodes 2
hide_expr
only_no_yes_on
8.4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="wpnbyScSoHV7" area="v533" collapse="true"}

**Vihje**

#- {id="xRPjLgUH1u0l"}
\
Maan etäisyys Auringosta pitää ensin muuttaa metreiksi kymmenpotenssimuotoon.

$151,6\;\text{milj.}\;\text{km}=151\;600\;000\;\text{km}=1,516\cdot10^8\;\text{km}=1,516\cdot10^{11}\;\text{m}$

\

Aika, joka valolla kestää Auringosta Maahan, saadaan laskettua kaavalla 

$$t=\dfrac{s}{v}=\frac{1,516\cdot10^{11}\;\text{m}}{2,998\cdot10^8\;\frac{\text{m}}{\text{s}}}=\dots$$

#- {id="xNw959P2yz5a" area_end="v533"}

### Tehtävä {id="VBKoI7a0cQVM"}

Vanhan tarinan mukaan shakkipeli keksittiin noin $2500$ vuotta sitten Intiassa. Kun pelin keksijä oli esitellyt pelinsä
kuninkaalleen, tämä ihastui peliin niin, että lupasi keksijälle palkinnoksi mitä tahansa. Keksijä ilmoitti tyytyvänsä 
vaatimattomaan palkkioon: hän pyysi ensimmäiselle ruudulle yhden vehnänjyvän, toiselle kaksi, kolmannelle neljä ja niin edelleen,
aina seuraavalle ruudulle kaksi kertaa niin monta jyvää kuin edelliselle.

\
![](/images/189449/shakki.jpg){width=400}
\

``` {id="EDoUswLcVLUS" #seq534a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:a\) Kuinka monta jyvää olisi shakkilaudan viimeisellä ($64.$) ruudulla?
Vastaa kymmenpotenssimuodossa kahden numeron tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Hyvä! Viimeisellä ruudulla hiekanjyviä on `2^63\approx9,2\cdot10^18`.

f_nodes 5
hide_expr
only_no_yes_on
9.2*10^18
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="kazIMWBSZSOm" area="v534" collapse="true"}

**Vihje**

#- {id="HVFebwYLAvED"}
\

1. ruutu: $1$ 
2. ruutu: $2\cdot1$
3. ruutu: $2\cdot2\cdot1=2^2$
4. ruutu: $2\cdot2^2=2^3$
$\dots$

\

#- {id="iVIFj3nBgCyc" area_end="v534"}

``` {id="yUKdiT7gFhxH" #seq534b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:b\) Mikä on shakkilaudan viimeisellä ruudulla olevan vehnämäärän massa? 
Anna vastaus tonneina ($1\;\text{t}=1000\;\text{kg}$), kymmenpotenssimuodossa ja kahden numeron tarkkuudella. Yhden vehnänjyvän massa on
noin $0,03\;\text{g}.$'
fullprogram: |!!
arithmetic
ok_text Hyvä! Vehnämäärän massa: `9.2\cdot10^18\cdot0,03` 
g`\approx2.8*10^(17)`g`=2.8*10^(14)` kg`=2.8*10^(11)` t

f_nodes 5
hide_expr
only_no_yes_on
2.8*10^11
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="h93jLPUk4mBL" #seq534b2 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:c\) Koko maailman vuoden vehnäntuotanto on noin $687$ miljoonaa tonnia. 
Kuinka monen vuoden tuotanto on shakkilaudan viimeisellä ruudulla? Vastaa satojen vuosien tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Hyvä! 

f_nodes 1
hide_expr
only_no_yes_on
400
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="HUkecfGGOZWI"}

Luonnontieteissä pieniä lukuja on tapana ilmaista 
kymmenpotenssimuodossa negatiivisen eksponentin avulla.
Taulukossa ovat näiden esitysmuotojen
etuliitteet. 

kymmenpotenssi   etuliite lyhenne
---------------- -------- -------- 
$10^{-3}$        milli       $\text{m}$
$10^{-6}$        mikro       $\mu$
$10^{-9}$        nano        $\text{n}$
$10^{-12}$       piko        $\text{p}$
$10^{-15}$       femto       $\text{f}$
$10^{-18}$       atto        $\text{a}$

Valitse oikeat etuliitteet.

``` {id="PAYwIlzulK3r" #p535a plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'a) Mahdollisimman pieni mikroaallon aallonpituus: $0,001$ metriä $= 1$'
choices:
  -
    correct: true
    text: 'millimetri'
    reason: '$0,001=1\cdot10^{-3}$'
  -
    correct: false
    text: 'mikrometri'
    reason: ''
  -
    correct: false
    text: 'nanometri'
    reason: ''

```

``` {id="jQJ5vA6iva1L" #p535b plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'b) Mahdollisimman suuri punaisen valon aallonpituus: $7,6\cdot10^{-7}$ metriä $=760$'
choices:
  -
    correct: false
    text: 'mikrometriä'
    reason: ''
  -
    correct: true
    text: 'nanometriä'
    reason: '$7,6\cdot10^{-7}=760\cdot10^{-9}$'
  -
    correct: false
    text: 'pikometriä'
    reason: ''

```

``` {id="QpZQPEJMklai" #p535c plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'c) Loispistiäisen massa: $0,000\;025$ grammaa $=25$'
choices:
  -
    correct: false
    text: 'milligrammaa'
    reason: ''
  -
    correct: true
    text: 'mikrogrammaa'
    reason: '$0,000\;025=25\cdot10^{-6}$'
  -
    correct: false
    text: 'nanogrammaa'
    reason: ''

```

``` {id="n36Y4c2JKIGo" #p535d plugin="mcq"}
answerLimit: 3
buttonText: 'Tallenna'
headerText: ''
stem: 'd) Neutronin säde: $8\cdot10^{-16}$ metriä $= 800$'
choices:
  -
    correct: false
    text: 'pikometriä'
    reason: ''
  -
    correct: false
    text: 'femtometriä'
    reason: ''
  -
    correct: true
    text: 'attometriä'
    reason: '$8\cdot10^{-16}=800\cdot10^{-18}$'

```

## Neliö- ja kuutiojuuri {id="91PWmOk1I5c3"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-potenssi-ja-juuri-teoria-5-6#neliö--ja-kuutiojuuri).

### Tehtävä {id="KRWT2TLfkqPu"}

``` {id="VyMQ07mQJkk9" #monivalintajuurieka plugin="mmcq"}
headerText: ''
answerLimit: 6
trueText: 'Tosi'
falseText: 'Epätosi'
buttonText: 'Tallenna'
stem: 'Tosi vai epätosi?'
choices:
  -
    correct: false
    text: 'md:$\sqrt{0}$ ei ole määritelty'
    reason: 'md:$\sqrt{0}=0$, sillä $0^2=0$ ja $0$ on ei-negatiivinen luku'
  -
    correct: true
    text: 'md:$\sqrt{1}=1$'
    reason: 'md:$\sqrt{1}=1$, sillä $1^2=1$'
  -
    correct: false
    text: 'md:$\sqrt{-25}=-5$'
    reason: 'md:$\sqrt{-25}$ ei ole määritelty, sillä $-25$ on negatiivinen luku'
  -
    correct: true
    text: 'md:$-\sqrt{121}=-11$'
    reason: 'md:Kyseessä on ei-negatiivisen luvun $121$ neliöjuuri, jonka etumerkkinä on -'
  -
    correct: false
    text: 'md:$\sqrt{a+b}=\sqrt{a}+\sqrt{b}$'
    reason: 'md:Vastaesimerkkinä $\sqrt{25}=5$ ja toisaalta $\sqrt{16}+\sqrt{9}=4+3=7$'
  -
    correct: false
    text: 'md:$-\sqrt{a-b}=\sqrt{a}-\sqrt{b}$'
    reason: 'md:Vastaesimerkkinä $-\sqrt{25-9}=-\sqrt{16}=-4$ ja toisaalta $\sqrt{25}-\sqrt{9}=5-3=2$'
```

### Tehtävä {id="3OsMfYHzr5Qo"}

Laske ilman laskinta.

``` {id="6ZLoLuuVs3Tj" #seq13_1 plugin="csPlugin"}
{% set equation = '6' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $\sqrt{36}$'
fullprogram: |!!
ok_text Oikein! Hyvä!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="KfuE7Jcez80Q" #seq13_2 plugin="csPlugin"}
{% set equation = '7' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $\sqrt{49}$'
fullprogram: |!!
ok_text Oikein! Hyvä!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="Gg6YLCPE5azm" #seq13_3 plugin="csPlugin"}
{% set equation = '9' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $\sqrt{81}$'
fullprogram: |!!
ok_text Oikein! Hyvä!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="WDrildqM3sQC" #seq13_4 plugin="csPlugin"}
{% set equation = '12' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) $\sqrt{144}$'
fullprogram: |!!
ok_text Oikein! Hyvä!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="B0PcQz5a2I9l"}
![](/images/189949/lehti.jpg){width=500}

### Tehtävä {id="o3bPaRWbKAN8"}

Laske ilman laskinta.

``` {id="3GuEBu9ymutY" #seq543a plugin="csPlugin"}
{% set equation = '5' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $(\sqrt{5})^2$'
fullprogram: |!!
ok_text Loistavaa!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="5oz04gE8Mn2x" #seq14_5 plugin="csPlugin"}
{% set equation = '5' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $\sqrt[3]{125}$'
fullprogram: |!!
ok_text Loistavaa!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="1tMN7uIglBTJ" #seq543c plugin="csPlugin"}
{% set equation = '6' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $(-\sqrt{36})^2$'
fullprogram: |!!
ok_text Loistavaa!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="u1IdRfYjVmKw" #seq14_4 plugin="csPlugin"}
{% set equation = '-4' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) $\sqrt[3]{-64}$'
fullprogram: |!!
ok_text Loistavaa!

f_nodes 2
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="2QlQrW0snrnp"}

Laske ilman laskinta. Käytä hyväksesi neliöjuuren ominaisuuksia. Hahmottele tarvittaessa
Abitti-editorilla.

``` {id="RAaGIaLMEgMK" #seq15_1 plugin="csPlugin"}
{% set equation = 'sqrt(15)' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $\sqrt{5}\cdot \sqrt{3}$'
fullprogram: |!!
ok_text Hienoa! Juurrettavat kerrotaan keskenään `sqrt(5*3)=sqrt(15)`.

f_nodes 2
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
!!
```

``` {id="zsUghUSm6WM8" #seq15_2 plugin="csPlugin"}
{% set equation = '15' %}
type: mathcheck
correctText: 'Hienoa! 😃'
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $\sqrt{5}\cdot \sqrt{45}$'
fullprogram: |!!
ok_text Hienoa! `sqrt(5*45)=sqrt(225)=15`

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
!!
```

``` {id="cKSG03qOc0st" #seq15_3 plugin="csPlugin"}
{% set equation = '3/5' %}
type: mathcheck
correctText: 'Hienoa! 😃 ' 
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $\sqrt{\dfrac{9}{25}}$'
fullprogram: |!!
ok_text Hienoa! Osoittajasta ja nimittäjästä otetaan erikseen neliöjuuri `\frac{sqrt(9)}{sqrt(25)}=\frac{3}{5}`.

f_nodes 3
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
/
!!
```

``` {id="BRJgfSnBjuTG" #seq15_4 plugin="csPlugin"}
{% set equation = '5' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) $\dfrac{\sqrt{50}}{\sqrt{2}}$'
fullprogram: |!!
ok_text Hienoa! `\frac{sqrt(2*25)}{sqrt(2)}=\frac{sqrt(2)*sqrt(25)}{sqrt(2)}=sqrt(25)=5`

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
/
!!
```

#- {id="v4vySgzSqohC" area="abitti7" collapse="true"}

**Abitti-editori**

``` {id="f5dIndjYZt69" plugin="csPlugin" #Plugin6}
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

#- {id="cx92QNUw5Ita" area_end="abitti7"}

### Tehtävä {id="aYTmBTCSSbPQ"}

#- {id="tmFPsBUYuhrb" rd="183275" rp="Df7fVOHZazqi"}

#- {id="GCBbgNdoli4s" rd="183275" rp="dq7Wkyxa6dIL"}

### Tehtävä {id="olVeK7JeACgg"}

Playstation-ohjaimen neliö-näppäimen kuvan pinta-ala on noin $42\;\text{mm}^2$. 

![](/images/189454/ohjain.jpg){width=400}

``` {id="iQSaemxBul0U" #seq545 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:Kuinka monta millimetriä on neliön sivun pituus? Anna vastaus yhden desimaalin tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Hyvä! Sivun pituus: `sqrt(42)\approx6.5` (mm)

f_nodes 1
hide_expr
only_no_yes_on
6.5
// BYCODEBEGIN
=
// BYCODEEND
!!
```

### Tehtävä {id="gBNGIYU9f1yH"}

Jasminin isä valmistaa mokkapaloja Jasminin yo-juhliin. Hän arvioi, että 
keskimäärin yksi vieras syö mokkapalan, jonka pinta-ala on $50\;\text{mm}^2$. 
Jasminin isä päättääkin tehdä juhliin
yhden ison neliön muotoisen mokkapalan, josta vieraat voivat leikata
haluamansa määrän.

![](/images/189951/suklaaa.jpg){width=500}

``` {id="dxoTF4XtVWV1" #seq546 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:Mikä on tämän ison mokkapalan
sivun pituus millimetreinä, jos vieraita on $150$?'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 2
hide_expr
only_no_yes_on
87
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="P2b1wFhZecgz" area="v545" collapse="true"}

**Vihje**

#- {id="IiRLp96TZREG"}
\
Ison mokkapalan pinta-ala: $150\cdot50=7500\;\text{mm}^2$

#- {id="PuaCJS03DwJl" area_end="v545"}

### Tehtävä (s1984/1) {id="pZiHe5AR3GHe"}

Minkä positiivisen luvun neliöjuuri on luku $\sqrt{5}-2$?

``` {id="D7cLjYKtm78S" #seq546a plugin="csPlugin"}
{% set equation = '9-4*sqrt(5)' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) Anna vastaus tarkkana arvona.'
fullprogram: |!!
ok_text Juuri näin!

f_nodes 6
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="xjxswIbSUFO4" #seq546b plugin="csPlugin"}
{% set equation = '0.0557' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) Anna vastaus likiarvona kolmen merkitsevän numeron tarkkuudella. '
fullprogram: |!!
ok_text Juuri näin!

f_nodes 1
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="tYW4IttAiCNZ" area="v546" collapse="true"}

**Vihje**

#- {id="gu0vkFwj0Vp8"}
\begin{align*}
&(\sqrt{5}-2)^2 \\
&=(\sqrt{5}-2)(\sqrt{5}-2) \\
&=(\sqrt{5})^2-2\sqrt{5}-2\sqrt{5}+(-2)^2 \\
&=\dots
\end{align*}

#- {id="vf7qwcwcTw4f" area_end="v546"}

#- {id="E5dH62Zoi1oz" area="abitti8" collapse="true"}

**Abitti-editori**

``` {id="r6dvFY725e9T" plugin="csPlugin" #Plugin7}
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

#- {id="BiwquEoFGEkn" area_end="abitti8"}

### Tehtävä {id="cS6WIYQbqEuV"}

Rationaalilauseke, missä nimittäjänä on neliöjuuri, voidaan sieventää laventamalla nimittäjällä.
 $$^{\sqrt{b})}\dfrac{a}{\sqrt{b}}=\dfrac{a\sqrt{b}}{\sqrt{b}\sqrt{b}}=\dfrac{a\sqrt{b}}{b}$$

Esimerkiksi: $$^{\sqrt{5})}\dfrac{60}{\sqrt{5}}=\dfrac{60\sqrt{5}}{\sqrt{5}\sqrt{5}}=\dfrac{60\sqrt{5}}{5}=12\sqrt{5}$$

\
Sievennä tätä käyttäen ilman laskinta seuraavat lausekkeet.

``` {id="mF7MQHzBvGgl" #seq549a plugin="csPlugin"}
{% set equation = 'sqrt(2)' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $\dfrac{2}{\sqrt{2}}$'
fullprogram: |!!
ok_text Hienoa! 

f_nodes 2
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
/
*
!!
```

``` {id="0lhjkN81latk" #seq549b plugin="csPlugin"}
{% set equation = '6*sqrt(3)' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $\dfrac{18}{\sqrt{3}}$'
fullprogram: |!!
ok_text Hienoa!

f_nodes 4
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
/
*
!!
```

``` {id="xpwbq2Et3ieR" #seq549c plugin="csPlugin"}
{% set equation = 'sqrt(35)/7' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $\dfrac{\sqrt{5}}{\sqrt{7}}$'
fullprogram: |!!
ok_text Hienoa!

f_nodes 4
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
/
*
!!
```

``` {id="4hhp1rV8zRRw" #seq549d plugin="csPlugin"}
{% set equation = '3*sqrt(6)/2' %}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) $\dfrac{9\sqrt{2}}{2\sqrt{3}}$'
fullprogram: |!!
ok_text Hienoa!

f_nodes 6
hide_expr
%%equation%% 
// BYCODEBEGIN
=
// BYCODEEND
!!
buttons: |!!
sqrt
/
*
!!
```

#- {id="zAu6OXxNYhGf" area="abitti9" collapse="true"}

**Abitti-editori**

``` {id="HPSnjMeOeAoe" plugin="csPlugin" #Plugin8}
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

#- {id="Z6IhjN7nbCSx" area_end="abitti9"}

### Tehtävä {id="eE8hR2YKpyyv"}

Standardimittaisen $3\times3$ Rubikin kuution tilavuus on noin $V=190\;\text{cm}^3$. 

\
![](/images/189461/kuutio.jpg){width=400}
\

``` {id="yWnPbo3XSnvv" #seq5410 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:Mikä on kuution yksittäisen palan särmän pituus senttimetreinä? Anna vastaus yhden desimaalin tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 2
hide_expr
only_no_yes_on
1.9
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="Pk3cBIrHw9v6" area="rubiik" collapse="true"}

**Vihje**

#- {id="ZmnE6vtCbjvo"}
\
Rubiikin kuutiossa on paloja $3\cdot3\cdot3=27,$ joten yksittäisen palan tilavuus
$\dfrac{190\;\text{cm}^2}{27}\dots$

#- {id="UL9ZJb5E5ZoO" area_end="rubiik"}

### Tehtävä {id="is9oUkfVnOQx"}

a) Laske lausekkeiden arvot, kun $a = 1, b = 6 \text{ ja } c = 8$.

``` {id="CbcULMB8MtP2" #seq5411a plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md: $\dfrac{-b+\sqrt{b^2-4ac}}{2a}$'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 2
hide_expr
only_no_yes_on
-2
// BYCODEBEGIN
=
// BYCODEEND
!!
```

``` {id="pEwXKL3yZdux" #seq5411b plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:$\dfrac{-b-\sqrt{b^2-4ac}}{2a}$'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 2
hide_expr
only_no_yes_on
-4
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="t4Uj7m6MZETX"}
b) Sijoita lausekkeen arvot yhtälöön $x^2+6x+8=0$ muuttujan $x$ paikalle.

``` {id="Y63CTo9EU4Tw" #taskNimi plugin="csPlugin"}
type: text
button: Tallenna
rows: 2
placeholder: ''
stem: 'md:Mitä huomaat? Vastaa sanallisesti.'
```

#- {id="aQDEWwNqWIW6" area="v5411" collapse="true"}
**Vastaus**

#- {id="Myff32Wz9ZB9"}
\
Molempien lausekkeiden arvot, $x=-2$ ja $x=-4$, ovat yhtälön ratkaisuja. 

\

Yleisesti yhtälö, joka on muotoa $ax^2+bx+c=0$, voidaan ratkaista 
*toisen asteen yhtälön ratkaisukaavaalla*  $x=\dfrac{-b \pm\sqrt{b^2-4ac}}{2a}.$
Tähän perehdytään lisää MAA2-kurssilla.

#- {id="BK6WnMSRqMz5" area_end="v5411"}

## Potenssiyhtälö {id="m7ESAu43qL1z"}

Tämän kappaleen [teoria](https://tim.jyu.fi/view/tau/toisen-asteen-materiaalit/matematiikka/algebra/may1-potenssi-ja-juuri-teoria-5-6#potenssiyhtälö).

### Tehtävä {id="5Z52vKsTzxBh"}

``` {id="fOgMtKOMa4HA" #Plugin68 plugin="mmcq"}
headerText: ''
answerLimit: 4
trueText: 'Tosi'
falseText: 'Epätosi'
buttonText: 'Tallenna'
stem: 'Tosi vai epätosi?'
choices:
  -
    correct: false
    text: 'md:Yhtälön $x^2=-4$ ratkaisu on $x=-2$'
    reason: 'Yhtälöllä ei ole ratkaisua, sillä ei ole olemassa lukua, jonka toinen potenssi on negatiivinen luku'
  -
    correct: false
    text: 'md:Yhtälön $x^3=-8$ ratkaisu on $x=-2 \text{ tai } x=2$'
    reason: 'Yhtälön ainoa ratkaisu on $x=-2$, sillä $(-2)^3=-8$, mutta $2^3=8\neq -8$'
  -
    correct: false
    text: 'Luvun kuutiojuuri on aina pienempi tai yhtä suuri kuin luvun neliöjuuri.'
    reason: 'Esimerkiksi $\sqrt{\dfrac{1}{4}}=\dfrac{1}{2}$ ja $\sqrt[3]{\dfrac{1}{4}}\approx 0,63$'
  -
    correct: true
    text: 'Kuutioyhtälöllä on täsmälleen yksi ratkaisu.'
    reason: 'Neliöyhtälöllä voi olla kaksi ratkaisua, toisin kuin kuutioyhtälöllä.'
```

#- {id="37b21SqLCgAg"}
\

#- {id="D0vQ8WbfCF70" .huomautus}
Ratkaise tehtävät $5.5.2-5.5.3$ ja $5.5.5$ ilman laskinta. Hahmottele halutessasi 
ratkaisuja Abitti-editorilla, joka löytyy tehtävien alta.

### Tehtävä {id="XCHsQcy0CBp3"}

Ratkaise yhtälö.

``` {id="uaRqPOdXnDae" #seq16_2 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:a\) $x^2=1$'
fullprogram: |!!
equation x=1 or x=-1 ends
ok_text Hyvä!

f_nodes 8
hide_expr
x^2=1
// BYCODEBEGIN
<=> x= or x=
// BYCODEEND
!!
```

``` {id="lNvb6gl9z3kg" #seq16_3 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:b\) $2x^2=10$'
fullprogram: |!!
equation x=sqrt(5) or x=-sqrt(5) ends
ok_text Hyvä!

f_nodes 10
hide_expr
2x^2=10
// BYCODEBEGIN
<=> x= or x=
// BYCODEEND
!!
buttons: |!!
sqrt
!!
```

``` {id="HWxg9HtB9hgL" #seq16_5 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:c\) $x^3=-1$'
fullprogram: |!!
equation x=-1 ends
ok_text Hyvä!

f_nodes 10
hide_expr
x^3=-1
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

``` {id="8SnMCHhKGrWu" #seq16_6 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: 'md:d\) $x^3=8$'
fullprogram: |!!
equation x=2 ends
ok_text Hienoa!

f_nodes 10
hide_expr
x^3=8
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
```

#- {id="4qEb3Xl13dX2" area="abitti10" collapse="true"}

**Abitti-editori**

``` {id="4uqrw5vRSimp" plugin="csPlugin" #Plugin9}
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

#- {id="x853oe8bqk3U" area_end="abitti10"}

#- {id="Vh9Cd32fSRoQ"}
\
![](/images/189954/lehtiaa.jpg){width=500}
\

### Tehtävä {id="oO59KZi6J7MR"}

Ratkaise yhtälö.

``` {id="pTfd0RqGI2m5" #seq17_1 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:a\)  $2x^2+5=19$
fullprogram: |!!
equation x=sqrt(7) or x=-sqrt(7) ends
ok_text Loistavaa!

f_nodes 10
hide_expr
2x^2+5=19
// BYCODEBEGIN
<=> x= or x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
!!
```

``` {id="JtfMGltrvfFc" #seq17_2 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:b\) $x^2=\dfrac{1}{3}$.
fullprogram: |!!
equation x=1/sqrt(3) or x=-1/sqrt(3) ends
ok_text Loistavaa!

f_nodes 14
hide_expr
x^2=1/3
// BYCODEBEGIN
<=> x= or x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
!!
```

``` {id="IXrzDZTD3vZZ" #seq17_3 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:c\) $x^3=-\dfrac{1}{8}$.
fullprogram: |!!
equation x=-1/2 ends
ok_text Loistavaa!

f_nodes 6
hide_expr
x^3=-1/8
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
!!
```

``` {id="28YjuNWhCR9i" #seq17_4 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:d\) $4x^3=14$.
fullprogram: |!!
equation x=root(3)(14/4) ends
ok_text Loistavaa!

f_nodes 7
hide_expr
4x^3=14
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
root(3)
!!
```

#- {id="E4EQvRE3fZIr" area="abitti12" collapse="true"}

**Abitti-editori**

``` {id="f0dWX1d2QLnC" plugin="csPlugin" #Plugin10}
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

#- {id="rQ0HUW2ShZWw" area_end="abitti12"}

### Tehtävä {id="0I7FTKlODfhm"}

Kansainvälisen jääkiekkoliiton mukaan jääkiekkokaukalon aloitusympyröiden pinta-ala on 
yhteensä noin $320\;\text{m}^2$. 

\

![[Lähde: EVU Hockey Team](https://www.evu.fi/joukkueet/1366/uutiset/14881/kausi-2015-2016-kayntiin-1-2-ja-8-9-8-2015-myyrmaessa)](/images/189955/kentta.jpg){width=400}

\

``` {id="AzFLsPTgeFoy" #seq5411a2 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:Mikä on yksittäisen aloitusympyrän halkaisijan pituus? Vastaa metreissä yhden desimaalin tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 1
hide_expr
only_no_yes_on
9.0
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="lhEttRsKYJz4" area="v554" collapse="true"}

**Vihje**

#- {id="FdkYRPHSi0hW"}
\
Kaukalossa on $5$ aloitusympyrää, joten yksittäisen ympyrän pinta-ala $A=\dfrac{320}{5}=64 \;(\text{m}^2)$.

Ympyrän yhtälölle pätee $A=\pi r^2$, josta voidaan ratkaista

$r=\sqrt{\dfrac{A}{\pi}}$ tai $r=-\sqrt{\dfrac{A}{\pi}}$

Negatiivinen ratkaisu ei kelpaa, siispä voidaan laskea halkaisija $h=2r=\dots$

#- {id="X82c48Ql8sQ3" area_end="v554"}

### Tehtävä {id="CcZE1SeFkYzd"}

Ratkaise yhtälö.

``` {id="Ui6rhW8IMtm6" #seq18_1 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:a\) $-2x^2+1=-2$
fullprogram: |!!
equation x=sqrt(3/2) or x=-sqrt(3/2) ends
ok_text Tosi hyvä!

f_nodes 20
hide_expr
-2x^2+1=-2
// BYCODEBEGIN
<=> x= or x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
!!
```

``` {id="7QP36noWdJuR" #seq18_2 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:b\) $\dfrac{1}{9}x^2-1=\dfrac{1}{7}$
fullprogram: |!!
equation x=6*sqrt(2/7) or x=-6*sqrt(2/7) ends
ok_text Tosi hyvä!

f_nodes 20
hide_expr
1/9 * x^2-1=1/7
// BYCODEBEGIN
<=> x= or x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
!!
```

``` {id="50SwHQ4erEH6" #seq18_3 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:c\) $-\dfrac{1}{9}x^3-1=0$
fullprogram: |!!
equation x=-root(3)(9) ends
ok_text Hienoa!

f_nodes 20
hide_expr
-1/9*x^3-1=0
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
root(3)
!!
```

``` {id="70JIdUCzBh7O" #seq18_4 plugin="csPlugin"}
type: mathcheck
beforeOpen: 'Avaa tehtävä viemällä kursori tähän'
-pointsRule: {}
showCodeOn: 
isHtml: true
stem: md:d\) $\dfrac{1}{9}x^3+\dfrac{1}{\pi}=\pi$
fullprogram: |!!
equation x=root(3)(9*pi-9/pi ) ends
ok_text Tosi hyvä!

f_nodes 20
hide_expr
1/9*x^3+1/pi=pi
// BYCODEBEGIN
<=> x=
// BYCODEEND
!!
buttons: |!!
<=>
sqrt
*
or
/
root(3)
pi
!!
```

#- {id="2Rhug6HsKPPE" area="abitti13" collapse="true"}

**Abitti-editori**

``` {id="0KVKX4WYNEsK" plugin="csPlugin" #Plugin11}
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

#- {id="wM1PZYaIfGKJ" area_end="abitti13"}

#- {id="mmXGGclUK0ei" area="r555" collapse="true"}

**Ratkaisu**

#- {id="7FufZx6BuxzZ"}
\
Muokataan yhtälöt muotoon, jossa toisella puolella on muuttuja ja toisella vakio ja
otetaan puolittain neliö- tai kuutiojuuri.

a) 
\begin{align*}
-2x^2+1&=-2 \\
-2x^2&=-3 \\
x^2&=\frac{3}{2} \\
x=-\sqrt{\frac{3}{2}} \;\;&\text{tai}\;\; x=\sqrt{\frac{3}{2}}
\end{align*}

\

b) 
\begin{align*}
\frac{1}{9}x^2-1&=\frac{1}{7} \\
\frac{1}{9}x^2&=\frac{8}{7} &&|\cdot 9\\
x^2&=\frac{72}{7} \\
x=-\sqrt{\frac{72}{7}} \;\;&\text{tai}\;\; x=\sqrt{\frac{72}{7}} &&|\sqrt{72}=\sqrt{36}\cdot\sqrt{2}=6\sqrt{2}\\ 
x=-6\sqrt{\frac{2}{7}} \;\;&\text{tai}\;\; x=6\sqrt{\frac{2}{7}}
\end{align*}

\

c)
\begin{align*}
-\frac{1}{9}x^3-1&=0 \\
-\frac{1}{9}x^3&=1 \\
x^3&=-9 \\
x&=\sqrt[3]{-9}=-\sqrt[3]{9}
\end{align*}

\

d)
\begin{align*}
\frac{1}{9}x^3+\frac{1}{\pi}&=\pi \\
\frac{1}{9}x^3&=\pi-\frac{1}{\pi} &&|\cdot 9\\
x^3&=9\pi-\frac{9}{\pi} \\
x&=\sqrt[3]{9\pi-\frac{9}{\pi}}
\end{align*}

#- {id="ifeNCScCDE8G" area_end="r555"}

### Tehtävä {id="WXVYjDMWRgmY"}

Vuonna $2017$ Suomessa hakattiin puuta ennätysmäärä, noin $7,2 \cdot 10^7\;\text{m}^3.$

\
![](/images/189521/metsa2.jpg){width=400}
\
Jos kaikki puu varastoidaan

``` {id="UxA87dXBGSWl" #seq5411a3 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:a\) kuution muotoiseen varastoon, niin mikä on kuution sivun pituus?
Vastaa metreissä kahden numeron tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 1
hide_expr
only_no_yes_on
420
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="8HGNbEwq3pbB" area="v556" collapse="true"}

**Vihje**

#- {id="JXJYuPKQQo8K"}
\begin{align*}
&x^3=V\\
&x=\sqrt[3]{V}\\
&\;\;\dots\\
\end{align*}

#- {id="G0cCpAKy7HaZ" area_end="v556"}

``` {id="tYaIIA8utK3y" #seq5411a4 plugin="csPlugin"}
type: mathcheck
-pointsRule: {}
isHtml: true
showCodeOn: 
stem: 'md:b\) puolipallon muotoiseen varastoon, niin mikä on pallon säteen pituus?
Vastaa metreissä kahden numeron tarkkuudella.'
fullprogram: |!!
arithmetic
ok_text Oikein! 

f_nodes 1
hide_expr
only_no_yes_on
330
// BYCODEBEGIN
=
// BYCODEEND
!!
```

#- {id="FdsGHsj0wiJF" area="v556b" collapse="true"}

**Vihje**

#- {id="GQ4oZcmNLLoA"}
Pallon tilavuus saadaan kaavalla $V_{pallo}=\dfrac{4\pi r^3}{3}$, joten puolipallon tilavuus 
$V_{puolipallo}=\dfrac{4\pi r^3}{3}\cdot\dfrac{1}{2}=\dfrac{2\pi r^3}{3}.$ 

Tästä voidaan ratkaista puolipallon säde $\dots$

\

#- {id="dLy78lZhsxvl" area_end="v556b"}

#- {id="1dUT6gBoLgB4"}
\
![](/images/189525/polttopuut.jpg){width=400}
\

``` {id="D5EpqCMoX1xB" #p556c plugin="mcq"}
answerLimit: 1
buttonText: 'Tallenna'
headerText: ''
stem: 'c) Laske, kumman varaston rakentamiseen kuluvat raaka-aine -kustannukset tulisivat edullisemmaksi, jos molempien varastojen pohjat
jätetään rakentamatta.'
choices:
  -
    correct: false
    text: 'Kuution'
    reason: 'md:$A_{kuutio}=5\cdot x^2=5\cdot (416,016\;764\;6)^2=865\;349.7421 
    \approx 8,7 \cdot 10^5\;(\text{m}^2)$'
  -
    correct: true
    text: 'Puolipallon'
    reason: 'md:$A_{puolipallo}=2\pi r^2 = 2\pi (325,155\;564\;21)^2=664\;296,9353 
    \approx 6,6 \cdot 10^5\;(\text{m}^2)$'
 
```

#- {id="sG1ICcPWXdrH" area="vihje556" collapse="true"}
**Vihje**

#- {id="RhcrGZYUJgLN"}
\
Lasketaan molempien varastojen seinien pinta-alat. Kuution pinta-ala saadaan 
laskemalla viiden tahkon (pohja jätetään pois) pinta-alat yhteen.

$$A_{kuutio}=5\cdot x^2=\dots$$

Pallon pinta-ala saadaan kaavalla $4\pi r^2,$ joten puolipallon pinta-ala saadaan

$$A_{puolipallo}=\dfrac{4\pi r^2}{2}=\dots$$

#- {id="3AYUgQNqzJkD" area_end="vihje556"}

#- {id="EtzqNISeBTIW" area_end="sisalto"}
