// 宝晶应收账款分析报表搜索VO
export interface I宝晶应收账款分析报表搜索VO {
    // 当前页面
    pageNo: number;
    // 业务员id集
    businessUserIds: number[];
    // 分页大小
    pageSize: number;
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    dateBegin: string;
    // 排序字段集
    orders: I分页排序VO[];
    // 客户id集
    customerIds: number[];
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    dateEnd: string;
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«宝晶应收账款分析报表返回VO»
export interface IJSONResult宝晶应收账款分析报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I宝晶应收账款分析报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 宝晶应收账款分析报表返回VO
export interface I宝晶应收账款分析报表返回VO {
    // 数据表
    tables: I宝晶应收账款分析报表表格返回VO[];
    // 业务员维度
    businessUser: I宝晶应收账款分析报表图表返回VO[];
    // 趋势图维度
    trendChart: I宝晶应收账款分析报表图表含时间返回VO[];
}
// 宝晶应收账款分析报表表格返回VO
export interface I宝晶应收账款分析报表表格返回VO {
    // 业务员id
    businessUserId: number;
    // 业务员名称
    businessUserName: string;
    // 客户id
    customerId: number;
    // 客户名称
    customerName: string;
    // 期初金额
    beginAmount: number;
    // 入库总额
    moveInAmount: number;
    // 已收金额
    receivedAmount: number;
    // 其他损益
    otherLossAmount: number;
    // 应收余额
    receivableBalance: number;
    // 日期
    dateTime: string;
}
// 宝晶应收账款分析报表图表返回VO
export interface I宝晶应收账款分析报表图表返回VO {
    // x轴名称
    title: string;
    // 应收余额
    amount: number;
}
// 宝晶应收账款分析报表图表含时间返回VO
export interface I宝晶应收账款分析报表图表含时间返回VO {
    // 时间
    time: string;
    // 应收余额
    receivableBalance: number;
}
