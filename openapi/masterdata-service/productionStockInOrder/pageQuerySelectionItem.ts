// 分页_13
export interface I分页_13 {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 生产批次列表
    productionLotNoList: string[];
    // 生产订单编号匹配
    produceOrderCodeMatch: string;
    // 生产物料ID
    produceMaterialIdList: number[];
    // 是否入库前先领料
    isBeforeStorageIssuanceMaterial: string;
}
// JSONResult«分页信息«ProduceOrderSelectionItemQueryResponseDTO»»_1
export interface IJSONResult分页信息ProduceOrderSelectionItemQueryResponseDTO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«ProduceOrderSelectionItemQueryResponseDTO»_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
