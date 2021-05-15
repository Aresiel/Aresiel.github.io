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
    document.getElementsByTagName("body")[0].style.animationName = "fade_out"
    document.getElementsByTagName("body")[0].style.animationDuration = "1s"

    is_prompt = false
    setTimeout(() => {
        document.getElementsByTagName("body")[0].remove()
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