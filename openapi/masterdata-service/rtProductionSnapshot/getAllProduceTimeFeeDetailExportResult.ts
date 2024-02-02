// 工时工费报表搜索VO
export interface I工时工费报表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 工序id集
    processIds: number[];
    // 生产订单号
    produceOrderCode: string;
    // 员工id集
    userIds: number[];
    // 物料id集
    materialIds: number[];
    // 班组id集
    classGroupIds: number[];
    // 查询开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 销售订单编号
    salesOrderCode: string;
    // 生产任务编码
    produceTaskNo: string;
}
// JSONResult«List«工时工费报表返回VO»»
export interface IJSONResultList工时工费报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工时工费报表返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
