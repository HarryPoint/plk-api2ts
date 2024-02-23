import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程表单字段编码相关/editUsingPOST_2
export default function fetchMethod(data: IProcessFormFieldEncodingRulesEditDTO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/flowPathFormFieldCodeNumberRule/edit",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 流程表单字段编码规则编辑DTO
export interface IProcessFormFieldEncodingRulesEditDTO {
    // id
    id: number;
    // 明细
    details: IEditTheDTOForProcessFormFieldEncodingRuleDetails[];
}
// 流程表单字段编码规则明细编辑DTO
export interface IEditTheDTOForProcessFormFieldEncodingRuleDetails {
    // 设置类型
    type: string;
    // 日期格式 - 用于日期
    dateFormat: string;
    // 固定值 - 用于固定值
    fixValue: string;
    // 位数 - 用于流水
    ruleLength: number;
    // 初始值 - 用于流水
    startValue: number;
    // 递增值 - 用于流水
    stepValue: number;
    // 是否是编码依据 - 仅能配置一项为编码依据
    isCodeAccording: string;
    // 所属流程表单code -- 针对引用字段类型
    flowPathCode: string;
    // 所属流程表单字段序列值 -- 针对引用字段类型
    flowPathFormFiledSerialNo: string;
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
