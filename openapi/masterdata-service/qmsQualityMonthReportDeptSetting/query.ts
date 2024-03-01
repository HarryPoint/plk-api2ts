import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/质量月报部门设置相关/queryUsingPOST_2
*/
export default function fetchMethod(options: { data: IQualityMonthlyReportDepartmentSettingsQueryDTO }, extraOptions?: any) {
    return http<IJSONResultTheQualityMonthlyReportDepartmentSetsTheResponseDTO>(
        {
            url: "/masterdata-service/qmsQualityMonthReportDeptSetting/query",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质量月报部门设置查询DTO */
export interface IQualityMonthlyReportDepartmentSettingsQueryDTO {
    /** 年份开始时间 */
    yearBegin?: number;
    /** 年份结束时间 */
    yearEnd?: number;
}
/** JSONResult«质量月报部门设置响应DTO» */
export interface IJSONResultTheQualityMonthlyReportDepartmentSetsTheResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IQualityMonthlyReportDepartmentSetResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量月报部门设置响应DTO */
export interface IQualityMonthlyReportDepartmentSetResponseDTO {
    /** 部门id集合 */
    departmentIds?: string[];
    /** 部门集合 */
    departments?: IIdCodeNameGenericTransportObject[];
    /** 年份开始时间 */
    yearBegin?: number;
    /** 年份结束时间 */
    yearEnd?: number;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}
