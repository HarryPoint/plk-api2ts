import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/批次方案相关/checkRemoveUsingPOST
export default function fetchMethod(data: ILotSerialNumberPlanRemoveCheckRequestDTO, extraOptions?: any) {
    return http<IJSONResultLotSerialNumberPlanRemoveCheckResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotSerialNumberPlan/checkRemove",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// LotSerialNumberPlanRemoveCheckRequestDTO
export interface ILotSerialNumberPlanRemoveCheckRequestDTO {
    // 批次方案ID列表
    idList: number[];
}
// JSONResult«LotSerialNumberPlanRemoveCheckResponseDTO»
export interface IJSONResultLotSerialNumberPlanRemoveCheckResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILotSerialNumberPlanRemoveCheckResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// LotSerialNumberPlanRemoveCheckResponseDTO
export interface ILotSerialNumberPlanRemoveCheckResponseDTO {
    // 允许删除的ID列表
    allowDeletionIdList: number[];
    // 不允许删除的ID列表
    notAllowDeletionIdList: number[];
    // 已使用的ID列表
    usedIdList: number[];
}
