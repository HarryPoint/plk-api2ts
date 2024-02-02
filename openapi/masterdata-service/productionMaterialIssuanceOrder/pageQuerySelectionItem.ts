// 分页_12
export interface I分页_12 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 生产订单编号匹配
    produceOrderCodeMatch: string;
    // 生产物料ID
    produceMaterialIdList: number[];
    // 子物料ID列表
    materialIdList: number[];
}
// JSONResult«分页信息«ProduceOrderSelectionItemQueryResponseDTO»»
export interface IJSONResult分页信息ProduceOrderSelectionItemQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«ProduceOrderSelectionItemQueryResponseDTO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
