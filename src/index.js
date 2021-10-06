//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * room's methods
   */
  room = {
    /**
     * List rooms
     *
     * @param {ListRoomsRequest} req listRooms request
     * @returns {Promise<ListRoomsResponse>} A paged array of rooms
     */
    listRooms: req => {
      const { query } = req || {};

      return fetch(`${this.base}/rooms`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a room
     *
     * @param {CreateRoomRequest} req createRoom request
     * @returns {Promise<CreateRoomResponse>} The room created
     */
    createRoom: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createRoom");

      return fetch(`${this.base}/rooms`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find room by id
     *
     * @param {GetRoomRequest} req getRoom request
     * @returns {Promise<GetRoomResponse>} Expected response to a valid request
     */
    getRoom: req => {
      const { roomId } = req || {};

      if (!roomId) throw new Error("roomId is required for getRoom");

      return fetch(`${this.base}/rooms/${roomId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update room by id
     *
     * @param {UpdateRoomRequest} req updateRoom request
     * @returns {Promise<UpdateRoomResponse>} The room
     */
    updateRoom: req => {
      const { roomId, body } = req || {};

      if (!roomId) throw new Error("roomId is required for updateRoom");
      if (!body) throw new Error("requetBody is required for updateRoom");

      return fetch(`${this.base}/rooms/${roomId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete room
     *
     * @param {DeleteRoomRequest} req deleteRoom request
     */
    deleteRoom: req => {
      const { roomId } = req || {};

      if (!roomId) throw new Error("roomId is required for deleteRoom");

      return fetch(`${this.base}/rooms/${roomId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * meeting's methods
   */
  meeting = {
    /**
     * List meetings
     *
     * @param {ListMeetingsRequest} req listMeetings request
     * @returns {Promise<ListMeetingsResponse>} A paged array of meetings
     */
    listMeetings: req => {
      const { query } = req || {};

      return fetch(`${this.base}/meetings`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a meeting
     *
     * @param {CreateMeetingRequest} req createMeeting request
     * @returns {Promise<CreateMeetingResponse>} The meeting created
     */
    createMeeting: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createMeeting");

      return fetch(`${this.base}/meetings`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find meeting by id
     *
     * @param {GetMeetingRequest} req getMeeting request
     * @returns {Promise<GetMeetingResponse>} The meeting
     */
    getMeeting: req => {
      const { meetingId } = req || {};

      if (!meetingId) throw new Error("meetingId is required for getMeeting");

      return fetch(`${this.base}/meetings/${meetingId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update meeting by id
     *
     * @param {UpdateMeetingRequest} req updateMeeting request
     * @returns {Promise<UpdateMeetingResponse>} Updated meeting
     */
    updateMeeting: req => {
      const { meetingId, body } = req || {};

      if (!meetingId)
        throw new Error("meetingId is required for updateMeeting");
      if (!body) throw new Error("requetBody is required for updateMeeting");

      return fetch(`${this.base}/meetings/${meetingId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete meeting
     *
     * @param {DeleteMeetingRequest} req deleteMeeting request
     */
    deleteMeeting: req => {
      const { meetingId } = req || {};

      if (!meetingId)
        throw new Error("meetingId is required for deleteMeeting");

      return fetch(`${this.base}/meetings/${meetingId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Close a meeting
     *
     * @param {CloseMeetingRequest} req closeMeeting request
     * @returns {Promise<CloseMeetingResponse>} The meeting
     */
    closeMeeting: req => {
      const { meetingId } = req || {};

      if (!meetingId) throw new Error("meetingId is required for closeMeeting");

      return fetch(`${this.base}/meetings/${meetingId}/!close`, {
        method: "POST",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Add a member to a meeting
     *
     * @param {AddMemberRequest} req addMember request
     * @returns {Promise<AddMemberResponse>} The member
     */
    addMember: req => {
      const { meetingId, body } = req || {};

      if (!meetingId) throw new Error("meetingId is required for addMember");
      if (!body) throw new Error("requetBody is required for addMember");

      return fetch(`${this.base}/meetings/${meetingId}/members`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Remove a member
     *
     * @param {RemoveMemberRequest} req removeMember request
     */
    removeMember: req => {
      const { meetingId, memberId } = req || {};

      if (!meetingId) throw new Error("meetingId is required for removeMember");
      if (!memberId) throw new Error("memberId is required for removeMember");

      return fetch(`${this.base}/meetings/${meetingId}/members/${memberId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * door's methods
   */
  door = {
    /**
     * List doors
     *
     * @param {ListDoorsRequest} req listDoors request
     * @returns {Promise<ListDoorsResponse>} A paged array of doors
     */
    listDoors: req => {
      const { query } = req || {};

      return fetch(`${this.base}/doors`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * person's methods
   */
  person = {
    /**
     * List person
     *
     * @param {ListPersonRequest} req listPerson request
     * @returns {Promise<ListPersonResponse>} A paged array of person
     */
    listPerson: req => {
      const { query } = req || {};

      return fetch(`${this.base}/person`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
}
