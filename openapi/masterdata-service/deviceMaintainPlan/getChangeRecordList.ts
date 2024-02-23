import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/设备保养计划相关/getChangeRecordListUsingGET
export default function fetchMethod(params: { planId: number }) {
    return http<IJSONResultListMaintenancePlanChangeRecordRespondsToDTO>({
        url: "/masterdata-service/deviceMaintainPlan/getChangeRecordList",
        method: "get",
        params,
    });
}
// JSONResult«List«保养计划变更记录响应DTO»»
export interface IJSONResultListMaintenancePlanChangeRecordRespondsToDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaintenancePlanChangeRecordRespondsToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 保养计划变更记录响应DTO
export interface IMaintenancePlanChangeRecordRespondsToDTO {
    // id
    id: number;
    // 备注
    remark: string;
    // 操作人
    createUser: string;
    // 创建时间
    createTime: string;
}
