import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/批次方案相关/checkRemoveUsingPOST
*/
export default function fetchMethod(options: { data: ILotSerialNumberPlanRemoveCheckRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLotSerialNumberPlanRemoveCheckResponseDTO>(
        {
            url: "/masterdata-service/lotSerialNumberPlan/checkRemove",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** LotSerialNumberPlanRemoveCheckRequestDTO */
export interface ILotSerialNumberPlanRemoveCheckRequestDTO {
    /** 批次方案ID列表 */
    idList?: string[];
}
/** JSONResult«LotSerialNumberPlanRemoveCheckResponseDTO» */
export interface IJSONResultLotSerialNumberPlanRemoveCheckResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ILotSerialNumberPlanRemoveCheckResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** LotSerialNumberPlanRemoveCheckResponseDTO */
export interface ILotSerialNumberPlanRemoveCheckResponseDTO {
    /** 允许删除的ID列表 */
    allowDeletionIdList?: string[];
    /** 不允许删除的ID列表 */
    notAllowDeletionIdList?: string[];
    /** 已使用的ID列表 */
    usedIdList?: string[];
}
