import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺条件组相关/saveUsingPOST_3
*/
export default function fetchMethod(options: { data: IDtosAreStoredInStandardProcessConditionsGroup }, extraOptions?: any) {
    return http<IJSONResultStandardProcessConditionGroupSavesResponseDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyConditionGroup/save",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺条件组保存DTO */
export interface IDtosAreStoredInStandardProcessConditionsGroup {
    /** id */
    id?: number;
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
    compareType: ('EQ' | 'NE' | 'CONTAIN' | 'NOT_CONTAIN');
    /** 判断的值 */
    compareValue: string;
    /** 连接类型 */
    joinType: ('AND' | 'OR');
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
    ts?: number;
}
/** 标准工艺条件组保存响应DTO */
export interface IStandardProcessConditionGroupSavesResponseDTO {
    /** 条件组id */
    id?: number;
}
