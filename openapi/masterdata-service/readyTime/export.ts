import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/准备期相关/exportUsingPOST_28
*/
export default function fetchMethod(options: { data: IPreparationPeriodQueryVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/readyTime/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 准备期查询VO */
export interface IPreparationPeriodQueryVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id */
    processId?: string;
    /** 名称 */
    name?: string;
    /** 规则类型 */
    ruleType?: EPreparationPeriodQueryVO_ruleType;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
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

export enum EPreparationPeriodQueryVO_ruleType {
    /** 产出物料相同 */
    EQUAL = "EQUAL",
    /** 产出物料不相同 */
    NOT_EQUAL = "NOT_EQUAL"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
