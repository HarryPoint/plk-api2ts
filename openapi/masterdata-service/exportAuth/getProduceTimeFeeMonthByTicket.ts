// JSONResult«导出信息«工时工费月度汇总报表返回VO»»
export interface IJSONResult导出信息工时工费月度汇总报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息工时工费月度汇总报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«工时工费月度汇总报表返回VO»
export interface I导出信息工时工费月度汇总报表返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: I工时工费月度汇总报表返回VO[];
}
// 工时工费月度汇总报表返回VO
export interface I工时工费月度汇总报表返回VO {
    // 月份
    month: string;
    // 员工id
    userId: number;
    // 员工姓名
    username: string;
    // 班组id
    classGroupId: number;
    // 班组名称
    classGroupName: string;
    // 合格产出工费
    produceFee: number;
    // 返工产出工费
    backFee: number;
    // 合计工费
    totalFee: number;
}
