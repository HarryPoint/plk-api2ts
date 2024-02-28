import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16500/doc.html#/default/详细页面配置-相关/getByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultFlowPathDetailPageConfigVO>(
        {
            url: "/flow-service/flowPathDetailPageConfig/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«FlowPathDetailPageConfigVO» */
export interface IJSONResultFlowPathDetailPageConfigVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathDetailPageConfigVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathDetailPageConfigVO */
export interface IFlowPathDetailPageConfigVO {
    /** ID */
    id?: string;
    /** 引用当前表单的应用引擎编码 */
    refFlowPathCode?: string;
    /** 页签名称/别名 */
    aliasName?: string;
    /** 分组列表 */
    filterGroupList?: IConditionGroup2[];
}
/** 条件组_2 */
export interface IConditionGroup2 {
    /** 过滤组的ID */
    id?: string;
    /** 分页配置ID */
    flowPathDetailPageConfigId?: string;
    /** 过滤列表 */
    filterList?: IConditions[];
}
/** 条件 */
export interface IConditions {
    /** 过滤条件的ID */
    id?: string;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathDetailPageFilterGroupId?: string;
    /** 所属流程表单字段id */
    flowPathDetailPageConfigId?: string;
    /** 被判断的字段序列号 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: EConditions_compareType;
    /** 判断对象类型 */
    compareObjType?: EConditions_compareObjType;
    /** 判断对象字段code */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 判断对象自定义显示值 */
    compareCustomValueEcho?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: EConditions_dateDynamicRange;
    /** 是否使用日期的显示格式来做为筛选条件 */
    isUseDateShowFormat?: EConditions_isUseDateShowFormat;
}

export enum EConditions_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EConditions_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EConditions_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EConditions_isUseDateShowFormat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
