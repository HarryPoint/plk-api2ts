import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/仓位相关/getWarehouseSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnsTheMaterialMasterDataStoreToVO>(
        {
            url: "/masterdata-service/warehouse/getWarehouseSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«物料主数据仓位返回VO»» */
export interface IJSONResultListReturnsTheMaterialMasterDataStoreToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialMasterDataWarehouseReturnsToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料主数据仓位返回VO */
export interface IMaterialMasterDataWarehouseReturnsToVO {
    /** 仓位id */
    id?: string;
    /** 仓位编码 */
    code?: string;
    /** 仓位名称 */
    name?: string;
    /** 物料id */
    materialId?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
}
