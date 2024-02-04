// 工时工费月度报表搜索VO
export interface I工时工费月度报表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 员工id集
    userIds: number[];
    // 班组id集
    classGroupIds: number[];
    // 查询开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«工时工费月度汇总统计报表返回VO»
export interface IJSONResult工时工费月度汇总统计报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工时工费月度汇总统计报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工时工费月度汇总统计报表返回VO
export interface I工时工费月度汇总统计报表返回VO {
    // 合格产出工费
    produceFee: number;
    // 返工产出工费
    backFee: number;
    // 合计工费
    totalFee: number;
}
