// 项目应用请求对象
export interface I项目应用请求对象 {
    // 项目id
    projectId: number;
    // 项目id
    flowPathSystemType: string;
}
// JSONResult«项目应用返回对象»
export interface IJSONResult项目应用返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目应用返回对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
