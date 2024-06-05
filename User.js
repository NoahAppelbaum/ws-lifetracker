"use strict";

import { Room } from "./Room";

export class User {
  constructor (send, roomID, lifeTotal = 20) {
    this._send = send;
    this.room = Room.get(RoomID);
    // this.id = //TODO: ID gen?
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
}
