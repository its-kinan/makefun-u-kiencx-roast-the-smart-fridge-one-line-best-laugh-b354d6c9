import { mkdirSync, writeFileSync } from "node:fs";

// Roast the smart fridge: one line, at most 160 characters.
// Revised in-session: cut the padding ("sends me a push notification
// every time" -> "pings me every time"), dropped the clunky Wi-Fi
// password rent, and gave the landlord image a sting at the end.
const LINE =
  "My smart fridge pings me every time the milk expires, a tiny landlord evicting my groceries while judging my 2am snacks from inside the cold.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
