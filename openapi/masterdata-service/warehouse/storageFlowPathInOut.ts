import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓位相关/storageFlowPathInOutUsingPOST
*/
export default function fetchMethod(options: { data: IWarehouseProcessInboundAndOutboundDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
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
    /** 出入库类型 */
    inOutType?: EWarehouseProcessInboundAndOutboundDTO_inOutType;
    /** 入库仓位id */
    inWarehouseId?: string;
    /** 物料id */
    materialId?: string;
    /** 出库仓位id */
    outWarehouseId?: string;
    /** 数量 */
    quantity?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EWarehouseProcessInboundAndOutboundDTO_inOutType {
    /** 库存出库 */
    OUT = "OUT",
    /** 库存入库 */
    IN = "IN"
}
