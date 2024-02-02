// JSONResult«List«区域仓库仓位树返回VO»»
export interface IJSONResultList区域仓库仓位树返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I区域仓库仓位树返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 区域仓库仓位树返回VO
export interface I区域仓库仓位树返回VO {
    // id
    id: number;
    // 区域名称
    name: string;
    // 区域名称
    code: string;
    // 子区域
    children: I区域仓库仓位树返回VO[];
    // 仓库-仓位树
    warehouseStorehouseTree: I仓库仓位树返回VO[];
}
// 仓库仓位树返回VO
export interface I仓库仓位树返回VO {
    // id
    id: number;
    // 仓库/仓位名称
    name: string;
    // 仓库/仓位编号
    code: string;
    // 子仓库/仓位
    children: I仓库仓位树返回VO[];
}
