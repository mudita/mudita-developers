import "./src/styles/anr-code-theme.css"
import "./src/fonts/jetbrains-font.css"

const setupHiringCLI = () => {
  // Styles.
  const logoStyle = "color: rgb(234,40,41)"
  const typeStyle = "color: black"
  const textStyle = "font-size: 1.1rem"
  const headerStyle = "font-size: 1.4rem"
  const smallStyle = "font-size: 1rem; color: grey"
  const codeStyle =
    "color: rgb(234, 40, 41); background-color: #f7ede8; font-size: 1.1rem"

  // Settings.
  const logoCutOffLine = 20

  // Content.
  const rawLogo = `
    ║╗
    ╟╬▌
    ╟╬▌          ╬╬
    ╟╬▌ ╒,  ],   ╬╬
    ╟╬▌ ╞╬▓ ]╬▓  ╬╬
            ]╬╬  ╬╬                               ██        ██             ██ ██
╬╬╬╬╬╬╬╬╬╬╬ ]╬╬  ╬╬      ▄██████ ▐██████▄ ██████▌ ▀▀ ██████ ▀▀ ███▌▄█████▄ ██ ██
╬╬Γ ,,  .,, ]╬╬  ╬╬     ▐██   ██ ▐█▌   ██ ██   ██▌   ██  ██    ██ ▐█▌   ██ ██ ██
 ╚Γ ╟╬▌ ╞╬╬ ]╬╬  ╝└      ▀██████ ▐██████▀ ███████    ██  ██    ██  ▀█████▀ ██ ██
    ╟╬▌ ╞╬╬ ]╬╬                  ▐█▌      ██
     ╙▌ ╞╬╬ ]╩
        ╞╬╬
` // Generated with https://asciiart.club/ with minor manual fixes.

  const hiringHeader = `%c
We're hiring!
`

  const hiringContent = `%c
You were not expecting that, were you?

Anyway, want to know more? Type %cyes%c in the console prompt.
`

  const positions = `%c
Currently, we're looking for awesome people who can help us strengthen the team in the following areas:

1. [react] Front-end (React) developer.
2. [node] Back-end (Node/NestJS) developer at Vooom.
3. [ios] iOS (Swift) developer at Vooom.
4. [android] Android (Kotlin) developer at Vooom.

Type the [tag] of the position you're interested in to learn more.

I'll redirect you to the position page. 🤘

`

  const reactRedirectionNotice = `Awesome! React is the bestiest!`
  const vooomBackendRedirectionNotice = `Nice! Never enough Noding!`
  const vooomiOSredirectionNotice = `Fruits connoisseur, eh?`
  const vooomAndroidRedirectionNotice = `That green fellow wants to give you a hug!`

  const redirect = (notice, url) => {
    const content = `%c
${notice}

You'll be redirected in a second.

%c
If you weren't, that means we screwed something up. In that case, please kindly visit ${url} manually. 🙈

`
    console.log(content, textStyle, smallStyle)
    setTimeout(() => {
      window.open(url)
    }, 2000)
  }

  // Colorize the logotype.
  const { printableLogo, styles: logoStyles } = rawLogo
    .split("\n")
    .map(line => {
      if (line.length > logoCutOffLine) {
        return {
          lineContent: [
            line.substring(0, logoCutOffLine),
            line.substring(logoCutOffLine),
          ]
            .map(part => `%c${part}`)
            .join(""),
          lineStyles: [logoStyle, typeStyle],
        }
      } else {
        return {
          lineContent: `%c${line}`,
          lineStyles: [logoStyle],
        }
      }
    })
    .reduce(
      (acc, lineProps) => {
        acc.printableLogo += `\n${lineProps.lineContent}`
        acc.styles.push(...lineProps.lineStyles)
        return acc
      },
      { printableLogo: "", styles: [] }
    )

  // Commands setup.
  Object.defineProperties(window, {
    yes: {
      get() {
        console.log(positions, textStyle)
        return "🧐"
      },
    },
    react: {
      get() {
        redirect(
          reactRedirectionNotice,
          "https://appnroll.com/careers/react-developer/"
        )
        return "🤓"
      },
    },
    node: {
      get() {
        redirect(
          vooomBackendRedirectionNotice,
          "https://appnroll.com/careers/node-js-developer/"
        )
        return "🤓"
      },
    },
    ios: {
      get() {
        redirect(
          vooomiOSredirectionNotice,
          "https://appnroll.com/careers/ios-developer/"
        )
        return "🤓"
      },
    },
    android: {
      get() {
        redirect(
          vooomAndroidRedirectionNotice,
          "https://appnroll.com/careers/senior-android-developer-or-vooom/"
        )
        return "🤓"
      },
    },
  })

  // Initial print.
  console.log(
    [printableLogo, hiringHeader, hiringContent].join("\n\n"),
    ...logoStyles,
    headerStyle,
    textStyle,
    codeStyle,
    textStyle
  )
}

// Postpone the bootstrap for other logs to come in first.
setTimeout(setupHiringCLI, 2000)
