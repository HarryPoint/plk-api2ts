// 应用是否发布成功校验请求对象
export interface I应用是否发布成功校验请求对象 {
    // 项目id
    projectId: number;
    // 应用流程id
    flowPathId: number;
    // 应用流程名称
    flowPathName: string;
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
