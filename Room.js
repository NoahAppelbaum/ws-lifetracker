"use strict";

import { generateRoomID } from "./utils";



/** rooms registry */
const rooms = new Map();

export class Room {

  /** Get from the `rooms` registry,
   * creating if non-existent. */
  static get(roomID) {
    if (!rooms.has(roomID)) {
      //TODO: Logic to generate roomID/join
      rooms.set(roomID, new Room(roomID));
    }

    return rooms.get(roomID);
  }

  /** Make a new room */
  constructor(roomID) {
    this.id = roomID;
    this.members = new Set();
  }

  /** Handle member joining room */
  join(member) {
    this.members.add(member);
  }

  /** Handle member leaving room */
  leave(member) {
    this.members.delete(member);
  }

  /** Send message to all members in room */
  broadcast(data) {
    for (const member of this.members) {
      member.send(JSON.stringify(data));
    }
  }
}
