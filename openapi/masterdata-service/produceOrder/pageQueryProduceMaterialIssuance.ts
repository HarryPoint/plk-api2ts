// 分页_6
export interface I分页_6 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 生产订单ID
    produceOrderId: number;
    // 物料ID
    materialIdList: number[];
}
// JSONResult«分页信息«ProduceMaterialIssuanceQueryResponseDTO»»
export interface IJSONResult分页信息ProduceMaterialIssuanceQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«ProduceMaterialIssuanceQueryResponseDTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
