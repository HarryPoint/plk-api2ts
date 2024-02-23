import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/检验任务统计报表相关/getInspectionTaskStatisticsAmountReportUsingPOST
export default function fetchMethod(data: GetInspectionTaskStatisticsAmountReport, extraOptions?: any) {
    return http<IJSONResultTheTotalNumberOfTasksIsReturnedToTheDTO>(
        {
            url: "/masterdata-service/inspectionTaskReport/getInspectionTaskStatisticsAmountReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// JSONResult«任务量统计报表合计返回DTO»
export interface IJSONResultTheTotalNumberOfTasksIsReturnedToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheTotalNumberOfTasksIsReturnedToTheDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 任务量统计报表合计返回DTO
export interface ITheTotalNumberOfTasksIsReturnedToTheDTO {
    // 总任务量
    amountQuantity: number;
    // 待执行任务量
    waitQuantity: number;
    // 进行中任务量
    handlingQuantity: number;
    // 已完成任务量
    completeQuantity: number;
    // 超期任务量
    overdueQuantity: number;
}
