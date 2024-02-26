import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/报表模板/getByIdUsingPOST_2
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultReportTemplateDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/reportTemplate/getById",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ReportTemplateDTO» */
export interface IJSONResultReportTemplateDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IReportTemplateDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ReportTemplateDTO */
export interface IReportTemplateDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 结束时间字段编码 */
    endTimeFieldCode?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** ID */
    id?: number;
    /** 模板名称 */
    templateName?: string;
    /** 报表类型 */
    report?: ('PRODUCE_DAY_REPORT' | 'QUALITY_GOOD_SCRAP_REPORT' | 'SALES_DELIVER_REPORT' | 'CONSIGNMENT_LOSS_ANALYZE_REPORT' | 'CONSIGNMENT_INBOUND_ANALYZE_REPORT' | 'ACCOUNTS_RECEIVABLE_REPORT' | 'COLLECTION_TOTAL_REPORT' | 'AFTER_SALES_QUALITY_REPORT' | 'SALES_ORDER_REPORT' | 'PURCHASE_ARRIVED_STATISTIC_REPORT' | 'PRODUCE_STORAGE_REPORT' | 'RAW_STORAGE_REPORT' | 'SCRAP_STORAGE_REPORT' | 'PRODUCE_PROGRESS_STATISTICS_REPORT' | 'PRODUCE_CAPACITY_REPORT' | 'PRODUCE_DATA_REPORT' | 'PRODUCE_CLASS_GROUP_REPORT' | 'PRODUCE_PROCESS_REPORT' | 'PRODUCE_MATERIAL_REPORT' | 'PRODUCE_TIME_FEE_DETAIL_REPORT' | 'PRODUCE_TIME_FEE_MONTH_REPORT' | 'PRODUCE_ENTRUST_MAJOR_DATA_REPORT' | 'PRODUCE_ORDER_SCHEDULE_REPORT');
    /** 开始时间字段编码 */
    beginTimeFieldCode?: string;
    /** 数据筛选条件 */
    exportParam?: Record<string, Record<string, any>>;
    /** 显示模板条件添加请求列表 */
    showFilterConditionList?: IReportTemplateConditionDTO[];
    /** 报表统计时间范围添加请求 */
    timeRange?: IReportStatisticsTimeRangeDTO;
    /** 报表统计时间描述 */
    reportStatisticsTimeRangeDesc?: string;
}
/** ReportTemplateConditionDTO */
export interface IReportTemplateConditionDTO {
    /** ID */
    id?: number;
    /** 条件字段编码 */
    code?: string;
    /** 条件字段值 */
    value?: string;
    /** 条件字段值的显示名称 */
    showName?: string;
}
/** ReportStatisticsTimeRangeDTO */
export interface IReportStatisticsTimeRangeDTO {
    /** ID */
    id?: number;
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
