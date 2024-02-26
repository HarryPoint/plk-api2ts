import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺条件组相关/getInfoByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultStandardProcessConditionGroupRespondsToDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyConditionGroup/getInfoById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«标准工艺条件组响应DTO» */
export interface IJSONResultStandardProcessConditionGroupRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardProcessConditionsGroupRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 标准工艺条件组响应DTO */
export interface IStandardProcessConditionsGroupRespondsToDTO {
    /** id */
    id?: number;
    /** 条件组名称 */
    name?: string;
    /** 标准工艺条件 */
    conditionList?: IStandardProcessConditionsRespondToDTO[];
}
/** 标准工艺条件响应DTO */
export interface IStandardProcessConditionsRespondToDTO {
    /** id */
    id?: number;
    /** 来源应用编号 */
    fromFlowPathCode?: string;
    /** 来源字段编号 */
    fromFieldCode?: string;
    /** 来源字段序列号 */
    fromFieldSerialNo?: string;
    /** 判断方式 */
    compareType?: EStandardProcessConditionsRespondToDTO_compareType;
    /** 判断的值 */
    compareValue?: string;
    /** 连接类型 */
    joinType?: EStandardProcessConditionsRespondToDTO_joinType;
    /** 排序 */
    sort?: number;
}

export enum EStandardProcessConditionsRespondToDTO_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 包含 */
    CONTAIN = "CONTAIN",
    /** 不包含 */
    NOT_CONTAIN = "NOT_CONTAIN"
}

export enum EStandardProcessConditionsRespondToDTO_joinType {
    /** 且 */
    AND = "AND",
    /** 或 */
    OR = "OR"
}
