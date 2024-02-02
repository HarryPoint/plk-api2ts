// 甘特图搜索VO
export interface I甘特图搜索VO {
    // 开始日期 yyyy-MM-dd
    beginDate: string;
    // 当前页面
    pageNo: number;
    // 结束日期 yyyy-MM-dd
    endDate: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 生产订单编码
    produceOrderCode: string;
    // 工艺路径ID列表
    processIdList: number[];
    // 销售订单编码
    salesOrderCode: string;
    // 生产物料ID列表
    produceMaterialIdList: number[];
    // 订单状态列表
    orderStatusList: string[];
}
// JSONResult«分页信息«销售订单手动排产甘特图返回VO»»
export interface IJSONResult分页信息销售订单手动排产甘特图返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«销售订单手动排产甘特图返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
