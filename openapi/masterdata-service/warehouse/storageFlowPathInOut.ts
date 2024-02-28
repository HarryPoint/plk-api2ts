import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓位相关/storageFlowPathInOutUsingPOST
*/
export default function fetchMethod(options: { data: IWarehouseProcessInboundAndOutboundDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/warehouse/storageFlowPathInOut",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 仓库流程出入库DTO */
export interface IWarehouseProcessInboundAndOutboundDTO {
    /** 物料id */
    materialId?: string;
    /** 入库仓位id */
    inWarehouseId?: string;
    /** 出库仓位id */
    outWarehouseId?: string;
    /** 数量 */
    quantity?: number;
    /** 出入库类型 */
    inOutType?: EWarehouseProcessInboundAndOutboundDTO_inOutType;
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

export enum EWarehouseProcessInboundAndOutboundDTO_inOutType {
    /** 库存出库 */
    OUT = "OUT",
    /** 库存入库 */
    IN = "IN"
}
