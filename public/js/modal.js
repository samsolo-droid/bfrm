const modalContainer = document.querySelector('.up-coming-modal-container')
const actions = document.querySelectorAll('.modal-trigger')

actions.forEach(action => {
    action.addEventListener('click', ()=>{
        modalContainer.classList.toggle('active')
    })
})

const VideoContainer = document.querySelector('.preaching-video-modal-container')
const videoActions = document.querySelectorAll('.video-trigger')
const videoLoaded = document.querySelector('.video-loaded')

videoActions.forEach(action => {
    action.addEventListener('click', ()=>{
        VideoContainer.classList.toggle('active')
        videoLoaded.classList.toggle('deactivate')
    })
})

let videoPlaylist = document.querySelectorAll('.content .vid')

videoPlaylist.forEach(video => {
    video.addEventListener('click', ()=>{
        videoPlaylist.forEach(vid => vid.classList.remove('active'))
        video.classList.add('active')
    })
})

