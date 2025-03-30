function verifizieren() {
  const password = document.getElementById("password").value;
  const resultat = document.getElementById("resultat");
  const bar = document.getElementById("stärkeBar");

  let stärke = 0;

  if (password.length >= 6) stärke++;
  if (/[A-Z]/.test(password)) stärke++;
  if (/[0-9]/.test(password)) stärke++;
  if (/[^A-Za-z0-9]/.test(password)) stärke++;

  let text = "";
  let farbe = "red";
  let breite = "25%";

  if (stärke === 1) {
    text = "Sehr schwach";
    farbe = "red";
    breite = "25%";
  } else if (stärke === 2) {
    text = "Schwach";
    farbe = "orange";
    breite = "50%";
  } else if (stärke === 3) {
    text = "Gut";
    farbe = "gold";
    breite = "75%";
  } else if (stärke === 4) {
    text = "Stark 💪";
    farbe = "green";
    breite = "100%";
  } else {
    text = "Bitte Passwort eingeben";
  }

  resultat.textContent = text;
  bar.style.width = breite;
  bar.style.backgroundColor = farbe;
}
