import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/质量月报部门设置相关/saveUsingPOST_7
*/
export default function fetchMethod(options: { data: IQualityMonthlyReportDepartmentSetUpEditorDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/qmsQualityMonthReportDeptSetting/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质量月报部门设置编辑DTO */
export interface IQualityMonthlyReportDepartmentSetUpEditorDTO {
    /** 部门id集合 */
    departmentIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
