import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工时工费相关/getMonthExportTicketUsingPOST
export default function fetchMethod(data: IMonthlyReportOfHourlyLaborFeeSearchVO) {
    return http<IJSONResultExportedTicketInformation>({
        url: "/app-enterprise-web/api/app/enterprise/produceTimeFeeReport/getMonthExportTicket",
        method: "post",
        data,
    });
}
// 工时工费月度报表搜索VO
export interface IMonthlyReportOfHourlyLaborFeeSearchVO {
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
// JSONResult«导出ticket信息»
export interface IJSONResultExportedTicketInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportingTicketInformation;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出ticket信息
export interface IExportingTicketInformation {
    // 导出凭证ticket
    ticket: string;
}
