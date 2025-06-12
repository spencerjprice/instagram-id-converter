// src/index.ts
import BigNumber from "bignumber.js";

// src/chars.ts
var CHARS_MAP = {
  "0": "A",
  "1": "B",
  "2": "C",
  "3": "D",
  "4": "E",
  "5": "F",
  "6": "G",
  "7": "H",
  "8": "I",
  "9": "J",
  "a": "K",
  "b": "L",
  "c": "M",
  "d": "N",
  "e": "O",
  "f": "P",
  "g": "Q",
  "h": "R",
  "i": "S",
  "j": "T",
  "k": "U",
  "l": "V",
  "m": "W",
  "n": "X",
  "o": "Y",
  "p": "Z",
  "q": "a",
  "r": "b",
  "s": "c",
  "t": "d",
  "u": "e",
  "v": "f",
  "w": "g",
  "x": "h",
  "y": "i",
  "z": "j",
  "A": "k",
  "B": "l",
  "C": "m",
  "D": "n",
  "E": "o",
  "F": "p",
  "G": "q",
  "H": "r",
  "I": "s",
  "J": "t",
  "K": "u",
  "L": "v",
  "M": "w",
  "N": "x",
  "O": "y",
  "P": "z",
  "Q": "0",
  "R": "1",
  "S": "2",
  "T": "3",
  "U": "4",
  "V": "5",
  "W": "6",
  "X": "7",
  "Y": "8",
  "Z": "9",
  "$": "-",
  "_": "_"
};

// src/index.ts
BigNumber.set({
  ALPHABET: Object.keys(CHARS_MAP).join("")
});
var REVERSE_CHARS_MAP = Object.fromEntries(Object.entries(CHARS_MAP).map(([key, value]) => [value, key]));
var instagramIdToUrlSegment = (instagramId) => {
  const id = new BigNumber(instagramId).toString(64);
  return id.split("").map((char) => CHARS_MAP[char]).join("");
};
var urlSegmentToInstagramId = (urlSegment) => {
  return new BigNumber(urlSegment.split("").map((char) => REVERSE_CHARS_MAP[char]).join(""), 64).toString(10);
};
export {
  instagramIdToUrlSegment,
  urlSegmentToInstagramId
};
