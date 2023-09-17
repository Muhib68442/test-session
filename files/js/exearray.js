import { classroomData } from './array.js';

// Function to populate HTML elements with room data
function populateRoomData() {
    const queryParams = new URLSearchParams(window.location.search);
    const roomNumber = queryParams.get("room");

    // Find the room data based on the room number
    const roomData = classroomData.find(room => room.room === roomNumber);

    if (roomData) {
        document.querySelector('.roomname').textContent = `${roomData.room}`;
        document.querySelector('#map-h').src = roomData.map_h;
        document.querySelector('.desc').textContent = roomData.text;
        document.querySelector('.floor').textContent = `${roomData.floor} Floor`;
        document.querySelector('.bldg').textContent = `${roomData.bldg}`;
        // document.querySelector('#map-f').src = roomData.map_f;
        // document.querySelector('#map-b').src = roomData.map_b;
        document.querySelector('#img-1').src = roomData.img_1;
        document.querySelector('#img-2').src = roomData.img_2;
        document.querySelector('#img-out').src = roomData.img_out;
    } else {
        // Handle the case where the room data is not found
        console.error(`Room ${roomNumber} not found.`);
    }
}

// Call the populateRoomData function to populate the elements
populateRoomData();


