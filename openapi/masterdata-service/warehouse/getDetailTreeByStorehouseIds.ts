// id集合信息
export interface Iid集合信息 {
    // id集合
    ids: number[];
}
// JSONResult«List«仓位树详情返回VO»»
export interface IJSONResultList仓位树详情返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I仓位树详情返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓位树详情返回VO
export interface I仓位树详情返回VO {
    // id
    id: number;
    // 仓位名称
    name: string;
    // 仓位编号
    code: string;
    // 仓库id
    storehouseId: number;
    // 仓库名称
    storehouseName: string;
    // 仓库编号
    storehouseCode: string;
    // 区域id
    areaId: number;
    // 区域名称
    areaName: string;
    // 区域编号
    areaCode: string;
    // 库存数量
    quantity: number;
    // 状态(是否可用)
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 子仓位
    children: I仓位树详情返回VO[];
}
