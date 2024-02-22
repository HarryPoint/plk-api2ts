import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质量月报部门设置相关/queryUsingPOST_2
export function fetchMethod(data: IQualityMonthlyReportDepartmentSettingsQueryDTO) {
    return post({
      url: "/masterdata-service/qmsQualityMonthReportDeptSetting/query",
      data,
    });
}
// 质量月报部门设置查询DTO
export interface IQualityMonthlyReportDepartmentSettingsQueryDTO {
    // 年份开始时间
    yearBegin: string;
    // 年份结束时间
    yearEnd: string;
}
// JSONResult«质量月报部门设置响应DTO»
export interface IJSONResultTheQualityMonthlyReportDepartmentSetsTheResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityMonthlyReportDepartmentSetResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量月报部门设置响应DTO
export interface IQualityMonthlyReportDepartmentSetResponseDTO {
    // 年份开始时间
    yearBegin: string;
    // 年份结束时间
    yearEnd: string;
    // 部门id集合
    departmentIds: number[];
    // 部门集合
    departments: IIdCodeNameGenericTransportObject[];
}
// Id Code Name 通用传输对象
export interface IIdCodeNameGenericTransportObject {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
