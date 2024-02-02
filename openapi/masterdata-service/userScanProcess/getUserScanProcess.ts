// JSONResult«UserScanProcessVO»
export interface IJSONResultUserScanProcessVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IUserScanProcessVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// UserScanProcessVO
export interface IUserScanProcessVO {
    // undefined
    id: number;
    // undefined
    enterpriseId: number;
    // undefined
    userId: number;
    // undefined
    processId: number;
}
