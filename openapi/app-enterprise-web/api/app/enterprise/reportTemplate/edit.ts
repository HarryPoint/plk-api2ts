import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/报表模板/editUsingPOST_25
*/
export default function fetchMethod(data: IReportTemplateEditRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/reportTemplate/edit",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** ReportTemplateEditRequestDTO */
export interface IReportTemplateEditRequestDTO {
    /** ID */
    id: number;
    /** 模板名称 */
    templateName: string;
    /** 报表类型 */
    report: string;
    /** 导出参数 */
    exportParam: Record<string, Record<string, any>>;
    /** 开始时间字段编码 */
    beginTimeFieldCode: string;
    /** 结束时间字段编码 */
    endTimeFieldCode: string;
    /** 显示模板条件添加请求列表 */
    showFilterConditionList: IReportTemplateConditionEditRequestDTO[];
    /** 报表统计时间范围添加请求 */
    timeRange: IReportStatisticsTimeRangeEditRequestDTO;
}
/** ReportTemplateConditionEditRequestDTO */
export interface IReportTemplateConditionEditRequestDTO {
    /** ID */
    id: number;
    /** 条件字段编码 */
    code: string;
    /** 条件字段值 */
    value: string;
    /** 条件字段值的显示名称 */
    showName: string;
}
/** ReportStatisticsTimeRangeEditRequestDTO */
export interface IReportStatisticsTimeRangeEditRequestDTO {
    /** ID */
    id: number;
    /** 时间模式- 今天、本周、本月、本季度、本年、发邮件前 */
    timeMode: string;
    /** 发邮件前的时间模式（只有timeMode = SENDING_EMAIL_BEFORE该配置才是有效配置）- 今天、本周、本月、本季度、本年 */
    sendingEmailBeforeTimeMode: string;
    /** 开始时间 */
    beginTime: string;
    /** 结束时间 */
    endTime: string;
    /** 开始周号 */
    beginWeekNo: number;
    /** 结束周号 */
    endWeekNo: number;
    /** 发送邮件前 - 开始配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeBegin: number;
    /** 发送邮件前 - 结束配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeEnd: number;
    /** 发送邮件前 - 开始天 */
    beginDay: number;
    /** 发送邮件前 - 结束天 */
    endDay: number;
    /** 起始时间为月末 */
    isStartAtEndOfMonth: string;
    /** 截止时间为月末 */
    isDeadlineAtEndOfMonth: string;
    /** 开始月份 */
    beginMonth: number;
    /** 结束月份 */
    endMonth: number;
    /** 起始时间为季度末 */
    isStartAtEndOfQuarter: string;
    /** 截止时间为季度末 */
    isDeadlineAtEndOfQuarter: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
