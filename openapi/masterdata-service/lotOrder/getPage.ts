// 批次订单搜索VO
export interface I批次订单搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 生产订单号
    produceOrderCode: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 当前流水类型(界面上的批次当前生产状态)
    lastFlowType: string;
    // 批次订单号
    lotOrderNo: string;
    // 创建开始时间 yyyy-MM-dd HH:mm:ss
    createBeginTime: string;
    // 销售订单号
    salesOrderCode: string;
    // 创建结束时间 yyyy-MM-dd HH:mm:ss
    createEndTime: string;
    // 对应物料id
    materialId: number;
    // 来源类型
    sourceType: string;
    // 来源批次单号
    sourceLotNo: string;
    // 状态
    status: string;
}
// JSONResult«分页信息«批次订单返回VO»»
export interface IJSONResult分页信息批次订单返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«批次订单返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
