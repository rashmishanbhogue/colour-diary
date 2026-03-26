# colour diary

a tiny desktop app to log one colour per day. no words, no ratings, just a hue. over weeks and months you build a grid of colours — your emotional year in abstract.

built with electron. works on windows, mac, and linux.

---

## what it does

- pick one colour that represents how your day felt
- it saves automatically to your computer, nothing goes anywhere else
- see your whole year as a colour grid
- navigate back to previous years with the arrow keys
- streak counter so you feel bad about missing a day (affectionately)

---

## download and install

go to the [releases](../../releases) page and download the file for your system:

- **windows** -- `colour-diary-x.x.x Setup.exe`, double click, done
- **mac** -- `colour-diary-x.x.x.dmg`, open and drag to applications
- **linux** -- `colour-diary-x.x.x.deb` or `.rpm` depending on your distro

no node, no terminal, no setup. just open it.

---

## run from source

if you want to poke around or build it yourself:

**what you need**
- [node.js](https://nodejs.org) v18 or higher (comes with npm)
- git

**steps**

```bash
git clone https://github.com/rashmishanbhogue/colour-diary.git
cd colour-diary
npm install
npm start
```

that opens the app in dev mode. to build an installer for your platform:

```bash
npm run make
```

the installer appears in `out/make/`.

---

## where your data lives

your colour entries are saved locally as a tiny json file:

- **windows** -- `C:\Users\YourName\AppData\Roaming\colour-diary\diary.json`
- **mac** -- `~/Library/Application Support/colour-diary/diary.json`
- **linux** -- `~/.config/colour-diary/diary.json`

you can back it up, move it, or peek at it anytime.

---

## stack

- [electron](https://electronjs.org)
- [electron forge](https://electronforge.io)
- vanilla html, css, js -- no frameworks

---

made by [rashmi shanbhogue](https://github.com/rashmishanbhogue)
