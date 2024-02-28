import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16400/doc.html#/default/计算方案相关/addUsingPOST_1
*/
export default function fetchMethod(options: { data: IComputingSolutionAddedARequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/calculationPlan/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 计算方案新增请求DTO */
export interface IComputingSolutionAddedARequestDTO {
    /** 名称 */
    name?: string;
    /** 应用编码 */
    appCode?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: EComputingSolutionAddedARequestDTO_isDetailFlow;
    /** 公式类型 */
    formulaType?: EComputingSolutionAddedARequestDTO_formulaType;
    /** 公式 */
    formula?: string;
    /** 计算模式 */
    calculationMode?: EComputingSolutionAddedARequestDTO_calculationMode;
    /** 固定时间 */
    fixedTime?: number;
    /** 计算周期 */
    calculationPeriod?: EComputingSolutionAddedARequestDTO_calculationPeriod;
    /** 过滤条件列表 */
    filterConditionList?: ICalculationSchemeFilterConditionDTO2[];
}
/** 计算方案过滤条件DTO_2 */
export interface ICalculationSchemeFilterConditionDTO2 {
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 值列表 */
    values?: string[];
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EComputingSolutionAddedARequestDTO_isDetailFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EComputingSolutionAddedARequestDTO_formulaType {
    /** 时间函数 */
    TIME_FUNCTION = "TIME_FUNCTION",
    /** 数学函数 */
    MATH_FUNCTION = "MATH_FUNCTION"
}

export enum EComputingSolutionAddedARequestDTO_calculationMode {
    /** 固定时间 */
    FIXED_TIME = "FIXED_TIME",
    /** 周期性 */
    PERIODICITY = "PERIODICITY"
}

export enum EComputingSolutionAddedARequestDTO_calculationPeriod {
    /** 每天 */
    EVERY_DAY = "EVERY_DAY",
    /** 每月 */
    EVERY_MONTH = "EVERY_MONTH",
    /** 每季度 */
    EVERY_QUARTER = "EVERY_QUARTER",
    /** 每年 */
    EVERY_YEAR = "EVERY_YEAR"
}
