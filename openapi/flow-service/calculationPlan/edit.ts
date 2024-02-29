import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/editUsingPOST
*/
export default function fetchMethod(options: { data: IComputeSchemeEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/calculationPlan/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 计算方案编辑请求DTO */
export interface IComputeSchemeEditRequestDTO {
    /** ID */
    id?: string;
    /** 名称 */
    name?: string;
    /** 应用编码 */
    appCode?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: EComputeSchemeEditRequestDTO_isDetailFlow;
    /** 公式类型 */
    formulaType?: EComputeSchemeEditRequestDTO_formulaType;
    /** 公式 */
    formula?: string;
    /** 计算模式 */
    calculationMode?: EComputeSchemeEditRequestDTO_calculationMode;
    /** 固定时间 */
    fixedTime?: number;
    /** 计算周期 */
    calculationPeriod?: EComputeSchemeEditRequestDTO_calculationPeriod;
    /** 过滤条件列表 */
    filterConditionList?: ICalculationSchemeFilterConditionDTO[];
}
/** 计算方案过滤条件DTO */
export interface ICalculationSchemeFilterConditionDTO {
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 值列表 */
    values?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EComputeSchemeEditRequestDTO_isDetailFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EComputeSchemeEditRequestDTO_formulaType {
    /** 时间函数 */
    TIME_FUNCTION = "TIME_FUNCTION",
    /** 数学函数 */
    MATH_FUNCTION = "MATH_FUNCTION"
}

export enum EComputeSchemeEditRequestDTO_calculationMode {
    /** 固定时间 */
    FIXED_TIME = "FIXED_TIME",
    /** 周期性 */
    PERIODICITY = "PERIODICITY"
}

export enum EComputeSchemeEditRequestDTO_calculationPeriod {
    /** 每天 */
    EVERY_DAY = "EVERY_DAY",
    /** 每月 */
    EVERY_MONTH = "EVERY_MONTH",
    /** 每季度 */
    EVERY_QUARTER = "EVERY_QUARTER",
    /** 每年 */
    EVERY_YEAR = "EVERY_YEAR"
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
