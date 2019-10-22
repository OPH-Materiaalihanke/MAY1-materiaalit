#!/bin/bash

export PYTHONPATH=/submission/user

cat /exercise/teacher-input.txt ratkaisu > mc_input

sed -i 's/&gt;/>/g' mc_input
sed -i 's/&lt;/</g' mc_input

cat mc_input | mathcheck.out > mc_output

capture mathcheck.out < mc_input # in /usr/local/bin

# annetaan pisteitä sen mukaan, oliko mc tyytyväinen
# huomaa, että plussa skaalaa pisteet. jos plussassa tehtävän maksimipisteiksi on
# merkitty 50 ja tässä annetaan 1/2, opiskelija saa 25 pst. jos tässä annetaan 2/3,
# opiskelija saa 33 pst jne.

if grep -q "\!points\! 1" mc_output;
then

  echo "2/2" > /feedback/points
  echo '<br><br><div class="alert alert-success">Jipii, oikein meni! :)</div>' >> /feedback/out

elif grep -q "class=warn" mc_output;
then

  echo "1/2" > /feedback/points
  echo '<br><br><div class="alert alert-warning">Annoit turhan hankalan vastauksen! Voi vipstaakki! Voisikohan vastauksen esittää sievemmin?</div>' >> /feedback/out

else

  echo "0/2" > /feedback/points
  echo '<br><br><div class="alert alert-danger">Sait nolla pistettä. Yritä uudelleen.</div>' >> /feedback/out

fi


err-to-out
grade

