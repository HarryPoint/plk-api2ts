import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/仓库盘点任务相关/examineUsingPOST_1
*/
export default function fetchMethod(options: { data: IWarehouseInventoryTaskApprovalDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/examine",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库盘点任务审批DTO */
export interface IWarehouseInventoryTaskApprovalDTO {
    /** 任务id */
    id?: string;
    /** 审批类型 */
    examineType?: EWarehouseInventoryTaskApprovalDTO_examineType;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EWarehouseInventoryTaskApprovalDTO_examineType {
    /** 审核通过 */
    PASS = "PASS",
    /** 审核拒绝 */
    REFUSE = "REFUSE"
}
