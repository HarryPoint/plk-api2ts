// JSONResult«List«流程树VO»»_1
export interface IJSONResultListProcessTreeVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessTreeVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程树VO_1
export interface IProcessTreeVO1 {
    // 名称
    name: string;
    // 编号
    code: string;
    // 流程id
    flowPathId: number;
    // 流程树类型
    treeType: string;
    // 流程code
    flowPathCode: string;
    // 流程类型
    flowPathType: string;
    // 子集
    children: IProcessTreeVO1[];
}
