import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/examineUsingPOST_1
export default function fetchMethod(data: IWarehouseInventoryTaskApprovalDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/examine",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 仓库盘点任务审批DTO
export interface IWarehouseInventoryTaskApprovalDTO {
    // 任务id
    id: number;
    // 审批类型
    examineType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
