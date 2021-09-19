declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  room: RoomAPI;
  meeting: MeetingAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface RoomAPI {
  /**
   * List rooms
   */
  listRooms(req: ListRoomsRequest): Promise<ListRoomsResponse>;
  /**
   * Create a room
   */
  createRoom(req: CreateRoomRequest): Promise<CreateRoomResponse>;
  /**
   * Find room by id
   */
  getRoom(req: GetRoomRequest): Promise<GetRoomResponse>;
  /**
   * Update room by id
   */
  updateRoom(req: UpdateRoomRequest): Promise<UpdateRoomResponse>;
  /**
   * Delete room
   */
  deleteRoom(req: DeleteRoomRequest): Promise<void>;
}
export interface MeetingAPI {
  /**
   * List meetings
   */
  listMeetings(req: ListMeetingsRequest): Promise<ListMeetingsResponse>;
  /**
   * Create a meeting
   */
  createMeeting(req: CreateMeetingRequest): Promise<CreateMeetingResponse>;
  /**
   * Find meeting by id
   */
  getMeeting(req: GetMeetingRequest): Promise<GetMeetingResponse>;
  /**
   * Update meeting by id
   */
  updateMeeting(req: UpdateMeetingRequest): Promise<UpdateMeetingResponse>;
  /**
   * Delete meeting
   */
  deleteMeeting(req: DeleteMeetingRequest): Promise<void>;
  /**
   * Close a meeting
   */
  closeMeeting(req: CloseMeetingRequest): Promise<CloseMeetingResponse>;
  /**
   * Add a member to a meeting
   */
  addMember(req: AddMemberRequest): Promise<AddMemberResponse>;
  /**
   * Remove a member
   */
  removeMember(req: RemoveMemberRequest): Promise<void>;
}

export interface ListRoomsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
  };
}
export interface ListRoomsResponse {
  body: ({
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateRoomRequest {
  /**
   * Room 创建文档
   */
  body: {
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  };
}
export interface CreateRoomResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetRoomRequest {
  roomId: string;
}
export interface GetRoomResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateRoomRequest {
  roomId: string;
  /**
   * Room doc
   */
  body: {
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  };
}
export interface UpdateRoomResponse {
  /**
   * Rfid device
   */
  body: {
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteRoomRequest {
  roomId: string;
}
export interface ListMeetingsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
  };
}
export interface ListMeetingsResponse {
  body: ({
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 成员
     */
    members: ({
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 角色
       */
      roles?: ("ADMIN" | "ARBITER")[];
      /**
       * 成员类型
       */
      type?: string;
      /**
       * 用户 id
       */
      user?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 角色
       */
      roles: ("ADMIN" | "ARBITER")[];
    })[];
    /**
     * 房间
     */
    room: {
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 房间名称
       */
      name?: string;
      /**
       * 房间号
       */
      no?: string;
      /**
       * 房间状态
       */
      state?: "OCCUPIED" | "FREE";
      /**
       * 房间类型
       */
      type?: string;
      /**
       * 摄像头直播流
       */
      liveStreamings?: string[];
      /**
       * 心电监护仪 id
       */
      ecgMonitor?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 会议状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateMeetingRequest {
  /**
   * Meeting 创建文档
   */
  body: {
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  } & {
    /**
     * 房间
     */
    room: string;
    /**
     * 成员
     */
    members?: string[];
  };
}
export interface CreateMeetingResponse {
  /**
   * Meeting
   */
  body: {
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 成员
     */
    members: ({
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 角色
       */
      roles?: ("ADMIN" | "ARBITER")[];
      /**
       * 成员类型
       */
      type?: string;
      /**
       * 用户 id
       */
      user?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 角色
       */
      roles: ("ADMIN" | "ARBITER")[];
    })[];
    /**
     * 房间
     */
    room: {
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 房间名称
       */
      name?: string;
      /**
       * 房间号
       */
      no?: string;
      /**
       * 房间状态
       */
      state?: "OCCUPIED" | "FREE";
      /**
       * 房间类型
       */
      type?: string;
      /**
       * 摄像头直播流
       */
      liveStreamings?: string[];
      /**
       * 心电监护仪 id
       */
      ecgMonitor?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 会议状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
  };
}
export interface GetMeetingRequest {
  meetingId: string;
}
export interface GetMeetingResponse {
  /**
   * Meeting
   */
  body: {
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 成员
     */
    members: ({
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 角色
       */
      roles?: ("ADMIN" | "ARBITER")[];
      /**
       * 成员类型
       */
      type?: string;
      /**
       * 用户 id
       */
      user?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 角色
       */
      roles: ("ADMIN" | "ARBITER")[];
    })[];
    /**
     * 房间
     */
    room: {
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 房间名称
       */
      name?: string;
      /**
       * 房间号
       */
      no?: string;
      /**
       * 房间状态
       */
      state?: "OCCUPIED" | "FREE";
      /**
       * 房间类型
       */
      type?: string;
      /**
       * 摄像头直播流
       */
      liveStreamings?: string[];
      /**
       * 心电监护仪 id
       */
      ecgMonitor?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 会议状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
  };
}
export interface UpdateMeetingRequest {
  meetingId: string;
  /**
   * Meeting doc
   */
  body: {
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  };
}
export interface UpdateMeetingResponse {
  /**
   * Meeting
   */
  body: {
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 成员
     */
    members: ({
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 角色
       */
      roles?: ("ADMIN" | "ARBITER")[];
      /**
       * 成员类型
       */
      type?: string;
      /**
       * 用户 id
       */
      user?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 角色
       */
      roles: ("ADMIN" | "ARBITER")[];
    })[];
    /**
     * 房间
     */
    room: {
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 房间名称
       */
      name?: string;
      /**
       * 房间号
       */
      no?: string;
      /**
       * 房间状态
       */
      state?: "OCCUPIED" | "FREE";
      /**
       * 房间类型
       */
      type?: string;
      /**
       * 摄像头直播流
       */
      liveStreamings?: string[];
      /**
       * 心电监护仪 id
       */
      ecgMonitor?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 会议状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
  };
}
export interface DeleteMeetingRequest {
  meetingId: string;
}
export interface CloseMeetingRequest {
  meetingId: string;
}
export interface CloseMeetingResponse {
  /**
   * Meeting
   */
  body: {
    /**
     * 会议标题
     */
    title?: string;
    /**
     * 会议类型
     */
    type?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 会议状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 图标
     */
    thumbnail?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 成员
     */
    members: ({
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 角色
       */
      roles?: ("ADMIN" | "ARBITER")[];
      /**
       * 成员类型
       */
      type?: string;
      /**
       * 用户 id
       */
      user?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 角色
       */
      roles: ("ADMIN" | "ARBITER")[];
    })[];
    /**
     * 房间
     */
    room: {
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 房间名称
       */
      name?: string;
      /**
       * 房间号
       */
      no?: string;
      /**
       * 房间状态
       */
      state?: "OCCUPIED" | "FREE";
      /**
       * 房间类型
       */
      type?: string;
      /**
       * 摄像头直播流
       */
      liveStreamings?: string[];
      /**
       * 心电监护仪 id
       */
      ecgMonitor?: string;
    } & {
      /**
       * mongodb id
       */
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 会议状态
     */
    state: "OPEN" | "CLOSED";
    /**
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
  };
}
export interface AddMemberRequest {
  meetingId: string;
  /**
   * Member create doc
   */
  body: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 角色
     */
    roles?: ("ADMIN" | "ARBITER")[];
    /**
     * 成员类型
     */
    type?: string;
    /**
     * 用户 id
     */
    user?: string;
  };
}
export interface AddMemberResponse {
  /**
   * Member response doc
   */
  body: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 角色
     */
    roles?: ("ADMIN" | "ARBITER")[];
    /**
     * 成员类型
     */
    type?: string;
    /**
     * 用户 id
     */
    user?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 角色
     */
    roles: ("ADMIN" | "ARBITER")[];
  };
}
export interface RemoveMemberRequest {
  meetingId: string;
  memberId: string;
}
export type DateTime = Date;

/**
 * mongodb id
 */
export type MongoId = string;

export interface AnyValue {
  [k: string]: any;
}

export type RoomState = "OCCUPIED" | "FREE";

export type MeetingState = "OPEN" | "CLOSED";

export type MeetingRole = "ADMIN" | "ARBITER";

/**
 * Room doc
 */
export interface RoomDoc {
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 房间名称
   */
  name?: string;
  /**
   * 房间号
   */
  no?: string;
  /**
   * 房间状态
   */
  state?: "OCCUPIED" | "FREE";
  /**
   * 房间类型
   */
  type?: string;
  /**
   * 摄像头直播流
   */
  liveStreamings?: string[];
  /**
   * 心电监护仪 id
   */
  ecgMonitor?: string;
}

/**
 * Room 创建文档
 */
export type RoomCreateDoc = {
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 房间名称
   */
  name?: string;
  /**
   * 房间号
   */
  no?: string;
  /**
   * 房间状态
   */
  state?: "OCCUPIED" | "FREE";
  /**
   * 房间类型
   */
  type?: string;
  /**
   * 摄像头直播流
   */
  liveStreamings?: string[];
  /**
   * 心电监护仪 id
   */
  ecgMonitor?: string;
};

/**
 * Rfid device
 */
export type Room = {
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 房间名称
   */
  name?: string;
  /**
   * 房间号
   */
  no?: string;
  /**
   * 房间状态
   */
  state?: "OCCUPIED" | "FREE";
  /**
   * 房间类型
   */
  type?: string;
  /**
   * 摄像头直播流
   */
  liveStreamings?: string[];
  /**
   * 心电监护仪 id
   */
  ecgMonitor?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * Member doc
 */
export interface MemberDoc {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 角色
   */
  roles?: ("ADMIN" | "ARBITER")[];
  /**
   * 成员类型
   */
  type?: string;
  /**
   * 用户 id
   */
  user?: string;
}

/**
 * Member create doc
 */
export type MemberCreateDoc = {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 角色
   */
  roles?: ("ADMIN" | "ARBITER")[];
  /**
   * 成员类型
   */
  type?: string;
  /**
   * 用户 id
   */
  user?: string;
};

/**
 * Member response doc
 */
export type Member = {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 角色
   */
  roles?: ("ADMIN" | "ARBITER")[];
  /**
   * 成员类型
   */
  type?: string;
  /**
   * 用户 id
   */
  user?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 角色
   */
  roles: ("ADMIN" | "ARBITER")[];
};

/**
 * Meeting doc
 */
export interface MeetingDoc {
  /**
   * 会议标题
   */
  title?: string;
  /**
   * 会议类型
   */
  type?: string;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 会议状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 图标
   */
  thumbnail?: string;
}

/**
 * Meeting 创建文档
 */
export type MeetingCreateDoc = {
  /**
   * 会议标题
   */
  title?: string;
  /**
   * 会议类型
   */
  type?: string;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 会议状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 图标
   */
  thumbnail?: string;
} & {
  /**
   * 房间
   */
  room: string;
  /**
   * 成员
   */
  members?: string[];
};

/**
 * Meeting
 */
export type Meeting = {
  /**
   * 会议标题
   */
  title?: string;
  /**
   * 会议类型
   */
  type?: string;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 会议状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 图标
   */
  thumbnail?: string;
} & {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 成员
   */
  members: ({
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 角色
     */
    roles?: ("ADMIN" | "ARBITER")[];
    /**
     * 成员类型
     */
    type?: string;
    /**
     * 用户 id
     */
    user?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 角色
     */
    roles: ("ADMIN" | "ARBITER")[];
  })[];
  /**
   * 房间
   */
  room: {
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 房间名称
     */
    name?: string;
    /**
     * 房间号
     */
    no?: string;
    /**
     * 房间状态
     */
    state?: "OCCUPIED" | "FREE";
    /**
     * 房间类型
     */
    type?: string;
    /**
     * 摄像头直播流
     */
    liveStreamings?: string[];
    /**
     * 心电监护仪 id
     */
    ecgMonitor?: string;
  } & {
    /**
     * mongodb id
     */
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  /**
   * 会议状态
   */
  state: "OPEN" | "CLOSED";
  /**
   * 会议开始时间
   */
  startAt?: Date;
  /**
   * 会议关闭时间
   */
  closeAt?: Date;
};

export interface MongoDefault {
  /**
   * mongodb id
   */
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
