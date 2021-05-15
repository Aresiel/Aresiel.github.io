let cmds = {
    "clear": clear,
    "echo": echo,
}

function clear(){
    clear_screen()
}

function echo(text){
    print(text.join(" "))
}