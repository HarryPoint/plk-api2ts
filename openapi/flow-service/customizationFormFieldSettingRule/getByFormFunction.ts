import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/定制表单字段设置规则 - 相关/getByFormFunctionUsingGET
export default function fetchMethod(params: { formFunctionType: string }) {
    return http<IJSONResultListCustomizedFormFieldSettingRuleVO>({
        url: "/flow-service/customizationFormFieldSettingRule/getByFormFunction",
        method: "get",
        params,
    });
}
// JSONResult«List«CustomizedFormFieldSettingRuleVO»»
export interface IJSONResultListCustomizedFormFieldSettingRuleVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICustomizedFormFieldSettingRuleVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CustomizedFormFieldSettingRuleVO
export interface ICustomizedFormFieldSettingRuleVO {
    // ID
    id: number;
    // 表单功能
    formFunction: string;
    // 定位类型
    fixType: string;
    // 定位序列
    fixSort: number;
    // 是否显示
    isShow: string;
    // 序列号
    serialNo: string;
    // 系统类型
    systemType: string;
    // 排序
    sort: number;
}
