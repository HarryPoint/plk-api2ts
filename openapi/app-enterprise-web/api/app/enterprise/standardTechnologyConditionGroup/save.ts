import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺条件组相关/saveUsingPOST_3
*/
export default function fetchMethod(options: { data: IDtosAreStoredInStandardProcessConditionsGroup }, extraOptions?: any) {
    return http<IJSONResultStandardProcessConditionGroupSavesResponseDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyConditionGroup/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺条件组保存DTO */
export interface IDtosAreStoredInStandardProcessConditionsGroup {
    /** id */
    id?: string;
    /** 条件组名称 */
    name: string;
    /** 标准工艺条件 */
    conditionList: IDtosAreStoredUnderStandardProcessConditions[];
}
/** 标准工艺条件保存DTO */
export interface IDtosAreStoredUnderStandardProcessConditions {
    /** 来源应用编号 */
    fromFlowPathCode: string;
    /** 来源字段编号 */
    fromFieldCode: string;
    /** 来源字段序列号 */
    fromFieldSerialNo: string;
    /** 判断方式 */
    compareType: EDtosAreStoredUnderStandardProcessConditions_compareType;
    /** 判断的值 */
    compareValue: string;
    /** 连接类型 */
    joinType: EDtosAreStoredUnderStandardProcessConditions_joinType;
}
/** JSONResult«标准工艺条件组保存响应DTO» */
export interface IJSONResultStandardProcessConditionGroupSavesResponseDtos {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardProcessConditionGroupSavesResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 标准工艺条件组保存响应DTO */
export interface IStandardProcessConditionGroupSavesResponseDTO {
    /** 条件组id */
    id?: string;
}

export enum EDtosAreStoredUnderStandardProcessConditions_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 包含 */
    CONTAIN = "CONTAIN",
    /** 不包含 */
    NOT_CONTAIN = "NOT_CONTAIN"
}

export enum EDtosAreStoredUnderStandardProcessConditions_joinType {
    /** 且 */
    AND = "AND",
    /** 或 */
    OR = "OR"
}
