// ==UserScript==
// @name         NI LogWalki
// @version      2.0
// @match        unia.margonem.pl/
// @match        thantos.margonem.pl/
// @icon         https://i.imgur.com/9JJ5YyK.png
// @grant        none
// ==/UserScript==

//Neutralizacja
__translations['default']['msg_-pierceb']="<font color='white'><b>-Blok przebicia</b></font>";
__translations['default']['msg_-blok %val%']="<font color='#B2DFDB'><b>-Zablokowanie -%val% obrażeń</b></font>"; // blok tarczą
__translations['default']['msg_-arrowblock']="<font color='#B2DFDB'><b>-Strzała zneutralizowana</b></font>";
__translations['default']['msg_-parry']="<font color='white'><b>+Parowanie</b></font>"; // parowanie
__translations['default']['msg_-evade']="<font color='white'><b>-Unik</b></font>";  //unik
//Przerywniki
__translations['default']['msg_+freeze']="<font color='aqua'><i>+Zamrożenie</i></font>"; // zamrożenie
__translations['default']['msg_+stun']="<font color='#304FFE'><i>+Ogłuszenie</i></font>";
__translations['default']['msg_+distract'] = "<i><font color='FFD700'>+Wytrącenie z równowagi</font></i>"; //Wytrącenie z równowagi
//Dystansowe
__translations['default']['msg_+pierce']="<font color='lime'><i>+Przebicie</i></font>";
__translations['default']['msg_+fastarrow']="<font color='lime'><i>+Szybka strzała</i></font>";
__translations['default']['msg_+wound']="<font color='#64DD17'><i>+Głęboka rana</i></font>";
//Pozostałe
__translations['default']['msg_+crit']="<font color='FFD700'><i><b>+Cios krytyczny</b></i></font>";
__translations['default']['msg_+of_crit']="<font color='FFD700'><i><b>+Cios krytyczny broni pomocniczej</b></i></font>";
__translations['default']['msg_+of_wound']="<font color='#00FF66'><i><b>+Głęboka rana pomocnicza</b></i></font>";
__translations['default']['+third_strike']="<font color='white'><b>+Trzeci cios</b></font>";
__translations['default']['msg_+hithurt %val%']="<font color='FFD700'><i>+Bolesny cios, spowolnienie o %val%% SA</i></font>";
__translations['default']['msg_-c']="<i><font color='FFD700'><b>-Oczyszczenie</i></b></font>";  //oczyszczenie
__translations['default']['msg_+firearrow']="<font color='red'><b>+Płonąca strzała</b></font>"; // płonka
__translations['default']['msg_combo-max'] = "+Kombinacja <font color='#f507b5'>x%val%!</font>"; //Kombinacja + x
__translations['default']['msg_aura-sa_per %val%'] = "<font color='#e6ff05'>Aura szybkości</font><font color='#ffffff'>%val%%.</font>"; //Aura SA
__translations['default']['msg_shout %name%'] = "Uwaga <font color ='#ff21da'>%name2%</font> została skupiona na <font color='red'>%name%.</font>"; //na kogo wyzyw
__translations['default']['eng_game_only_val_+taken_dmg %val%'] = "<b><font color='#8521ff'>+Piętno bestii: atak </font></b><font color='white'>+%val%</font>"; //Piętno
__translations['default']['msg_+acdmg %val%'] = "<span>+Niszczenie pancerza o <font color='#00fc69'><b>%val%</b></font></span>"; //Niszczenie pancerza + wartość
//Bonusy legend
__translations['default']['msg_-legbon_glare']="<i><font color='#F9A825'><b>-OŚLEPIENIE</i></b></font>";  //oślepka
__translations['default']['msg_-legbon_cleanse']="<i><font color='orange'><b>-PŁOMIENNE OCZYSZCZENIE</i></b></font>";  //płomienne
__translations['default']['msg_+legbon_holytouch %val%']="<font color='#D500F9'><i><b>+DOTYK ANIOŁA</b></i></font>"; // dotyk
__translations['default']['msg_+legbon_curse']="<font color='red'><b>+KLĄTWA</b></font>"; //klątwa
__translations['default']['msg_+legbon_verycrit']="<i><font color='#FF3D00'><b>+Cios bardzo krytyczny</i></b></font>";
__translations['default']['msg_+legbon_verycrit']="<i><font color='#FF3D00'><b>+Cios bardzo krytyczny</i></b></font>";
__translations['default']['msg_-legbon_dmgred %val%']="<font color='006dc1'><b>-FIZYCZNA OSŁONA +%val% %</b></font>"; //fizyczna
__translations['default']['msg_-legbon_critred']="<font color='#FF6699'><b>-KRYTYCZNA OSŁONA</b></font>"; // krytyczna
__translations['default']['msg_-legbon_resgain']="<font color='#FF5722'><b>+OCHRONA ŻYWIOŁÓW</b></font>"; //oż
__translations['default']['msg_legbon_lastheal %val%']="<font color='#007CF7'><b>+OSTATNI RATUNEK, %val% życie +%val2%</b></font>"; //or
