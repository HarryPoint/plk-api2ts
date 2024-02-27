import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量月报部门设置相关/queryUsingPOST_2
*/
export default function fetchMethod(options: { data: IQualityMonthlyReportDepartmentSettingsQueryDTO }, extraOptions?: any) {
    return http<IJSONResultTheQualityMonthlyReportDepartmentSetsTheResponseDTO>(
        {
            url: "/masterdata-service/qmsQualityMonthReportDeptSetting/query",
            method: "post",
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityMonthlyReportDepartmentSetResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量月报部门设置响应DTO */
export interface IQualityMonthlyReportDepartmentSetResponseDTO {
    /** 年份开始时间 */
    yearBegin?: number;
    /** 年份结束时间 */
    yearEnd?: number;
    /** 部门id集合 */
    departmentIds?: string[];
    /** 部门集合 */
    departments?: IIdCodeNameGenericTransportObject[];
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
