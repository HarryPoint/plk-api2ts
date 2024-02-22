// ServeAuthRequestDTO
export interface IServeauthrequestdto {
    // undefined
    serveCode: string;
    // undefined
    serveApis: IRequestdto[];
}
// ServeApiRequestDTO
export interface IRequestdto {
    // undefined
    api: string;
    // undefined
    isLogin: string;
    // undefined
    checkMode: string;
    // undefined
    permissionCode: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
