import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓位相关/storageFlowPathInOutUsingPOST
*/
export default function fetchMethod(options: { data: IWarehouseProcessInboundAndOutboundDTOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/warehouse/storageFlowPathInOut",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库流程出入库DTO */
export interface IWarehouseProcessInboundAndOutboundDTO {
    /** 物料id */
    materialId?: number;
    /** 入库仓位id */
    inWarehouseId?: number;
    /** 出库仓位id */
    outWarehouseId?: number;
    /** 数量 */
    quantity?: number;
    /** 出入库类型 */
    inOutType?: string;
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
    ts?: number;
}
