declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  room: RoomAPI;
  meeting: MeetingAPI;
  door: DoorAPI;
  camera: CameraAPI;
  person: PersonAPI;
  message: MessageAPI;
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
export interface DoorAPI {
  /**
   * List doors
   */
  listDoors(req: ListDoorsRequest): Promise<ListDoorsResponse>;
}
export interface CameraAPI {
  /**
   * List hik cameras
   */
  listCameras(req: ListCamerasRequest): Promise<ListCamerasResponse>;
  /**
   * get camera and realplay stream
   */
  getCamera(req: GetCameraRequest): Promise<GetCameraResponse>;
}
export interface PersonAPI {
  /**
   * List person
   */
  listPerson(req: ListPersonRequest): Promise<ListPersonResponse>;
}
export interface MessageAPI {
  /**
   * List messages
   */
  listMessages(req: ListMessagesRequest): Promise<ListMessagesResponse>;
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
    startAt_lt?: string;
    startAt_gt?: string;
    closeAt_lt?: string;
    closeAt_gt?: string;
    state?: "OPEN" | "CLOSED";
    title_like?: string;
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 警号、工号
       */
      worknumber?: string;
      /**
       * 所属单位
       */
      company?: string;
      /**
       * 海康资源
       */
      hik?: {
        /**
         * 海康人员 id
         */
        personId?: string;
        /**
         * 照片 uri
         */
        picUri?: string;
        /**
         * 海康资源编号
         */
        serverIndexCode?: string;
      };
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
      /**
       * 门禁设备 id
       */
      door?: string;
      /**
       * 刷脸设备 id
       */
      faceDevice?: string;
      /**
       * 摄像头数组
       */
      cameras?: {
        /**
         * 摄像头的标题
         */
        name?: string;
        /**
         * 摄像头在海康中的编号
         */
        indexCode?: string;
      }[];
      /**
       * 位置信息
       */
      location?: {
        /**
         * 横坐标
         */
        x?: number;
        /**
         * 纵坐标
         */
        y?: number;
        /**
         * 高度坐标
         */
        z?: number;
        /**
         * 楼层
         */
        floor?: number;
      };
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
     * 视频流
     */
    streams?: {
      /**
       * 视频流名称
       */
      title?: string;
      /**
       * 码流
       */
      url?: string;
    }[];
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
    members?: {
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
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 警号、工号
       */
      worknumber?: string;
      /**
       * 所属单位
       */
      company?: string;
      /**
       * 海康资源
       */
      hik?: {
        /**
         * 海康人员 id
         */
        personId?: string;
        /**
         * 照片 uri
         */
        picUri?: string;
        /**
         * 海康资源编号
         */
        serverIndexCode?: string;
      };
    }[];
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 警号、工号
       */
      worknumber?: string;
      /**
       * 所属单位
       */
      company?: string;
      /**
       * 海康资源
       */
      hik?: {
        /**
         * 海康人员 id
         */
        personId?: string;
        /**
         * 照片 uri
         */
        picUri?: string;
        /**
         * 海康资源编号
         */
        serverIndexCode?: string;
      };
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
      /**
       * 门禁设备 id
       */
      door?: string;
      /**
       * 刷脸设备 id
       */
      faceDevice?: string;
      /**
       * 摄像头数组
       */
      cameras?: {
        /**
         * 摄像头的标题
         */
        name?: string;
        /**
         * 摄像头在海康中的编号
         */
        indexCode?: string;
      }[];
      /**
       * 位置信息
       */
      location?: {
        /**
         * 横坐标
         */
        x?: number;
        /**
         * 纵坐标
         */
        y?: number;
        /**
         * 高度坐标
         */
        z?: number;
        /**
         * 楼层
         */
        floor?: number;
      };
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
     * 视频流
     */
    streams?: {
      /**
       * 视频流名称
       */
      title?: string;
      /**
       * 码流
       */
      url?: string;
    }[];
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 警号、工号
       */
      worknumber?: string;
      /**
       * 所属单位
       */
      company?: string;
      /**
       * 海康资源
       */
      hik?: {
        /**
         * 海康人员 id
         */
        personId?: string;
        /**
         * 照片 uri
         */
        picUri?: string;
        /**
         * 海康资源编号
         */
        serverIndexCode?: string;
      };
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
      /**
       * 门禁设备 id
       */
      door?: string;
      /**
       * 刷脸设备 id
       */
      faceDevice?: string;
      /**
       * 摄像头数组
       */
      cameras?: {
        /**
         * 摄像头的标题
         */
        name?: string;
        /**
         * 摄像头在海康中的编号
         */
        indexCode?: string;
      }[];
      /**
       * 位置信息
       */
      location?: {
        /**
         * 横坐标
         */
        x?: number;
        /**
         * 纵坐标
         */
        y?: number;
        /**
         * 高度坐标
         */
        z?: number;
        /**
         * 楼层
         */
        floor?: number;
      };
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
     * 视频流
     */
    streams?: {
      /**
       * 视频流名称
       */
      title?: string;
      /**
       * 码流
       */
      url?: string;
    }[];
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 警号、工号
       */
      worknumber?: string;
      /**
       * 所属单位
       */
      company?: string;
      /**
       * 海康资源
       */
      hik?: {
        /**
         * 海康人员 id
         */
        personId?: string;
        /**
         * 照片 uri
         */
        picUri?: string;
        /**
         * 海康资源编号
         */
        serverIndexCode?: string;
      };
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
      /**
       * 门禁设备 id
       */
      door?: string;
      /**
       * 刷脸设备 id
       */
      faceDevice?: string;
      /**
       * 摄像头数组
       */
      cameras?: {
        /**
         * 摄像头的标题
         */
        name?: string;
        /**
         * 摄像头在海康中的编号
         */
        indexCode?: string;
      }[];
      /**
       * 位置信息
       */
      location?: {
        /**
         * 横坐标
         */
        x?: number;
        /**
         * 纵坐标
         */
        y?: number;
        /**
         * 高度坐标
         */
        z?: number;
        /**
         * 楼层
         */
        floor?: number;
      };
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
     * 视频流
     */
    streams?: {
      /**
       * 视频流名称
       */
      title?: string;
      /**
       * 码流
       */
      url?: string;
    }[];
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
     * 会议开始时间
     */
    startAt?: Date;
    /**
     * 会议关闭时间
     */
    closeAt?: Date;
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
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 警号、工号
       */
      worknumber?: string;
      /**
       * 所属单位
       */
      company?: string;
      /**
       * 海康资源
       */
      hik?: {
        /**
         * 海康人员 id
         */
        personId?: string;
        /**
         * 照片 uri
         */
        picUri?: string;
        /**
         * 海康资源编号
         */
        serverIndexCode?: string;
      };
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
      /**
       * 门禁设备 id
       */
      door?: string;
      /**
       * 刷脸设备 id
       */
      faceDevice?: string;
      /**
       * 摄像头数组
       */
      cameras?: {
        /**
         * 摄像头的标题
         */
        name?: string;
        /**
         * 摄像头在海康中的编号
         */
        indexCode?: string;
      }[];
      /**
       * 位置信息
       */
      location?: {
        /**
         * 横坐标
         */
        x?: number;
        /**
         * 纵坐标
         */
        y?: number;
        /**
         * 高度坐标
         */
        z?: number;
        /**
         * 楼层
         */
        floor?: number;
      };
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
     * 视频流
     */
    streams?: {
      /**
       * 视频流名称
       */
      title?: string;
      /**
       * 码流
       */
      url?: string;
    }[];
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
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 警号、工号
     */
    worknumber?: string;
    /**
     * 所属单位
     */
    company?: string;
    /**
     * 海康资源
     */
    hik?: {
      /**
       * 海康人员 id
       */
      personId?: string;
      /**
       * 照片 uri
       */
      picUri?: string;
      /**
       * 海康资源编号
       */
      serverIndexCode?: string;
    };
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
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 警号、工号
     */
    worknumber?: string;
    /**
     * 所属单位
     */
    company?: string;
    /**
     * 海康资源
     */
    hik?: {
      /**
       * 海康人员 id
       */
      personId?: string;
      /**
       * 照片 uri
       */
      picUri?: string;
      /**
       * 海康资源编号
       */
      serverIndexCode?: string;
    };
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
export interface ListDoorsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
  };
}
export interface ListDoorsResponse {
  body: {
    /**
     * 设备id
     */
    indexCode: string;
    /**
     * 通道类型
     */
    channelType?: string;
    /**
     * 编号
     */
    doorNo?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 所属区域
     */
    regionName?: string;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListCamerasRequest {
  query?: {
    _limit?: number;
    _offset?: number;
  };
}
export interface ListCamerasResponse {
  body: {
    /**
     * 设备id
     */
    cameraIndexCode: string;
    /**
     * 通道编号
     */
    channelNo?: string;
    /**
     * 通道类型
     */
    channelType?: string;
    /**
     * 名称
     */
    cameraName?: string;
    /**
     * 类型
     */
    cameraType?: string;
    /**
     * 所属区域
     */
    regionIndexCode?: string;
    /**
     * 实时视频流（ws协议）
     */
    url?: string;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetCameraRequest {
  cameraIndexCode: string;
  query?: {
    transcode?: number;
    resolution?: string;
    bitrate?: number;
    framerate?: number;
  };
}
export interface GetCameraResponse {
  /**
   * Hik Camera
   */
  body: {
    /**
     * 设备id
     */
    cameraIndexCode: string;
    /**
     * 通道编号
     */
    channelNo?: string;
    /**
     * 通道类型
     */
    channelType?: string;
    /**
     * 名称
     */
    cameraName?: string;
    /**
     * 类型
     */
    cameraType?: string;
    /**
     * 所属区域
     */
    regionIndexCode?: string;
    /**
     * 实时视频流（ws协议）
     */
    url?: string;
  };
}
export interface ListPersonRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    orgIndexCodes?: string;
  };
}
export interface ListPersonResponse {
  body: {
    /**
     * 人员 id
     */
    personId?: string;
    /**
     * 人员姓名
     */
    personName?: string;
    /**
     * 性别
     */
    gender?: number;
    /**
     * 组织编号
     */
    orgIndexCode?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 工号
     */
    jobNo?: string;
    /**
     * 身份类别
     */
    certificateType?: number;
    /**
     * 证件号
     */
    certificateNo?: string;
    /**
     * 部门路径
     */
    orgPath?: string;
    /**
     * 部门名称路径
     */
    orgPathName?: string;
    /**
     * 照片
     */
    personPhoto?: {
      /**
       * 照片 id
       */
      personPhotoIndexCode?: string;
      /**
       * 照片 uri
       */
      picUri?: string;
      /**
       * 海康资源编号
       */
      serverIndexCode?: string;
    }[];
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListMessagesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    type?: string[];
    topic?: string[];
  };
}
export interface ListMessagesResponse {
  body: ({
    /**
     * 会议id
     */
    meeting?: string;
    /**
     * 房间id
     */
    room?: string;
    /**
     * 消息内容
     */
    content?: string;
    /**
     * 用户id
     */
    user?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 资源类型
     */
    mime?: string;
    /**
     * 资源地址
     */
    uri?: string;
    /**
     * 消息主题
     */
    topic?: string;
    /**
     * 类型
     */
    at?: Date;
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
 * 位置信息
 */
export interface Location {
  /**
   * 横坐标
   */
  x?: number;
  /**
   * 纵坐标
   */
  y?: number;
  /**
   * 高度坐标
   */
  z?: number;
  /**
   * 楼层
   */
  floor?: number;
}

/**
 * Hik Door
 */
export interface Door {
  /**
   * 设备id
   */
  indexCode: string;
  /**
   * 通道类型
   */
  channelType?: string;
  /**
   * 编号
   */
  doorNo?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 所属区域
   */
  regionName?: string;
}

/**
 * Hik Camera
 */
export interface Camera {
  /**
   * 设备id
   */
  cameraIndexCode: string;
  /**
   * 通道编号
   */
  channelNo?: string;
  /**
   * 通道类型
   */
  channelType?: string;
  /**
   * 名称
   */
  cameraName?: string;
  /**
   * 类型
   */
  cameraType?: string;
  /**
   * 所属区域
   */
  regionIndexCode?: string;
  /**
   * 实时视频流（ws协议）
   */
  url?: string;
}

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
  /**
   * 门禁设备 id
   */
  door?: string;
  /**
   * 刷脸设备 id
   */
  faceDevice?: string;
  /**
   * 摄像头数组
   */
  cameras?: {
    /**
     * 摄像头的标题
     */
    name?: string;
    /**
     * 摄像头在海康中的编号
     */
    indexCode?: string;
  }[];
  /**
   * 位置信息
   */
  location?: {
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 高度坐标
     */
    z?: number;
    /**
     * 楼层
     */
    floor?: number;
  };
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
  /**
   * 门禁设备 id
   */
  door?: string;
  /**
   * 刷脸设备 id
   */
  faceDevice?: string;
  /**
   * 摄像头数组
   */
  cameras?: {
    /**
     * 摄像头的标题
     */
    name?: string;
    /**
     * 摄像头在海康中的编号
     */
    indexCode?: string;
  }[];
  /**
   * 位置信息
   */
  location?: {
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 高度坐标
     */
    z?: number;
    /**
     * 楼层
     */
    floor?: number;
  };
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
  /**
   * 门禁设备 id
   */
  door?: string;
  /**
   * 刷脸设备 id
   */
  faceDevice?: string;
  /**
   * 摄像头数组
   */
  cameras?: {
    /**
     * 摄像头的标题
     */
    name?: string;
    /**
     * 摄像头在海康中的编号
     */
    indexCode?: string;
  }[];
  /**
   * 位置信息
   */
  location?: {
    /**
     * 横坐标
     */
    x?: number;
    /**
     * 纵坐标
     */
    y?: number;
    /**
     * 高度坐标
     */
    z?: number;
    /**
     * 楼层
     */
    floor?: number;
  };
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
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 警号、工号
   */
  worknumber?: string;
  /**
   * 所属单位
   */
  company?: string;
  /**
   * 海康资源
   */
  hik?: {
    /**
     * 海康人员 id
     */
    personId?: string;
    /**
     * 照片 uri
     */
    picUri?: string;
    /**
     * 海康资源编号
     */
    serverIndexCode?: string;
  };
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
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 警号、工号
   */
  worknumber?: string;
  /**
   * 所属单位
   */
  company?: string;
  /**
   * 海康资源
   */
  hik?: {
    /**
     * 海康人员 id
     */
    personId?: string;
    /**
     * 照片 uri
     */
    picUri?: string;
    /**
     * 海康资源编号
     */
    serverIndexCode?: string;
  };
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
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 警号、工号
   */
  worknumber?: string;
  /**
   * 所属单位
   */
  company?: string;
  /**
   * 海康资源
   */
  hik?: {
    /**
     * 海康人员 id
     */
    personId?: string;
    /**
     * 照片 uri
     */
    picUri?: string;
    /**
     * 海康资源编号
     */
    serverIndexCode?: string;
  };
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
 * Message doc
 */
export interface MessageDoc {
  /**
   * 会议id
   */
  meeting?: string;
  /**
   * 房间id
   */
  room?: string;
  /**
   * 消息内容
   */
  content?: string;
  /**
   * 用户id
   */
  user?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 资源类型
   */
  mime?: string;
  /**
   * 资源地址
   */
  uri?: string;
  /**
   * 消息主题
   */
  topic?: string;
  /**
   * 类型
   */
  at?: Date;
}

/**
 * Message
 */
export type Message = {
  /**
   * 会议id
   */
  meeting?: string;
  /**
   * 房间id
   */
  room?: string;
  /**
   * 消息内容
   */
  content?: string;
  /**
   * 用户id
   */
  user?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 资源类型
   */
  mime?: string;
  /**
   * 资源地址
   */
  uri?: string;
  /**
   * 消息主题
   */
  topic?: string;
  /**
   * 类型
   */
  at?: Date;
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
   * 会议开始时间
   */
  startAt?: Date;
  /**
   * 会议关闭时间
   */
  closeAt?: Date;
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
   * 会议开始时间
   */
  startAt?: Date;
  /**
   * 会议关闭时间
   */
  closeAt?: Date;
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
  members?: {
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
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 警号、工号
     */
    worknumber?: string;
    /**
     * 所属单位
     */
    company?: string;
    /**
     * 海康资源
     */
    hik?: {
      /**
       * 海康人员 id
       */
      personId?: string;
      /**
       * 照片 uri
       */
      picUri?: string;
      /**
       * 海康资源编号
       */
      serverIndexCode?: string;
    };
  }[];
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
   * 会议开始时间
   */
  startAt?: Date;
  /**
   * 会议关闭时间
   */
  closeAt?: Date;
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
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 警号、工号
     */
    worknumber?: string;
    /**
     * 所属单位
     */
    company?: string;
    /**
     * 海康资源
     */
    hik?: {
      /**
       * 海康人员 id
       */
      personId?: string;
      /**
       * 照片 uri
       */
      picUri?: string;
      /**
       * 海康资源编号
       */
      serverIndexCode?: string;
    };
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
    /**
     * 门禁设备 id
     */
    door?: string;
    /**
     * 刷脸设备 id
     */
    faceDevice?: string;
    /**
     * 摄像头数组
     */
    cameras?: {
      /**
       * 摄像头的标题
       */
      name?: string;
      /**
       * 摄像头在海康中的编号
       */
      indexCode?: string;
    }[];
    /**
     * 位置信息
     */
    location?: {
      /**
       * 横坐标
       */
      x?: number;
      /**
       * 纵坐标
       */
      y?: number;
      /**
       * 高度坐标
       */
      z?: number;
      /**
       * 楼层
       */
      floor?: number;
    };
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
   * 视频流
   */
  streams?: {
    /**
     * 视频流名称
     */
    title?: string;
    /**
     * 码流
     */
    url?: string;
  }[];
};

/**
 * 警察
 */
export interface Person {
  /**
   * 人员 id
   */
  personId?: string;
  /**
   * 人员姓名
   */
  personName?: string;
  /**
   * 性别
   */
  gender?: number;
  /**
   * 组织编号
   */
  orgIndexCode?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 工号
   */
  jobNo?: string;
  /**
   * 身份类别
   */
  certificateType?: number;
  /**
   * 证件号
   */
  certificateNo?: string;
  /**
   * 部门路径
   */
  orgPath?: string;
  /**
   * 部门名称路径
   */
  orgPathName?: string;
  /**
   * 照片
   */
  personPhoto?: {
    /**
     * 照片 id
     */
    personPhotoIndexCode?: string;
    /**
     * 照片 uri
     */
    picUri?: string;
    /**
     * 海康资源编号
     */
    serverIndexCode?: string;
  }[];
}

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
