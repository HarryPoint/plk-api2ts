// 订单进度统计查询VO
export interface I订单进度统计查询VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 交付日期 - 开始 yyyy-MM-dd HH:mm:ss
    deliveryDateBegin: string;
    // 销售订单编号
    salesOrderCode: string;
    // 物料id集
    materialIds: number[];
    // 客户id集
    customerIds: number[];
    // 交付日期 - 结束 yyyy-MM-dd HH:mm:ss
    deliveryDateEnd: string;
    // 物料编码
    materialCode: string;
    // 销售订单状态
    salesOrderStatus: string;
}
// JSONResult«List«订单进度统计导出VO»»
export interface IJSONResultList订单进度统计导出VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 订单进度统计导出VO_2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
