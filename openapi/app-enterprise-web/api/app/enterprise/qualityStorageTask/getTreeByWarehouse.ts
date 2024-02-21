// JSONResult«List«仓位树返回VO»»_1
export interface IJSONResultListThePositionTreeReturnsVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPositionTreeReturnsVO6[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓位树返回VO_6
export interface IPositionTreeReturnsVO6 {
    // id
    id: number;
    // 仓位名称
    name: string;
    // 仓位编号
    code: string;
    // 状态(是否可用)
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 区域名称
    areaName: string;
    // 仓库名称
    storehouseName: string;
    // 子仓位
    children: IPositionTreeReturnsVO7[];
}
// 仓位树返回VO_7
export interface IPositionTreeReturnsVO7 {
    // id
    id: number;
    // 仓位名称
    name: string;
    // 仓位编号
    code: string;
    // 状态(是否可用)
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 区域名称
    areaName: string;
    // 仓库名称
    storehouseName: string;
    // 子仓位
    children: IPositionTreeReturnsVO7[];
}