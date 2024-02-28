import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16500/doc.html#/default/流程表单字段编码相关/editUsingPOST_2
*/
export default function fetchMethod(options: { data: IProcessFormFieldEncodingRulesEditDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/flowPathFormFieldCodeNumberRule/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程表单字段编码规则编辑DTO */
export interface IProcessFormFieldEncodingRulesEditDTO {
    /** id */
    id?: string;
    /** 明细 */
    details?: IEditTheDTOForProcessFormFieldEncodingRuleDetails[];
}
/** 流程表单字段编码规则明细编辑DTO */
export interface IEditTheDTOForProcessFormFieldEncodingRuleDetails {
    /** 设置类型 */
    type?: EEditTheDTOForProcessFormFieldEncodingRuleDetails_type;
    /** 日期格式 - 用于日期 */
    dateFormat?: EEditTheDTOForProcessFormFieldEncodingRuleDetails_dateFormat;
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: EEditTheDTOForProcessFormFieldEncodingRuleDetails_isCodeAccording;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEditTheDTOForProcessFormFieldEncodingRuleDetails_type {
    /** 固定值 */
    FIXED = "FIXED",
    /** 日期 */
    DATE = "DATE",
    /** 自动计数 */
    AUTO_NUMBER = "AUTO_NUMBER",
    /** 引用字段 */
    FLOW_PATH_FIELD = "FLOW_PATH_FIELD",
    /** ID的36进制 */
    ID36 = "ID36"
}

export enum EEditTheDTOForProcessFormFieldEncodingRuleDetails_dateFormat {
    /** 年 */
    YEAR = "YEAR",
    /** 年月 */
    YEAR_MONTH = "YEAR_MONTH",
    /** 年月日 */
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 月日 */
    MONTH_DAY = "MONTH_DAY",
    /** 日 */
    DAY = "DAY"
}

export enum EEditTheDTOForProcessFormFieldEncodingRuleDetails_isCodeAccording {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
