// JSONResult«项目变更信息校验结果»
export interface IJSONResult项目变更信息校验结果 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目变更信息校验结果;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目变更信息校验结果
export interface I项目变更信息校验结果 {
    // 项目名称
    projectName: string;
    // 变更单单号
    modificationCode: string;
    // 变更单id
    modificationId: number;
}
