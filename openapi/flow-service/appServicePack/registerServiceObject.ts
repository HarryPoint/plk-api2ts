// 服务对象注册请求_1
export interface IServiceObjectRegistrationRequest1 {
    // ID
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
    // 应用级别
    applicationLevel: string;
    // 来源应用服务包id
    fromAppServicePackId: number;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
