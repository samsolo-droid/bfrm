let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

upComing = document.querySelector('a.up-coming')

const data = {
    url: "https://youtube.com/embed/HoQ57fTU02p",
    preacher: "Apostle Robert ONOCHIE",
    event: " 2022-02-27 Sunday Service",
    title: "The Lord's Mercy",
    description: "The Lord so loves us that He renewes every morning his grace for humans",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dicta! Est enim nihil quasi sequi quos perferendis pariatur, ut at excepturi quia, officiis assumenda quam, dignissimos tempora incidunt. Quis, nihil?",
    date: "2022/02/27"
}
const url = "http://localhost:5000/preaching_messages"

const options = {
    method: 'POST',
    headers: {
        'Conten-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
upComing.addEventListener('click', () => {
    console.log(upComing);
    fetch(url)
        .then(res => res.json())
        .then(a => console.log(a))
    
    }
)


upComing.addEventListener('dblclick', () => {
    fetch(url, options)
        .then(res => res.json())
        .then(a => console.log(a))
    
    }
)