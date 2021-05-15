let cmds = {
    "clear": clear,
    "echo": echo,
    "flitz": flitz,
    "exit": exit,
}

function help(args){

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