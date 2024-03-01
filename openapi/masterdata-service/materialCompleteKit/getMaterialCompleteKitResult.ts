import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料齐套相关/getMaterialCompleteKitResultUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialSetQueryRequestObject }, extraOptions?: any) {
    return http<IJSONResultQueryResponseObject>(
        {
            url: "/masterdata-service/materialCompleteKit/getMaterialCompleteKitResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料齐套查询请求对象 */
export interface IMaterialSetQueryRequestObject {
    /** 物料id */
    materialId: string;
    /** 需求数量 */
    needCount?: number;
    /** 标准工艺id */
    standardTechnologyId?: string;
}
/** JSONResult«物料齐套查询响应对象» */
export interface IJSONResultQueryResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialAssemblyQueryResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料齐套查询响应对象 */
export interface IMaterialAssemblyQueryResponseObject {
    /** bomId */
    bomId?: string;
    /** 明细 */
    children?: IMaterialAssemblyQueryResponseObject[];
    /** 差异数量 */
    diffCount?: number;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 需求数量 */
    needCount?: number;
    /** 库存数量 */
    storageUseCount?: number;
}
