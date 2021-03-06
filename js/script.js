
let terminal_input = document.getElementById("terminal_input")
let terminal_content  = document.getElementById("terminal_content")
let terminal_prompt = document.getElementById("prompt")

let user = "guest"
let path = "~"
let root = false
let is_prompt = true

function promoteFlitz(){
    prompt("Go add Flitz's bots.", "https://discordextremelist.xyz/en-US/en-us/bots/exorium")
}

function print(print){
    print = print.replaceAll("\n", "<br>")
    terminal_content.innerHTML += `<span style="overflow-wrap: anywhere">${print}</span><br>`
    terminal_content.children[terminal_content.childElementCount-1].scrollIntoView()
}

function clear_screen(){
    terminal_content.innerHTML = ""
}

function getPrompt(text=""){
    let prompt = "";
    prompt += `<span style='color: var(--green)'>${user}</span>`
    prompt += `<span style='color: var(--blue)'>@</span>`
    prompt += `<span style='color: var(--green)'>aresiel.dev</span>`
    prompt += `<span style='color: var(--blue)'>:</span>`
    prompt += `<span>${path}</span>`
    prompt += `<span style='color: var(${root ? "--red" : "--blue"})'>$&gt;</span>`
    return is_prompt ? prompt : text
}

function renderPrompt(){
    terminal_prompt.innerHTML = getPrompt()
}

function test(test){
    console.log("test")
    console.log(test)
}

function runCommand(input){
    let cmd_parts = input.split(" ")
    let cmd = cmd_parts[0]
    let args = cmd_parts.splice(1)

    print(getPrompt() + input)
    if(cmds[cmd]){
        cmds[cmd][0](args)
        terminal_input.placeholder = ""
    } else {
        if(cmd === "")
            return
        print(`No such command ${red(cmd)} found.`)
    }
}

terminal_input.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        let cmd = terminal_input.value
        runCommand(cmd)
        terminal_input.value = ""
    }
})

renderPrompt()
terminal_input.focus()
print(red("This is very incomplete and work in progress."))
