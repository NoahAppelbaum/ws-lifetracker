"use strict";

import { Room } from "./Room";

export class User {
  constructor (send, roomID, name, lifeTotal = 20) {
    this._send = send;
    this.room = Room.get(roomID);
    this.name = name
    this.life = lifeTotal;
    //TODO: this.color = [gen random color]
  }

  send(data) {
    try {
      this._send(data);
    } catch {

    }
  }

  joinRoom() {
    this.room.join(this);
  }

  setLifeTotal(number) {
    this.lifeTotal = number;
  }

  handleBroadcast(number) {
    this.room.broadcast({
      user: this.name,
      type: "update",
      lifeTotal: this.lifeTotal
    })
  }

  handleClientMessage(jsonData) {

  }

  //TODO: Figure out leaving and disconnection protocl
  //ideally one can reconnect, with help from the other user's
  //data or persistent state in the room, serverside, (probably this), but
  //maybe that comes later
}
