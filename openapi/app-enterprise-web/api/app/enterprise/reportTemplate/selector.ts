import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/报表模板/selectorUsingPOST
*/
export default function fetchMethod(options: { params: { templateName?: string } }, extraOptions?: any) {
    return http<IJSONResultListReportTemplateQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/reportTemplate/selector",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ReportTemplateQueryResponseDTO»» */
export interface IJSONResultListReportTemplateQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IReportTemplateQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ReportTemplateQueryResponseDTO */
export interface IReportTemplateQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
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
    /** 模板名称 - 模糊查询 */
    templateName?: string;
    /** 报表类型 - 报表 */
    report?: string;
    /** 报表名称 - 模糊查询 */
    reportName?: string;
    /** 模板状态 - 精确匹配 */
    dataStatus?: number;
    /** 报表统计时间区间描述 */
    reportStatisticsTimeRangeDesc?: string;
}
