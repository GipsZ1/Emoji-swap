const btn=document.getElementById("main")

const emojis=[
    '🥰',
    "😉",
    "🤩",
    "🤪",
    "🫣",
    '🤫'
];

btn.addEventListener('mouseover',()=>{
    btn.textContent=emojis[Math.floor(Math.random()*emojis.length)]
})