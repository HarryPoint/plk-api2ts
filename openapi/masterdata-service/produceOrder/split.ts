// 批次订单拆分DTO
export interface I批次订单拆分DTO {
    // wipRpId
    wipRpId: number;
    // 原批次数量
    sourceCount: number;
    // 拆分批次信息
    lotOrders: 批次订单DTO[];
    // 备注
    remark: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
