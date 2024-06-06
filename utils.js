
/** Generates an `n` character Room ID,
 * like `generateRoomID(4)` => "YYYY".
 * IDs are uppercase letters, A-Z
 */
export function generateRoomID(n) {
  let ID = "";

  for (let i = 0; i < n; i++) {
    ID += genLetter();
  }

  return ID;
}

/** Generates a random uppercase letter, A-Z */
function genLetter() {
  const asciiVal = Math.floor(Math.random() * 27) + 65;
  return String.fromCharCode(asciiVal);
}
