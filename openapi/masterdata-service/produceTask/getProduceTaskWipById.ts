// JSONResult«生产任务WIP信息响应DTO»
export interface IJSONResult生产任务WIP信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产任务WIP信息响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务WIP信息响应DTO
export interface I生产任务WIP信息响应DTO {
    // 在制前WIP数
    wipBeforeQuantity: number;
    // 在制前WIP信息
    wipBeforeLots: I生产任务WIP批次信息VO[];
    // 在制中WIP数
    wipAfterQuantity: number;
    // 在制中WIP信息
    wipAfterLots: I生产任务WIP批次信息VO[];
}
// 生产任务WIP批次信息VO
export interface I生产任务WIP批次信息VO {
    // 批次id
    lotOrderId: number;
    // 批次名称
    lotOrderName: string;
    // 批次号
    lotOrderNo: string;
    // 总数量
    storageTotalCount: number;
    // 锁定数量
    storageLockCount: number;
    // 可使用数量
    storageUseCount: number;
}
