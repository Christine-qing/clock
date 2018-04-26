export const focus = (el) => {
    el.focus()
}
export const changeRed = (el, binding) => {
    el.style.backgroundColor="red"

    el.style.fontSize = binding.value + 'px';
}

//在这里定义并导出我的自定义指令，指令里包含我想实现的操作。