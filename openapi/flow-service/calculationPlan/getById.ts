import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/getByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultSpecifiesTheResponseDTOForTheCalculationScheme>(
        {
            url: "/flow-service/calculationPlan/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«计算方案明细响应DTO» */
export interface IJSONResultSpecifiesTheResponseDTOForTheCalculationScheme {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICalculationSchemeDetailResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 计算方案明细响应DTO */
export interface ICalculationSchemeDetailResponseDTO {
    /** ID */
    id?: string;
    /** 名称 */
    name?: string;
    /** 应用编码 */
    appCode?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: ECalculationSchemeDetailResponseDTO_isDetailFlow;
    /** 公式类型 */
    formulaType?: ECalculationSchemeDetailResponseDTO_formulaType;
    /** 公式 */
    formula?: string;
    /** 计算模式 */
    calculationMode?: ECalculationSchemeDetailResponseDTO_calculationMode;
    /** 固定时间 */
    fixedTime?: number;
    /** 计算周期 */
    calculationPeriod?: ECalculationSchemeDetailResponseDTO_calculationPeriod;
    /** 过滤条件列表 */
    filterConditionList?: ICalculationSchemeFilterConditionDTO1[];
    /** 业务名 */
    businessName?: string;
    /** 公式描述 */
    formulaDesc?: string;
}
/** 计算方案过滤条件DTO_1 */
export interface ICalculationSchemeFilterConditionDTO1 {
    /** ID */
    id?: string;
    /** 计算方案ID */
    calculationPlanId?: string;
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 值列表 */
    values?: string[];
}

export enum ECalculationSchemeDetailResponseDTO_isDetailFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ECalculationSchemeDetailResponseDTO_formulaType {
    /** 时间函数 */
    TIME_FUNCTION = "TIME_FUNCTION",
    /** 数学函数 */
    MATH_FUNCTION = "MATH_FUNCTION"
}

export enum ECalculationSchemeDetailResponseDTO_calculationMode {
    /** 固定时间 */
    FIXED_TIME = "FIXED_TIME",
    /** 周期性 */
    PERIODICITY = "PERIODICITY"
}

export enum ECalculationSchemeDetailResponseDTO_calculationPeriod {
    /** 每天 */
    EVERY_DAY = "EVERY_DAY",
    /** 每月 */
    EVERY_MONTH = "EVERY_MONTH",
    /** 每季度 */
    EVERY_QUARTER = "EVERY_QUARTER",
    /** 每年 */
    EVERY_YEAR = "EVERY_YEAR"
}
