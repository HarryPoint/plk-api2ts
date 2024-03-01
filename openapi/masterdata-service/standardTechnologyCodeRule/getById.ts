import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺编码规则相关/getByIdUsingGET_18
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultStandardProcessCodingRulesRespondToDtos>(
        {
            url: "/masterdata-service/standardTechnologyCodeRule/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«标准工艺编码规则响应 DTO» */
export interface IJSONResultStandardProcessCodingRulesRespondToDtos {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IStandardProcessCodingRulesRespondToDtos;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 标准工艺编码规则响应 DTO */
export interface IStandardProcessCodingRulesRespondToDtos {
    /** 规则明细 */
    details?: IStandardProcessCodingRulesDetailResponseDTO[];
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
}
/** 标准工艺编码规则明细响应 DTO */
export interface IStandardProcessCodingRulesDetailResponseDTO {
    /** 日期格式 - 类型是日期时有值 */
    dateFormat?: EStandardProcessCodingRulesDetailResponseDTO_dateFormat;
    /** 固定值 - 类型是固定值时有值 */
    fixValue?: string;
    /** 应用表格列code - 类型是应用时有值 */
    flowPathTableColumnCode?: string;
    /** id */
    id?: string;
    /** 流水号位数 - 类型是流水号时有值 */
    serialNoDigit?: number;
    /** 流水号起始值 - 类型是流水号时有值 */
    serialNoStartValue?: number;
    /** 流水号步长值 - 类型是流水号时有值 */
    serialNoStepValue?: number;
    /** 类型 */
    type?: EStandardProcessCodingRulesDetailResponseDTO_type;
}

export enum EStandardProcessCodingRulesDetailResponseDTO_dateFormat {
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

export enum EStandardProcessCodingRulesDetailResponseDTO_type {
    /** 生产订单 */
    PRODUCE_ORDER = "PRODUCE_ORDER",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 流水号 */
    SERIAL_NO = "SERIAL_NO",
    /** 日期 */
    DATE = "DATE",
    /** 固定值 */
    FIX = "FIX"
}
