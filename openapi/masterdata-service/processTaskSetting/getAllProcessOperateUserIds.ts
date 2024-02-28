import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序任务设置相关/getAllProcessOperateUserIdsUsingPOST
*/
export default function fetchMethod(options: { data: IProcessOperatorIdSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/masterdata-service/processTaskSetting/getAllProcessOperateUserIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序操作人员id搜索VO */
export interface IProcessOperatorIdSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 工序id */
    processId: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 员工类型 */
    userType: EProcessOperatorIdSearchVO_userType;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcessOperatorIdSearchVO_userType {
    /** 生产 */
    PRODUCE = "PRODUCE",
    /** 质量 */
    QUALITY = "QUALITY"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
