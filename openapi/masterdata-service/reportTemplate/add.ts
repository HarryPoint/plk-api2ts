import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/报表模板/addUsingPOST_6
*/
export default function fetchMethod(options: { data: IReportTemplateAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/reportTemplate/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ReportTemplateAddRequestDTO */
export interface IReportTemplateAddRequestDTO {
    /** 模板名称 */
    templateName?: string;
    /** 报表类型 */
    report?: ('PRODUCE_DAY_REPORT' | 'QUALITY_GOOD_SCRAP_REPORT' | 'SALES_DELIVER_REPORT' | 'CONSIGNMENT_LOSS_ANALYZE_REPORT' | 'CONSIGNMENT_INBOUND_ANALYZE_REPORT' | 'ACCOUNTS_RECEIVABLE_REPORT' | 'COLLECTION_TOTAL_REPORT' | 'AFTER_SALES_QUALITY_REPORT' | 'SALES_ORDER_REPORT' | 'PURCHASE_ARRIVED_STATISTIC_REPORT' | 'PRODUCE_STORAGE_REPORT' | 'RAW_STORAGE_REPORT' | 'SCRAP_STORAGE_REPORT' | 'PRODUCE_PROGRESS_STATISTICS_REPORT' | 'PRODUCE_CAPACITY_REPORT' | 'PRODUCE_DATA_REPORT' | 'PRODUCE_CLASS_GROUP_REPORT' | 'PRODUCE_PROCESS_REPORT' | 'PRODUCE_MATERIAL_REPORT' | 'PRODUCE_TIME_FEE_DETAIL_REPORT' | 'PRODUCE_TIME_FEE_MONTH_REPORT' | 'PRODUCE_ENTRUST_MAJOR_DATA_REPORT' | 'PRODUCE_ORDER_SCHEDULE_REPORT');
    /** 导出参数 */
    exportParam?: Record<string, Record<string, any>>;
    /** 开始时间字段编码 */
    beginTimeFieldCode?: string;
    /** 结束时间字段编码 */
    endTimeFieldCode?: string;
    /** 显示模板条件添加请求列表 */
    showFilterConditionList?: IReportTemplateConditionAddRequestDTO[];
    /** 报表统计时间范围添加请求 */
    timeRange?: IReportStatisticsTimeRangeAddRequestDTO;
}
/** ReportTemplateConditionAddRequestDTO */
export interface IReportTemplateConditionAddRequestDTO {
    /** 条件字段编码 */
    code?: string;
    /** 条件字段值 */
    value?: string;
    /** 条件字段值的显示名称 */
    showName?: string;
}
/** ReportStatisticsTimeRangeAddRequestDTO */
export interface IReportStatisticsTimeRangeAddRequestDTO {
    /** 时间模式- 今天、本周、本月、本季度、本年、发邮件前 */
    timeMode?: ('DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | 'SEND_EMAIL_BEFORE');
    /** 发邮件前的时间模式（只有timeMode = SENDING_EMAIL_BEFORE该配置才是有效配置）- 今天、本周、本月、本季度、本年 */
    sendingEmailBeforeTimeMode?: ('DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR');
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 开始周号 */
    beginWeekNo?: number;
    /** 结束周号 */
    endWeekNo?: number;
    /** 发送邮件前 - 开始配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeBegin?: number;
    /** 发送邮件前 - 结束配置， 如前1天、前1周、前N月、前N季度、前N年 */
    sendingEmailBeforeEnd?: number;
    /** 发送邮件前 - 开始天 */
    beginDay?: number;
    /** 发送邮件前 - 结束天 */
    endDay?: number;
    /** 起始时间为月末 */
    isStartAtEndOfMonth?: ('Y' | 'N');
    /** 截止时间为月末 */
    isDeadlineAtEndOfMonth?: ('Y' | 'N');
    /** 开始月份 */
    beginMonth?: number;
    /** 结束月份 */
    endMonth?: number;
    /** 起始时间为季度末 */
    isStartAtEndOfQuarter?: ('Y' | 'N');
    /** 截止时间为季度末 */
    isDeadlineAtEndOfQuarter?: ('Y' | 'N');
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
