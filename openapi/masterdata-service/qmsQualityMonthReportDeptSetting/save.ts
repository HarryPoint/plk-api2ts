import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质量月报部门设置相关/saveUsingPOST_7
export default function fetchMethod(data: IQualityMonthlyReportDepartmentSetUpEditorDTO) {
    return post<IJSONResultobject['data']>({
      url: "/masterdata-service/qmsQualityMonthReportDeptSetting/save",
      data,
    });
}
// 质量月报部门设置编辑DTO
export interface IQualityMonthlyReportDepartmentSetUpEditorDTO {
    // 部门id集合
    departmentIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
