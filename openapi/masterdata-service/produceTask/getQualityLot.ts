// JSONResult«List«Wip批次信息VO»»
export interface IJSONResultListWip批次信息VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IWip批次信息VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Wip批次信息VO
export interface IWip批次信息VO {
    // 批次id
    id: number;
    // 批次名称
    lotName: string;
    // 批次号
    lotNo: string;
    // 批次原始数量
    totalCount: number;
    // wip库存创建时间 - 进料批次的的首次来料时间
    wmRpCreateTime: string;
    // 可委外数量
    canEntrustQuantity: number;
    // 可操作数量
    canOptQuantity: number;
    // wip状态信息集
    wips: IWip数量状态信息VO[];
}
// Wip数量状态信息VO
export interface IWip数量状态信息VO {
    // wip状态记录id
    wipRpId: number;
    // 数量
    quantity: number;
    // wip数量状态
    quantityStatus: string;
    // wip数量状态描述
    quantityStatusDesc: string;
    // 是否可用
    canUse: string;
    // wip库存创建时间 - 进料批次的的首次来料时间
    wmRpCreateTime: string;
    // 可委外数量
    canEntrustQuantity: number;
    // 可操作数量
    canOptQuantity: number;
    // 是否锁定
    isLock: string;
}
