import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/批次方案相关/getByIdUsingGET_7
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultLotSerialNumberPlanDTO>(
        {
            url: "/masterdata-service/lotSerialNumberPlan/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«LotSerialNumberPlanDTO» */
export interface IJSONResultLotSerialNumberPlanDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ILotSerialNumberPlanDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** LotSerialNumberPlanDTO */
export interface ILotSerialNumberPlanDTO {
    /** 请选择方案ID */
    id?: string;
    /** 编码 */
    code?: string;
    /** 批次方案名称 */
    name?: string;
    /** 方案类型 */
    planType?: ELotSerialNumberPlanDTO_planType;
    /** 规则列表 */
    ruleList?: ILotSerialNumberPlanRuleDTO[];
}
/** LotSerialNumberPlanRuleDTO */
export interface ILotSerialNumberPlanRuleDTO {
    /** ID */
    id?: string;
    /** 规则类型 */
    type?: ELotSerialNumberPlanRuleDTO_type;
    /** 日期类型 */
    dateFormat?: ELotSerialNumberPlanRuleDTO_dateFormat;
    /** 应用引擎ID */
    flowPathId?: string;
    /** 应用引擎编码 */
    flowPathCode?: string;
    /** 字段编码 */
    flowPathFormFiledCode?: string;
    /** 字段序列号 */
    flowPathFormFiledSerialNo?: string;
    /** 值提取方法 */
    valueExtractMethod?: ELotSerialNumberPlanRuleDTO_valueExtractMethod;
    /** 起始Index */
    startIndex?: number;
    /** 结束Index */
    endIndex?: number;
    /** 字符常量 */
    fixValue?: string;
    /** 规则长度 - 用于流水 */
    ruleLength?: number;
    /** 起始值 - 用于流水 */
    startValue?: number;
    /** 步长值 - 用于流水 */
    stepValue?: number;
    /** 方案ID */
    lotSerialNumberPlanId?: string;
    /** 排序 */
    sort?: number;
    /** 规则描述 */
    ruleDesc?: string;
}

export enum ELotSerialNumberPlanDTO_planType {
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO",
    /** 批次号 */
    BATCH_NO = "BATCH_NO"
}

export enum ELotSerialNumberPlanRuleDTO_type {
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

export enum ELotSerialNumberPlanRuleDTO_dateFormat {
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

export enum ELotSerialNumberPlanRuleDTO_valueExtractMethod {
    /** 完全取值 */
    COMPLETE = "COMPLETE",
    /** 截断取值 */
    PART = "PART"
}
