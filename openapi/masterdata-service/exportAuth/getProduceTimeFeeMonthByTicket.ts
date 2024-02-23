import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/导出相关/getProduceTimeFeeMonthByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return http<IJSONResultExportInformationHourlyLaborFeeMonthlySummaryReportReturnedToVO>({
        url: "/masterdata-service/exportAuth/getProduceTimeFeeMonthByTicket",
        method: "get",
        params,
    });
}
// JSONResult«导出信息«工时工费月度汇总报表返回VO»»
export interface IJSONResultExportInformationHourlyLaborFeeMonthlySummaryReportReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationHourlyLaborFeeMonthlySummaryReportReturnToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«工时工费月度汇总报表返回VO»
export interface IExportInformationHourlyLaborFeeMonthlySummaryReportReturnToVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IMonthlySummaryReportOfManHourPaymentIsReturnedToVO[];
}
// 工时工费月度汇总报表返回VO
export interface IMonthlySummaryReportOfManHourPaymentIsReturnedToVO {
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
