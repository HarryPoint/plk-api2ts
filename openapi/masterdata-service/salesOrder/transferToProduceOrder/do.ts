// 批量转到生产订单
export interface I批量转到生产订单 {
    // 是否生产订单继承销售订单编号
    isExtendSalesOrderCode: string;
    // 转生产订单数据列表
    transferToProduceOrderDataList: 销售订单转生产订单子物料生产信息DTO[];
}
// JSONResult«销售订单转生产订单返回DTO»
export interface IJSONResult销售订单转生产订单返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 销售订单转生产订单返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
