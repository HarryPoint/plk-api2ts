import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/标准工艺条件组相关/getInfoByIdUsingGET_3
*/
export default function fetchMethod(params: { id: string }, extraOptions?: any) {
    return http<IJSONResultStandardProcessConditionGroupRespondsToDTO>(
        {
            url: "/masterdata-service/standardTechnologyConditionGroup/getInfoById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«标准工艺条件组响应DTO» */
export interface IJSONResultStandardProcessConditionGroupRespondsToDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IStandardProcessConditionsGroupRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 标准工艺条件组响应DTO */
export interface IStandardProcessConditionsGroupRespondsToDTO {
    /** id */
    id: number;
    /** 条件组名称 */
    name: string;
    /** 标准工艺条件 */
    conditionList: IStandardProcessConditionsRespondToDTO[];
}
/** 标准工艺条件响应DTO */
export interface IStandardProcessConditionsRespondToDTO {
    /** id */
    id: number;
    /** 来源应用编号 */
    fromFlowPathCode: string;
    /** 来源字段编号 */
    fromFieldCode: string;
    /** 来源字段序列号 */
    fromFieldSerialNo: string;
    /** 判断方式 */
    compareType: string;
    /** 判断的值 */
    compareValue: string;
    /** 连接类型 */
    joinType: string;
    /** 排序 */
    sort: number;
}
