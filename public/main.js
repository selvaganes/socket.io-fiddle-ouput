"use strict";

//Modified: selvaganes
const socket = io();

(function() {

  //Added: selvaganes
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", function() {
      console.log("Sneezed");
      socket.emit('request', 'ACHOOOOO!!!' , (response) => {
        console.log(response)
      });
    });
  });

  socket.on("connect", () => {
    console.log(`connect ${socket.id}`);
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("disconnect", (reason) => {
    console.log(`disconnect due to ${reason}`);
  });

})();
