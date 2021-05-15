
terminal_input = document.getElementById("terminal_input")

function promoteFlitz(){
    prompt("Go add Flitz's bots.", "https://discordextremelist.xyz/en-US/en-us/bots/exorium")
}

function renderPrompt(){
    let prompt = document.getElementById("prompt")
    let newPrompt = ""

    newPrompt += `<span style='color: var(--green)'>${user}</span>`
    newPrompt += `<span style='color: var(--blue)'>@</span>`
    newPrompt += `<span style='color: var(--green)'>aresiel.dev</span>`
    newPrompt += `<span style='color: var(--blue)'>:</span>`
    newPrompt += `<span>${path}</span>`
    newPrompt += `<span style='color: var(${root ? "--red" : "--blue"})'>$&gt;</span>`

    prompt.innerHTML = newPrompt
}

function test(test){
    console.log("test")
    console.log(test)
}

function runCommand(cmd){
    console.log(`Command "${cmd}" ran.`)
}

terminal_input.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        let cmd = terminal_input.value
        runCommand(cmd)
        terminal_input.value = ""
    }
})

user = "guest"
path = "~"
root = false

renderPrompt()
terminal_input.focus()
