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
    orders: 分页排序VO[];
    // 客户id集
    customerIds: number[];
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    dateEnd: string;
}
// JSONResult«宝晶应收账款分析报表表格返回VO»
export interface IJSONResult宝晶应收账款分析报表表格返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 宝晶应收账款分析报表表格返回VO_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
