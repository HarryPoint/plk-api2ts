import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备保养计划相关/getChangeRecordListUsingGET
*/
export default function fetchMethod(options: { params: { planId?: string } }, extraOptions?: any) {
    return http<IJSONResultListMaintenancePlanChangeRecordRespondsToDTO>(
        {
            url: "/masterdata-service/deviceMaintainPlan/getChangeRecordList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«保养计划变更记录响应DTO»» */
export interface IJSONResultListMaintenancePlanChangeRecordRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaintenancePlanChangeRecordRespondsToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 保养计划变更记录响应DTO */
export interface IMaintenancePlanChangeRecordRespondsToDTO {
    /** 创建时间 */
    createTime?: number;
    /** 操作人 */
    createUser?: string;
    /** id */
    id?: string;
    /** 备注 */
    remark?: string;
}
