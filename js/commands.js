let cmds = {
    "clear": [clear, "Clear the terminal", "clear"],
    "echo": [echo, "Echo back arguments", "echo &lt;text&gt;"],
    "flitz": [flitz, undefined, undefined, true],
    "exit": [exit, "Exit the terminal", "exit"],
    "help": [help, "View this message", "help"],
    "rickroll": [rickroll, undefined, undefined, true],
}

function help(args){
    let output = "<table><tr><th>Command</th><th>Description</th><th>Usage</th></tr>"
    for (let cmdKey in cmds) {
        if(cmds[cmdKey][3]) continue;
        output += `<tr><td>${cmdKey}</td><td>${cmds[cmdKey][1]}</td><td>${cmds[cmdKey][2]}</td></tr>`
    }
    output += "</table>"
    print(output)
}

function exit(args){
    terminal_content.parentElement.style.animationName = "fade_out"
    terminal_content.parentElement.style.animationDuration = "1s"

    is_prompt = false
    setTimeout(() => {
        terminal_content.parentElement.remove()
    }, 2000)
}

function clear(args){
    clear_screen()
}

function echo(args){
    print(args.join(" "))
}

function flitz(args){
    print(red("Not yet implemented"))
}

function rickroll(args){
    print(`<iframe src="https://player.vimeo.com/video/148751763?autoplay=1&title=0&byline=0&portrait=0" style="width: 50vw; height: 50vh;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`)
}