// JSONResult«List«仓库仓位树返回VO»»
export interface IJSONResultList仓库仓位树返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I仓库仓位树返回VO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓库仓位树返回VO_1
export interface I仓库仓位树返回VO_1 {
    // id
    id: number;
    // 仓库/仓位名称
    name: string;
    // 仓库/仓位编号
    code: string;
    // 子仓库/仓位
    children: I仓库仓位树返回VO_1[];
}
