const playVideo = require('./playVideo');
const openStream = require('./openStream');
import { uid } from 'uid';
import { Peer } from 'peerjs'

const $ = require('jquery');
// const Peer = require('peerjs');


const config = {
    host: 'localhost',
    port: 3000,
    secure: true,
    key: 'peerjs',
    path: '/'
}

function getPeer() {
    const id = uid(10);
    $('#peer-id').append(id);
    return id;
}
const peer = Peer(getPeer(), config);

$('#btnCall').on("click", () => {
    const friendId = $('#txtFriendId').val();
    openStream(stream => {
        playVideo(stream, 'localStream');
        const call = peer.call(friendId, stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    })
});

peer.on('call', (call) => {
    openStream(stream => {
        playVideo(stream, 'localStream');
        call.answer(stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    })
})



// openStream(function(stream) {
//     playVideo(stream, 'localStream')
//     const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });
//     p.on('signal', token =>
//         $('#txtMySignal').val(JSON.stringify(token))
//     );

//     $('#btnConnect').click(() => {
//         const friendSignal = JSON.parse($('#txtFriendSignal').val());
//         p.signal(friendSignal);
//     });

//     p.on('stream', friendStream => playVideo(friendStream, 'friendStream'));
// })