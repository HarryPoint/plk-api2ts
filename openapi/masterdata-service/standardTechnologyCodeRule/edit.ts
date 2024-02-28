import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/标准工艺编码规则相关/editUsingPOST_22
*/
export default function fetchMethod(options: { data: IStandardProcessCodingRulesRequestDTO }, extraOptions?: any) {
    return http<IJSONResultidIndicatesTheInformation>(
        {
            url: "/masterdata-service/standardTechnologyCodeRule/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺编码规则请求 DTO */
export interface IStandardProcessCodingRulesRequestDTO {
    /** id */
    id?: string;
    /** 名称 */
    name: string;
    /** 规则明细 */
    details?: IStandardProcessCodingRulesDetailRequestDTO[];
}
/** 标准工艺编码规则明细请求 DTO */
export interface IStandardProcessCodingRulesDetailRequestDTO {
    /** id */
    id?: string;
    /** 类型 */
    type: EStandardProcessCodingRulesDetailRequestDTO_type;
    /** 应用表格列code - 类型是应用时有值 */
    flowPathTableColumnCode?: string;
    /** 流水号位数 - 类型是流水号时有值 */
    serialNoDigit?: number;
    /** 流水号起始值 - 类型是流水号时有值 */
    serialNoStartValue?: number;
    /** 流水号步长值 - 类型是流水号时有值 */
    serialNoStepValue?: number;
    /** 日期格式 - 类型是日期时有值 */
    dateFormat?: EStandardProcessCodingRulesDetailRequestDTO_dateFormat;
    /** 固定值 - 类型是固定值时有值 */
    fixValue?: string;
}
/** JSONResult«id信息» */
export interface IJSONResultidIndicatesTheInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdInformation;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** id信息 */
export interface IIdInformation {
    /** id */
    id?: string;
}

export enum EStandardProcessCodingRulesDetailRequestDTO_type {
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

export enum EStandardProcessCodingRulesDetailRequestDTO_dateFormat {
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
