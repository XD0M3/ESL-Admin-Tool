<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <head>
    <script type="text/javascript">
      function confirm_alert(node) {
        return confirm("By clicking OK, I swear on Poro God that I will check the file BEFORE sending it to Riot");
      }
    </script>
    <meta charset="utf-8">
      <title>ESL LoL Cup Parser</title>
    </head>
    <body>
      <center>
        <form id="form" name="form" method="post" action="">
          <table border="0">
            <tr>
              <td width="60">URL:</td>
              <td>
                <input type="text" name="value" id="value" size="88" value="http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/rankings/" />
              </td></tr>
            <tr>
              <td>Mode:</td>
              <td>
                <select name="log" id="log">
                  <option value="0" selected="selected">0 - normal</option>
                  <option value="1">1 - info </option>
                  <option value="2">2 - warning</option>
                  <option value="3">3 - critical</option>
                  <option value="4">4 - trace</option>
                </select>
              </td></tr>
            <tr>
              <td>Region:</td>
              <td>
                <select name="region" id="region">
                  <option value="euw" selected="selected">EUW</option>
                  <option value="eune">EUNE</option>
                </select>
              </td></tr>
            <tr>
              <td>Top:</td>
              <td>
                <select name="top" id="top">
                  <option value="2">2 (final) / takes +- 20 sec</option>
                  <option value="4">4 (above + 3rd place) / takes +- 20 sec</option>
                  <option value="8" selected="selected">5 (above + Quarter) / takes +- 40 sec</option>
                  <option value="16">6 (above + RO 16) / takes +- 1m 30 sec</option>
                  <option value="32">7 (above + RO 32) / takes +- 2m 20 sec</option>
                  <option value="64">8 (above + RO 64)</option>
                </select> (times vary depending on ESL reponse time)
              </td></tr>
          </table>
          <input type="submit" name="button" id="button" value="Fetch the LoL IDs (v3.1)" />
        </form>
      </center>
      <hr />
      <pre>Array
        (
        [0] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861779/
        [1] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861780/
        [2] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861781/
        [3] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861782/
        [4] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861783/
        [5] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861784/
        [6] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861785/
        [7] => http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861787/
        )
        [CHECK] Game integration (<a href="http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861779/">http://play.eslgaming.com/leagueoflegends/eu-west/lol/open/euw-5on5-fight-club-81/match/35861779/</a>) <font color="red">ERROR</font>, defwin/BO3/manual score ?
        <hr /><h2></h2><table width="400"><tr><td colspan="3"><hr /><center><font color="grey">teamid: 11902697</font></center></td></tr><tr height="30"><td width="30">1</td><td width="300">Hi Im Lustcena</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">1</td><td width="300">Zhorgey</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">1</td><td width="300">Voligirl</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">1</td><td width="300">Tilt</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">1</td><td width="300">itsBae</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 10428639</font></center></td></tr><tr height="30"><td width="30">2</td><td width="300">GarbageCollector</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">2</td><td width="300">Eye of Innos</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">2</td><td width="300">ThréshTalk</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">2</td><td width="300">Sisti Fibel</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">2</td><td width="300">Nuraxx</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 12339810</font></center></td></tr><tr height="30"><td width="30">3</td><td width="300">Marksmannnnnnn</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">3</td><td width="300">Byco The Prodigy</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">3</td><td width="300">The Yake</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">3</td><td width="300">Asrhon</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">3</td><td width="300">DomïnG0D</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 12184490</font></center></td></tr><tr height="30"><td width="30">4</td><td width="300">Xiithrian Eaphyn</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">4</td><td width="300">Gusta</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">4</td><td width="300">wDutz</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">4</td><td width="300">senusin</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">4</td><td width="300">Warge101</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 12356751</font></center></td></tr><tr height="30"><td width="30">5</td><td width="300">IHOOK T0xicG4m3r</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">IBelton</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">Bl4ckd00dl3</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">TheAlexD</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">TDC Zac Bot</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 12258916</font></center></td></tr><tr height="30"><td width="30">5</td><td width="300">TheSuperBomb</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">GennibauBeky</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">Gireck</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">zZcocco3Zz</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">Khaz Modan</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 12330861</font></center></td></tr><tr height="30"><td width="30">5</td><td width="300">eGirl Gift Skin</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">Kobatomato</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">Johnny McGrave</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">08jakob10</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">KaıŠa</td><td><blink>?</blink></td></tr><tr><td colspan="3"><hr /><center><font color="grey">teamid: 10248379</font></center></td></tr><tr height="30"><td width="30">5</td><td width="300">Deep sea baby</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">TwTv CleanRiiven</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">Gr0l</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">PhoenixForcê</td><td><blink>?</blink></td></tr><tr height="30"><td width="30">5</td><td width="300">MlSSISSIPPI</td><td><blink>?</blink></td></tr></table><hr><hr><table width="400"></table></pre>
        </body>
        </html>
          
